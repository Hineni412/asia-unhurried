import { SEASON } from '../staySeason'
import type { StayMapData } from '../stayMap'

// 台北：车站–西门（枢纽）／中山–永康（舒服）／大稻埕（老街）。价位锚点为示意。
export const taipeiStayMap: StayMapData = {
  bounds: { lng: [121.494, 121.585], lat: [25.018, 25.066] },
  season: SEASON.taiwan,
  waterLabels: [{ at: [121.499, 25.052], text: '淡水河' }],
  contextLabels: [
    { at: [121.5215, 25.0342], text: '中正纪念堂' },
    { at: [121.5770, 25.0505], text: '饶河街夜市' },
    { at: [121.5145, 25.0570], text: '宁夏夜市' },
    { at: [121.5515, 25.0630], text: '民生社区' },
  ],
  infra: [
    { label: '淡水信义线（红）', points: [[121.5170, 25.0478], [121.5230, 25.0527], [121.5275, 25.0415], [121.5290, 25.0335]], labelAt: [121.5310, 25.0430] },
    { label: '板南线（蓝）', points: [[121.5080, 25.0420], [121.5170, 25.0478], [121.5245, 25.0435], [121.5325, 25.0425], [121.5515, 25.0520]], labelAt: [121.5390, 25.0450] },
    { label: '机场捷运', points: [[121.5170, 25.0478], [121.5090, 25.0500], [121.5010, 25.0550]], labelAt: [121.5040, 25.0490] },
  ],
  zones: [
    {
      areaId: 'ximen-station-stay',
      label: '台北车站—西门',
      ring: [[121.5040, 25.0385], [121.5045, 25.0420], [121.5075, 25.0455], [121.5115, 25.0485], [121.5165, 25.0500], [121.5205, 25.0485], [121.5215, 25.0445], [121.5190, 25.0405], [121.5150, 25.0375], [121.5100, 25.0365], [121.5065, 25.0370]],
      labelAt: [121.5125, 25.0510],
      heat: [
        { at: [121.5170, 25.0478], value: 760 },
        { at: [121.5080, 25.0420], value: 620 },
        { at: [121.5110, 25.0445], value: 520 },
        { at: [121.5195, 25.0450], value: 830 },
        { at: [121.5060, 25.0400], value: 470 },
      ],
    },
    {
      areaId: 'zhongshan-yongkang-stay',
      label: '中山—永康街',
      ring: [[121.5205, 25.0300], [121.5215, 25.0340], [121.5240, 25.0390], [121.5265, 25.0450], [121.5295, 25.0520], [121.5330, 25.0535], [121.5360, 25.0510], [121.5355, 25.0440], [121.5335, 25.0380], [121.5310, 25.0330], [121.5260, 25.0300]],
      labelAt: [121.5345, 25.0555],
      heat: [
        { at: [121.5230, 25.0527], value: 970 },
        { at: [121.5300, 25.0330], value: 1160 },
        { at: [121.5290, 25.0430], value: 1100 },
        { at: [121.5335, 25.0480], value: 910 },
        { at: [121.5270, 25.0360], value: 1230 },
      ],
    },
    {
      areaId: 'dadaocheng-stay',
      label: '大稻埕—北门口',
      ring: [[121.5045, 25.0510], [121.5055, 25.0545], [121.5080, 25.0575], [121.5115, 25.0585], [121.5145, 25.0565], [121.5150, 25.0530], [121.5125, 25.0500], [121.5090, 25.0488], [121.5060, 25.0492]],
      labelAt: [121.5095, 25.0600],
      heat: [
        { at: [121.5095, 25.0560], value: 650 },
        { at: [121.5120, 25.0525], value: 820 },
        { at: [121.5065, 25.0540], value: 530 },
        { at: [121.5135, 25.0550], value: 730 },
      ],
    },
  ],
  pins: [
    { id: 'tp-main-st', kind: 'hub', at: [121.5170, 25.0478], label: '台北车站（机捷）' },
    { id: 'tp-songshan', kind: 'hub', at: [121.5780, 25.0500], label: '松山站' },
    { id: 'tp-fuhang', kind: 'restaurant', at: [121.5245, 25.0435], label: '阜杭豆浆', href: '?tab=eat#fuhang' },
    { id: 'tp-jianhong', kind: 'restaurant', at: [121.5105, 25.0455], label: '建宏牛肉面', href: '?tab=eat#jianhong' },
    { id: 'tp-yongkang', kind: 'restaurant', at: [121.5298, 25.0330], label: '永康牛肉面', href: '?tab=eat#yongkang-beef' },
    { id: 'tp-wangtea', kind: 'restaurant', at: [121.5105, 25.0555], label: '有记名茶', href: '?tab=eat#wangtea' },
    { id: 'tp-jinfeng', kind: 'restaurant', at: [121.5200, 25.0360], label: '金峰鲁肉饭', href: '?tab=eat#jin-feng' },
    { id: 'tp-dtf', kind: 'restaurant', at: [121.5288, 25.0355], label: '鼎泰丰 信义本店', href: '?tab=eat#din-tai-fung' },
    { id: 'tp-fuzhou', kind: 'restaurant', at: [121.5775, 25.0505], label: '福州世祖胡椒饼', href: '?tab=eat#fuzhou-pepper' },
    { id: 'tp-liuyuzi', kind: 'restaurant', at: [121.5148, 25.0570], label: '刘芋仔（宁夏）', href: '?tab=eat#liuyuzi' },
    { id: 'tp-icemonster', kind: 'restaurant', at: [121.5295, 25.0320], label: 'Ice Monster', href: '?tab=eat#ice-monster' },
    { id: 'tp-shuanglian', kind: 'restaurant', at: [121.5215, 25.0580], label: '双连圆仔汤', href: '?tab=eat#shuanglian-tangyuan' },
    { id: 'tp-wistaria', kind: 'restaurant', at: [121.5320, 25.0250], label: '紫藤庐', href: '?tab=eat#wistaria' },
  ],
  routes: [
    {
      id: 'd2-dadaocheng',
      label: 'D2 大稻埕—北门',
      points: [[121.5170, 25.0478], [121.5115, 25.0500], [121.5095, 25.0560], [121.5145, 25.0570]],
      labelAt: [121.5065, 25.0510],
    },
    {
      id: 'd3-yongkang',
      label: 'D3 永康—中正',
      points: [[121.5170, 25.0478], [121.5200, 25.0360], [121.5298, 25.0330], [121.5215, 25.0346]],
      labelAt: [121.5235, 25.0290],
    },
    {
      id: 'd4-raohe',
      label: 'D4 松山—饶河（5 晚版）',
      points: [[121.5515, 25.0520], [121.5650, 25.0510], [121.5775, 25.0505]],
      labelAt: [121.5620, 25.0540],
    },
  ],
  checkedAt: '2025-06',
}
