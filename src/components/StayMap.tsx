import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { LngLat, StayMapData, StayMapZone } from '../content/stayMap'
import type { StayArea, StayGuide } from '../content/stay'
import { shortNames } from '../content/neighborhoodNames'

type Props = { map: StayMapData; stay: StayGuide; neighborhoods: { id: string; title: string }[] }

type ZoneStatus = 'within' | 'stretch' | 'over' | null

function statusText(status: ZoneStatus, budget: number): string {
  if (status === 'within') return `¥${budget} 上限内，区间不顶格`
  if (status === 'stretch') return `下限在 ¥${budget} 内，上半段超支——看房型与日期`
  if (status === 'over') return `常见区间高于 ¥${budget} 上限`
  return ''
}

function statusFrom(band: StayArea['band'], on: boolean, value: number): ZoneStatus {
  if (!band || !on) return null
  if (band.high <= value) return 'within'
  if (band.low <= value) return 'stretch'
  return 'over'
}

function zoneStyle(st: ZoneStatus): L.PolylineOptions {
  if (st === 'over') {
    return { color: '#7d766a', weight: 1.5, opacity: 0.85, fillOpacity: 0 }
  }
  if (st === 'stretch') return { color: '#a33321', weight: 2, opacity: 0.85, dashArray: '6 5', fillOpacity: 0 }
  if (st === 'within') return { color: '#a33321', weight: 2.2, opacity: 0.9, fillOpacity: 0 }
  return { color: '#8a8378', weight: 1, opacity: 0.35, dashArray: '2 5', fillOpacity: 0 }
}

const ELLIPSE_STEPS = 30

function zoneRing(z: StayMapZone): LngLat[] {
  if (z.ring) return z.ring
  const [cx, cy] = z.center ?? [0, 0]
  const rx = z.rx ?? 0.01
  const ry = z.ry ?? 0.006
  const pts: LngLat[] = []
  for (let i = 0; i < ELLIPSE_STEPS; i++) {
    const t = (i / ELLIPSE_STEPS) * Math.PI * 2
    pts.push([cx + rx * Math.cos(t), cy + ry * Math.sin(t)])
  }
  return pts
}

