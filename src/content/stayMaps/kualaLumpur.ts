import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

// 吉隆坡：Sentral（枢纽）／武吉免登（吃喝）／茨厂街外缘（老城）／KLCC（景观）。价位锚点为示意。
export const kualaLumpurStayMap: StayMapData = {
  bounds: { lng: [101.6, 101.725], lat: [3.098, 3.166] },
  season: SEASON.malaysia,
  waterLabels: [{ at: [101.693, 3.1525], text: '巴生河' }],
  contextLabels: [
    { at: [101.6955, 3.1488], text: '独立广场·Merdeka 118' },
    { at: [101.6220, 3.1385], text: 'Damansara 方向' },
    { at: [101.7095, 3.1435], text: 'Imbi／阿罗街' },
  ],
  infra: [
    { label: 'KLIA Ekspres', points: [[101.6865, 3.1340], [101.6760, 3.1180], [101.6640, 3.1060]], labelAt: [101.6720, 3.1140] },
    { label: 'LRT（往 KLCC）', points: [[101.6865, 3.1340], [101.6930, 3.1390], [101.6965, 3.1490], [101.7020, 3.1550], [101.7115, 3.1575]], labelAt: [101.7000, 3.1560] },
    { label: '单轨（往武吉免登）', points: [[101.6865, 3.1340], [101.6980, 3.1400], [101.7100, 3.1465]], labelAt: [101.7020, 3.1420] },
  ],
  zones: [
    {
      areaId: 'kl-sentral-stay',
      label: 'KL Sentral—Brickfields',
      ring: [[101.6795, 3.1290], [101.6805, 3.1325], [101.6835, 3.1355], [101.6880, 3.1370], [101.6925, 3.1360], [101.6945, 3.1330], [101.6930, 3.1295], [101.6895, 3.1270], [101.6850, 3.1262], [101.6815, 3.1268]],
      labelAt: [101.6870, 3.1385],
      heat: [
        { at: [101.6865, 3.1340], value: 450 },
        { at: [101.6895, 3.1325], value: 510 },
        { at: [101.6830, 3.1320], value: 350 },
        { at: [101.6915, 3.1350], value: 560 },
      ],
    },
    {
      areaId: 'bukit-bintang-stay',
      label: '武吉免登',
      ring: [[101.7030, 3.1415], [101.7040, 3.1450], [101.7070, 3.1480], [101.7115, 3.1495], [101.7155, 3.1485], [101.7175, 3.1455], [101.7165, 3.1420], [101.7130, 3.1395], [101.7085, 3.1388], [101.7050, 3.1392]],
      labelAt: [101.7105, 3.1510],
      heat: [
        { at: [101.7100, 3.1465], value: 480 },
        { at: [101.7135, 3.1470], value: 560 },
        { at: [101.7060, 3.1445], value: 360 },
        { at: [101.7115, 3.1420], value: 520 },
        { at: [101.7150, 3.1450], value: 500 },
      ],
    },
    {
      areaId: 'chinatown-edge-stay',
      label: '茨厂街外缘',
      ring: [[101.6925, 3.1380], [101.6935, 3.1415], [101.6960, 3.1445], [101.7000, 3.1460], [101.7040, 3.1450], [101.7055, 3.1420], [101.7040, 3.1385], [101.7005, 3.1360], [101.6960, 3.1355], [101.6935, 3.1362]],
      labelAt: [101.6990, 3.1475],
      heat: [
        { at: [101.6980, 3.1425], value: 250 },
        { at: [101.7005, 3.1400], value: 290 },
        { at: [101.6950, 3.1405], value: 200 },
        { at: [101.7030, 3.1435], value: 330 },
      ],
    },
    {
      areaId: 'klcc-stay',
      label: 'KLCC 双子塔',
      ring: [[101.7050, 3.1525], [101.7060, 3.1560], [101.7090, 3.1590], [101.7135, 3.1605], [101.7175, 3.1595], [101.7195, 3.1565], [101.7180, 3.1530], [101.7145, 3.1505], [101.7100, 3.1498], [101.7070, 3.1505]],
      labelAt: [101.7125, 3.1620],
      heat: [
        { at: [101.7115, 3.1575], value: 740 },
        { at: [101.7150, 3.1560], value: 820 },
        { at: [101.7080, 3.1550], value: 560 },
        { at: [101.7130, 3.1540], value: 670 },
      ],
    },
  ],
  pins: [
    { id: 'kl-sentral-hub', kind: 'hub', at: [101.6865, 3.1340], label: 'KL Sentral' },
    { id: 'kl-pasar-seni', kind: 'hub', at: [101.6955, 3.1410], label: 'Pasar Seni' },
    { id: 'kl-village-park', kind: 'restaurant', at: [101.6220, 3.1370], label: 'Village Park', href: '?tab=eat#village-park' },
    { id: 'kl-madam-kwans', kind: 'restaurant', at: [101.7118, 3.1580], label: "Madam Kwan's", href: '?tab=eat#madam-kwans' },
    { id: 'kl-hon-kee', kind: 'restaurant', at: [101.6978, 3.1425], label: '汉记靓粥', href: '?tab=eat#hon-kee' },
    { id: 'kl-win-heng-seng', kind: 'restaurant', at: [101.7095, 3.1430], label: '永兴城茶餐室', href: '?tab=eat#win-heng-seng' },
    { id: 'kl-kim-lian-kee', kind: 'restaurant', at: [101.6980, 3.1428], label: '金莲记', href: '?tab=eat#kim-lian-kee' },
    { id: 'kl-ho-kow', kind: 'restaurant', at: [101.6970, 3.1415], label: '何九海南茶店', href: '?tab=eat#ho-kow' },
    { id: 'kl-yut-kee', kind: 'restaurant', at: [101.7015, 3.1615], label: '镒记茶室', href: '?tab=eat#yut-kee' },
    { id: 'kl-lot10', kind: 'restaurant', at: [101.7108, 3.1468], label: 'Lot 10 胡同', href: '?tab=eat#lot10-hutong' },
  ],
  routes: [
    {
      id: 'd2-chinatown',
      label: 'D2 茨厂街—独立广场',
      points: [[101.6865, 3.1340], [101.6955, 3.1410], [101.6980, 3.1428], [101.6955, 3.1488]],
      labelAt: [101.7005, 3.1470],
    },
    {
      id: 'd3-bintang-klcc',
      label: 'D3 武吉免登—KLCC',
      points: [[101.7100, 3.1465], [101.7140, 3.1520], [101.7115, 3.1575]],
      labelAt: [101.7160, 3.1530],
    },
    {
      id: 'd4-damansara',
      label: 'D4 近郊吃行（5 晚版）',
      points: [[101.6865, 3.1340], [101.6500, 3.1350], [101.6220, 3.1370]],
      labelAt: [101.6520, 3.1390],
    },
  ],
  checkedAt: '2025-06',
}
