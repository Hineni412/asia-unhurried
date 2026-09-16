import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

// 河内：还剑湖北（老城）／湖南（法区）／西湖。价位锚点为示意。
export const hanoiStayMap: StayMapData = {
  bounds: { lng: [105.808, 105.875], lat: [21.005, 21.066] },
  season: SEASON.vietnamNorth,
  waterLabels: [
    { at: [105.8520, 21.0285], text: '还剑湖' },
    { at: [105.866, 21.052], text: '红 河' },
    { at: [105.828, 21.0595], text: '西 湖' },
  ],
  contextLabels: [
    { at: [105.8345, 21.0362], text: '巴亭广场' },
    { at: [105.8350, 21.0280], text: '文庙' },
    { at: [105.8130, 21.0620], text: '← 内排机场方向' },
  ],
  infra: [
    { label: '龙边桥', points: [[105.8560, 21.0400], [105.8640, 21.0455], [105.8700, 21.0500]], labelAt: [105.8620, 21.0475] },
  ],
  zones: [
    {
      areaId: 'old-quarter-stay',
      label: '老城（湖北）',
      ring: [[105.8410, 21.0305], [105.8420, 21.0335], [105.8450, 21.0360], [105.8490, 21.0370], [105.8525, 21.0355], [105.8530, 21.0325], [105.8505, 21.0295], [105.8465, 21.0280], [105.8430, 21.0285]],
      labelAt: [105.8475, 21.0380],
      heat: [
        { at: [105.8475, 21.0335], value: 380 },
        { at: [105.8450, 21.0330], value: 300 },
        { at: [105.8500, 21.0350], value: 450 },
        { at: [105.8515, 21.0300], value: 480 },
        { at: [105.8435, 21.0315], value: 320 },
      ],
    },
    {
      areaId: 'french-quarter-stay',
      label: '法区（湖南）',
      ring: [[105.8470, 21.0185], [105.8480, 21.0220], [105.8505, 21.0250], [105.8545, 21.0265], [105.8585, 21.0255], [105.8605, 21.0225], [105.8595, 21.0185], [105.8560, 21.0155], [105.8515, 21.0150], [105.8485, 21.0160]],
      labelAt: [105.8540, 21.0275],
      heat: [
        { at: [105.8535, 21.0220], value: 450 },
        { at: [105.8570, 21.0210], value: 570 },
        { at: [105.8500, 21.0240], value: 360 },
        { at: [105.8560, 21.0180], value: 510 },
        { at: [105.8520, 21.0185], value: 420 },
      ],
    },
    {
      areaId: 'west-lake-stay',
      label: '西湖东南岸',
      ring: [[105.8350, 21.0440], [105.8360, 21.0475], [105.8390, 21.0505], [105.8435, 21.0520], [105.8480, 21.0510], [105.8500, 21.0480], [105.8485, 21.0445], [105.8450, 21.0420], [105.8400, 21.0412], [105.8365, 21.0418]],
      labelAt: [105.8430, 21.0535],
      heat: [
        { at: [105.8420, 21.0480], value: 620 },
        { at: [105.8460, 21.0495], value: 790 },
        { at: [105.8385, 21.0465], value: 480 },
        { at: [105.8485, 21.0460], value: 700 },
      ],
    },
  ],
  pins: [
    { id: 'hn-station', kind: 'hub', at: [105.8415, 21.0245], label: '河内站' },
    { id: 'hn-phobatdan', kind: 'restaurant', at: [105.8450, 21.0335], label: 'Phở Bát Đàn', href: '?tab=eat#pho-bat-dan' },
    { id: 'hn-phothin', kind: 'restaurant', at: [105.8525, 21.0155], label: 'Phở Thìn', href: '?tab=eat#pho-thin' },
    { id: 'hn-buncha', kind: 'restaurant', at: [105.8498, 21.0225], label: 'Bún Chả Hương Liên', href: '?tab=eat#buncha-huong-lien' },
    { id: 'hn-koto', kind: 'restaurant', at: [105.8350, 21.0298], label: 'KOTO（文庙对面）', href: '?tab=eat#koto-van-mieu' },
    { id: 'hn-giang', kind: 'restaurant', at: [105.8475, 21.0338], label: 'Café Giảng', href: '?tab=eat#cafe-giang' },
    { id: 'hn-dinh', kind: 'restaurant', at: [105.8528, 21.0302], label: 'Café Đinh', href: '?tab=eat#cafe-dinh' },
    { id: 'hn-banhmi25', kind: 'restaurant', at: [105.8448, 21.0325], label: 'Bánh Mì 25', href: '?tab=eat#banh-mi-25' },
    { id: 'hn-banhcuon', kind: 'restaurant', at: [105.8515, 21.0185], label: 'Bánh Cuốn Bà Hoành', href: '?tab=eat#banh-cuon-ba-hoanh' },
    { id: 'hn-xoiyen', kind: 'restaurant', at: [105.8492, 21.0315], label: 'Xôi Yến', href: '?tab=eat#xoi-yen' },
    { id: 'hn-biahoi', kind: 'restaurant', at: [105.8480, 21.0352], label: 'Bia hơi 街口', href: '?tab=eat#bia-hoi-junction' },
  ],
  routes: [
    {
      id: 'd2-oldtown',
      label: 'D2 老城—还剑湖',
      points: [[105.8480, 21.0352], [105.8475, 21.0330], [105.8520, 21.0285], [105.8535, 21.0220]],
      labelAt: [105.8550, 21.0320],
    },
    {
      id: 'd3-badinh',
      label: 'D3 巴亭—文庙',
      points: [[105.8345, 21.0367], [105.8355, 21.0290], [105.8400, 21.0260]],
      labelAt: [105.8305, 21.0310],
    },
    {
      id: 'd4-westlake',
      label: 'D4 西湖（5 晚版）',
      points: [[105.8420, 21.0480], [105.8330, 21.0530], [105.8245, 21.0560]],
      labelAt: [105.8320, 21.0560],
    },
  ],
  checkedAt: '2025-06',
}
