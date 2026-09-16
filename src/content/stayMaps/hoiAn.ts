import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

// 会安：古城内／古城外围步行圈／安邦海滩。价位锚点为示意。
export const hoiAnStayMap: StayMapData = {
  bounds: { lng: [108.3, 108.375], lat: [15.858, 15.916] },
  season: SEASON.vietnamHoiAn,
  waterLabels: [
    { at: [108.332, 15.8755], text: '秋盆河' },
    { at: [108.36, 15.909], text: '南 海' },
  ],
  contextLabels: [
    { at: [108.3420, 15.8890], text: '锦清椰林' },
    { at: [108.3100, 15.9080], text: '← 岘港机场方向' },
  ],
  infra: [
    { label: '往海滩的乡道', points: [[108.3285, 15.8808], [108.3380, 15.8860], [108.3480, 15.8930], [108.3580, 15.9000]], labelAt: [108.3450, 15.8895] },
  ],
  zones: [
    {
      areaId: 'old-town-stay',
      label: '古城内',
      ring: [[108.3235, 15.8775], [108.3240, 15.8800], [108.3260, 15.8820], [108.3290, 15.8830], [108.3315, 15.8820], [108.3320, 15.8795], [108.3300, 15.8770], [108.3270, 15.8760], [108.3245, 15.8763]],
      labelAt: [108.3280, 15.8840],
      heat: [
        { at: [108.3270, 15.8800], value: 500 },
        { at: [108.3295, 15.8810], value: 600 },
        { at: [108.3255, 15.8785], value: 400 },
        { at: [108.3305, 15.8790], value: 550 },
      ],
    },
    {
      areaId: 'old-town-outer-stay',
      label: '古城外围',
      ring: [[108.3190, 15.8765], [108.3200, 15.8810], [108.3225, 15.8850], [108.3260, 15.8870], [108.3305, 15.8865], [108.3330, 15.8840], [108.3340, 15.8805], [108.3325, 15.8770], [108.3280, 15.8748], [108.3230, 15.8745], [108.3200, 15.8750]],
      labelAt: [108.3230, 15.8905],
      heat: [
        { at: [108.3240, 15.8845], value: 260 },
        { at: [108.3210, 15.8810], value: 230 },
        { at: [108.3300, 15.8870], value: 320 },
        { at: [108.3270, 15.8885], value: 290 },
      ],
    },
    {
      areaId: 'an-bang-stay',
      label: '安邦海滩',
      ring: [[108.3550, 15.8955], [108.3560, 15.8990], [108.3590, 15.9020], [108.3635, 15.9035], [108.3675, 15.9020], [108.3685, 15.8985], [108.3660, 15.8950], [108.3620, 15.8930], [108.3580, 15.8935]],
      labelAt: [108.3620, 15.9050],
      heat: [
        { at: [108.3620, 15.9000], value: 640 },
        { at: [108.3655, 15.8980], value: 770 },
        { at: [108.3580, 15.8995], value: 500 },
        { at: [108.3640, 15.9015], value: 710 },
      ],
    },
  ],
  pins: [
    { id: 'ha-cao-lau-ba-le', kind: 'restaurant', at: [108.3310, 15.8790], label: 'Cao Lầu Bá Lễ', href: '?tab=eat#cao-lau-ba-le' },
    { id: 'ha-morning-glory', kind: 'restaurant', at: [108.3275, 15.8800], label: 'Morning Glory', href: '?tab=eat#morning-glory' },
    { id: 'ha-cao-lau-thanh', kind: 'restaurant', at: [108.3288, 15.8785], label: 'Thanh Cao Lầu', href: '?tab=eat#cao-lau-thanh' },
    { id: 'ha-white-rose', kind: 'restaurant', at: [108.3298, 15.8778], label: '白玫瑰', href: '?tab=eat#white-rose-restaurant' },
    { id: 'ha-banh-mi-phuong', kind: 'restaurant', at: [108.3265, 15.8820], label: 'Bánh Mì Phượng', href: '?tab=eat#banh-mi-phuong' },
    { id: 'ha-madam-khanh', kind: 'restaurant', at: [108.3255, 15.8850], label: 'Madam Khanh', href: '?tab=eat#madam-khanh' },
    { id: 'ha-cargo', kind: 'restaurant', at: [108.3285, 15.8808], label: 'Cargo Club', href: '?tab=eat#cargo-club' },
    { id: 'ha-roastery', kind: 'restaurant', at: [108.3300, 15.8815], label: 'Hoi An Roastery', href: '?tab=eat#hoian-roastery' },
    { id: 'ha-reaching-out', kind: 'restaurant', at: [108.3270, 15.8798], label: 'Reaching Out 茶舍', href: '?tab=eat#reaching-out' },
    { id: 'ha-mot', kind: 'restaurant', at: [108.3278, 15.8795], label: 'Mót Hội An', href: '?tab=eat#mot-hoi-an' },
  ],
  routes: [
    {
      id: 'd2-oldtown',
      label: 'D2 古城',
      points: [[108.3265, 15.8820], [108.3285, 15.8808], [108.3270, 15.8798], [108.3245, 15.8778]],
      labelAt: [108.3255, 15.8770],
    },
    {
      id: 'd3-camthanh',
      label: 'D3 锦清椰林',
      points: [[108.3300, 15.8815], [108.3380, 15.8860], [108.3420, 15.8890]],
      labelAt: [108.3355, 15.8835],
    },
    {
      id: 'd4-anbang',
      label: 'D4 安邦海滩',
      points: [[108.3380, 15.8860], [108.3480, 15.8930], [108.3580, 15.9000]],
      labelAt: [108.3480, 15.8960],
    },
  ],
  checkedAt: '2025-06',
}
