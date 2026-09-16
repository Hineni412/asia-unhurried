import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

/**
 * 清迈住区示意地图。无轨道交通：骨架为屏河与上山／出城方向示意线。
 * 素贴山、大象庇护所均在图幅外，动线只画方向。
 */
export const chiangMaiStayMap: StayMapData = {
  bounds: { lng: [98.955, 99.015], lat: [18.768, 18.812] },
  season: SEASON.thailandChiangMai,
  checkedAt: '2026-09-15',
  waterLabels: [{ at: [99.0095, 18.79], text: '屏河' }],
  infra: [
    // 古城 → 素贴山方向（双条／Grab 上山）
    {
      points: [[98.982, 18.7925], [98.968, 18.8], [98.956, 18.806]],
      label: '往素贴山',
      labelAt: [98.9605, 18.809],
    },
    // 古城 → 河东夜市带
    {
      points: [[98.9935, 18.788], [98.9995, 18.7845], [99.0045, 18.782]],
      label: '往夜市带',
      labelAt: [99.002, 18.7865],
    },
  ],
  contextLabels: [
    { at: [98.9585, 18.7745], text: '机场 CNX' },
    { at: [98.9625, 18.8065], text: '素贴山（双龙寺）' },
    { at: [98.986, 18.7988], text: '昌普门（北门）' },
  ],
  zones: [
    {
      areaId: 'old-city-stay',
      label: '古城',
      center: [98.9895, 18.7902],
      rx: 0.0078,
      ry: 0.006,
      labelAt: [98.9898, 18.7908],
      // 价位锚点：塔佩门与主街旁高，深巷民宿低
      heat: [
        { at: [98.9955, 18.7888], value: 500 }, // 近塔佩门
        { at: [98.9888, 18.7902], value: 450 }, // 周日夜市轴
        { at: [98.9825, 18.7888], value: 390 }, // 帕邢寺一带
        { at: [98.9865, 18.7955], value: 310 }, // 城北内巷
        { at: [98.9925, 18.785], value: 270 },  // 城南深巷
      ],
    },
    {
      areaId: 'riverside-night-stay',
      label: '河东／夜市带',
      center: [99.0015, 18.7835],
      rx: 0.0055,
      ry: 0.0052,
      labelAt: [99.002, 18.7842],
      // 价位锚点：河畔景高，夜市口次之，背街低
      heat: [
        { at: [99.0045, 18.7868], value: 1030 }, // 河畔景
        { at: [99.0005, 18.7828], value: 800 }, // 长康路夜市口
        { at: [98.9985, 18.7855], value: 570 }, // 背街
      ],
    },
    {
      areaId: 'nimman-stay',
      label: '尼曼路',
      center: [98.9685, 18.7992],
      rx: 0.0058,
      ry: 0.0048,
      labelAt: [98.9688, 18.7998],
      // 价位锚点：主路旁新公寓高，Santitham 北侧低
      heat: [
        { at: [98.9678, 18.7975], value: 560 }, // 尼曼巷内
        { at: [98.9708, 18.7965], value: 660 }, // 主路旁
        { at: [98.9698, 18.8025], value: 430 }, // 巷内公寓
        { at: [98.9715, 18.8058], value: 310 }, // Santitham 北
      ],
    },
  ],
  pins: [
    // 收录餐厅（与「吃」tab 条目同 id）
    { id: 'khao-soi-khun-yai', kind: 'restaurant', label: 'Khao Soi Khun Yai', at: [98.9865, 18.7972], href: '?tab=eat#khao-soi-khun-yai' },
    { id: 'khao-soi-mae-sai', kind: 'restaurant', label: 'Khao Soi Mae Sai', at: [98.9828, 18.7895], href: '?tab=eat#khao-soi-mae-sai' },
    { id: 'huen-phen', kind: 'restaurant', label: 'Huen Phen', at: [98.9888, 18.788], href: '?tab=eat#huen-phen' },
    { id: 'tong-tem-toh', kind: 'restaurant', label: 'Tong Tem Toh', at: [98.9678, 18.7987], href: '?tab=eat#tong-tem-toh' },
    { id: 'sp-chicken', kind: 'restaurant', label: 'SP Chicken', at: [98.9822, 18.7885], href: '?tab=eat#sp-chicken' },
    { id: 'cowboy-hat', kind: 'restaurant', label: '凤飞飞猪脚饭', at: [98.986, 18.7985], href: '?tab=eat#cowboy-hat' },
    { id: 'ristr8to', kind: 'restaurant', label: 'Ristr8to', at: [98.9668, 18.8], href: '?tab=eat#ristr8to' },
    { id: 'akha-ama', kind: 'restaurant', label: 'Akha Ama Coffee', at: [98.9715, 18.8065], href: '?tab=eat#akha-ama' },
    { id: 'asia-scenic', kind: 'restaurant', label: 'Asia Scenic 厨艺学校', at: [98.9898, 18.7908], href: '?tab=eat#asia-scenic' },
    // 枢纽
    { id: 'thapae-hub', kind: 'hub', label: '塔佩门（古城东门）', at: [98.998, 18.7879] },
    { id: 'cnx-hub', kind: 'hub', label: '机场 CNX · Grab 15 分钟', at: [98.9625, 18.772] },
  ],
  routes: [
    {
      id: 'd2',
      label: 'D2 古城一天',
      points: [[98.998, 18.7879], [98.9925, 18.7885], [98.9867, 18.787], [98.9818, 18.7885], [98.9855, 18.7945]],
      labelAt: [98.9955, 18.7925],
    },
    {
      id: 'd3',
      label: 'D3 素贴山方向',
      points: [[98.982, 18.7925], [98.9725, 18.7985], [98.9615, 18.8045]],
      labelAt: [98.9655, 18.8025],
    },
    {
      id: 'd5',
      label: 'D5 古城补漏＋夜市（5 晚版）',
      points: [[98.9905, 18.7905], [98.996, 18.787], [98.9995, 18.7838]],
      labelAt: [98.9935, 18.7925],
    },
  ],
}
