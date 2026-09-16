import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

// 新加坡：牛车水（吃住集中）／小印度—武吉士（便宜带）／滨海湾（溢价买景）。价位锚点为示意。
export const singaporeStayMap: StayMapData = {
  bounds: { lng: [103.815, 103.915], lat: [1.27, 1.326] },
  season: SEASON.singapore,
  waterLabels: [
    { at: [103.862, 1.2825], text: '滨海湾' },
    { at: [103.846, 1.2760], text: '新加坡河' },
  ],
  contextLabels: [
    { at: [103.8315, 1.3045], text: '乌节路' },
    { at: [103.9020, 1.3060], text: '加东' },
    { at: [103.8285, 1.2845], text: '中峇鲁' },
    { at: [103.8500, 1.3205], text: 'Balestier' },
  ],
  infra: [
    { label: 'EW 东西线', points: [[103.9050, 1.3050], [103.8700, 1.3000], [103.8520, 1.2930], [103.8460, 1.2850], [103.8450, 1.2760]], labelAt: [103.8780, 1.2990] },
    { label: 'NS 南北线', points: [[103.8315, 1.3040], [103.8400, 1.2980], [103.8470, 1.2950], [103.8520, 1.2930], [103.8550, 1.2850]], labelAt: [103.8400, 1.3000] },
    { label: 'DT 滨海市区线', points: [[103.8440, 1.2835], [103.8510, 1.2900], [103.8580, 1.3015], [103.8510, 1.3065]], labelAt: [103.8555, 1.2960] },
  ],
  zones: [
    {
      areaId: 'chinatown-stay',
      label: '牛车水',
      ring: [[103.8380, 1.2785], [103.8390, 1.2820], [103.8415, 1.2855], [103.8455, 1.2875], [103.8495, 1.2865], [103.8515, 1.2835], [103.8500, 1.2800], [103.8465, 1.2775], [103.8420, 1.2768], [103.8395, 1.2772]],
      labelAt: [103.8448, 1.2890],
      heat: [
        { at: [103.8440, 1.2835], value: 1050 },
        { at: [103.8428, 1.2805], value: 930 },
        { at: [103.8480, 1.2850], value: 1230 },
        { at: [103.8405, 1.2815], value: 880 },
        { at: [103.8470, 1.2820], value: 1110 },
      ],
    },
    {
      areaId: 'little-india-stay',
      label: '小印度—武吉士',
      ring: [[103.8440, 1.2970], [103.8450, 1.3010], [103.8480, 1.3050], [103.8525, 1.3075], [103.8570, 1.3065], [103.8595, 1.3035], [103.8580, 1.2995], [103.8545, 1.2965], [103.8495, 1.2955], [103.8460, 1.2958]],
      labelAt: [103.8525, 1.3090],
      heat: [
        { at: [103.8510, 1.3065], value: 790 },
        { at: [103.8555, 1.3040], value: 960 },
        { at: [103.8475, 1.3020], value: 680 },
        { at: [103.8570, 1.3010], value: 850 },
        { at: [103.8530, 1.3000], value: 880 },
      ],
    },
    {
      areaId: 'marina-bay-stay',
      label: '滨海湾',
      ring: [[103.8495, 1.2785], [103.8510, 1.2825], [103.8540, 1.2860], [103.8585, 1.2875], [103.8630, 1.2860], [103.8645, 1.2825], [103.8630, 1.2785], [103.8595, 1.2755], [103.8550, 1.2748], [103.8515, 1.2755]],
      labelAt: [103.8575, 1.2890],
      heat: [
        { at: [103.8590, 1.2845], value: 2050 },
        { at: [103.8550, 1.2830], value: 1660 },
        { at: [103.8615, 1.2815], value: 2300 },
        { at: [103.8520, 1.2800], value: 1470 },
      ],
    },
  ],
  pins: [
    { id: 'sg-chinatown-mrt', kind: 'hub', at: [103.8440, 1.2835], label: 'Chinatown MRT' },
    { id: 'sg-bayfront', kind: 'hub', at: [103.8590, 1.2845], label: 'Bayfront（金沙）' },
    { id: 'sg-tian-tian', kind: 'restaurant', at: [103.8428, 1.2802], label: '天天海南鸡饭', href: '?tab=eat#tian-tian' },
    { id: 'sg-lao-ban', kind: 'restaurant', at: [103.8432, 1.2808], label: '老伴豆花', href: '?tab=eat#lao-ban' },
    { id: 'sg-boon-tong-kee', kind: 'restaurant', at: [103.8495, 1.3210], label: '文东记（Balestier）', href: '?tab=eat#boon-tong-kee' },
    { id: 'sg-tiong-bahru', kind: 'restaurant', at: [103.8285, 1.2848], label: '中峇鲁鸡饭', href: '?tab=eat#tiong-bahru-chicken-rice' },
    { id: 'sg-hawker-chan', kind: 'restaurant', at: [103.8448, 1.2830], label: '了凡油鸡饭', href: '?tab=eat#hawker-chan' },
    { id: 'sg-328-laksa', kind: 'restaurant', at: [103.9030, 1.3045], label: '328 加东叻沙', href: '?tab=eat#katong-laksa-328' },
    { id: 'sg-sungei', kind: 'restaurant', at: [103.8578, 1.3055], label: '结霜桥叻沙', href: '?tab=eat#sungei-road-laksa' },
    { id: 'sg-song-fa', kind: 'restaurant', at: [103.8448, 1.2890], label: '松发肉骨茶', href: '?tab=eat#song-fa' },
    { id: 'sg-ng-ah-sio', kind: 'restaurant', at: [103.8522, 1.3170], label: '黄亚细肉骨茶', href: '?tab=eat#ng-ah-sio' },
    { id: 'sg-ya-kun', kind: 'restaurant', at: [103.8480, 1.2820], label: '亚坤（远东广场）', href: '?tab=eat#ya-kun' },
    { id: 'sg-chin-mee-chin', kind: 'restaurant', at: [103.9035, 1.3060], label: '真美珍', href: '?tab=eat#chin-mee-chin' },
    { id: 'sg-killiney', kind: 'restaurant', at: [103.8382, 1.2982], label: 'Killiney Kopitiam', href: '?tab=eat#killiney' },
  ],
  routes: [
    {
      id: 'd2-chinatown-marina',
      label: 'D2 牛车水—滨海湾',
      points: [[103.8440, 1.2835], [103.8480, 1.2820], [103.8550, 1.2850], [103.8590, 1.2845]],
      labelAt: [103.8510, 1.2800],
    },
    {
      id: 'd3-littleindia-glam',
      label: 'D3 小印度—甘榜格南',
      points: [[103.8510, 1.3065], [103.8555, 1.3040], [103.8580, 1.3015]],
      labelAt: [103.8585, 1.3055],
    },
    {
      id: 'd4-katong',
      label: 'D4 加东（5 晚版）',
      points: [[103.8580, 1.3015], [103.8800, 1.3040], [103.9030, 1.3045]],
      labelAt: [103.8790, 1.3075],
    },
  ],
  checkedAt: '2025-06',
}
