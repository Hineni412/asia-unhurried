import { attractionPhotos } from './attractionPhotos'
import { cityAttractions } from './cities/attractions'
import { cityAttractionPhotos } from './cities/photoData'
import { CONTENT_CITIES } from './directory'
import type { SourceLink } from './hongKong'

export type AttractionPhoto = { src: string; alt: string; caption: string; author: string; license: string; licenseUrl: string; source: string }
export const attractionTypes = [
  { id: 'all', label: '全部看点' }, { id: 'art', label: '展馆与艺术' },
  { id: 'heritage', label: '历史建筑' }, { id: 'waterfront', label: '街巷与滨水' },
  { id: 'landmark', label: '城市地标' }, { id: 'nature', label: '公园与自然' },
] as const
export type Attraction = {
  id: string
  city: string
  name: string; nameLocal: string; type: Exclude<typeof attractionTypes[number]['id'], 'all'>
  area: string; areaId?: string; intro: string; duration: string
  booking: { status: 'partial' | 'recommended' | 'walk-in' | 'check'; label: string; summary: string; rows: { item: string; ticket: string; reservation: string }[]; steps: { title: string; body: string }[]; fallback: string; link: SourceLink }
  price: string; hours: string; address: string
  highlights: { title: string; body: string; photo: number }[]
  walk: { title: string; body: string }[]
  arrival: { title: string; body: string }[]
  tips: { title: string; body: string }[]
  sources: SourceLink[]; restaurantIds: string[]; related: string[]
  notice?: { text: string; source: SourceLink }
  bookingImage?: { src: string; caption: string; source: SourceLink }
}
export const attractionCheckedAt = '2026-09-14'
const CITY_BASE_OVERRIDES: Record<string, string> = { 'hong-kong': '/places/hong-kong', 'penang': '/places/malaysia/penang' }
export const cityBase = (city: string) =>
  CITY_BASE_OVERRIDES[city] ?? CONTENT_CITIES.find((c) => c.slug === city)?.href ?? `/places/${city}`
export const attractionPath = (place: Attraction) => `${cityBase(place.city)}/attractions/${place.id}`
const taiKwun = { label: '大馆官网与节目安排', url: 'https://www.taikwun.hk/' }
const mPlus = { label: 'M+ 官方参观指南', url: 'https://www.mplus.org.hk/tc/plan-your-visit/' }
const palace = { label: '香港故宫官方参观指南', url: 'https://www.hkpm.org.hk/en/visit/plan-your-visit' }
const palaceTickets = { label: '香港故宫官方门票', url: 'https://www.hkpm.org.hk/en/visit/ticket' }
const park = { label: '康文署香港公园参观指南', url: 'https://hkp.lcsd.gov.hk/sc/visit' }
const mansion = { label: '侨生博物馆官网', url: 'https://www.pinangperanakanmansion.com.my/' }
const khoo = { label: '邱公司官方参观与联系页', url: 'https://www.khookongsi.com.my/contact-us/' }
const penangMap = { label: '槟城旅游局街道地图', url: 'https://mypenang.gov.my/uploads/downloads/PTF-ENG2026-1-.pdf' }
const hill = { label: '升旗山官方票价与开放时间', url: 'https://www.penanghill.gov.my/index.php/en/tickets' }

