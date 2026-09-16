import { HK_LAND } from '../stayMapGeoHK'
import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'


export const hongKongStayMap: StayMapData = {
  bounds: { lng: [114.105, 114.215], lat: [22.265, 22.34] },
  season: SEASON.hongKong,
  checkedAt: '2026-09-15',
  land: HK_LAND,
  waterLabels: [{ at: [114.1805, 22.29], text: '维多利亚港' }],
  infra: [
    {
      points: [
        [114.1295, 22.2812], [114.135, 22.284], [114.141, 22.2856], [114.1508, 22.2864],
        [114.158, 22.282], [114.164, 22.2795], [114.173, 22.2773], [114.183, 22.28],
        [114.192, 22.2825], [114.205, 22.285],
      ],
      label: '港岛线',
      labelAt: [114.206, 22.2825],
    },
    {
      points: [
        [114.1722, 22.2975], [114.1717, 22.3048], [114.1705, 22.313],
        [114.1693, 22.319], [114.1683, 22.3248], [114.162, 22.3307], [114.156, 22.337],
      ],
      label: '荃湾线',
      labelAt: [114.1775, 22.3215],
    },
    {
      points: [
        [114.1582, 22.2858], [114.1608, 22.3048], [114.14, 22.325], [114.108, 22.338],
      ],
      label: '机场快线',
      labelAt: [114.116, 22.3185],
    },
    {
      points: [[114.1686, 22.2937], [114.1595, 22.288]],
      label: '天星小轮',
      labelAt: [114.1485, 22.2908],
    },
  ],
  contextLabels: [
    { at: [114.1695, 22.3212], text: '旺角' },
    { at: [114.156, 22.3308], text: '深水埗' },
    { at: [114.1468, 22.3005], text: '西九文化区' },
    { at: [114.1245, 22.2838], text: '坚尼地城' },
    { at: [114.198, 22.2912], text: '北角' },
    { at: [114.1895, 22.3185], text: '九龙城' },
    { at: [114.15, 22.2695], text: '山顶' },
  ],
  zones: [
    {
      areaId: 'sheung-wan-sai-ying-pun',
      label: '上环–西营盘',
      center: [114.1455, 22.2845],
      rx: 0.0115,
      ry: 0.0052,
      labelAt: [114.1445, 22.2832],
      // 价位锚点（示意）：近中环一侧与海味街贵，西营盘–石塘咀内街廉
      heat: [
        { at: [114.154, 22.2855], value: 930 },  // 上环东、近中环
        { at: [114.1475, 22.2858], value: 800 }, // 上环站·海味街
        { at: [114.1405, 22.287], value: 730 },  // 西营盘
        { at: [114.1335, 22.2865], value: 640 }, // 石塘咀方向
        { at: [114.143, 22.2815], value: 680 },  // 半山扶梯口
      ],
    },
    {
      areaId: 'central-admiralty',
      label: '中环–金钟',
      center: [114.1605, 22.2825],
      rx: 0.0078,
      ry: 0.0048,
      labelAt: [114.1655, 22.2838],
      // 价位锚点：IFC/码头一线最贵，半山扶梯上段相对低
      heat: [
        { at: [114.1585, 22.286], value: 1540 }, // IFC·码头
        { at: [114.1575, 22.283], value: 1330 }, // 中环核心
        { at: [114.165, 22.279], value: 1120 },  // 金钟
        { at: [114.1525, 22.281], value: 1040 },  // 苏豪
        { at: [114.156, 22.278], value: 940 },   // 半山扶梯上段
      ],
    },
    {
      areaId: 'wan-chai-causeway',
      label: '湾仔–铜锣湾',
      center: [114.1785, 22.279],
      rx: 0.0125,
      ry: 0.0055,
      labelAt: [114.1815, 22.2795],
      // 价位锚点：铜锣湾核心与海旁会展贵，湾仔内街（太原街一带）廉
      heat: [
        { at: [114.1845, 22.28], value: 1210 },  // 铜锣湾核心
        { at: [114.1765, 22.2825], value: 1090 }, // 会展·海旁
        { at: [114.1735, 22.277], value: 810 },  // 湾仔内街
        { at: [114.1795, 22.2755], value: 900 }, // 跑马地方向
        { at: [114.189, 22.2775], value: 1010 },  // 铜锣湾东
      ],
    },
    {
      areaId: 'yau-ma-tei-jordan-stay',
      label: '油麻地–佐敦',
      center: [114.17, 22.308],
      rx: 0.0105,
      ry: 0.0095,
      labelAt: [114.1735, 22.3085],
      // 价位锚点：佐敦站与尖沙咀一侧高，庙街内街最低
      heat: [
        { at: [114.1705, 22.303], value: 880 },  // 佐敦站·近尖沙咀
        { at: [114.163, 22.3045], value: 790 },  // 西九龙站一侧
        { at: [114.1715, 22.31], value: 630 },   // 油麻地站
        { at: [114.1695, 22.3135], value: 540 }, // 庙街内街
        { at: [114.176, 22.308], value: 700 },   // 加士居道一侧
      ],
    },
    {
      areaId: 'tsim-sha-tsui',
      label: '尖沙咀',
      center: [114.1695, 22.296],
      rx: 0.01,
      ry: 0.0055,
      labelAt: [114.1705, 22.2975],
      // 价位锚点：海旁/星光大道最贵，重庆大厦一带最低
      heat: [
        { at: [114.1695, 22.2935], value: 900 }, // 海旁·星光大道
        { at: [114.1725, 22.2965], value: 750 }, // 金马伦道
        { at: [114.1735, 22.2995], value: 680 }, // 尖沙咀北
        { at: [114.1695, 22.2975], value: 450 }, // 重庆大厦一带
        { at: [114.1635, 22.2985], value: 620 }, // 九龙公园西侧
      ],
    },
  ],
  pins: [
    // 收录餐厅（与「吃」tab 条目同 id）
    { id: 'lin-heung', kind: 'restaurant', label: '莲香楼', at: [114.1508, 22.2857], href: '?tab=eat#lin-heung' },
    { id: 'sing-heung-yuen', kind: 'restaurant', label: '胜香园', at: [114.1538, 22.2842], href: '?tab=eat#sing-heung-yuen' },
    { id: 'luk-yu', kind: 'restaurant', label: '陆羽茶室', at: [114.1563, 22.2838], href: '?tab=eat#luk-yu' },
    { id: 'yung-kee', kind: 'restaurant', label: '镛记', at: [114.1553, 22.2846], href: '?tab=eat#yung-kee' },
    { id: 'lockcha', kind: 'restaurant', label: '乐茶轩', at: [114.1615, 22.2777], href: '?tab=eat#lockcha' },
    { id: 'kams', kind: 'restaurant', label: '甘牌烧鹅', at: [114.1748, 22.278], href: '?tab=eat#kams' },
    { id: 'c-dessert', kind: 'restaurant', label: '聪。C Dessert', at: [114.1717, 22.2773], href: '?tab=eat#c-dessert' },
    { id: 'mido', kind: 'restaurant', label: '美都餐室', at: [114.1706, 22.3096], href: '?tab=eat#mido' },
    { id: 'maks', kind: 'restaurant', label: '麦文记面家', at: [114.1712, 22.3056], href: '?tab=eat#maks' },
    { id: 'australia-dairy', kind: 'restaurant', label: '澳洲牛奶公司', at: [114.1709, 22.3058], href: '?tab=eat#australia-dairy' },
    { id: 'man-kee', kind: 'restaurant', label: '文记车仔面', at: [114.1624, 22.3306], href: '?tab=eat#man-kee' },
    // 收录看点（链到景点页）
    { id: 'tai-kwun', kind: 'attraction', label: '大馆', at: [114.1544, 22.2818], href: '/places/hong-kong/attractions/tai-kwun' },
    { id: 'hong-kong-park', kind: 'attraction', label: '香港公园', at: [114.161, 22.2768], href: '/places/hong-kong/attractions/hong-kong-park' },
    { id: 'm-plus', kind: 'attraction', label: 'M+', at: [114.158, 22.3017], href: '/places/hong-kong/attractions/m-plus' },
    { id: 'hong-kong-palace-museum', kind: 'attraction', label: '香港故宫', at: [114.1555, 22.3022], href: '/places/hong-kong/attractions/hong-kong-palace-museum' },
    // 枢纽：机场快线两站与天星码头
    { id: 'central-hub', kind: 'hub', label: '中环：香港站 · 天星码头', at: [114.1585, 22.2862] },
    { id: 'kowloon-station', kind: 'hub', label: '九龙站 · 机场快线', at: [114.1608, 22.3048] },
    { id: 'tst-pier', kind: 'hub', label: '尖沙咀天星码头', at: [114.1686, 22.2937] },
  ],
  routes: [
    {
      id: 'd2',
      label: 'D2 港岛旧城',
      points: [[114.1508, 22.2864], [114.1525, 22.2838], [114.1544, 22.2818], [114.157, 22.2825], [114.1595, 22.288]],
      labelAt: [114.144, 22.2902],
    },
    {
      id: 'd3',
      label: 'D3 九龙街道',
      points: [[114.1705, 22.313], [114.1706, 22.3096], [114.171, 22.3056], [114.1717, 22.3048], [114.169, 22.294]],
      labelAt: [114.1565, 22.3155],
    },
    {
      id: 'd5',
      label: 'D5 港岛西（5 晚版）',
      points: [[114.141, 22.2856], [114.134, 22.284], [114.1295, 22.2815]],
      labelAt: [114.124, 22.2865],
    },
  ],
}

