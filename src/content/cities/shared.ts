import type { SourceLink } from '../hongKong'

/** 全站统一的选店标准 —— 各城市沿用，不逐城改写。 */
export const EAT_CRITERIA = [
  { title: '慢待契合', body: '能坐住，或本身就是本地日常节奏；不只为排队拍照。' },
  { title: '品类代表性', body: '能说明这一类本地食物怎么吃，而不是孤立的店名。' },
  { title: '可核实', body: '官网、官方旅游指南或近年可靠来源有近况；不确定仍营业则不列店名。' },
  { title: '邻里可走', body: '能挂到一带或交通站，方便住稳一侧的人走到。' },
  { title: '点单可执行', body: '每店只给 1–3 个具体「点什么」。' },
  { title: '场景诚实', body: '长队、贵价正餐、吃完快走，如实写。' },
  { title: '多样性', body: '品类铺开；同品类一般 1–2 家。' },
  { title: '不编造', body: '不写评分、人均、神器说法；每家店留核实日期与来源。' },
]

export const EAT_EXCLUDE =
  '排除：游客陷阱、只有旧文没有近况、纯连锁灌水。每家店都留核实日期与来源——信息可能过期，出发前按来源再查一次。'

/** 通用求助短语，「给工作人员看」一栏全站一致。 */
export const HELP_PHRASES = [
  { zh: '请帮我叫救护车。', en: 'Please call an ambulance for me.' },
  { zh: '我需要报警。', en: 'I need to contact the police.' },
  { zh: '我迷路了，请帮我看看地图上的这个位置。', en: 'I am lost. Please help me find this place on the map.' },
  { zh: '我对以下食物过敏：', en: 'I am allergic to the following:' },
  { zh: '我的护照丢了，需要联系我的使领馆。', en: 'I have lost my passport. I need to contact my embassy or consulate.' },
]

/** 中国外交部全球领保热线 —— 各城市安全页通用。 */
export const consularHotline: SourceLink = {
  label: '外交部全球领保热线 12308',
  url: 'https://www.mfa.gov.cn/',
}

export const consularUse =
  '在海外遇紧急情况且当地报警已处理仍需要帮助时拨打；+86-10-12308 全天候。'
