import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BORDER_PATHS,
  LAND_PATH,
  MAP_CITIES,
  MAP_VIEWBOX,
  type MapCity,
} from './asiaMapData'

export function AsiaMap() {
  const navigate = useNavigate()
  const [active, setActive] = useState<string | null>(null)
  const hovered = MAP_CITIES.find((c) => c.id === active) ?? null

  return (
    <div className="asia-map-shell relative w-full select-none">
      <svg
        className="asia-map-svg block h-auto w-full"
        viewBox={MAP_VIEWBOX}
        role="img"
        aria-label="东亚与东南亚：已上线地点地图"
      >
        <title>Asia Unhurried — destinations</title>
        <path d={LAND_PATH} fill="var(--color-sand)" />
        {BORDER_PATHS.map((b) => (
          <path
            key={b.admin}
            d={b.d}
            fill="none"
            stroke="var(--color-sand-deep)"
            strokeWidth={0.9}
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity={0.9}
          />
        ))}
        <path
          d={LAND_PATH}
          fill="none"
          stroke="var(--color-ink)"
          strokeOpacity={0.12}
          strokeWidth={1.15}
          strokeLinejoin="round"
        />
        {MAP_CITIES.map((c) => {
          const live = c.status === 'live'
          const linked = Boolean(c.href)
          const isActive = active === c.id
          const r = live ? 5.5 : 3.2
          return (
            <g
              key={c.id}
              className={`asia-map-city ${live ? 'asia-map-city--live' : 'asia-map-city--soon'}${isActive ? ' is-active' : ''}`}
              transform={`translate(${c.x} ${c.y})`}
              onMouseEnter={() => setActive(c.id)}
              onMouseLeave={() => setActive((id) => (id === c.id ? null : id))}
              onFocus={() => setActive(c.id)}
              onBlur={() => setActive((id) => (id === c.id ? null : id))}
              onClick={() => {
                if (c.href) navigate(c.href)
              }}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && c.href) {
                  e.preventDefault()
                  navigate(c.href)
                }
              }}
              tabIndex={0}
              role={linked ? 'link' : 'img'}
              aria-label={`${c.nameZh} ${c.name}${live ? '' : ' · 待写'}`}
              style={{ cursor: linked ? 'pointer' : 'default' }}
            >
              {live ? (
                <circle
                  r={14}
                  fill="var(--color-accent)"
                  fillOpacity={0.14}
                  className="asia-map-halo"
                />
              ) : null}
              <circle
                r={r}
                fill={live ? 'var(--color-accent)' : 'var(--color-ink)'}
                fillOpacity={live ? 1 : 0.45}
                stroke="var(--color-paper)"
                strokeWidth={live ? 1.6 : 1.1}
              />
            </g>
          )
        })}
        {hovered ? <CityLabel city={hovered} /> : null}
      </svg>
      <p className="mt-3 text-center text-note text-ink-faint md:text-left">
        <span className="text-accent">{MAP_CITIES.filter((c) => c.status === 'live').length} 城已上线，点开看城市页</span>
        {' · '}
        地图不含中国大陆目的地点
      </p>
    </div>
  )
}

function CityLabel({ city: c }: { city: MapCity }) {
  const live = c.status === 'live'
  const flip = c.x > 700
  const lx = flip ? c.x - 12 : c.x + 12
  const anchor = flip ? 'end' : 'start'
  const lineX2 = flip ? c.x - 10 : c.x + 10
  return (
    <g className="pointer-events-none" aria-hidden="true">
      <line
        x1={c.x}
        y1={c.y}
        x2={lineX2}
        y2={c.y - 18}
        stroke={live ? 'var(--color-accent)' : 'var(--color-ink-faint)'}
        strokeWidth={1}
        opacity={0.7}
      />
      <text
        x={lx}
        y={c.y - 34}
        textAnchor={anchor}
        className="asia-map-label-zh"
        fill="var(--color-ink)"
        fontSize={18}
        fontFamily="var(--font-zh), var(--font-serif)"
        fontWeight={500}
      >
        {c.nameZh}
      </text>
      <text
        x={lx}
        y={c.y - 12}
        textAnchor={anchor}
        fill={live ? 'var(--color-accent)' : 'var(--color-ink-faint)'}
        fontSize={14}
        fontFamily="var(--font-serif), Georgia, serif"
        letterSpacing="0.04em"
      >
        {c.name}
        {live ? '' : ' · 待写'}
      </text>
    </g>
  )
}
