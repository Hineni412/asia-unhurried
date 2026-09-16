import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

/**
 * 东京住区示意地图。山手线圈是最重要的选房锚点，画成环线；
 * 吉祥寺／中野方向超出图幅，D4 动线画出城方向即可。
 */
export const tokyoStayMap: StayMapData = {
  bounds: { lng: [139.655, 139.815], lat: [35.648, 35.74] },
  season: SEASON.japan,
  checkedAt: '2026-09-15',
  waterLabels: [{ at: [139.801, 35.723], text: '隅田川' }],
  infra: [
    // 山手线环（选房锚点）：新宿→涩谷→品川→东京站→上野→池袋→新宿
    {
      points: [
        [139.7005, 35.6895], [139.7016, 35.658], [139.71, 35.6435], [139.7387, 35.6287],
        [139.7575, 35.6455], [139.7671, 35.6812], [139.7774, 35.7141], [139.7518, 35.7305],
        [139.7109, 35.7295], [139.7005, 35.6895],
      ],
      label: '山手线',
      labelAt: [139.7468, 35.7338],
    },
    // 银座线：浅草→上野→银座→涩谷
    {
      points: [[139.7967, 35.7112], [139.7774, 35.7138], [139.762, 35.699], [139.765, 35.6717], [139.7016, 35.658]],
      label: '银座线',
      labelAt: [139.7628, 35.6955],
    },
    // 中央线往西（中野、吉祥寺方向出图幅）
    {
      points: [[139.7005, 35.6895], [139.678, 35.698], [139.656, 35.7045]],
      label: '中央线→吉祥寺',
      labelAt: [139.6725, 35.7015],
    },
  ],
  contextLabels: [
    { at: [139.7016, 35.6545], text: '涩谷' },
    { at: [139.7715, 35.6625], text: '筑地' },
    { at: [139.7, 35.6755], text: '明治神宫' },
    { at: [139.7655, 35.7275], text: '谷根千' },
  ],
  zones: [
    {
      areaId: 'ueno-asakusa-stay',
      label: '上野–浅草',
      center: [139.7865, 35.7148],
      rx: 0.0115,
      ry: 0.0062,
      labelAt: [139.7865, 35.7155],
      // 价位锚点：站前与浅草寺旁高，藏前／谷根千内街低
      heat: [
        { at: [139.7785, 35.7135], value: 750 }, // 上野站前
        { at: [139.7955, 35.713], value: 690 },  // 浅草寺旁
        { at: [139.792, 35.7085], value: 490 },  // 藏前内街
        { at: [139.774, 35.722], value: 530 },   // 谷根千一侧
        { at: [139.7845, 35.7195], value: 600 }, // 入谷方向
      ],
    },
    {
      areaId: 'shinjuku-stay',
      label: '新宿',
      center: [139.7005, 35.69],
      rx: 0.0085,
      ry: 0.007,
      labelAt: [139.701, 35.691],
      // 价位锚点：西口高层酒店群最贵，歌舞伎町内街低
      heat: [
        { at: [139.6955, 35.69], value: 1290 },  // 西口高层群
        { at: [139.7025, 35.6855], value: 910 }, // 南口
        { at: [139.7035, 35.6945], value: 800 }, // 东口歌舞伎町
        { at: [139.7075, 35.6905], value: 950 }, // 新宿三丁目
        { at: [139.6945, 35.6855], value: 720 }, // 代代木一侧
      ],
    },
    {
      areaId: 'nihonbashi-tokyostation',
      label: '日本桥–东京站',
      center: [139.7705, 35.6818],
      rx: 0.0075,
      ry: 0.006,
      labelAt: [139.771, 35.6825],
      // 价位锚点：丸之内一线最贵，京桥背街相对低
      heat: [
        { at: [139.7655, 35.6795], value: 1220 }, // 丸之内
        { at: [139.7705, 35.68], value: 950 },   // 八重洲
        { at: [139.7745, 35.6835], value: 860 },  // 日本桥室町
        { at: [139.7685, 35.6765], value: 770 },  // 京桥背街
      ],
    },
    {
      areaId: 'ikebukuro-stay',
      label: '池袋',
      center: [139.7109, 35.7305],
      rx: 0.0075,
      ry: 0.0058,
      labelAt: [139.7115, 35.731],
      // 价位锚点：站前与东口高，北口内街低
      heat: [
        { at: [139.7125, 35.7295], value: 840 }, // 东口
        { at: [139.709, 35.73], value: 650 },    // 西口
        { at: [139.711, 35.7335], value: 550 },  // 北口
        { at: [139.708, 35.7275], value: 740 },  // 公园一侧
      ],
    },
  ],
  pins: [
    // 收录餐厅（固定门店；连锁店不摆点）
    { id: 'rokurinsha', kind: 'restaurant', label: '六厘舍', at: [139.7677, 35.6808], href: '?tab=eat#rokurinsha' },
    { id: 'fuunji', kind: 'restaurant', label: '风云儿', at: [139.6989, 35.6867], href: '?tab=eat#fuunji' },
    { id: 'midori-sushi', kind: 'restaurant', label: '美登利寿司', at: [139.7013, 35.6585], href: '?tab=eat#midori-sushi' },
    { id: 'nemuro-hanamaru', kind: 'restaurant', label: '根室花丸', at: [139.7647, 35.6796], href: '?tab=eat#nemuro-hanamaru' },
    { id: 'maisen', kind: 'restaurant', label: '舞泉', at: [139.7115, 35.6647], href: '?tab=eat#maisen' },
    { id: 'kamiya-bar', kind: 'restaurant', label: '神谷 Bar', at: [139.792, 35.7112], href: '?tab=eat#kamiya-bar' },
    { id: 'kitsuneya', kind: 'restaurant', label: '狐狸屋', at: [139.7707, 35.6655], href: '?tab=eat#kitsuneya' },
    { id: 'marutake', kind: 'restaurant', label: '丸武', at: [139.7715, 35.665], href: '?tab=eat#marutake' },
    // 枢纽
    { id: 'tokyo-station-hub', kind: 'hub', label: '东京站 · 新干线／N\'EX', at: [139.7671, 35.6812] },
    { id: 'ueno-hub', kind: 'hub', label: '上野站 · Skyliner', at: [139.7774, 35.7141] },
    { id: 'shinjuku-hub', kind: 'hub', label: '新宿站', at: [139.7005, 35.6895] },
  ],
  routes: [
    {
      id: 'd2',
      label: 'D2 浅草–上野',
      points: [[139.7967, 35.7112], [139.792, 35.7112], [139.7845, 35.713], [139.773, 35.7156], [139.7655, 35.7275]],
      labelAt: [139.79, 35.7225],
    },
    {
      id: 'd3',
      label: 'D3 明治神宫–新宿',
      points: [[139.7005, 35.6764], [139.699, 35.683], [139.7005, 35.6895], [139.7035, 35.6935]],
      labelAt: [139.694, 35.6805],
    },
    {
      id: 'd4',
      label: 'D4 城西方向（5 晚版）',
      points: [[139.7005, 35.6895], [139.6845, 35.6965], [139.662, 35.7035]],
      labelAt: [139.676, 35.7005],
    },
    {
      id: 'd5',
      label: 'D5 筑地–银座（5 晚版）',
      points: [[139.7707, 35.6654], [139.765, 35.6717], [139.7671, 35.6812]],
      labelAt: [139.7745, 35.6725],
    },
  ],
}
