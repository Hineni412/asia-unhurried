import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

// 京都：枢纽 vs 散步圈。价位锚点是示意（海旁贵、内街廉式空间规律），非实测报价。
export const kyotoStayMap: StayMapData = {
  bounds: { lng: [135.718, 135.815], lat: [34.958, 35.042] },
  season: SEASON.japanKyoto,
  waterLabels: [{ at: [135.7715, 34.984], text: '鸭 川' }],
  contextLabels: [
    { at: [135.7305, 35.0325], text: '金阁寺' },
    { at: [135.7245, 35.0095], text: '→ 岚山（西行约25分钟）' },
    { at: [135.7745, 34.9665], text: '伏见稻荷' },
    { at: [135.7975, 35.0275], text: '银阁寺·哲学之道' },
  ],
  infra: [
    { label: '乌丸线', points: [[135.7588, 34.9855], [135.7595, 34.9960], [135.7597, 35.0038], [135.7598, 35.0100]], labelAt: [135.7580, 34.9980] },
    { label: '京阪线', points: [[135.7725, 34.9710], [135.7738, 34.9880], [135.7752, 35.0038]], labelAt: [135.7765, 34.9860] },
    { label: '东西线', points: [[135.7480, 35.0095], [135.7597, 35.0100], [135.7720, 35.0115], [135.7850, 35.0100]], labelAt: [135.7640, 35.0125] },
  ],
  zones: [
    {
      areaId: 'kyoto-station-stay',
      label: '京都站—乌丸',
      ring: [[135.7525, 34.9855], [135.7530, 34.9885], [135.7555, 34.9915], [135.7595, 34.9930], [135.7635, 34.9920], [135.7660, 34.9895], [135.7665, 34.9860], [135.7640, 34.9830], [135.7600, 34.9815], [135.7560, 34.9820], [135.7530, 34.9835]],
      labelAt: [135.7595, 34.9805],
      heat: [
        { at: [135.7588, 34.9865], value: 590 },
        { at: [135.7600, 34.9898], value: 660 },
        { at: [135.7560, 34.9845], value: 510 },
        { at: [135.7625, 34.9880], value: 720 },
        { at: [135.7610, 34.9920], value: 780 },
      ],
    },
    {
      areaId: 'kawaramachi-gion-stay',
      label: '河原町—祇园口',
      ring: [[135.7635, 35.0010], [135.7650, 35.0045], [135.7680, 35.0070], [135.7720, 35.0075], [135.7755, 35.0060], [135.7770, 35.0035], [135.7755, 35.0010], [135.7725, 35.0000], [135.7685, 35.0000], [135.7650, 34.9995]],
      labelAt: [135.7710, 35.0085],
      heat: [
        { at: [135.7705, 35.0045], value: 1130 },
        { at: [135.7670, 35.0040], value: 870 },
        { at: [135.7748, 35.0035], value: 1310 },
        { at: [135.7690, 35.0015], value: 820 },
        { at: [135.7655, 35.0058], value: 770 },
      ],
    },
    {
      areaId: 'okazaki-stay',
      label: '冈崎—南禅寺',
      ring: [[135.7795, 35.0110], [135.7810, 35.0140], [135.7840, 35.0165], [135.7875, 35.0170], [135.7910, 35.0155], [135.7920, 35.0130], [135.7900, 35.0105], [135.7865, 35.0095], [135.7830, 35.0098], [135.7805, 35.0100]],
      labelAt: [135.7860, 35.0185],
      heat: [
        { at: [135.7840, 35.0128], value: 830 },
        { at: [135.7885, 35.0145], value: 1090 },
        { at: [135.7828, 35.0155], value: 900 },
        { at: [135.7905, 35.0125], value: 1220 },
      ],
    },
  ],
  pins: [
    { id: 'hk-kyoto-station', kind: 'hub', at: [135.7588, 34.9855], label: '京都站' },
    { id: 'hk-kawaramachi', kind: 'hub', at: [135.7715, 35.0038], label: '河原町／祇园四条' },
    { id: 'kyoto-owariya', kind: 'restaurant', at: [135.7638, 35.0110], label: '本家尾张屋', href: '?tab=eat#owariya' },
    { id: 'kyoto-junsei', kind: 'restaurant', at: [135.7930, 35.0130], label: '南禅寺 顺正', href: '?tab=eat#junsei' },
    { id: 'kyoto-okutan', kind: 'restaurant', at: [135.7938, 35.0115], label: '奥丹', href: '?tab=eat#okutan' },
    { id: 'kyoto-nakamura', kind: 'restaurant', at: [135.7595, 34.9870], label: '中村藤吉 京都站', href: '?tab=eat#nakamura-tokichi' },
    { id: 'kyoto-tsujiri', kind: 'restaurant', at: [135.7748, 35.0037], label: '祇园辻利', href: '?tab=eat#tsujiri' },
    { id: 'kyoto-inoda', kind: 'restaurant', at: [135.7645, 35.0085], label: 'Inoda Coffee', href: '?tab=eat#inoda-coffee' },
    { id: 'kyoto-smart', kind: 'restaurant', at: [135.7680, 35.0060], label: 'Smart Coffee', href: '?tab=eat#smart-coffee' },
    { id: 'kyoto-miki', kind: 'restaurant', at: [135.7648, 35.0052], label: '三木鸡卵（锦市场）', href: '?tab=eat#miki-keiran' },
    { id: 'kyoto-konna', kind: 'restaurant', at: [135.7656, 35.0046], label: 'こんなもんじゃ（锦市场）', href: '?tab=eat#konna-monja' },
  ],
  routes: [
    {
      id: 'd2-higashiyama',
      label: 'D2 东山',
      points: [[135.7850, 34.9949], [135.7805, 34.9990], [135.7785, 35.0037], [135.7748, 35.0038]],
      labelAt: [135.7830, 34.9990],
    },
    {
      id: 'd3-fushimi',
      label: 'D3 伏见稻荷',
      points: [[135.7588, 34.9855], [135.7655, 34.9740], [135.7727, 34.9671]],
      labelAt: [135.7625, 34.9745],
    },
    {
      id: 'd4-arashiyama',
      label: 'D4 岚山（5 晚版）',
      points: [[135.7480, 35.0075], [135.7350, 35.0090], [135.7240, 35.0095]],
      labelAt: [135.7390, 35.0065],
    },
    {
      id: 'd5-north',
      label: 'D5 北部（5 晚版）',
      points: [[135.7305, 35.0310], [135.7590, 35.0295], [135.7965, 35.0270]],
      labelAt: [135.7590, 35.0315],
    },
  ],
  checkedAt: '2025-06',
}
