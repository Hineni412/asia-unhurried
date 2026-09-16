import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

/**
 * 槟城（乔治市）住区示意地图。点位与价位锚点为示意位置；
 * 无轨道交通，交通骨架画渡轮与往升旗山方向。
 */
export const penangStayMap: StayMapData = {
  bounds: { lng: [100.272, 100.365], lat: [5.398, 5.452] },
  season: SEASON.penang,
  checkedAt: '2026-09-15',
  waterLabels: [{ at: [100.357, 5.425], text: '槟威海峡' }],
  infra: [
    // 渡轮：姓周桥旁 Pengkalan Weld → 北海 Butterworth
    {
      points: [[100.3453, 5.4155], [100.372, 5.408], [100.3995, 5.3945]],
      label: '渡轮 → 北海',
      labelAt: [100.368, 5.4125],
    },
    // 进老城主轴：Gurney 北海岸 → 老城
    {
      points: [[100.3095, 5.4375], [100.3145, 5.431], [100.324, 5.426], [100.3335, 5.421], [100.3425, 5.4175]],
      label: '海岸线 · 往老城',
      labelAt: [100.3235, 5.4295],
    },
  ],
  contextLabels: [
    { at: [100.2725, 5.4235], text: '升旗山' },
    { at: [100.2805, 5.4055], text: '亚依淡' },
    { at: [100.3885, 5.3995], text: '北海 Butterworth' },
    { at: [100.3295, 5.4115], text: 'Komtar' },
  ],
  zones: [
    {
      areaId: 'armenian-acheh-stay',
      label: '店屋核心',
      center: [100.3368, 5.4163],
      rx: 0.0058,
      ry: 0.0038,
      labelAt: [100.3372, 5.4168],
      // 价位锚点：海墘／邱公司一侧的精品店屋贵，内巷廉
      heat: [
        { at: [100.3408, 5.4175], value: 510 }, // 海墘街一线
        { at: [100.3368, 5.4155], value: 440 }, // 邱公司周边
        { at: [100.3342, 5.4178], value: 380 }, // Acheh 巷内
        { at: [100.3388, 5.4138], value: 340 }, // 近姓周桥
      ],
    },
    {
      areaId: 'kimberley-cintra-stay',
      label: '小贩巷',
      center: [100.3305, 5.4153],
      rx: 0.0055,
      ry: 0.0035,
      labelAt: [100.3308, 5.4158],
      // 价位锚点：Kimberley 民宿街最便宜，近 Komtar 略高
      heat: [
        { at: [100.3315, 5.4148], value: 260 }, // Kimberley 民宿段
        { at: [100.3328, 5.4165], value: 330 }, // Cintra 一带
        { at: [100.3295, 5.4135], value: 390 }, // 近 Komtar
        { at: [100.3278, 5.4172], value: 210 }, // 巷内深处
      ],
    },
    {
      areaId: 'gurney-north',
      label: 'Gurney 北海岸',
      center: [100.31, 5.437],
      rx: 0.0072,
      ry: 0.0042,
      labelAt: [100.3098, 5.4375],
      // 价位锚点：Gurney Drive 海旁最贵，往内渐低
      heat: [
        { at: [100.312, 5.4398], value: 560 },  // 海旁高层酒店
        { at: [100.3065, 5.4375], value: 490 }, // 近 Gurney Plaza
        { at: [100.3085, 5.4335], value: 390 }, // 内侧住宅段
        { at: [100.3155, 5.4348], value: 330 }, // 东段偏内
      ],
    },
  ],
  pins: [
    // 收录餐厅（与「吃」tab 条目同 id）
    { id: 'jin-kor', kind: 'restaurant', label: '近阁炒粿条（Joo Hooi）', at: [100.3308, 5.4164], href: '?tab=eat#jin-kor' },
    { id: 'siam-road', kind: 'restaurant', label: '暹罗路炒粿条', at: [100.3215, 5.4145], href: '?tab=eat#siam-road' },
    { id: 'penang-road-laksa', kind: 'restaurant', label: '槟榔律叻沙', at: [100.3309, 5.4156], href: '?tab=eat#penang-road-laksa' },
    { id: '888-hokkien', kind: 'restaurant', label: '888 福建面', at: [100.3327, 5.4136], href: '?tab=eat#888-hokkien' },
    { id: 'sister-yao', kind: 'restaurant', label: '姚姐妹炒粿角', at: [100.326, 5.4143], href: '?tab=eat#sister-yao' },
    { id: 'auntie-gaik-lean', kind: 'restaurant', label: 'Auntie Gaik Lean', at: [100.3398, 5.4191], href: '?tab=eat#auntie-gaik-lean' },
    { id: 'teksen', kind: 'restaurant', label: 'Teksen', at: [100.3338, 5.4167], href: '?tab=eat#teksen' },
    { id: 'line-clear', kind: 'restaurant', label: 'Line Clear 扁担饭', at: [100.332, 5.4166], href: '?tab=eat#line-clear' },
    { id: 'teochew-chendul', kind: 'restaurant', label: '潮州煎蕊', at: [100.3312, 5.4153], href: '?tab=eat#teochew-chendul' },
    { id: 'air-itam-sister', kind: 'restaurant', label: '亚依淡咖喱面', at: [100.28, 5.402], href: '?tab=eat#air-itam-sister' },
    // 收录看点（链到景点页）
    { id: 'khoo-kongsi', kind: 'attraction', label: '邱公司', at: [100.3369, 5.4153], href: '/places/malaysia/penang/attractions/khoo-kongsi' },
    { id: 'chew-jetty', kind: 'attraction', label: '姓周桥', at: [100.3417, 5.4134], href: '/places/malaysia/penang/attractions/chew-jetty' },
    { id: 'pinang-peranakan-mansion', kind: 'attraction', label: '侨生博物馆', at: [100.341, 5.4185], href: '/places/malaysia/penang/attractions/pinang-peranakan-mansion' },
    { id: 'penang-hill', kind: 'attraction', label: '升旗山', at: [100.2768, 5.4246], href: '/places/malaysia/penang/attractions/penang-hill' },
    // 枢纽
    { id: 'komtar-hub', kind: 'hub', label: 'Komtar 巴士枢纽', at: [100.3295, 5.4137] },
    { id: 'weld-quay-hub', kind: 'hub', label: 'Pengkalan Weld 渡轮码头', at: [100.3453, 5.4155] },
  ],
  routes: [
    {
      id: 'd2',
      label: 'D2 店屋与海边',
      points: [[100.3368, 5.4165], [100.3369, 5.4153], [100.339, 5.4145], [100.3417, 5.4134]],
      labelAt: [100.3425, 5.4178],
    },
    {
      id: 'd3',
      label: 'D3 宗教街与小吃',
      points: [[100.3398, 5.4191], [100.3375, 5.4175], [100.3345, 5.4168], [100.331, 5.4156], [100.3305, 5.4147]],
      labelAt: [100.338, 5.4215],
    },
    {
      id: 'd4',
      label: 'D4 亚依淡（5 晚版）',
      points: [[100.331, 5.4145], [100.308, 5.4085], [100.288, 5.4055], [100.28, 5.402]],
      labelAt: [100.303, 5.4115],
    },
  ],
}
