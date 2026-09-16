import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

// 曼谷：素坤逸（轨道十字）／暹罗（最中）／河畔老城。价位锚点为示意。
export const bangkokStayMap: StayMapData = {
  bounds: { lng: [100.478, 100.6], lat: [13.705, 13.812] },
  season: SEASON.thailandHot,
  waterLabels: [{ at: [100.502, 13.722], text: '湄 南 河' }],
  contextLabels: [
    { at: [100.4910, 13.7515], text: '大皇宫·卧佛寺' },
    { at: [100.4875, 13.7415], text: '郑王庙' },
    { at: [100.5385, 13.7660], text: '胜利纪念碑' },
    { at: [100.5490, 13.8010], text: '恰图恰市场' },
  ],
  infra: [
    { label: 'BTS 素坤逸线', points: [[100.5340, 13.7460], [100.5420, 13.7410], [100.5605, 13.7370], [100.5695, 13.7305], [100.5785, 13.7245], [100.5860, 13.7230]], labelAt: [100.5530, 13.7350] },
    { label: 'BTS 是隆线', points: [[100.5340, 13.7460], [100.5290, 13.7330], [100.5170, 13.7250], [100.5120, 13.7190]], labelAt: [100.5190, 13.7300] },
    { label: 'MRT 蓝线', points: [[100.5050, 13.7430], [100.5160, 13.7400], [100.5300, 13.7380], [100.5450, 13.7400], [100.5605, 13.7378]], labelAt: [100.5400, 13.7350] },
    { label: '河船', points: [[100.5120, 13.7190], [100.5050, 13.7300], [100.4970, 13.7420], [100.4940, 13.7500]], labelAt: [100.5010, 13.7330] },
  ],
  zones: [
    {
      areaId: 'sukhumvit-stay',
      label: '素坤逸 Asok—Phrom Phong',
      ring: [[100.5530, 13.7260], [100.5540, 13.7300], [100.5570, 13.7340], [100.5610, 13.7375], [100.5665, 13.7385], [100.5715, 13.7365], [100.5740, 13.7330], [100.5725, 13.7290], [100.5685, 13.7255], [100.5630, 13.7238], [100.5575, 13.7240]],
      labelAt: [100.5640, 13.7400],
      heat: [
        { at: [100.5605, 13.7370], value: 680 },
        { at: [100.5695, 13.7305], value: 830 },
        { at: [100.5560, 13.7310], value: 520 },
        { at: [100.5660, 13.7345], value: 750 },
        { at: [100.5720, 13.7300], value: 880 },
      ],
    },
    {
      areaId: 'siam-stay',
      label: '暹罗—国家体育场',
      ring: [[100.5250, 13.7410], [100.5260, 13.7445], [100.5290, 13.7475], [100.5335, 13.7490], [100.5380, 13.7480], [100.5400, 13.7450], [100.5385, 13.7415], [100.5350, 13.7385], [100.5305, 13.7378], [100.5270, 13.7385]],
      labelAt: [100.5330, 13.7500],
      heat: [
        { at: [100.5340, 13.7460], value: 610 },
        { at: [100.5295, 13.7440], value: 450 },
        { at: [100.5370, 13.7465], value: 710 },
        { at: [100.5315, 13.7415], value: 390 },
      ],
    },
    {
      areaId: 'riverside-stay',
      label: '河畔—老城',
      ring: [[100.4970, 13.7380], [100.4980, 13.7420], [100.5005, 13.7460], [100.5050, 13.7485], [100.5100, 13.7480], [100.5125, 13.7445], [100.5115, 13.7405], [100.5080, 13.7375], [100.5035, 13.7360], [100.5000, 13.7363]],
      labelAt: [100.5050, 13.7500],
      heat: [
        { at: [100.5050, 13.7450], value: 760 },
        { at: [100.5080, 13.7410], value: 970 },
        { at: [100.5005, 13.7435], value: 550 },
        { at: [100.5105, 13.7440], value: 860 },
      ],
    },
  ],
  pins: [
    { id: 'bk-asok', kind: 'hub', at: [100.5605, 13.7370], label: 'Asok／Sukhumvit 换乘' },
    { id: 'bk-sathorn', kind: 'hub', at: [100.5120, 13.7190], label: 'Sathorn 码头' },
    { id: 'bk-thipsamai', kind: 'restaurant', at: [100.5040, 13.7470], label: 'Thipsamai', href: '?tab=eat#thipsamai' },
    { id: 'bk-jayfai', kind: 'restaurant', at: [100.5042, 13.7465], label: 'Jay Fai', href: '?tab=eat#jay-fai' },
    { id: 'bk-ortorkor', kind: 'restaurant', at: [100.5480, 13.7990], label: 'Or Tor Kor 市场', href: '?tab=eat#or-tor-kor' },
    { id: 'bk-tk', kind: 'restaurant', at: [100.5090, 13.7395], label: 'T&K Seafood', href: '?tab=eat#t-k-seafood' },
    { id: 'bk-naiek', kind: 'restaurant', at: [100.5085, 13.7410], label: 'Nai Ek 粿汁', href: '?tab=eat#nai-ek' },
    { id: 'bk-pier21', kind: 'restaurant', at: [100.5605, 13.7378], label: 'Pier 21 食阁', href: '?tab=eat#pier-21' },
    { id: 'bk-boatnoodle', kind: 'restaurant', at: [100.5385, 13.7647], label: '船面巷', href: '?tab=eat#boat-noodle-alley' },
    { id: 'bk-wattana', kind: 'restaurant', at: [100.5855, 13.7235], label: '郭炎松', href: '?tab=eat#wattana-panich' },
    { id: 'bk-factory', kind: 'restaurant', at: [100.5325, 13.7575], label: 'Factory Coffee', href: '?tab=eat#factory-coffee' },
    { id: 'bk-octave', kind: 'restaurant', at: [100.5785, 13.7245], label: 'Octave Rooftop', href: '?tab=eat#octave-bar' },
  ],
  routes: [
    {
      id: 'd2-temples',
      label: 'D2 寺庙日（河船）',
      points: [[100.5120, 13.7190], [100.5020, 13.7350], [100.4940, 13.7500], [100.4885, 13.7437]],
      labelAt: [100.4990, 13.7360],
    },
    {
      id: 'd3-siam-chinatown',
      label: 'D3 暹罗—唐人街',
      points: [[100.5340, 13.7460], [100.5200, 13.7440], [100.5080, 13.7400]],
      labelAt: [100.5190, 13.7475],
    },
    {
      id: 'd4-chatuchak',
      label: 'D4 恰图恰（5 晚版）',
      points: [[100.5340, 13.7460], [100.5400, 13.7700], [100.5490, 13.8000]],
      labelAt: [100.5455, 13.7750],
    },
  ],
  checkedAt: '2025-06',
}