function zoneContains(z: StayMapZone, p: LngLat): boolean {
  if (z.center) {
    const dx = (p[0] - z.center[0]) / (z.rx ?? 0.01)
    const dy = (p[1] - z.center[1]) / (z.ry ?? 0.006)
    return dx * dx + dy * dy <= 1
  }
  // ring：射线法
  const ring = z.ring ?? []
  const [x, y] = p
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]
    const [xj, yj] = ring[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

/** 圈内某点的插值价位：按片区锚点做 IDW；无锚点时取 band 中位。 */
function zonePriceAt(z: StayMapZone, band: StayArea['band'], p: LngLat): number | null {
  if (!zoneContains(z, p)) return null
  const anchors = z.heat?.length
    ? z.heat
    : band && z.center
      ? [{ at: z.center, value: (band.low + band.high) / 2 }]
      : []
  if (!anchors.length) return null
  const cos = Math.cos((p[1] * Math.PI) / 180)
  let num = 0
  let den = 0
  for (const a of anchors) {
    const dx = (p[0] - a.at[0]) * cos
    const dy = p[1] - a.at[1]
    const d2 = dx * dx + dy * dy
    if (d2 < 1e-8) return a.value
    const w = 1 / d2
    num += w * a.value
    den += w
  }
  return num / den
}

/** 价位 → 颜色：绿（最低）→ 黄 → 红（最高），t∈[0,1]。 */
const PRICE_STOPS: [number, [number, number, number]][] = [
  [0, [86, 143, 106]],   // 绿
  [0.45, [197, 165, 66]], // 黄
  [0.7, [204, 118, 54]],  // 橙
  [1, [194, 58, 43]],     // 红（品牌 accent）
]
function priceColorRGB(t: number): [number, number, number] {
  const x = Math.max(0, Math.min(1, t))
  let i = 0
  while (i < PRICE_STOPS.length - 2 && x > PRICE_STOPS[i + 1][0]) i++
  const [t0, c0] = PRICE_STOPS[i]
  const [t1, c1] = PRICE_STOPS[i + 1]
  const k = t1 === t0 ? 0 : (x - t0) / (t1 - t0)
  return [0, 1, 2].map((j) => Math.round(c0[j] + (c1[j] - c0[j]) * k)) as [number, number, number]
}

/** 超预算像素的统一灰。 */
const OVER_GREY: [number, number, number] = [163, 157, 144]
/** 热力离屏渲染分辨率（相对地图像素），放大时自动平滑。 */
const HEAT_SCALE = 0.32

/** 「住」tab 的片区地图：Leaflet + OSM 瓦片；canvas 热力层、点位、行程动线与预算过滤。 */
export function StayMap({ map, stay, neighborhoods }: Props) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const hostRef = useRef<HTMLDivElement>(null)
  const leafletRef = useRef<L.Map | null>(null)
  const zonePolys = useRef(new globalThis.Map<string, L.Polygon>())
  const zoneLabels = useRef(new globalThis.Map<string, L.Marker>())
  const routeGroup = useRef<L.LayerGroup | null>(null)
  const budgetRef = useRef<{ on: boolean; value: number }>({ on: false, value: 0 })
  const monthRef = useRef(new Date().getMonth() + 1)
  const redrawHeatRef = useRef<(() => void) | null>(null)
  const [input, setInput] = useState('')
  const [month, setMonth] = useState(monthRef.current)
  const [showRoutes, setShowRoutes] = useState(true)

  const areas = new Map(stay.areas.map((a) => [a.id, a]))
  const nbById = new Map(neighborhoods.map((n) => [n.id, n]))
  const zoneById = new Map(map.zones.map((z) => [z.areaId, z]))
  const budget = Number(input)
  const budgetOn = input.trim() !== '' && Number.isFinite(budget) && budget > 0
  budgetRef.current = { on: budgetOn, value: budget }
  monthRef.current = month

  /** 当月季节系数：片区覆盖值 > 全城默认 > 1。 */
  const factorOf = (z?: StayMapZone) => z?.season?.[month] ?? map.season?.[month] ?? 1
  /** 当月 band：基准区间 × 季节系数（取整到十位）。 */
  const bandOf = (z?: StayMapZone) => {
    const b = z ? areas.get(z.areaId)?.band : undefined
    if (!b) return undefined
    const f = factorOf(z)
    return f === 1 ? b : { low: Math.round((b.low * f) / 10) * 10, high: Math.round((b.high * f) / 10) * 10 }
  }
  const statusOf = (z?: StayMapZone): ZoneStatus => {
    const b = bandOf(z)
    if (!b || !budgetOn) return null
    if (b.high <= budget) return 'within'
    if (b.low <= budget) return 'stretch'
    return 'over'
  }

  useEffect(() => {
    const host = hostRef.current
    if (!host || leafletRef.current) return
    const polys = zonePolys.current
    const labels = zoneLabels.current
    // 单屏布局下页面没有纵向滚动，滚轮可以放开给地图缩放；
    // 双击缩放关闭避免点片区弹窗时误触，视野范围仍被 bounds 兜住。
    const m = L.map(host, {
      scrollWheelZoom: true,
      doubleClickZoom: false,
      touchZoom: true,
      boxZoom: false,
      keyboard: false,
      dragging: true,
      zoomControl: false,
      zoomSnap: 0.25,
    })
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      subdomains: 'abc',
      attribution: '© OpenStreetMap contributors · HOT tile layer',
    }).addTo(m)

    // 弹窗/悬停用的当月系数与调整 band（读 monthRef，随月份切换重算）
    const factorAt = (z: StayMapZone) => z.season?.[monthRef.current] ?? map.season?.[monthRef.current] ?? 1
    const bandAt = (z: StayMapZone) => {
      const b = areas.get(z.areaId)?.band
      if (!b) return undefined
      const f = factorAt(z)
      return f === 1 ? b : { low: Math.round((b.low * f) / 10) * 10, high: Math.round((b.high * f) / 10) * 10 }
    }

    const popupHtml = (z: StayMapZone, a: StayArea): string => {
      const { on, value } = budgetRef.current
      const b = bandAt(z)
      const f = factorAt(z)
      const verdict = on && b ? statusText(b.high <= value ? 'within' : b.low <= value ? 'stretch' : 'over', value) : ''
      const seasonNote = f !== 1 ? ` · ${monthRef.current} 月约 ×${f}` : ''
      const links = [
        ...(a.neighborhoodIds ?? [])
          .filter((id) => nbById.has(id))
          .map((id) => `<a data-nav href="${pathname}?tab=places#area-${id}">散步：${shortNames[id] ?? nbById.get(id)?.title} →</a>`),
        `<a data-nav href="${pathname}?tab=practical#guide-stay">订房前检查 →</a>`,
        ...(a.sources ?? []).map((s) => `<a href="${s.url}" target="_blank" rel="noreferrer">${s.label} ↗</a>`),
      ]
      return `<div class="stay-pop">
        <h3>${a.title}</h3>
        ${b ? `<p class="stay-pop-band">常见 ¥${b.low}–${b.high}/晚${seasonNote}${verdict ? ` · ${verdict}` : ''}</p>` : ''}
        <p>${a.suitsIf}</p>
        ${a.skipIf ? `<p class="stay-pop-skip">别选：${a.skipIf}</p>` : ''}
        <dl>
          <div><dt>预算感受</dt><dd>${a.budgetFeel}</dd></div>
          <div><dt>交通锚点</dt><dd>${a.transit}</dd></div>
          <div><dt>吃饭半径</dt><dd>${a.food}</dd></div>
          <div><dt>要接受的</dt><dd>${a.tradeoff}</dd></div>
        </dl>
        <p class="stay-pop-links">${links.join('')}</p>
      </div>`
    }

    // 热力层：独立 pane，压在瓦片之上、矢量层之下，不吃指针事件
    const heatPane = m.createPane('stay-heat')
    heatPane.style.zIndex = '350'
    heatPane.style.pointerEvents = 'none'
    const canvas = L.DomUtil.create('canvas', 'stay-heat-canvas') as HTMLCanvasElement
    heatPane.appendChild(canvas)
    const ctx = canvas.getContext('2d')

    // 逐像素价位场：离屏小图按像素做 IDW 插值，放大平滑；
    // 输入预算后，插值价位超过上限的像素直接画灰——置灰精确到像素而非整圈。
    const off = document.createElement('canvas')
    const octx = off.getContext('2d')

    const redrawHeat = () => {
      if (!ctx || !octx) return
      const size = m.getSize()
      canvas.width = size.x
      canvas.height = size.y
      L.DomUtil.setPosition(canvas, m.containerPointToLayerPoint([0, 0]))
      const w = Math.max(2, Math.round(size.x * HEAT_SCALE))
      const h = Math.max(2, Math.round(size.y * HEAT_SCALE))
      off.width = w
      off.height = h
      const img = octx.createImageData(w, h)
      const data = img.data
      const { on, value: bgt } = budgetRef.current
      // 当月系数：逐片区应用（海滨暑期、樱季等）
      const fArr = map.zones.map((z) => factorAt(z))
      let lo = Infinity
      let hi = -Infinity
      map.zones.forEach((z, zi) => {
        const b = areas.get(z.areaId)?.band
        if (b) {
          lo = Math.min(lo, b.low * fArr[zi])
          hi = Math.max(hi, b.high * fArr[zi])
        }
      })
      if (!Number.isFinite(lo) || !Number.isFinite(hi)) {
        lo = 0
        hi = 1
      }
      const span = Math.max(hi - lo, 1)
      for (let j = 0; j < h; j++) {
        for (let i = 0; i < w; i++) {
          const pt = m.containerPointToLatLng(L.point((i + 0.5) / HEAT_SCALE, (j + 0.5) / HEAT_SCALE))
          const p: LngLat = [pt.lng, pt.lat]
          let v: number | null = null
          for (let zi = 0; zi < map.zones.length; zi++) {
            const raw = zonePriceAt(map.zones[zi], areas.get(map.zones[zi].areaId)?.band, p)
            const val = raw === null ? null : raw * fArr[zi]
            if (val !== null && (v === null || val > v)) v = val
          }
          if (v === null) continue
          const idx = (j * w + i) * 4
          if (on && v > bgt) {
            data[idx] = OVER_GREY[0]
            data[idx + 1] = OVER_GREY[1]
            data[idx + 2] = OVER_GREY[2]
            data[idx + 3] = 235
          } else {
            const [r, g, b] = priceColorRGB((v - lo) / span)
            data[idx] = r
            data[idx + 1] = g
            data[idx + 2] = b
            data[idx + 3] = 205
          }
        }
      }
      octx.putImageData(img, 0, 0)
      ctx.clearRect(0, 0, size.x, size.y)
      ctx.imageSmoothingEnabled = true
      ctx.drawImage(off, 0, 0, size.x, size.y)
    }
    redrawHeatRef.current = redrawHeat

    // 区界轮廓（细线参照，不盖瓦片）
    map.land?.forEach((d) =>
      d.rings.forEach((ring) =>
        L.polygon(ring.map(([lng, lat]) => [lat, lng] as L.LatLngTuple), {
          stroke: true,
          color: '#8a8378',
          weight: 1,
          opacity: 0.22,
          fill: false,
          interactive: false,
        }).addTo(m),
      ),
    )

    // 交通骨架：轨道线、渡轮
    map.infra.forEach((line) => {
      L.polyline(line.points.map(([lng, lat]) => [lat, lng] as L.LatLngTuple), {
        color: '#6f6759',
        weight: 2,
        opacity: 0.45,
        dashArray: '2 6',
        interactive: false,
      }).addTo(m)
      if (line.label && line.labelAt) {
        L.marker([line.labelAt[1], line.labelAt[0]], {
          interactive: false,
          icon: L.divIcon({ className: 'stay-tag stay-tag-line', html: line.label, iconSize: [0, 0] }),
        }).addTo(m)
      }
    })

    // 参照地名与水面标注
    map.contextLabels.forEach((c) =>
      L.marker([c.at[1], c.at[0]], {
        interactive: false,
        icon: L.divIcon({ className: 'stay-tag', html: c.text, iconSize: [0, 0] }),
      }).addTo(m),
    )
    map.waterLabels?.forEach((w) =>
      L.marker([w.at[1], w.at[0]], {
        interactive: false,
        icon: L.divIcon({ className: 'stay-tag stay-tag-water', html: w.text, iconSize: [0, 0] }),
      }).addTo(m),
    )

    // 住区：交互层（透明面）+ 常显名字 + 悬停价位 + 点击详情弹窗；颜色由热力层画
    const styleLive = (z: StayMapZone): L.PolylineOptions => {
      const { on, value } = budgetRef.current
      return zoneStyle(statusFrom(bandAt(z), on, value))
    }
    map.zones.forEach((z) => {
      const area = areas.get(z.areaId)
      const poly = L.polygon(zoneRing(z).map(([lng, lat]) => [lat, lng] as L.LatLngTuple), {
        ...styleLive(z),
        fill: true,
        fillColor: '#c23a2b',
      }).addTo(m)
      poly.bindTooltip(
        () => {
          const b = bandAt(z)
          const f = factorAt(z)
          return `${z.label}${b ? ` · ¥${b.low}–${b.high}/晚` : ''}${f !== 1 ? ` · ${monthRef.current}月 ×${f}` : ''}`
        },
        { direction: 'top', offset: [0, -6], className: 'stay-tip' },
      )
      poly.on('mouseover', () => poly.setStyle({ weight: 2.4, opacity: 0.9 }))
      poly.on('mouseout', () => poly.setStyle(styleLive(z)))
      if (area) poly.bindPopup(() => popupHtml(z, area), { maxWidth: 360, className: 'stay-popup' })
      const label = L.marker([z.labelAt[1], z.labelAt[0]], {
        interactive: false,
        icon: L.divIcon({ className: 'stay-zone-name', html: z.label, iconSize: [0, 0] }),
      }).addTo(m)
      polys.set(z.areaId, poly)
      labels.set(z.areaId, label)
    })

    // 点位：餐厅圆点、看点菱形、枢纽方块
    map.pins.forEach((p) => {
      const at: L.LatLngTuple = [p.at[1], p.at[0]]
      if (p.kind === 'restaurant') {
        L.circleMarker(at, { radius: 5.5, color: '#f5f0e7', weight: 1.6, fillColor: '#c23a2b', fillOpacity: 0.95 })
          .addTo(m)
          .bindTooltip(p.label, { direction: 'top', offset: [0, -8], className: 'stay-tip' })
          .on('click', () => p.href && navigate(p.href))
      } else {
        const cls = p.kind === 'attraction' ? 'stay-pin stay-pin-spot' : 'stay-pin stay-pin-hub'
        L.marker(at, {
          interactive: true,
          icon: L.divIcon({ className: '', html: `<span class="${cls}"></span>`, iconSize: [11, 11], iconAnchor: [5.5, 5.5] }),
        })
          .addTo(m)
          .bindTooltip(p.label, { direction: 'top', offset: [0, -8], className: 'stay-tip' })
          .on('click', () => p.href && navigate(p.href))
      }
    })

    // 行程动线（可开关）
    const rg = L.layerGroup()
    map.routes.forEach((r) => {
      L.polyline(r.points.map(([lng, lat]) => [lat, lng] as L.LatLngTuple), {
        color: '#c23a2b',
        weight: 2.6,
        opacity: 0.8,
        dashArray: '8 6',
        interactive: false,
      }).addTo(rg)
      r.points.forEach((p) =>
        L.circleMarker([p[1], p[0]], { radius: 3, color: '#c23a2b', weight: 1, fillOpacity: 0.9, interactive: false }).addTo(rg),
      )
      L.marker([r.labelAt[1], r.labelAt[0]], {
        interactive: false,
        icon: L.divIcon({ className: 'stay-route-name', html: r.label, iconSize: [0, 0] }),
      }).addTo(rg)
    })
    rg.addTo(m)
    routeGroup.current = rg

    const [lng0, lng1] = map.bounds.lng
    const [lat0, lat1] = map.bounds.lat
    m.fitBounds(L.latLngBounds([lat0, lng0], [lat1, lng1]), { padding: [18, 18] })
    // 缩放范围：fit 结果为最小（保证始终装得下），最多再放大 2 级；
    // 放大后放开拖拽平移，缩回最小视野时锁回。
    const fitZoom = m.getZoom()
    m.setMinZoom(fitZoom)
    m.setMaxZoom(fitZoom + 2)
    m.setMaxBounds(m.getBounds().pad(0.3))

    // 角落缩放滑块：range 控件直接驱动 setZoom
    const zoomSlider = new L.Control({ position: 'topright' })
    zoomSlider.onAdd = () => {
      const box = L.DomUtil.create('div', 'stay-zoom')
      const input = L.DomUtil.create('input', 'stay-zoom-range', box) as HTMLInputElement
      input.type = 'range'
      input.min = String(fitZoom)
      input.max = String(fitZoom + 2)
      input.step = '0.25'
      input.value = String(fitZoom)
      input.setAttribute('aria-label', '地图缩放')
      L.DomEvent.disableClickPropagation(box)
      L.DomEvent.on(input, 'input', () => m.setZoom(Number(input.value)))
      m.on('zoomend', () => {
        input.value = String(m.getZoom())
      })
      return box
    }
    zoomSlider.addTo(m)
    m.on('zoomend', () => {
      // 滚回最小视野时自动回正，保证"刚好装下全部片区"的默认状态
      if (m.getZoom() <= fitZoom) m.fitBounds(L.latLngBounds([lat0, lng0], [lat1, lng1]), { padding: [18, 18] })
    })

    // 缩放/平移后热力场重算像素；缩放过程中隐藏避免错位闪烁
    m.on('zoomstart', () => (canvas.style.opacity = '0'))
    m.on('zoomend', () => {
      canvas.style.opacity = '1'
      redrawHeat()
    })
    m.on('moveend', redrawHeat)
    m.on('resize', redrawHeat)
    redrawHeat()

    leafletRef.current = m

    // 弹窗内的站内链接交给 router
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[data-nav]') as HTMLAnchorElement | null
      if (a) {
        e.preventDefault()
        navigate(a.getAttribute('data-nav') ?? a.getAttribute('href') ?? '')
      }
    }
    host.addEventListener('click', onClick)
    return () => {
      host.removeEventListener('click', onClick)
      m.remove()
      leafletRef.current = null
      polys.clear()
      labels.clear()
      routeGroup.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 预算或月份变化 → 重算片区样式 + 置灰片区名字变淡 + 热力场重绘
  useEffect(() => {
    zonePolys.current.forEach((poly, id) => {
      const st = statusOf(zoneById.get(id))
      poly.setStyle(zoneStyle(st))
      const el = zoneLabels.current.get(id)?.getElement()
      if (el) el.style.opacity = st === 'over' ? '0.35' : ''
    })
    redrawHeatRef.current?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, month])

  useEffect(() => {
    const m = leafletRef.current
    const rg = routeGroup.current
    if (!m || !rg) return
    if (showRoutes) rg.addTo(m)
    else m.removeLayer(rg)
  }, [showRoutes])

  // 单屏结构：控制条一行 + 地图吃满剩余高度 + 图例注释一行；
  // 容器由 .stay-screen 给高度，这里 flex-1/min-h-0 保证地图不溢出。
  return (
    <div className="mt-4 flex min-h-0 flex-1 flex-col">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <label className="flex items-center gap-2 text-small text-ink">
          每晚预算上限
          <span className="flex items-center gap-1.5">
            <span className="text-ink-muted">¥</span>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              step={50}
              placeholder="800"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-20 rounded-md border border-border bg-paper px-2.5 py-1 text-small text-ink"
              aria-label="每晚预算上限（人民币）"
            />
            {budgetOn ? (
              <button type="button" onClick={() => setInput('')} className="text-note text-ink-faint underline underline-offset-4">
                清除
              </button>
            ) : null}
          </span>
        </label>
        <label className="flex items-center gap-2 text-small text-ink">
          出行月份
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="w-22 rounded-md border border-border bg-paper px-2.5 py-1 text-small text-ink"
            aria-label="出行月份"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((mo) => (
              <option key={mo} value={mo}>
                {mo} 月
              </option>
            ))}
          </select>
        </label>
        {map.routes.length ? (
          <label className="flex items-center gap-1.5 text-small text-ink-muted">
            <input type="checkbox" checked={showRoutes} onChange={(e) => setShowRoutes(e.target.checked)} />
            显示行程动线
          </label>
        ) : null}
        <p className="text-note text-ink-faint">
          颜色越红越贵、同区内有价差；月份按典型季节规律调价，换月重算热力与置灰。悬停看价位，点击片区看完整判断。
        </p>
      </div>

      <div ref={hostRef} className="stay-leaflet-host mt-3 min-h-0 flex-1" />

      <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1 text-note text-ink-faint">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" /> 收录餐厅
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rotate-45 bg-ink/75" /> 收录看点
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 border border-ink/50 bg-sand-deep" /> 枢纽
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block h-2.5 w-10 rounded-full"
            style={{ background: 'linear-gradient(to right, #568f6a, #c5a542, #cc7636, #c23a2b)' }}
          />{' '}
          价位：绿 → 红越贵
        </span>
        <span className="basis-full text-note leading-snug sm:basis-auto sm:flex-1 sm:text-right">
          示意插值＋季节系数，非实时价；常见区间核实 {map.checkedAt}，以订房平台为准 · 底图 © OSM（HOT）
        </span>
      </div>
    </div>
  )
}