const baseAttractions: Attraction[] = [
  {
    id: 'tai-kwun', city: 'hong-kong', name: '大馆', nameLocal: 'Tai Kwun', type: 'heritage', area: '中环与上环', areaId: 'central-sheung-wan',
    intro: '在旧警署、监狱与当代艺术建筑之间，给中环的坡道散步留一段院子里的时间。', duration: '1.5–2 小时', price: '场地免费 · 个别节目另计', hours: '场地每日 08:00–23:00；展览另有时段', address: '大馆，香港中环荷李活道 10 号 / 10 Hollywood Road, Central, Hong Kong',
    booking: { status: 'partial', label: '部分项目需预约', summary: '先区分场地散步与展览、演出、导赏。场地免费开放不代表每个节目都能直接入场。', link: taiKwun,
      rows: [{ item: '场地与庭院', ticket: '免费', reservation: '按当日场地开放安排入内' }, { item: '展览、演出与导赏', ticket: '按节目页', reservation: '看指定场次是否需登记或购票' }],
      steps: [{ title: '先选要看的内容', body: '打开官网的 Exhibitions & Programmes，按旅行日期查看。只想看旧建筑和庭院，也先查看当天公告。' }, { title: '进入具体节目页', body: '核对日期、时间、场地，以及 Free Admission、Registration 或 Buy Now 的说明。跟随该页的官方办理入口。' }, { title: '保存场次与入场凭证', body: '需登记或买票的节目，确认成功后保存邮件或二维码；把展馆位置与集合地点一并记下。' }], fallback: '心仪节目满额时，可保留场地散步，另选当天开放的展览；不要把未确认的节目排成必到项。' },
    highlights: [{ title: '旧建筑围出的庭院', body: '警署、营房和旧监狱围出不同尺度的空地。先在院子里看门窗、立面与高楼的关系，再挑一栋入内。', photo: 1 }, { title: '新旧建筑并置', body: '赛马会艺方的金属表面与旧砖墙形成鲜明对照。这里既有历史建筑，也容纳持续更换的艺术节目。', photo: 2 }, { title: '监狱空间与城市记忆', body: '在当日开放的文物展览里了解建筑原来的用途。历史照片用于帮助识别空间，不代表该展室当前一定开放。', photo: 4 }],
    walk: [{ title: '从荷李活道一侧进入', body: '先看现场地图和开放区域，在检阅广场辨认建筑，再决定今天以文物还是艺术为主。' }, { title: '庭院之后只挑一个重点', body: '有预约就围绕场次安排；没有预约可依当日开放情况参观文物展览，再往监狱操场一带走。' }, { title: '留时间坐下，再回中环', body: '本站建议预留一次休息。之后接中环用餐或返回车站，不必再原路爬回上环。' }],
    arrival: [{ title: '港铁加步行', body: '以中环站为起点，地图搜索 Tai Kwun，再到荷李活道入口。中环有坡道与楼梯，带行李或不便步行时改用出租车到正式入口。' }, { title: '入口与集合地点', body: '到场先看 Map & Directory；导赏可能有独立集合点，司机落客点也不一定就是节目入口。' }],
    tips: [{ title: '展馆与场地分开看时间', body: '场地开放至晚间，展览可能更早结束或逢周一关闭。按节目页核对，不以庭院时间推算展览开放。' }, { title: '拍照与休息', body: '庭院适合观察建筑。展室拍摄、行李和无障碍路线按现场指引；热天在馆内外之间安排休息。' }],
    sources: [taiKwun, { label: '大馆官方最新节目与场地开放说明', url: 'https://www.taikwun.hk/en/taikwun/press/press_release' }], restaurantIds: ['luk-yu', 'yung-kee'], related: ['hong-kong-park'],
  },
  {
    id: 'm-plus', city: 'hong-kong', name: 'M+ 博物馆', nameLocal: 'M+', type: 'art', area: '西九文化区',
    intro: '从设计、影像与视觉艺术看当代生活，再把时间留给天台花园和西九海旁。', duration: '2–3 小时', price: '正价门票 HK$190 · 部分空间免费', hours: '周二至日 10:00–18:00；周五至 22:00；周一休馆', address: '香港九龙西九文化区博物馆道 38 号 M+ / 38 Museum Drive, West Kowloon, Hong Kong',
    booking: { status: 'partial', label: '展厅购票 · 活动另约', summary: '公共空间与展厅分开安排。想看具体展览，先确认门票包含范围；私人导赏和活动另看预约条件。', link: mPlus,
      rows: [{ item: '指定公共空间与天台花园', ticket: '免费，持票活动除外', reservation: '以当天开放区域为准' }, { item: '展厅参观', ticket: '正价 HK$190；优惠资格见官网', reservation: '建议提前购票，核对有效条件' }, { item: '私人导赏与活动', ticket: '按项目', reservation: '另查场次与预约方式' }],
      steps: [{ title: '先看展览，再选票', body: '在官网查看想看的展览是否仍在展期内，再从参观指南进入“购买门票”。不要只凭展览旧照片判断展出内容。' }, { title: '核对人数、票种与日期', body: '按官方页面选择；使用优惠票时确认自己符合条件并准备证明。付款前核对票价及入场范围。' }, { title: '留好凭证和听导赏的工具', body: '保存成功订单或电子票。想听免费语音导赏可带自己的手机与耳机，入馆后按展签上的编号收听。' }], fallback: '不进收费展厅时，可先查看当天免费空间的开放安排；想参加导赏则询问服务柜台当天可参加的场次。' },
    highlights: [{ title: '从日常物件进入视觉文化', body: '设计、建筑、影像与艺术可以从不同入口观看。先选一个感兴趣的主题，比按楼层逐间走完更容易留下印象。', photo: 1 }, { title: '建筑里的路径', body: '公共空间、楼梯与扶梯本身也值得留意。照片展示建筑在拍摄时的样貌，具体展品与展厅安排以当前展期为准。', photo: 0 }, { title: '天台花园与海旁', body: '把看展后的休息留给室外。景观与天气有关，强风或暴雨时按馆方安排调整。', photo: 2 }],
    walk: [{ title: '先确定两个观看重点', body: '到服务台拿当天楼层图，按门票范围选两处重点；不要把所有展厅都安排成任务。' }, { title: '中间留一次休息', body: '本站建议看完一个主题就休息，再继续第二个；摄影与饮食按展室和公共区域的现场标识。' }, { title: '最后才安排室外', body: '天气合适再去天台或海旁。与香港故宫在同一文化区，也不意味着两馆都适合塞进同一个下午。' }],
    arrival: [{ title: '九龙站到馆', body: '官方列出九龙站 C1 / D1 经圆方及艺术广场天桥前往，或 E4 / E5 沿雅翔道步行。出站后看现场路线，不只跟随地图的直线距离。' }, { title: '出租车落客', body: '使用 M+ 的完整地址；官方指定 B1 层入口处有上落客区。把博物馆名称给司机，避免只填写“西九”。' }],
    tips: [{ title: '最后入场与休馆', body: '通常闭馆前 30 分钟停止入场，周一休馆；公休日或特殊天气安排查看官网。' }, { title: '行李与辅助设施', body: '大型包袋需按馆方规定寄存。馆内可询问轮椅与婴儿车服务，借用先到先得；自备耳机可听语音导赏。' }],
    sources: [mPlus, { label: 'M+ 展览', url: 'https://www.mplus.org.hk/tc/exhibitions/' }], restaurantIds: [], related: ['hong-kong-palace-museum'],
  },
  {
    id: 'hong-kong-palace-museum', city: 'hong-kong', name: '香港故宫文化博物馆', nameLocal: 'Hong Kong Palace Museum', type: 'art', area: '西九文化区',
    intro: '在面向海港的展馆里看中国艺术与文化，围绕感兴趣的展厅安排半天。', duration: '2–3 小时', price: '普通正价标准票 HK$70 起', hours: '周一、三、四、日 10:00–18:00；周五、六及公众假期至 20:00', address: '香港九龙西九文化区博物馆道 8 号 / 8 Museum Drive, West Kowloon, Hong Kong',
    booking: { status: 'recommended', label: '建议提前订票', summary: '普通门票与特别展览覆盖范围不同。标准票指定日期、时间，弹性票按指定月份使用，购买前看清区别。', link: palaceTickets,
      rows: [{ item: '普通标准票', ticket: '成人 HK$70；优惠 HK$35', reservation: '指定日期、时间；展厅 1–7' }, { item: '普通弹性票', ticket: '成人 HK$90；优惠 HK$45', reservation: '指定月份单次入场' }, { item: '特别展览', ticket: '按展览与组合票', reservation: '先确认票内是否包含' }],
      steps: [{ title: '确认要看的展览', body: '在官网 Tickets 页比较普通门票和特别展览，查看展期及包含的展厅。' }, { title: '选择票种和参观时间', body: '从官网“Book your visit”进入官方票务伙伴。标准票核对日期、时段，弹性票核对月份；填写真实人数。' }, { title: '核对订单，再保存电子票', body: '付款前检查票种及优惠条件。入场准备电子或实体票；优惠票同时准备资格证明。' }], fallback: '馆方提供数量有限的当日现场票，但不能保证有余票。未买到所需展览时，调整日期或确认是否愿意只看其他展厅。' },
    highlights: [{ title: '围绕主题看文物', body: '把器物、书画或宫廷生活选作一个主线。展品会轮换，以官网当前展览介绍安排重点。', photo: 1 }, { title: '建筑与海港', body: '看展之外留意建筑的层次、立面与西九的海港环境。从外部看建筑也能理解它与周边公共空间的关系。', photo: 0 }, { title: '留意展厅之间的停顿', body: '不必连续读完每一块展签。先看最感兴趣的展厅，中间坐下休息，再决定是否继续。', photo: 2 }],
    walk: [{ title: '进馆先核对楼层', body: '以当天楼层图与门票范围为准，先前往最想看的展厅。' }, { title: '分两段参观', body: '本站建议每次集中看一至两个主题；特别展览另留排队与观看时间。' }, { title: '海旁收尾', body: '体力和天气合适时沿文化区走一小段，或直接返程。与 M+ 同游时给两馆各留独立时段。' }],
    arrival: [{ title: '先选一条官方到馆路线', body: '官网参观指南列出公交、港铁及步行路线。目的地填写博物馆道 8 号，不要与 M+ 的 38 号混淆。' }, { title: '按游客主入口进馆', body: '到馆后认清主入口、安检与售票区。官网门票柜台通常在闭馆前一小时停止服务。' }],
    tips: [{ title: '周二通常休馆', body: '周二（公众假期除外）及农历年初一、初二休馆。临时开放与恶劣天气安排以馆方公告为准。' }, { title: '轻装与家庭参观', body: '行李、拍摄和无障碍服务查看官方参观须知；12 岁以下儿童须由成人陪同。' }],
    notice: { text: '截至 2026-09-12，官网公告展厅 2、5、9 暂时关闭，恢复时间另行通知。普通票的覆盖范围不代表所有展厅当天都开放，购票前先查公告。', source: { label: '馆方临时关闭公告', url: 'https://www.hkpm.org.hk/en/announcement/2026-07-14/temporary-closure-of-galleries-updates' } },
    bookingImage: { src: '/images/guides/hkpm-general-ticket.png', caption: '普通票入口：找到 General Admission Ticket。Detail 查看票种差别，Book your visit 选择官方票务伙伴；特别展览在另外的票种中选择。', source: palaceTickets },
    sources: [palaceTickets, palace], restaurantIds: [], related: ['m-plus'],
  },
  {
    id: 'hong-kong-park', city: 'hong-kong', name: '香港公园', nameLocal: 'Hong Kong Park', type: 'nature', area: '金钟',
    intro: '在高楼之间看湖水、树冠与温室。适合把城市散步放慢，也能搭配一顿茶。', duration: '1–2 小时', price: '园区免费 · 运动场馆另计', hours: '园区 06:00–23:00；观鸟园、温室 09:00–17:00', address: '香港中环红棉路 19 号 / 19 Cotton Tree Drive, Central, Hong Kong',
    booking: { status: 'walk-in', label: '园区可直接到访', summary: '一般园区散步不需预订门票；体育设施、团体活动或导赏按各自安排办理。观鸟园与温室比园区早关门。', link: park,
      rows: [{ item: '园区、观鸟园与温室', ticket: '免费', reservation: '普通参观按开放时间到访' }, { item: '体育设施与团体活动', ticket: '按项目', reservation: '单独查看登记与租用安排' }],
      steps: [{ title: '先决定是否看观鸟园或温室', body: '想进这两处就按 09:00–17:00 安排；晚到时以湖边与户外散步为主。' }, { title: '查当天天气和公园通知', body: '从官方参观页查看开放与特别安排，再确认当天适合走的区域。' }, { title: '保存入口位置', body: '地图保存红棉路 19 号，进园后查看园图，按体力选择有坡或较平缓的一段。' }], fallback: '遇设施关闭或天气不适合户外时，缩短散步，改为已确认开放的室内场馆；不把跨园爬坡作为必走路线。' },
    highlights: [{ title: '湖水与高楼之间', body: '湖边和水景让城市的密度暂时退后。先走一段平缓步道，找一个可以坐下的地方。', photo: 0 }, { title: '树冠中的观鸟步道', body: '尤德观鸟园的高架步道提供不同于地面的观察角度。以现场开放和观鸟规则为准。', photo: 3 }, { title: '温室与植物', body: '温室把植物布置在不同的展示空间里。比起赶路，留时间看看叶形和栽植细节。', photo: 4 }],
    walk: [{ title: '从入口先到湖边', body: '按园内标识走向人工湖和水景，先熟悉公园高差。' }, { title: '在温室与观鸟园间做选择', body: '本站建议时间少时先选一处，喜欢植物或鸟类再延长；不要临近 17:00 才开始找入口。' }, { title: '用喝茶结束散步', body: '愿意坐下吃一顿时，可查看本站乐茶轩条目的地址与点单建议，再决定是否前往。' }],
    arrival: [{ title: '港铁与步行入口', body: '官方列出金钟站 B / C1，以及中环站 J2 / K 等出口。按所在位置选择，出站后查看公园指引。' }, { title: '车辆到红棉路一带', body: '公园内没有公众停车位；打车使用完整地址。需要无障碍路线时先向管理处查询适合入口。' }],
    tips: [{ title: '园区开门不等于设施开门', body: '观鸟园和温室每天的参观时段较短。茶具文物馆和视觉艺术中心另有开放安排。' }, { title: '雨天与高差', body: '园内有台阶与坡道。恶劣天气会影响开放；慢走建议只选其中一段，疲累时就近返回。' }],
    sources: [park], restaurantIds: ['lockcha'], related: ['tai-kwun'],
  },
  {
    id: 'pinang-peranakan-mansion', city: 'penang', name: '槟城侨生博物馆', nameLocal: 'Pinang Peranakan Mansion', type: 'heritage', area: '教堂街与小印度', areaId: 'kapitan-keling',
    intro: '从绿色宅邸、木雕和生活陈设，走近槟城峇峇娘惹文化。适合配合讲解慢慢看。', duration: '1–1.5 小时', price: '成人 RM30 · 6–12 岁 RM18', hours: '每日 09:30–17:30（官网公布）', address: '29 Church Street (Lebuh Gereja), 10200 George Town, Penang, Malaysia',
    booking: { status: 'check', label: '导览与预约先确认', summary: '官网公布票价和免费导览，但没有清楚列出散客强制预约或实时名额。想听中文讲解，出发前向馆方确认场次。', link: mansion,
      rows: [{ item: '普通参观', ticket: '成人 RM30；6–12 岁 RM18；未满 6 岁免费', reservation: '散客预约要求未明确，先向馆方确认' }, { item: '导览', ticket: '官网写有免费导览', reservation: '语言、开始时间及是否需预约另确认' }],
      steps: [{ title: '核对到访日期和人数', body: '官网 Visiting Hours 与 Admission 列有开放时间和票价。假期或多人同行时先联系馆方。' }, { title: '把最影响行程的问题一次问清', body: '询问所选日期是否接待散客、是否要预约、普通话导览时间、最晚入场时间和接受的付款方式。' }, { title: '保存回复，按实际入口到馆', body: '官网列出的电话为 +60 18-9865111 / +60 4-2642929。保留确认信息，地图使用 29 Church Street。' }], fallback: '未确认到导览时，不要承诺自己一定能赶上某一场。可先按馆方当天安排参观，或把周边街道散步作为替代。' },
    highlights: [{ title: '绿色宅邸与回廊', body: '立面、铸铁构件与回廊是辨认这栋宅邸的线索。先看建筑空间，再进入室内细节。', photo: 0 }, { title: '不同工艺放在同一屋檐下', body: '官网介绍了中式木雕、英式地砖与苏格兰铁艺的组合。把注意力放在门窗、楼梯和地面材料，会比只拍全景更有趣。', photo: 1 }, { title: '透过陈设理解生活', body: '家具与装饰呈现富裕家庭的生活方式。已有照片是历史留影，当前展陈与拍摄许可请听从馆方。', photo: 3 }],
    walk: [{ title: '先问导览时间', body: '到馆后先向工作人员询问当天讲解安排，再决定自由参观还是等候导览。' }, { title: '先空间，后细节', body: '本站建议先看庭院与回廊，再集中看两三类陈设；跟随馆内参观方向，不进入工作人员区域。' }, { title: '接教堂街附近的一段', body: '出来后留时间在附近休息。若安排娘惹菜，先查看餐厅订位条件，不把参观结束时间卡得太紧。' }],
    arrival: [{ title: '识别完整英文名称', body: '给司机看 Pinang Peranakan Mansion 和 Church Street 地址，避免只搜索“娘惹博物馆”而误选别处。' }, { title: '老城步行或叫车', body: '位于乔治市教堂街。可按酒店位置步行或打车；到主路可停靠处下车，再按门牌找入口。' }],
    tips: [{ title: '先询问拍摄许可', body: '馆方官网目前写明馆内不允许摄影、摄像，商业使用另需书面同意。请按工作人员当日指引，不把其他游客的照片当成拍摄许可。' }, { title: '轻装参观', body: '官网要求不要触摸展品，馆内禁止食物和饮料。需要无台阶路线或携婴儿车时，提前询问可到达范围。' }],
    sources: [mansion, { label: '马来西亚旅游局景点介绍', url: 'https://www.malaysia.travel/explore/pinang-peranakan-mansion' }], restaurantIds: ['auntie-gaik-lean'], related: ['khoo-kongsi', 'chew-jetty'],
  },
  {
    id: 'khoo-kongsi', city: 'penang', name: '龙山堂邱公司', nameLocal: 'Leong San Tong Khoo Kongsi', type: 'heritage', area: 'Armenian 与 Acheh', areaId: 'armenian-acheh',
    intro: '走进街巷后的宗祠院落，近看屋脊、石雕与木作，也了解宗族在老城中的位置。', duration: '45–75 分钟', price: '普通成人 RM15（官网公布）', hours: '每日 09:00–17:00；除夕及年初一休馆', address: '18 Cannon Square, 10200 George Town, Penang, Malaysia',
    booking: { status: 'check', label: '散客预约要求待确认', summary: '官方联系页提供参观时间和门票价格，未提供清楚的散客预约流程。节庆或团队参观先联系确认，不把办公时间当作参观时间。', link: khoo,
      rows: [{ item: '宗祠与博物馆', ticket: '普通成人 RM15；优惠资格见官网', reservation: '散客是否需提前安排，向管理方确认' }, { item: '节庆与特别开放', ticket: '按当次安排', reservation: '另查公告，不以夜景照片推定开放' }],
      steps: [{ title: '打开官方联系页', body: '查看 Clan House & Museum Opening Hours 和 Entry fees；办公室的周末时间不等于宗祠参观时间。' }, { title: '确认所选日期可参观', body: '特别留意农历除夕、年初一或活动安排。需要团体、讲解或特别协助时，可致电 +60 4-2614609。' }, { title: '按门牌找售票入口', body: '保存 Cannon Square 18 号，按现场参观入口购票或出示已确认凭证；优惠票准备相应证明。' }], fallback: '遇临时活动或不能入内时，改走周边公共街道，不擅自进入宗祠的非开放区域。' },
    highlights: [{ title: '院落中的宗祠', body: '从街巷进入院落后，先退后看建筑的整体比例。广场与正殿的关系比一张近距离照片更完整。', photo: 0 }, { title: '屋脊、石柱与门墙', body: '抬头看屋顶装饰，再近看柱础和墙面细节。围绕几处工艺慢看，不必逐一辨认所有图案。', photo: 4 }, { title: '仍有社会意义的宗族空间', body: '这里是宗族组织的场所，也向游客展示相关历史。遇礼仪或活动时，按照工作人员的参观安排。', photo: 5 }],
    walk: [{ title: '先认清入口与参观范围', body: '从 Cannon Square 一带按现场指引入内，了解当天哪些空间可参观。' }, { title: '院落到正殿，再看介绍', body: '本站建议依次看整体建筑、近处工艺与历史介绍。阴雨天和台阶处放慢脚步。' }, { title: '回到店屋街散步', body: '结束后继续 Armenian / Acheh 一带，或按已选好的餐厅时段吃饭。' }],
    arrival: [{ title: '老城街巷内寻找', body: '地图使用 Leong San Tong Khoo Kongsi, 18 Cannon Square。最后一段按入口标识走，不要误入周边私人房屋。' }, { title: '叫车时约在可停靠处', body: '车辆在老城窄巷停靠不便，先走到合适主路再确认上车点。' }],
    tips: [{ title: '优惠票按证件资格', body: 'MyKad、MM2H 与学生优惠有指定条件。普通中国游客不要直接选择居民票价。' }, { title: '尊重场所用途', body: '拍摄、进入室内或靠近祭祀区域前看标识。夜间灯光图片记录特别时刻，不代表每日夜间开放。' }],
    sources: [khoo, { label: '邱公司官方历史介绍', url: 'https://www.khookongsi.com.my/' }, penangMap], restaurantIds: ['teksen'], related: ['pinang-peranakan-mansion', 'chew-jetty'],
  },
  {
    id: 'chew-jetty', city: 'penang', name: '姓周桥', nameLocal: 'Chew Jetty', type: 'waterfront', area: '姓氏桥与海边', areaId: 'clan-jetties',
    intro: '沿公共木栈道看水上木屋与海边生活，走一段就好，为住户留出日常空间。', duration: '30–60 分钟', price: '公共步道未核到统一票务安排', hours: '按现场开放提示；建议白天到访', address: 'Chew Jetty, Pengkalan Weld, George Town, Penang, Malaysia',
    booking: { status: 'check', label: '到访前核对开放', summary: '这是有人生活的水上聚落。未找到可核验的官方统一预约和开放时段，按入口告示与当地最新情况安排。', link: penangMap,
      rows: [{ item: '公共木栈道', ticket: '未核到统一票务安排', reservation: '入口查看当日开放提示' }, { item: '住户空间及个别体验', ticket: '由经营者说明', reservation: '不能因公共通道开放而自行进入' }],
      steps: [{ title: '先查近期到访情况', body: '请酒店或当地旅游服务点确认入口及周边通行情况，尤其遇临时管制或维修时。' }, { title: '从公共入口进入', body: '沿 Pengkalan Weld 找 Chew Jetty 入口，看开放提示后再走入，不绕过围挡或封闭标志。' }, { title: '只走开放的公共通道', body: '走到适合停留的位置看看海，再原路返回。看到私宅门口、生活用品和祭祀空间时留出距离。' }], fallback: '若入口关闭或通行不方便，保留乔治市公共街道散步，不为完成行程绕入其他住户通道。' },
    notice: { text: '2026 年 9 月 5 日的马新社报道说明附近店铺发生火灾，姓周桥聚落本身未受波及。周边通行恢复情况仍需到访前核对。', source: { label: '马新社 2026-09-05 报道', url: 'https://www.bernama.com/en/news.php?id=2603342' } },
    highlights: [{ title: '海面上的木屋', body: '观察木屋、栈道与水面的关系，理解聚落如何沿海岸伸展。历史照片用于识别环境，不代表当前通行状况。', photo: 0 }, { title: '通道也是生活空间', body: '商铺与住户沿狭窄通道分布。停下拍照前给来往居民让路，不把门口当作拍照布景。', photo: 3 }, { title: '船与岸线', body: '海边可以看船只和岸线。本站建议把它作为老城散步中的一小段，而不是整天的活动。', photo: 4 }],
    walk: [{ title: '在主路口确认开放', body: '先停下看入口提示；道路与栈桥条件合适才进入。' }, { title: '沿同一条公共通道往返', body: '本站建议只选姓周桥一段，不为收集所有姓氏桥继续绕行。木板潮湿时放慢。' }, { title: '回主路再安排下一程', body: '需要叫车时回到 Pengkalan Weld 可停靠处；别把栈道内位置当作汽车上车点。' }],
    arrival: [{ title: '沿海边主路进入', body: '地图搜索 Chew Jetty, Pengkalan Weld。由老城步行前先查过街位置，天气热时减少暴晒。' }, { title: '车辆不能驶入木栈道', body: '让司机停在合适的主路位置，再步行到公共入口；离开时也在主路确认接车点。' }],
    tips: [{ title: '住户与拍照', body: '不进入私宅、不挡门口、不贴近拍摄居民日常；宗教与祭祀空间按现场提示。' }, { title: '短时户外安排', body: '栈道遮阴、路面和扶手条件不一致。遇雨、强风或同行者行动不便时，可缩短或取消这一段。' }],
    sources: [penangMap], restaurantIds: [], related: ['khoo-kongsi', 'pinang-peranakan-mansion'],
  },
  {
    id: 'penang-hill', city: 'penang', name: '升旗山', nameLocal: 'Penang Hill · Bukit Bendera', type: 'nature', area: '亚依淡与升旗山',
    intro: '搭缆车离开老城的热气，在山上看树木和城市远景。给往返交通与等候留出半天。', duration: '山上 2–3 小时', price: 'Standard 成人往返 RM40 · Express RM80', hours: '缆车 06:30–23:00；末班上山 22:00、下山 23:00', address: 'Penang Hill Lower Station, Jalan Stesen Bukit Bendera, Air Itam, Penang, Malaysia',
    booking: { status: 'recommended', label: '建议提前购缆车票', summary: '普通海外游客查看 Standard 票价。Normal 与 Express 是不同等候通道；缆车票只包含交通，山上个别景点另付费。', link: hill,
      rows: [{ item: 'Standard 成人往返 Normal', ticket: '13–59 岁 RM40', reservation: '可提前购买；核对所选日期' }, { item: 'Standard 成人往返 Express', ticket: '13–59 岁 RM80', reservation: '缩短等候，不保证无需排队' }, { item: '山上独立收费景点', ticket: '另计', reservation: '按各景点单独办理' }],
      steps: [{ title: '先查运营与天气', body: '从官方 Tickets 页查看缆车公告和日期，遇检修或天气影响时调整。以当前票务页为准，官网旧 FAQ 的部分时刻与现行票务页不同。' }, { title: '选正确的证件类别与通道', body: '没有马来西亚适用居留证件的游客查看 Standard，再选年龄、Normal / Express 及往返。不要误买 MyKad 居民类别。' }, { title: '完成购票后保存凭证', body: '从官网 Buy now 进入票务页面，核对日期和订单总额，再按实际可用方式付款。保存订单号、电子票与邮件；不填写无关证件或选错优惠资格。' }, { title: '下站换乘，先记下回程', body: '到 Lower Station 按票种和现场批次指引候车。上山前确认返程安排，给下山排队和回酒店交通留时间。' }], fallback: '现场也有售票柜台，但高峰等候不可预估。线上不能选择当天时不要反复下单，查看现场安排或改期；别把整座山的体验与缆车票混为一张通票。' },
    highlights: [{ title: '缆车沿线的高差', body: '缆车是从亚依淡到山上的交通。行驶时间之外还要计算售票、候车与回程，不能只按车程排日程。', photo: 2 }, { title: '远景取决于天气', body: '晴朗时可以看向乔治市，云雾来时则把注意力放到近处树木。不要把清晰全景当作一定能得到的体验。', photo: 0 }, { title: '只挑一段山上散步', body: '按现场地图选择主站周边或一处单独收费的体验。出发前确认票价与体力要求，不临时叠加多条山路。', photo: 3 }],
    walk: [{ title: '从下站开始算半天', body: '本站建议为往返市区另留交通时间，提早到 Lower Station，按实际队列决定当天节奏。' }, { title: '主站附近先走一圈', body: '到上站先看地图、天气与返程安排，挑一个观景或休息位置，再决定是否加入其他收费项目。' }, { title: '下山后再决定吃什么', body: '回到亚依淡后可查看本站咖喱面条目是否符合营业时段。不要同时硬排极乐寺和浮罗山背。' }],
    arrival: [{ title: '目的地是缆车下站', body: '打车输入 Penang Hill Lower Station，而不是山顶位置。官方也列有 Rapid Penang 204 巴士，具体班次出发前复核。' }, { title: '回城交通另安排', body: '在下站附近按现场接车指引叫车，或确认巴士方向。普通游客不能直接驾车上山。' }],
    tips: [{ title: '现行票务页优先', body: '本页时刻与票价核对自当前 Tickets 页。旧 FAQ 仍含不同末班时间及历史措施，出发当天再看最新公告。' }, { title: '山地天气与步道', body: '穿适合步行的鞋，带雨具，量力选择路线。只乘缆车不等于已购买所有山上体验。' }],
    sources: [hill, { label: '升旗山交通与乘车常见问题', url: 'https://www.penanghill.gov.my/index.php/en/faq' }], restaurantIds: ['air-itam-sister'], related: [],
  },
]

export const attractions: Attraction[] = [...baseAttractions, ...cityAttractions]

const allPhotos: Record<string, AttractionPhoto[]> = { ...attractionPhotos, ...cityAttractionPhotos }
export function photosFor(place: Attraction): AttractionPhoto[] { return allPhotos[place.id] ?? [] }
