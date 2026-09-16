/**
 * 「住」tab 的片区地图：类型 + 按城市 slug 的注册表。
 * 每城数据在 ./stayMaps/<slug>.ts；片区／点位／动线用真实经纬度（Leaflet 渲染）。
 * 点位为示意位置，不作导航级精确；价位锚点为手绘示意，不承诺某街某店房价。
 * 片区着色与预算过滤读取 StayArea.band（见 stay.ts）。
 */
export type LngLat = [number, number]
export type StayMapPinKind = 'restaurant' | 'attraction' | 'hub' | 'hotel'

export type StayMapPin = {
  id: string
  kind: StayMapPinKind
  label: string
  at: LngLat
  /** 点击跳转：餐厅去「吃」tab 对应条目，景点去景点页。 */
  href?: string
}

/** 片区内的价位锚点：value 为该位置中档双人间常见价（¥/晚），用于热力插值；不承诺具体酒店。 */
export type StayMapHeatAnchor = { at: LngLat; value: number }

// 月度季节系数在 ./staySeason（独立文件：stayMaps/* 引用它，而本文件又 import 它们，
// 放在这里会形成运行时循环依赖）。类型与预设从这里 re-export 保持兼容。
export { SEASON } from './staySeason'
export type { StaySeason } from './staySeason'
import type { StaySeason } from './staySeason'

export type StayMapZone = {
  /** 对应 StayGuide.areas 里的片区 id。 */
  areaId: string
  label: string
  /** 椭圆参数（经纬度度数）或显式多边形 ring。 */
  center?: LngLat
  rx?: number
  ry?: number
  ring?: LngLat[]
  labelAt: LngLat
  /** 圈内价位锚点（示意）：海旁/核心贵、内街廉；缺省时按 band 中位平铺。 */
  heat?: StayMapHeatAnchor[]
  /** 该片区单独的月度系数，覆盖地图级 season（如海滨区暑期峰更陡）。 */
  season?: StaySeason
}

/** 行程动线：串起当天要走的点，示意方向，不是真实街道。 */
export type StayMapRoute = {
  id: string
  label: string
  points: LngLat[]
  labelAt: LngLat
}

export type StayMapData = {
  /** 初始视野：经纬度范围。 */
  bounds: { lng: [number, number]; lat: [number, number] }
  /** 行政/岸线轮廓细线（可选；香港用 data.gov.hk 区界）。 */
  land?: { name: string; rings: LngLat[][] }[]
  waterLabels?: { at: LngLat; text: string }[]
  /** 交通骨架：轨道线、渡轮等示意折线。 */
  infra: { points: LngLat[]; label?: string; labelAt?: LngLat }[]
  /** 非候选片区的参照地名。 */
  contextLabels: { at: LngLat; text: string }[]
  zones: StayMapZone[]
  pins: StayMapPin[]
  routes: StayMapRoute[]
  /** 全城默认月度系数；片区可用自身 season 覆盖。 */
  season?: StaySeason
  checkedAt: string
}

import { hongKongStayMap } from './stayMaps/hongKong'
import { penangStayMap } from './stayMaps/penang'
import { tokyoStayMap } from './stayMaps/tokyo'
import { chiangMaiStayMap } from './stayMaps/chiangMai'
import { kyotoStayMap } from './stayMaps/kyoto'
import { osakaStayMap } from './stayMaps/osaka'
import { fukuokaStayMap } from './stayMaps/fukuoka'
import { seoulStayMap } from './stayMaps/seoul'
import { jejuStayMap } from './stayMaps/jeju'
import { busanStayMap } from './stayMaps/busan'
import { taipeiStayMap } from './stayMaps/taipei'
import { hanoiStayMap } from './stayMaps/hanoi'
import { hoiAnStayMap } from './stayMaps/hoiAn'
import { bangkokStayMap } from './stayMaps/bangkok'
import { kualaLumpurStayMap } from './stayMaps/kualaLumpur'
import { macauStayMap } from './stayMaps/macau'
import { singaporeStayMap } from './stayMaps/singapore'

/** 按城市 slug 索引；没有地图数据的城市回退为文字比较。 */
export const STAY_MAPS: Record<string, StayMapData> = {
  'hong-kong': hongKongStayMap,
  penang: penangStayMap,
  tokyo: tokyoStayMap,
  'chiang-mai': chiangMaiStayMap,
  kyoto: kyotoStayMap,
  osaka: osakaStayMap,
  fukuoka: fukuokaStayMap,
  seoul: seoulStayMap,
  jeju: jejuStayMap,
  busan: busanStayMap,
  taipei: taipeiStayMap,
  hanoi: hanoiStayMap,
  'hoi-an': hoiAnStayMap,
  bangkok: bangkokStayMap,
  'kuala-lumpur': kualaLumpurStayMap,
  macau: macauStayMap,
  singapore: singaporeStayMap,
}
