import type { SourceLink } from './hongKong'

/**
 * 「住」的片区决策内容。与「街区与看点」的散步片区互补：
 * 散步片区回答「这一带怎么走」，这里回答「住哪一带」。
 * 不写具体酒店与实时价格——预算只写定性档位，附核实日期与来源。
 */
export type StayArea = {
  id: string
  title: string
  /** 什么情况选这里。 */
  suitsIf: string
  /** 预算感受：这档预算在这一带的处境，定性表述。 */
  budgetFeel: string
  /** 交通锚点：枢纽站、线路与机场／口岸接驳方向。 */
  transit: string
  /** 吃饭半径：这一带的餐食密度与特点。 */
  food: string
  /** 要接受的缺点。 */
  tradeoff: string
  /** 什么情况别选这里。 */
  skipIf?: string
  /** 常见中档双人间间夜区间（人民币，定性档位的数值化），供片区地图着色与预算过滤。 */
  band?: { low: number; high: number }
  /** 对应「街区与看点」里的散步片区 id，渲染为跳转链接。 */
  neighborhoodIds?: string[]
  /** 官方或订房相关的参考链接。 */
  sources?: SourceLink[]
}

export type StayGuide = {
  /** 这座城市选房的关键语境：计价方式、房型特点、常见误区。 */
  intro: string
  /** 以 ¥700–800/晚为上限在这座城的处境 + 旺季提醒，定性描述。 */
  budgetNote: string
  /** 选房锚点：先定下来的规则（选岸／选圈／选枢纽）。 */
  anchors: { title: string; body: string }[]
  areas: StayArea[]
  checkedAt: string
}
