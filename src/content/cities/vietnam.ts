import type { CityContent } from './types'
import { EAT_CRITERIA, EAT_EXCLUDE, HELP_PHRASES, consularHotline, consularUse } from './shared'
import { cityImages } from './photoData'
import { CONTENT_CITIES } from '../directory'

const city = (slug: string) => {
  const c = CONTENT_CITIES.find((x) => x.slug === slug)
  if (!c) throw new Error(`missing directory city: ${slug}`)
  return c
}

const vnat = { label: '越南国家旅游局', url: 'https://vietnam.travel/' }
const evisa = { label: '越南移民局电子签证', url: 'https://evisa.gov.vn/' }
const consular = { label: '中国领事服务网', url: 'https://cs.mfa.gov.cn/' }

const vnDocuments = {
  id: 'documents',
  title: '证件与入境',
  summary: '电子签证在线办，按本人证件先核对再订票。',
  stage: 'before' as const,
  recommendation:
    '越南对多数护照需要签证；电子签证（e-visa）在移民局官方网站申请，注意辨别仿冒网站。入境口岸、停留期与护照号在申请时锁定，填错要重来。',
  steps: [
    {
      title: '只用官方 e-visa 网站',
      body: '仿冒签证网站很多，认准移民局官方域名；填写时护照号、姓名拼音、入境口岸逐项核对，错一个字可能被拒入境。',
    },
    {
      title: '入境口岸先定再申请',
      body: 'e-visa 上选定的入境口岸必须与实际一致；河内内排（HAN）、岘港（DAD）是不同口岸，行程定了再申请。',
    },
    {
      title: '签证批下来打印随身带',
      body: 'e-visa 批准后下载 PDF，打印一份随身带、手机里存一份；入境时与护照一起出示。',
    },
    {
      title: '材料放一起',
      body: '返程订单、首晚酒店信息、同行人联系方式离线保存；核对护照有效期覆盖行程并有富余。',
    },
  ],
  done: 'e-visa 已获批且信息无误（口岸、日期、护照号），打印件与电子版齐备。',
  fallback: '信息填错或被拒，联系使领馆或签证机构重新申请，不要到机场再处理。',
  sources: [evisa, vnat, consular],
}

const vnMobile = (airportName: string) => ({
  id: 'mobile',
  title: '上网与手机',
  summary: '落地 SIM 便宜，Grab 依赖网络。',
  stage: 'before' as const,
  recommendation:
    '越南落地 SIM 便宜好用（Viettel、Vinaphone 等机场有柜台），是最省心方案；国内漫游也可用但价格通常更高。Grab 叫车与导航都靠网络，落地第一优先联网。',
  steps: [
    {
      title: '首选落地 SIM',
      body: `${airportName}到达厅有运营商柜台；买含流量的游客套餐，让柜台装好测好再走。`,
    },
    {
      title: '先装 Grab 再出机场',
      body: '叫车、查价、外卖都用 Grab；在机场 Wi-Fi 下装好注册好，绑一张可境外支付的卡。',
    },
    {
      title: '留备用方案',
      body: '柜台排队太久就先用机场 Wi-Fi 叫车进城，市区营业厅再办；国内漫游包作应急。',
    },
  ],
  done: 'SIM 装好能开地图、Grab 注册并能叫车。',
  fallback: '机场柜台人多时先连免费 Wi-Fi 叫车，进城再办 SIM。',
  sources: [vnat],
})

const vnPayment = {
  id: 'payment',
  title: '支付与现金',
  summary: '现金为主的社会，换汇找金店或银行。',
  stage: 'before' as const,
  recommendation:
    '越南仍以现金为主：餐馆、市场、出租车多收越南盾现金。银行卡在百货与连锁可用，Grab 可绑卡。换汇去银行或口碑金店，机场汇率差只换零头。',
  steps: [
    { title: '先备少量现金落地', body: '机场换汇汇率差，只换够打车进城的零头；大额进城再换。' },
    { title: '换汇去正规渠道', body: '银行与口碑金店汇率透明；街头私换与「好心人」换钱都是风险点。' },
    { title: '认清大面额', body: '越南盾面额大（几十万上百万一张），付款前数清几个零；钞票按面额分开放。' },
    { title: '刷卡与取现留意', body: 'ATM 取现选银行机台；刷卡提示转人民币计价时选 VND。' },
  ],
  done: '首日到市区的现金够、知道进城换汇点、Grab 绑卡可用。',
  fallback: '现金不够找银行 ATM；找不开的大面额去便利店破开。',
  sources: [vnat],
}

const vnStay = (areas: string) => ({
  id: 'stay',
  title: '住宿与入住',
  summary: '住核心区步行圈内，民宿查评价与电梯。',
  stage: 'before' as const,
  recommendation: `住${areas}一带步行圈最顺。越南住宿性价比高但差异大：老建筑民宿可能没电梯、隔音差；订前看近期评价与实拍图。`,
  steps: [
    { title: '按步行圈选住处', body: '把酒店放在晚饭后能走回的片区；越南人行道常被机车与摊位占，实际步行体验比地图距离重要。' },
    { title: '看评价里的硬条件', body: '电梯有无、隔音、热水、窗（内窗房常见）——这些在评价里比星级更真实。' },
    { title: '确认接送服务', body: '很多酒店提供付费接机，价格合理时比落地讲价省心；订时问清车牌与等候点。' },
    { title: '保存地址越英双语', body: '把酒店地址截图存好；司机多数能看英文地址，备越文版更稳。' },
  ],
  done: '电梯、隔音、晚到与接机方案已确认。',
  fallback: '到店房间与描述不符先找平台协调换房；深夜纠纷先住下再说。',
  sources: [vnat],
})

const vnTransit = (cityName: string) => ({
  id: 'transit',
  title: '市内交通',
  summary: 'Grab 与步行是主力，过马路是一门课。',
  stage: 'during' as const,
  recommendation: `${cityName}市区靠 Grab（汽车与机车）加步行。过马路不要等空档——匀速慢走让机车绕你，不突然停不后退。`,
  steps: [
    { title: 'Grab 先比价再叫', body: '汽车与机车价差大；行李多叫汽车。定位写准，司机按 App 价收，不付额外。' },
    { title: '出租车选正规公司', body: '扬招选 Mai Linh、Vinasun 等正规公司并要求打表；机场与景区门口的议价车按 App 价作参照。' },
    { title: '过马路匀速慢走', body: '看住来向匀速走过去，机车流会绕开你；最忌突然停下或后退。窄巷先听后过。' },
    { title: '人行道不全可走', body: '人行道常被机车与摊位占用，走路面靠边走；拖行李优先叫车。' },
  ],
  done: '会叫 Grab、敢过马路、知道住处附近的步行路线。',
  fallback: 'Grab 叫不到换正规出租扬招；步行混乱路段宁可绕大路。',
  sources: [vnat],
})

export const hanoi: CityContent = {
  city: city('hanoi'),
  checkedAt: '2026-09-14',
  meta: [
    { label: '最佳季节', value: '10–12 月与 3–4 月最舒服；夏湿热多暴雨，冬阴冷有雾。' },
    { label: '机场', value: '内排国际（HAN），进城约 45–60 分钟，Grab 或 86 路巴士。' },
    { label: '建议停留', value: '3–4 晚。老城与还剑湖住稳，每天一个片区；去下龙湾或宁平加一天。' },
    { label: '地区标签', value: '东南亚 · 越南首都' },
    { label: '气质', value: '老街三十六行、还剑湖晨练、法式旧楼' },
    { label: '核实日期', value: '2026-09-14' },
  ],
  essentials: [
    {
      title: '机场 → 市区',
      body: '内排机场到老城约 45–60 分钟：Grab 最省心，86 路巴士便宜到还剑湖方向，酒店接机订房时可约。深夜到达选 Grab 或酒店接机。',
      action: { label: '查看抵达步骤', to: '?tab=practical#guide-arrival' },
      links: [{ label: '内排机场', url: 'https://www.noibaiairport.vn/' }],
    },
    {
      title: '建议住哪',
      body: '第一次来住还剑湖—三十六行街一带：步行到老城各点、晚上有饭吃。想安静选巴亭或西湖方向，但进出要靠 Grab。',
      action: { label: '订房前逐项检查', to: '?tab=practical#guide-stay' },
    },
    {
      title: '建议晚数',
      body: '3 晚排老城一天、巴亭／文庙一天、留白；4 晚加下龙湾或宁平一日。老城本身就是看点，每天留半天乱走。',
      action: { label: '展开每天安排', to: '?tab=itinerary#plan-three' },
    },
  ],
  overview: [
    '河内的中心是还剑湖，湖西是老城三十六行街，湖南是法式建筑区。慢旅行的做法：住湖边，早上跟本地人绕湖走，白天按街区分工去钻。',
    '三十六行街按行业分街（丝绸街、银器街、草药街），乱走就是内容本身；法区的歌剧院、大教堂与旧使馆区是另一种节奏，适合下午。',
    '巴亭广场、文庙、独柱寺在历史轴线上，半天够；西湖与镇国寺方向更松，适合第三个半天。',
    '别把河内当去下龙湾的中转站——这座城值得住下来看：街头咖啡、米粉摊与湖边晨练，都是内容。',
  ],
  gettingThere: {
    intro: [
      '内排（HAN）进城：Grab 约 45–60 分钟最省心；86 路公共巴士便宜、到还剑湖方向；酒店接机订房时约。深夜选 Grab 或接机。',
      '市内靠 Grab 加步行。老城内部窄巷多，步行是主要方式；去巴亭、西湖叫车。',
      '人力三轮车（cyclo）在景区周边揽客，想坐先讲清价格与时长；常态代步用 Grab。',
    ],
    links: [
      { label: 'Grab 越南', url: 'https://www.grab.com/vn/' },
      { label: '越南国家旅游局', url: 'https://vietnam.travel/' },
    ],
    verifyReminders: [
      '86 路巴士当前站点、票价与运营时间',
      '内排机场 Grab 上车点位置',
      'e-visa 当前受理期与费用',
      '下龙湾／宁平一日游的正规运营与价格区间',
    ],
  },
  neighborhoods: [
    {
      id: 'old-quarter',
      title: '三十六行街（老城）',
      suited: '第一次来、想住进城市场景里的人。',
      image: cityImages['hanoi-old-quarter'],
      body: '老城按行业分街，丝绸、银器、草药各一条街。白天是批发与市井，晚上部分街道变夜市。住这里等于住在内容里，但吵——选背街旅店。',
      visit: {
        duration: '每天留半天乱走。',
        entry: '还剑湖北岸步行进入。',
        walk: '从湖边往北按街名乱走；同春市场方向更本地。',
        return: '走回湖边或 Grab 回；夜市街道晚高峰人挤人。',
        stay: '首选居住区；挑背街、有电梯、近期评价好的。',
        source: vnat,
      },
    },
    {
      id: 'french-quarter',
      title: '法区（歌剧院—大教堂）',
      suited: '想看殖民建筑、走宽街喝咖啡的人。',
      image: cityImages['hanoi-french-quarter'],
      body: '湖南岸的法区是另一种河内：歌剧院、圣约瑟夫大教堂、旧使馆与画廊咖啡馆。下午走这里，比老城松。',
      visit: {
        duration: '半天。',
        entry: '还剑湖南岸步行进入。',
        walk: '歌剧院 → 大教堂 → 周边街巷咖啡馆。',
        return: '步行回湖边；咖啡馆坐下是内容不是偷懒。',
        stay: '法区酒店偏精品、更安静；去老城步行可达。',
        source: vnat,
      },
    },
    {
      id: 'ba-dinh',
      title: '巴亭与文庙',
      suited: '想看历史轴线与博物馆的人。',
      image: cityImages['hanoi-ba-dinh'],
      body: '胡志明陵、主席府、独柱寺在巴亭广场一线；文庙是千年国子监。这一带是仪式空间，半天走完，注意着装。',
      visit: {
        duration: '半天；与老城分开排。',
        entry: 'Grab 到巴亭广场或文庙。',
        walk: '文庙 → 巴亭广场一线；陵寝开放时段有限，先查。',
        return: 'Grab 回；广场周边是行政区，吃饭回老城。',
        stay: '不建议住这一带；半天拜访就够。',
        source: vnat,
      },
    },
    {
      id: 'west-lake',
      title: '西湖与镇国寺',
      suited: '多住几晚、想慢下来的人。',
      image: cityImages['hanoi-west-lake'],
      body: '西湖比还剑湖大得多，湖边的镇国寺、真武观与咖啡馆是本地人的周末。第三四天来这里，把节奏放慢。',
      visit: {
        duration: '半天。',
        entry: 'Grab 到镇国寺或西湖东南岸。',
        walk: '镇国寺 → 湖边走一段 → 找咖啡馆坐下。',
        return: 'Grab 回；湖边绕全程太长，选一段走。',
        stay: '湖边有安静酒店但进出靠 Grab；住老城更顺。',
        source: vnat,
      },
    },
  ],
  stay: {
    checkedAt: '2026-09-14',
    intro:
      '河内的住宿决策围绕还剑湖：湖北是老城三十六行街（方便但吵），湖南是法区（安静、精品）。西湖一带进出全靠 Grab，只推荐给明确要安静的人。',
    budgetNote:
      '以 ¥700–800/晚为上限：在河内非常宽裕——老城中档平日 ¥250–450 常见，法区精品酒店这档预算也能住到；越南公共假日（春节等）上浮且部分店歇业。',
    anchors: [
      { title: '湖北吃饭、湖南睡觉', body: '老城（还剑湖北）餐馆咖啡密度最高但夜里吵；法区（湖南岸）安静、房好，步行到老城 10–15 分钟。' },
      { title: '老城选房三条', body: '挑背街不挑主街、要有电梯、看近期评价——老城楼窄房小，照片比实际显大。' },
      { title: '机场进出固定一程', body: '内排机场在城北，Grab 约 40–60 分钟；住哪都差不多，不用为机场换住处。' },
    ],
    areas: [
      {
        id: 'old-quarter-stay',
        title: '老城（还剑湖北）',
        suitsIf: '第一次来、要以吃和散步为重心的人。',
        budgetFeel: '这档预算超配，¥250–450 就有不错中档。',
        band: { low: 275, high: 485 },
        transit: '全城最方便：多数景点步行，Grab 随叫随到。',
        food: '河粉、法包、bún chả、鲜啤街口全在步行内。',
        tradeoff: '夜里吵、摩托穿巷；选背街楼与高层房。',
        neighborhoodIds: ['old-quarter'],
      },
      {
        id: 'french-quarter-stay',
        title: '法区（歌剧院—大教堂）',
        suitsIf: '想住得安静、房好一些的人。',
        budgetFeel: '这档预算可住到精品酒店，是河内性价比最高的一档。',
        band: { low: 345, high: 620 },
        transit: '歌剧院—大教堂一带；去老城步行 10–15 分钟。',
        food: '法区餐馆偏正餐；小吃回老城吃。',
        tradeoff: '价格高一档；晚上散步氛围不如老城。',
        neighborhoodIds: ['french-quarter'],
      },
      {
        id: 'west-lake-stay',
        title: '西湖东南岸',
        suitsIf: '长住、要安静、接受全程 Grab 的人。',
        budgetFeel: '这档预算可住湖景中档；选择少。',
        band: { low: 415, high: 830 },
        transit: '无轨道：进城全靠 Grab 约 15–25 分钟。',
        food: '湖边有咖啡馆与海鲜排档；日常吃饭选择少。',
        tradeoff: '离老城与各点都有一段车程；散步不成网。',
        skipIf: '行程以老城与法区为主——住老城更顺。',
        neighborhoodIds: ['west-lake'],
      },
    ],
  },
  dayTrips: [
    { direction: '下龙湾', how: '巴士或跟团约 2.5–3.5 小时', worth: '海上喀斯特。一日游太赶，船上住一晚更像样；选正规船公司。' },
    { direction: '宁平（陆龙湾）', how: '巴士约两小时', worth: '三谷／长安的河上游船与骑行，一天够；比下龙湾松。' },
    { direction: '沙坝', how: '夜巴或火车+接驳约 5–6 小时', worth: '山地梯田与少数民族村寨；至少两晚才值得，雾季看运气。' },
  ],
  dayTripNote: '下龙湾一日游太赶；宁平最松；沙坝至少两晚。',
  eatIntro:
    '河内是粉的城：Phở 当早餐，Bún chả 当午餐，街摊矮凳是常态。跟着本地人坐进矮凳摊，比找餐厅更接近这座城。',
  eatCriteria: EAT_CRITERIA,
  eatExclude: EAT_EXCLUDE,
  categories: [
    {
      id: 'pho', title: 'Phở（河粉）',
      intro: '河内的河粉是清高汤牛肉粉，当早餐吃。找早上本地人排队的摊，一碗下肚开始一天。',
      restaurants: [
        {
          id: 'pho-bat-dan', name: 'Phở Gia Truyền Bát Đàn', nameEn: 'Pho Bat Dan', neighborhood: '老城 Bát Đàn 街',
          location: { address: '49 Bát Đàn, Hoàn Kiếm, Hà Nội', areaId: 'old-quarter', connection: '还剑湖北岸步行约10分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Phở+Gia+Truyền+Bát+Đàn' } },
          order: ['Phở bò tái chín（半生熟牛肉粉）', 'Quẩy 油条'],
          whyLinger: '老城最有名的家传河粉之一——排队端碗自己找位是规矩。汤清、味正，是河内早餐的标准答案。',
          practical: '先排队点单取碗再自己找矮凳；现金。上午时段最好。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Phở+Gia+Truyền+Bát+Đàn' }],
          queueNote: '早餐高峰自助排队取碗；避开 8–9 点最挤时段。',
        },
        {
          id: 'pho-thin', name: 'Phở Thìn', nameEn: 'Pho Thin Lo Duc', neighborhood: 'Lò Đúc 街（城南）',
          location: { address: '13 Lò Đúc, Hai Bà Trưng, Hà Nội', connection: 'Grab 或步行自老城约25分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Phở+Thìn+Lò+Đúc' } },
          order: ['Phở tái lăn（炒牛肉粉）'],
          whyLinger: '另一派名店：牛肉先爆炒再入汤，汤头带焦香。与清汤的 Bát Đàn 是两种答案，值得各吃一碗对比。',
          practical: '店面深而窄；先找位再点。现金。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Phở+Thìn+Lò+Đúc' }],
        },
      ],
    },
    {
      id: 'buncha', title: 'Bún chả 与越式小馆',
      intro: '炭烤猪肉配米粉与鱼露蘸汁是河内午餐的代表——午间去吃，下午很多店就收摊；要坐下来吃顿正餐也有选择。',
      restaurants: [
        {
          id: 'buncha-huong-lien', name: 'Bún Chả Hương Liên', nameEn: 'Bun Cha Huong Lien', neighborhood: 'Lê Văn Hưu 街',
          location: { address: '24 Lê Văn Hưu, Hai Bà Trưng, Hà Nội', connection: 'Grab 自老城约10分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bún+Chả+Hương+Liên' } },
          order: ['Bún chả 一套', 'Nem cua bể 蟹肉春卷'],
          whyLinger: '2016 年奥巴马与 Anthony Bourdain 吃过的那家——墙上还留着当时的照片。「总统套餐」可直接点。',
          practical: '午餐时段去；炭烤烟大坐里侧。现金与卡以现场为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bún+Chả+Hương+Liên' }],
        },
        {
          id: 'buncha-dac-kim', name: 'Bún Chả Đắc Kim', nameEn: 'Bun Cha Dac Kim', neighborhood: '老城 Hàng Mành 街',
          location: { address: '1 Hàng Mành, Hoàn Kiếm, Hà Nội', areaId: 'old-quarter', connection: '老城内步行可达', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bún+Chả+Đắc+Kim' } },
          order: ['Bún chả 按人份', '烤肉饼与烤肉块两样都试'],
          whyLinger: '老城内的老牌 Bún chả——门口炭炉现烤是标志。不想跑远就在老城吃这家。',
          practical: '门口烤炉就是招牌；份量偏大，两人可合点再加份粉。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bún+Chả+Đắc+Kim' }],
        },
        {
          id: 'koto-van-mieu', name: 'KOTO Văn Miếu', nameEn: 'KOTO Restaurant', neighborhood: '文庙对面',
          location: { address: '59 Văn Miếu, Đống Đa, Hà Nội', areaId: 'ba-dinh', connection: '文庙正门斜对面步行1分钟', source: { label: '官网', url: 'https://www.koto.com.au/' } },
          order: ['越式套餐或当日菜单', '咖啡与甜点'],
          whyLinger: '文庙正门对面的社会企业餐厅——培训弱势青年的老牌公益店，环境与味道都稳。看完文庙坐下来的一顿正餐。',
          practical: '午晚餐；可订位。菜单英文齐全，价格高于街摊但透明。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '官网', url: 'https://www.koto.com.au/' }],
        },
      ],
    },
    {
      id: 'coffee', title: '街头咖啡',
      intro: '越南咖啡浓而甜：滴漏、蛋咖啡、椰奶咖啡都值得试。老城矮凳咖啡馆是河内人的客厅。',
      restaurants: [
        {
          id: 'cafe-giang', name: 'Café Giảng', nameEn: 'Cafe Giang', neighborhood: '老城（还剑湖北）',
          location: { address: '39 Nguyễn Hữu Huân, Hoàn Kiếm, Hà Nội', areaId: 'old-quarter', connection: '还剑湖北岸巷内，门脸小注意找', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Café+Giảng' } },
          order: ['Cà phê trứng 蛋咖啡（热）'],
          whyLinger: '蛋咖啡的发明店——1946 年起家，奶盖像液状提拉米苏。进窄门上天台坐。',
          practical: '巷内小门脸进去别有洞天；现金便宜。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Café+Giảng' }],
        },
        {
          id: 'cafe-dinh', name: 'Café Đinh', nameEn: 'Cafe Dinh', neighborhood: '还剑湖东岸',
          location: { address: '13 Đinh Tiên Hoàng（二楼）, Hà Nội', areaId: 'french-quarter', connection: '湖边面包店旁窄梯上二楼', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Café+Đinh' } },
          order: ['蛋咖啡', '靠窗位看湖'],
          whyLinger: '另一家蛋咖啡名家——二楼阳台正对还剑湖，比 Giảng 更旧更小，位置是卖点。',
          practical: '找窄楼梯上二楼；现金。下午有位看运气。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Café+Đinh' }],
        },
      ],
    },
    {
      id: 'street-stall', title: '法包与街摊',
      intro: '河内的日常在矮凳摊上：Bánh mì、Bánh cuốn 指着想吃的点，现金为主。',
      restaurants: [
        {
          id: 'banh-mi-25', name: 'Bánh Mì 25', nameEn: 'Banh Mi 25', neighborhood: '老城 Hàng Cá 街',
          location: { address: '25 Hàng Cá, Hoàn Kiếm, Hà Nội', areaId: 'old-quarter', connection: '老城内步行可达', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bánh+Mì+25' } },
          order: ['Bánh mì pate 综合法包', '素法包选项也有'],
          whyLinger: '老城最有名的法包摊——烤脆的法包夹肉酱与腌菜，几块钱一顿。拿在手上当散步早餐。',
          practical: '外带为主；现做现吃，现金。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bánh+Mì+25' }],
        },
        {
          id: 'banh-cuon-ba-hoanh', name: 'Bánh Cuốn Bà Hoành', nameEn: 'Banh Cuon Ba Hoanh', neighborhood: 'Tô Hiến Thành 街',
          location: { address: '66 Tô Hiến Thành, Hai Bà Trưng, Hà Nội', connection: 'Grab 自老城约10分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Bà+Hoành' } },
          order: ['Bánh cuốn nhân thịt 肉馅蒸粉卷'],
          whyLinger: '蒸粉卷的老字号——米皮薄得透光，撒炸葱与鱼露汁。当早餐或下午茶。',
          practical: '上午与下午都开；现金。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Bà+Hoành' }],
        },
        {
          id: 'xoi-yen', name: 'Xôi Yến', nameEn: 'Xoi Yen', neighborhood: '老城 Nguyễn Hữu Huân 街',
          location: { address: '35B Nguyễn Hữu Huân, Hoàn Kiếm, Hà Nội', areaId: 'old-quarter', connection: '还剑湖北岸步行可达', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Xôi+Yến' } },
          order: ['Xôi xéo 绿豆糯米饭', '加鸡肉或香肠配料'],
          whyLinger: '河内最有名的糯米饭摊——一早开门、晚上收摊，本地人当早餐与宵夜。几块钱的扎实一餐。',
          practical: '早到晚长时段营业；现金，拼桌坐矮凳。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Xôi+Yến' }],
        },
      ],
    },
    {
      id: 'bia-hoi', title: 'Bia hơi 鲜啤摊',
      intro: '傍晚的鲜啤摊是本地社交场：淡啤按杯卖，配烤花生。坐在路边看街，是河内的收尾方式。',
      restaurants: [
        {
          id: 'bia-hoi-junction', name: 'Bia hơi 街口（Tạ Hiện × Lương Ngọc Quyến）', neighborhood: '老城东北',
          location: { address: 'Tạ Hiện 与 Lương Ngọc Quyến 路口, Hoàn Kiếm, Hà Nội', areaId: 'old-quarter', connection: '老城内步行可达', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=bia+hơi+junction+hanoi' } },
          order: ['Bia hơi 按杯点', '烤花生与烤物小吃'],
          whyLinger: '河内最著名的鲜啤路口——傍晚塑料凳占满四角，一杯淡啤几块钱。不是一家店，是一片场景。',
          practical: '随便找有空凳的摊坐下；按杯计价极便宜，现金。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=bia+hơi+junction+hanoi' }],
        },
      ],
    },
  ],
  howToOrder: [
    '粉摊看锅里的选，指着想吃的部位或说 Phở bò（牛肉粉）。',
    '矮凳摊坐下就有茶水上桌（可能收费），点单直接说。',
    '咖啡默认加炼乳，要黑咖啡说 cà phê đen。',
    '结账时举手或说 tính tiền；现金为主。',
  ],
  avoid: [
    '景区内拉客的「特色餐厅」价格虚高；走两步进巷子。',
    '三轮车（cyclo）先讲好总价与时长再坐，按人还是按车问清。',
    '火车街消费前先确认该区域当前是否开放，别被带进私设座位区。',
  ],
  eatRhythm:
    '早餐 Phở 或 Bánh cuốn；午餐 Bún chả；下午矮凳咖啡；晚上街摊或 Bia hơi。一天四五顿小份是河内的正常节奏。',
  allergies: [
    '鱼露（nước mắm）无处不在，海鲜类调味重——过敏写下来。',
    '花生常撒在小食与凉拌菜上。',
    '肠胃敏感者吃现煮摊、喝瓶装水、生香草看摊况。',
  ],
  guide: {
    city: '河内',
    checkedAt: '2026-09-14',
    scope: '以步行与 Grab 为主的首次河内行程；签证按本人证件另核官方要求',
    intro: '河内住湖边、白天钻街、晚上矮凳。以下按 3–4 晚写。',
    topics: [
      vnDocuments,
      vnMobile('内排机场'),
      vnPayment,
      vnStay('还剑湖—老城'),
      {
        id: 'arrival',
        title: '内排机场 → 老城',
        summary: 'Grab 最省心，86 路巴士便宜，酒店接机可约。',
        stage: 'arrival',
        recommendation: '落地后优先联网叫 Grab 到酒店（按 App 价）；预算紧选 86 路巴士到还剑湖方向再步行；订房时约酒店接机是稳妥选项。',
        steps: [
          { title: '到达厅先办两件事', body: '买 SIM 装 Grab、换少量现金；都在到达层完成。' },
          { title: '叫车写准酒店名', body: 'Grab 定位到酒店或最近地标；上车前核对车牌。' },
          { title: '老城窄巷里下车走最后一段', body: '车进不去的巷子让司机停最近路口；导航完最后几百米。' },
          { title: '深夜到达', body: '用 Grab 或预订接机；不坐到达厅门口揽客的议价车。' },
        ],
        done: '到酒店，知道回程 Grab 怎么叫、机场留多久。',
        fallback: 'Grab 叫不到用 86 路或正规出租扬招；议价先按 App 价参考。',
        sources: [{ label: '内排机场', url: 'https://www.noibaiairport.vn/' }, { label: 'Grab', url: 'https://www.grab.com/vn/' }],
      },
      vnTransit('河内'),
    ],
    checklist: [
      { id: 'c-visa', text: 'e-visa 已获批，口岸／日期／护照号无误，打印随身带', topic: '证件与入境' },
      { id: 'c-passport', text: '护照有效期覆盖行程；订单离线保存', topic: '证件与入境' },
      { id: 'c-net', text: '落地 SIM 方案明确；Grab 已装并能叫车', topic: '上网与手机' },
      { id: 'c-cash', text: '备少量现金落地；知道进城换汇点', topic: '支付与现金' },
      { id: 'c-notes', text: '已认清越南盾大面额数零', topic: '支付与现金' },
      { id: 'c-stay', text: '电梯、隔音、晚到与接机方案已确认', topic: '住宿与入住' },
      { id: 'c-arrival', text: '机场到酒店方案（Grab／86 路／接机）已存截图', topic: '内排机场 → 老城' },
      { id: 'c-cross', text: '过马路要领已读：匀速慢走、不停不退', topic: '市内交通' },
    ],
  },
  itinerary: {
    threeNights: {
      title: '3 晚：老城住稳',
      note: '住还剑湖一带。每天半天有方向、半天乱走。',
      days: [
        { day: '第一天', body: '抵达入住，还剑湖走一圈，老城矮凳晚餐。', time: '按落地安排', start: 'HAN → 酒店', return: '湖边／老城', links: [{ label: '抵达步骤', href: '?tab=practical#guide-arrival' }] },
        { day: '第二天', body: '清晨湖边看晨练 → 上午三十六行街乱走 → 下午法区咖啡与大教堂。', time: '早起一天', start: '还剑湖', return: '法区／住处', links: [{ label: '老城', href: '?tab=places#area-old-quarter' }] },
        { day: '第三天', body: '上午文庙或巴亭一处，午后收尾去机场。', time: '半天外出、午后收尾', start: '文庙方向', return: '酒店 → 机场', links: [{ label: '巴亭与文庙', href: '?tab=places#area-ba-dinh' }] },
      ],
    },
    fiveNights: {
      title: '5 晚：加近郊一天',
      note: '3 晚骨架上加宁平或下龙湾一天、西湖半天与留白。',
      days: [
        { day: '第一天', body: '抵达入住，湖边走圈矮凳晚餐。', time: '按落地安排', start: 'HAN → 酒店', return: '老城', links: [{ label: '抵达步骤', href: '?tab=practical#guide-arrival' }] },
        { day: '第二天', body: '老城 + 法区一天，清晨湖边。', time: '全天', start: '还剑湖', return: '法区', links: [{ label: '老城', href: '?tab=places#area-old-quarter' }] },
        { day: '第三天', body: '文庙—巴亭半天 + 西湖慢走半天。', time: '两个半天', start: '文庙', return: '西湖方向', links: [{ label: '西湖', href: '?tab=places#area-west-lake' }] },
        { day: '第四天', body: '宁平一日（河上游船与骑行）或留白。', time: '近郊一天', start: '早出发', return: '晚回河内', links: [{ label: '看点', href: '?tab=places' }] },
        { day: '第五天', body: '老城补漏慢走、买咖啡伴手，按航班去机场。', time: '上午慢走、午后收尾', start: '老城', return: '酒店 → 机场', links: [{ label: '老城', href: '?tab=places#area-old-quarter' }] },
      ],
    },
  },
  safety: {
    city: '河内',
    checkedAt: '2026-09-14',
    emergencyNote: '河内治安总体可，主要风险是交通、飞车抢包与消费议价。包背前胸，手机别朝街侧拿。',
    contacts: [
      { name: '报警', number: '113', dial: '113', use: '盗窃、抢劫、纠纷', source: vnat, urgent: true },
      { name: '急救', number: '115', dial: '115', use: '医疗急救', source: vnat, urgent: true },
      { name: '火警', number: '114', dial: '114', use: '火灾', source: vnat, urgent: true },
      { name: '领事保护', number: '+86-10-12308', dial: '+861012308', use: consularUse, source: consularHotline },
    ],
    phrases: HELP_PHRASES,
    preparation: [
      'e-visa 打印件与电子版齐备；护照复印件另放。',
      '包背前胸、手机不朝街侧拿——飞车抢包是最常见风险。',
      '境外医疗保险与救援电话另存。',
      '记住 113／115／114；Grab 行程可分享。',
      '肠胃敏感者备常用药；瓶装水为主。',
      '雨季（夏）暴雨路面积水，鞋袜有备份。',
    ],
    alerts: [
      { title: '飞车抢包', body: '老城与湖边都发生过机车抢包：包背前胸、手机朝墙侧拿、走路内侧。', source: vnat },
      { title: '交通与过马路', body: '机车流量极大，过马路匀速慢走不停不退；夜间与雨天更慢。', source: vnat },
      { title: '议价与找零', body: '出租车、三轮、市场先讲清价格与币种；付款数清零，看清找零。', source: vnat },
      { title: '饮水与肠胃', body: '喝瓶装水；冰块与生食看店况；备肠胃药。', source: vnat },
    ],
    scenarios: [
      { id: 'safety-documents', title: '护照丢了', steps: ['到最近公安报失拿证明。', '联系中国驻越南大使馆补办旅行证件。', '保留报失证明理赔。', '出境需新证件＋出入境手续，留足办理时间。'], sources: [consular, { label: '中国驻越南大使馆', url: 'http://vn.china-embassy.gov.cn/' }] },
      { id: 'safety-theft', title: '被抢或被盗', steps: ['人身安全优先，不追不抢。', '拨 113 报警并拿报案回执（理赔要用）。', '手机被抢立即远程锁定、改密码、挂失支付。', '银行卡被盗刷先联系发卡行止付。'], sources: [vnat] },
      { id: 'safety-medical', title: '需要就医', steps: ['紧急拨 115。', '非紧急请酒店推荐国际诊所（河内有多家）。', '保留收据走保险；肠胃问题补水优先。'], sources: [vnat] },
      { id: 'safety-fraud', title: '价格或找零纠纷', steps: ['交易前讲清价格币种；纠纷时先留证再交涉。', '大面额看错零是常见误会，付款前先数。', '严重纠纷拨 113 或请酒店协助。'], sources: [vnat] },
      { id: 'safety-transport', title: '叫不到车或迷路', steps: ['Grab 叫不到换正规出租（Mai Linh／Vinasun）要求打表。', '迷路回还剑湖或地标再定向；给司机看越文地址。', '手机没电找酒店前台或咖啡馆求助。'], sources: [vnat] },
    ],
  },
  relatedGuides: [
    '会安城市页 → /places/vietnam/hoi-an',
    '越南国家页 → /places/vietnam',
    '槟城城市页 → /places/malaysia/penang',
  ],
  sourcesNote: [
    '街区、看点与交通信息来自官方公开资料与通用旅行常识，核对日期见上。',
    '店单按「可核实」标准收录：每家店留核实日期与来源；营业与排队信息以现场和官网为准。',
    `官方入口：${city('hanoi').officialLinks.map((l) => l.label).join('、')}。`,
  ],
}

export const hoiAn: CityContent = {
  city: city('hoi-an'),
  checkedAt: '2026-09-14',
  meta: [
    { label: '最佳季节', value: '2–4 月干爽；9–1 月是雨季，古城可能积水（内涝常见）。夏季炎热。' },
    { label: '机场', value: '无本市机场；飞岘港（DAD）再车接约 45–60 分钟。' },
    { label: '建议停留', value: '2–3 晚。古城一天、海滩或乡野半天、留白；比想象中小，别排满。' },
    { label: '地区标签', value: '东南亚 · 古城' },
    { label: '气质', value: '灯笼古城、裁缝店与河边早市' },
    { label: '核实日期', value: '2026-09-14' },
  ],
  essentials: [
    {
      title: '机场 → 古城',
      body: '飞岘港（DAD）再南下车接 45–60 分钟到会安：酒店接送或 Grab 都行，订房时问接送价。白天也可在岘港停半天再南下。',
      action: { label: '查看抵达步骤', to: '?tab=practical#guide-arrival' },
      links: [{ label: '岘港机场', url: 'https://www.danangairport.vn/' }],
    },
    {
      title: '建议住哪',
      body: '住古城步行圈外一两条街最稳：古城内夜吵且雨季积水；外围民宿多、安静、步行五到十分钟进城。海滩度假酒店是另一种玩法，进城靠接驳。',
      action: { label: '订房前逐项检查', to: '?tab=practical#guide-stay' },
    },
    {
      title: '建议晚数',
      body: '2 晚够看古城日与夜加海滩半天；3 晚加乡野骑行或烹调课。会安小，日程宽松是常态。',
      action: { label: '展开每天安排', to: '?tab=itinerary#plan-three' },
    },
  ],
  overview: [
    '会安古城是被保留下来的贸易港街区：日桥、会馆、老屋与灯笼。白天看建筑，晚上看灯——但晚上人也最多，清晨才是本地人的会安。',
    '古城不大，半天能走完主街。慢旅行的答案是把节奏放开：上午走老屋与会馆，午后回住处躲太阳，黄昏再进城看灯。',
    '古城外围是稻田与乡野，骑车二十分钟就是另一种越南；安邦海滩是半天的选项。',
    '裁缝店是会安的特产但水很深：想定制留足两三次试身的时间，赶行程就别开始。',
  ],
  gettingThere: {
    intro: [
      '没有本市机场：飞岘港（DAD）再车接南下 45–60 分钟。酒店接送与 Grab 都方便；订房时先问接送价格。',
      '古城内部步行与自行车为主，傍晚起核心区禁机动车；外围用 Grab 或自行车。',
      '自行车是本地最合理的交通工具：稻田与海滩都能骑到，住处通常免费提供或低价出租。',
    ],
    links: [
      { label: 'Grab 越南', url: 'https://www.grab.com/vn/' },
      { label: '越南国家旅游局', url: 'https://vietnam.travel/' },
    ],
    verifyReminders: [
      '古城门票（Old Town ticket）当前价格与覆盖点',
      '核心区机动车禁行时段',
      '岘港机场到会安的车接价格区间',
      '雨季内涝预警与古城通行情况',
    ],
  },
  neighborhoods: [
    {
      id: 'old-town',
      title: '会安古城',
      suited: '所有第一次来的人；清晨与傍晚是两座城。',
      image: cityImages['hoian-old-town'],
      body: '日本桥、福建会馆、进记老屋等集中在秋盆河北岸几条街。白天看建筑细节，黄昏灯笼亮起后看氛围——清晨无人时走一圈是额外奖励。',
      visit: {
        duration: '半天看建筑 + 一晚看灯。',
        entry: '步行入区；部分节点查古城门票。',
        walk: '日本桥 → 陈富街老屋与会馆 → 河边市场方向。',
        return: '步行回住处；夜雨后石板路滑。',
        stay: '古城内民宿位置最方便但吵；外围一两条街更安静。',
        source: vnat,
      },
    },
    {
      id: 'cam-thanh-ricefields',
      title: '外围稻田与椰林',
      suited: '想骑车看乡野的人。',
      image: cityImages['hoian-ricefields'],
      body: '古城外一公里就是稻田与村庄，往南是椰林水渠（Cam Thanh）。租自行车乱骑两小时，是会安最值的半天。',
      visit: {
        duration: '2–3 小时骑行。',
        entry: '住处借车或街边租车。',
        walk: '沿稻田小路与乡道骑；椰林水椰船看兴趣。',
        return: '原路骑回；日落前回程，乡道夜间无灯。',
        stay: '不住乡野；骑行当半天活动。',
        source: vnat,
      },
    },
    {
      id: 'an-bang',
      title: '安邦海滩',
      suited: '想要半天海的人。',
      image: cityImages['hoian-an-bang'],
      body: '古城东北约四公里的海滩，沙滩平缓、沿岸有餐厅。半天游泳加一顿海鲜午餐足够，别指望东南亚顶级海。',
      visit: {
        duration: '半天。',
        entry: '自行车或 Grab 约 15–20 分钟。',
        walk: '沙滩散步加下水；遮阳伞与躺椅按店消费。',
        return: 'Grab 或骑车回；涨潮与风浪看当日。',
        stay: '海滩度假酒店适合纯度假行程；以古城为主则住城内。',
        source: vnat,
      },
    },
  ],
  stay: {
    checkedAt: '2026-09-14',
    intro:
      '会安的住宿决策是「古城内还是海滩」：古城内方便但吵，古城外一两街更安静；安邦海滩是给纯度假行程的选项。',
    budgetNote:
      '以 ¥700–800/晚为上限：在会安非常宽裕——古城内外民宿与中档酒店平日 ¥250–550 常见，带泳池的度假村也多在这档内；旺季（2–8 月干季、节假日）上浮。',
    anchors: [
      { title: '古城内外差一条街的体验', body: '古城内民宿位置最方便但游客与摩托穿巷吵；外围一两条街（骑步行圈内）更安静、价格差不多。' },
      { title: '海滩只给度假行程', body: '安邦海滩离古城约 4 公里，骑车或 Grab 一程——以古城为主就住城内，纯度假才住海滩。' },
      { title: '进出都从岘港来', body: '机场与火车站在岘港，接驳 45–60 分钟；住哪都共用这一程，不用为进出换位置。' },
    ],
    areas: [
      {
        id: 'old-town-stay',
        title: '古城内',
        suitsIf: '行程全在古城、要清晨与夜里独享街巷的人。',
        budgetFeel: '这档预算超配，民宿多且带早餐。',
        band: { low: 310, high: 655 },
        transit: '步行就是全部；去海滩骑车或 Grab 约 15–20 分钟。',
        food: '收录的店几乎全在步行圈。',
        tradeoff: '白天游客密度高、房间隔音普遍一般。',
        neighborhoodIds: ['old-town'],
      },
      {
        id: 'old-town-outer-stay',
        title: '古城外围（步行圈）',
        suitsIf: '要方便又要安静的人——多数人的默认答案。',
        budgetFeel: '这档预算可住带泳池的中档，性价比最高的一带。',
        band: { low: 195, high: 410 },
        transit: '步行 10–15 分钟进古城；多数酒店有免费自行车。',
        food: '古城北缘与外围街摊步行可达。',
        tradeoff: '要每天多走一程；选错位置就偏到稻田里了。',
        neighborhoodIds: ['old-town'],
      },
      {
        id: 'an-bang-stay',
        title: '安邦海滩',
        suitsIf: '纯度假、古城只是顺带一游的人。',
        budgetFeel: '这档预算可住海边度假村；淡季更便宜。',
        band: { low: 395, high: 790 },
        transit: 'Grab 或骑车约 15–20 分钟到古城。',
        food: '海滩排挡与度假村餐厅；正餐进城吃更好。',
        tradeoff: '离古城有一程；晚上只有海滩一条路可逛。',
        skipIf: '行程重心在古城街巷与早晚氛围——住城内。',
        neighborhoodIds: ['an-bang'],
      },
    ],
  },
  dayTrips: [
    { direction: '岘港', how: '车接或 Grab 北上 45–60 分钟', worth: '山茶半岛、美溪海滩与市区；半天到一天，去程或回程顺路排。' },
    { direction: '占婆岛', how: '快艇约 20 分钟＋接驳', worth: '浮潜与离岛一日；雨季海况差时常停航，看天气。' },
    { direction: '顺化', how: '车程约 2.5–3 小时或火车到岘港转', worth: '皇城与皇陵值得一天以上；行程紧就不必硬排。' },
  ],
  dayTripNote: '岘港顺路排；占婆岛看海况；顺化要一整天以上。',
  eatIntro:
    '会安有自己的三样本地面点：Cao lầu、白玫瑰、炸云吞，古城内外都有店做。市场早餐最便宜，河边餐厅看景付景价。',
  eatCriteria: EAT_CRITERIA,
  eatExclude: EAT_EXCLUDE,
  categories: [
    {
      id: 'cao-lau', title: 'Cao lầu 与本地菜',
      intro: '会安独有的粗面：碱水面配烤肉、生菜与脆片。本地说法是面要用古城井水做——不管真假，只在这里吃得到。',
      restaurants: [
        {
          id: 'cao-lau-ba-le', name: 'Cao Lầu Bá Lễ', nameEn: 'Cao Lau Ba Le', neighborhood: '古城外缘 Trần Hưng Đạo 街',
          location: { address: '49/3 Trần Hưng Đạo, Hội An', areaId: 'old-town', connection: '古城东侧步行约5分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Cao+Lầu+Bá+Lễ+Hội+An' } },
          order: ['Cao lầu 一碗'],
          whyLinger: '专做 Cao lầu 的老店——巷子里的平房，只做这一道几十年。比河边餐厅便宜也更正。',
          practical: '菜单极短；现金。上午到下午开，以现场为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Cao+Lầu+Bá+Lễ+Hội+An' }],
        },
        {
          id: 'morning-glory', name: 'Morning Glory Original', nameEn: 'Morning Glory', neighborhood: '古城',
          location: { address: '106 Nguyễn Thái Học, Hội An', areaId: 'old-town', connection: '古城内步行可达', source: { label: '官网', url: 'https://www.msvy-tastevietnam.com/' } },
          order: ['Cao lầu', '白玫瑰与炸云吞一份拼齐', '越式茄子煲'],
          whyLinger: 'Ms Vy 系的老店——把会安三样一次吃全的地方，带烹调学校。游客店但品质稳。',
          practical: '晚市人多可订位；价格高于街摊，当「集齐三样」的一顿。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '官网', url: 'https://www.msvy-tastevietnam.com/' }],
        },
        {
          id: 'cao-lau-thanh', name: 'Thanh Cao Lầu', nameEn: 'Thanh Cao Lau', neighborhood: '古城 Thái Phiên 街',
          location: { address: '26 Thái Phiên, Hội An', areaId: 'old-town', connection: '古城内步行可达', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Thanh+Cao+Lầu+Hội+An' } },
          order: ['Cao lầu 一碗', 'Bánh cuốn 蒸粉卷'],
          whyLinger: '古城里做了几十年 Cao lầu 的老铺——店小、菜单短、只卖几样，是另一种「正」的参照。',
          practical: '早到午后为主；现金。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Thanh+Cao+Lầu+Hội+An' }],
        },
      ],
    },
    {
      id: 'white-rose', title: '白玫瑰与炸云吞',
      intro: '白玫瑰是虾肉馅蒸饺，炸云吞是脆片配酸甜酱——会安面点三样的另外两样，当下午茶。',
      restaurants: [
        {
          id: 'white-rose-restaurant', name: '白玫瑰（Bông Hồng Trắng）', nameEn: 'White Rose Restaurant', neighborhood: '古城外 Hai Bà Trưng 街',
          location: { address: '533 Hai Bà Trưng, Hội An', areaId: 'old-town', connection: '古城北侧步行约10分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=White+Rose+Restaurant+Hội+An' } },
          order: ['白玫瑰蒸饺', '炸云吞（hoành thánh chiên）'],
          whyLinger: '会安全城的白玫瑰多数出自这一家——店里能看到现包，只卖两样。',
          practical: '只做两款，按盘上；现金。下午也可能开，以现场为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=White+Rose+Restaurant+Hội+An' }],
        },
      ],
    },
    {
      id: 'banh-mi', title: '法包与市场早摊',
      intro: '中心市场上午的粉摊最便宜本地；会安的两家名法包是全越南范围内都出名的。',
      restaurants: [
        {
          id: 'banh-mi-phuong', name: 'Bánh Mì Phượng', nameEn: 'Banh Mi Phuong', neighborhood: '古城北缘',
          location: { address: '2B Phan Chu Trinh, Hội An', areaId: 'old-town', connection: '古城北侧步行约5分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Phượng' } },
          order: ['综合法包（thập cẩm）', '烤肉法包'],
          whyLinger: '被 Anthony Bourdain 带火的法包店——排队是常态，但确实好吃。一条法包当午餐。',
          practical: '店外排队点餐取餐；现金。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Phượng' }],
          queueNote: '饭点排 15–30 分钟；上午与下午中段最松。',
        },
        {
          id: 'madam-khanh', name: 'Madam Khanh（法包女王）', nameEn: 'Madam Khanh Banh Mi Queen', neighborhood: '古城外 Trần Cao Vân 街',
          location: { address: '115 Trần Cao Vân, Hội An', connection: '古城北侧步行约15分钟或骑车5分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Madam+Khanh+Bánh+Mì+Queen' } },
          order: ['什锦法包', '蛋咖啡'],
          whyLinger: '另一家名法包，老夫妻俩做了几十年——比 Phượng 排队短，口味偏好见仁见智，两家各吃一次自己判。',
          practical: '现金小馆；座位少。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Madam+Khanh+Bánh+Mì+Queen' }],
        },
      ],
    },
    {
      id: 'riverside', title: '河边餐厅与咖啡馆',
      intro: '河边的位子付的是景价：晚餐看灯笼与河景可以，别指望性价比。午后咖啡馆是躲太阳的好选择。',
      restaurants: [
        {
          id: 'cargo-club', name: 'Cargo Club', nameEn: 'Cargo Club', neighborhood: '古城河边',
          location: { address: '107-109 Nguyễn Thái Học, Hội An', areaId: 'old-town', connection: '古城内河边步行可达', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Cargo+Club+Hội+An' } },
          order: ['越式与西式简餐', '自家烘焙甜品'],
          whyLinger: '河边老牌餐吧——楼上露台看河景与灯笼，蛋糕烘焙是会安最好的一档。下午茶与晚餐都可。',
          practical: '露台位黄昏抢手；价格付景。以现场为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Cargo+Club+Hội+An' }],
        },
      ],
    },
    {
      id: 'cafe-tea', title: '咖啡与茶舍',
      intro: '会安的咖啡馆适合午后久坐；茶舍里有全城最安静的一间。',
      restaurants: [
        {
          id: 'hoian-roastery', name: 'Hoi An Roastery', nameEn: 'Hoi An Roastery', neighborhood: '古城外缘',
          location: { address: '135 Trần Phú 等（多店）, Hội An', areaId: 'old-town', connection: '古城步行圈多店', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Hoi+An+Roastery' } },
          order: ['滴漏咖啡（cà phê phin）', '蛋咖啡或椰奶咖啡'],
          whyLinger: '自家烘焙的越南咖啡专门店——巷子里的木屋，是下午躲太阳的正确位置。',
          practical: '多店分布；下午有位。现金与卡。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Hoi+An+Roastery' }],
        },
        {
          id: 'reaching-out', name: 'Reaching Out 茶舍', nameEn: 'Reaching Out Teahouse', neighborhood: '古城',
          location: { address: '131 Trần Phú, Hội An', areaId: 'old-town', connection: '古城内步行可达', source: { label: '官网', url: 'https://reachingoutvietnam.com/' } },
          order: ['茶与咖啡一套（按盏）', '小点心拼盘'],
          whyLinger: '由听障员工服务的安静茶舍——低声与纸笔点单是规则。古城里最特别的一个下午。',
          practical: '保持安静；按盏计价。营业以官网为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '官网', url: 'https://reachingoutvietnam.com/' }],
        },
        {
          id: 'mot-hoi-an', name: 'Mót Hội An', nameEn: 'Mot Hoi An', neighborhood: '古城 Trần Phú 街',
          location: { address: '150 Trần Phú, Hội An', areaId: 'old-town', connection: '古城内步行可达', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Mót+Hội+An' } },
          order: ['Nước mót 莲花凉茶（一杯）'],
          whyLinger: '古城最有名的一杯凉茶——莲花瓣与草药茶，小摊前总排着队。走热了停下来喝一杯再走。',
          practical: '摊前排队即买即走；现金，一杯很便宜。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Mót+Hội+An' }],
        },
      ],
    },
  ],
  howToOrder: [
    '本地三样（Cao lầu／白玫瑰／炸云吞）看墙上菜单指认。',
    '市场摊指着想吃的点，现金结账。',
    '河边餐厅先坐后看菜单，不合适换一家不尴尬。',
    '咖啡馆下午久坐正常；越式咖啡默认加炼乳。',
  ],
  avoid: [
    '河边与主街的「灯笼景位」价格虚高；同一条街背街店便宜。',
    '裁缝店「24 小时交件」的报价与质量要三思；定制至少留两三次试身。',
    '河边兜售放灯与划船的议价按意愿，先讲清价格再上。',
  ],
  eatRhythm:
    '早餐去市场或住处附近粉摊；午餐找 Cao lầu；下午白玫瑰当点心；晚上河边或背街小馆。一天四顿小份刚好。',
  allergies: [
    '鱼露与虾酱普遍；花生常撒在面点上。',
    '海鲜类调味重，过敏写下来给店员看。',
    '肠胃敏感者吃现煮摊、喝瓶装水。',
  ],
  guide: {
    city: '会安',
    checkedAt: '2026-09-14',
    scope: '以步行与自行车为主的会安行程；签证按本人证件另核官方要求',
    intro: '会安小，住古城外围、白天骑走、晚上看灯。以下按 2–3 晚写。',
    topics: [
      vnDocuments,
      vnMobile('岘港机场'),
      vnPayment,
      vnStay('古城外围'),
      {
        id: 'arrival',
        title: '岘港机场 → 会安',
        summary: '车接 45–60 分钟；酒店接送或 Grab 都方便。',
        stage: 'arrival',
        recommendation: '落地岘港后直接南下：订房时约酒店接送最省心，或现场叫 Grab。白天到可先停岘港半天（美溪海滩／山茶半岛）再去会安。',
        steps: [
          { title: '订房时先问接送价', body: '会安多数民宿酒店提供付费接送，价格通常合理；确认车牌与等候点。' },
          { title: '现场叫 Grab', body: '到达厅连网叫车，按 App 价；目的地写会安住处地址。' },
          { title: '到达古城外步行进住处', body: '古城核心区车进不去，住处多在步行圈内；窄巷里导航完最后一段。' },
        ],
        done: '到会安住处，知道回程接送怎么约。',
        fallback: '接送没约上就现场 Grab；深夜到达仍可用，机场外有正规出租。',
        sources: [{ label: '岘港机场', url: 'https://www.danangairport.vn/' }, { label: 'Grab', url: 'https://www.grab.com/vn/' }],
      },
      {
        id: 'transit',
        title: '古城内外交通',
        summary: '古城步行、外围自行车、远处 Grab。',
        stage: 'during',
        recommendation: '古城核心区傍晚起禁机动车，步行是唯一方式；稻田与海滩骑自行车最舒服；去美山或岘港叫 Grab 或拼车。',
        steps: [
          { title: '住处借自行车', body: '多数民宿免费提供或低价出租；检查车锁与刹车，夜骑有灯。' },
          { title: '古城步行节奏', body: '清晨与上午人少；入夜人挤人，看紧随身物。' },
          { title: '远处叫车', body: 'Grab 到会安可用；去美山可找住处拼车或半日团，比自己叫车省。' },
          { title: '雨季看水情', body: '秋盆河涨水与内涝时古城部分街道积水；听从现场管理，不强走。' },
        ],
        done: '会骑车走外围、知道古城步行节奏、远处交通方案明确。',
        fallback: '自行车不好骑就 Grab＋步行；雨天改为古城内活动。',
        sources: [vnat],
      },
    ],
    checklist: [
      { id: 'c-visa', text: 'e-visa 已获批且信息无误，打印随身带', topic: '证件与入境' },
      { id: 'c-passport', text: '护照有效期覆盖行程；订单离线保存', topic: '证件与入境' },
      { id: 'c-net', text: '落地 SIM 方案明确；Grab 已装', topic: '上网与手机' },
      { id: 'c-cash', text: '备少量现金；知道换汇点', topic: '支付与现金' },
      { id: 'c-pickup', text: '岘港—会安接送已约或 Grab 方案明确', topic: '岘港机场 → 会安' },
      { id: 'c-bike', text: '住处自行车可用性已确认', topic: '古城内外交通' },
      { id: 'c-rain', text: '行程在雨季时已查内涝与开放情况', topic: '古城内外交通' },
    ],
  },
  itinerary: {
    threeNights: {
      title: '3 晚：古城日与夜，加半天海',
      note: '住古城外围。每天宽松，下午回住处躲太阳。',
      days: [
        { day: '第一天', body: '抵达入住，傍晚进古城看灯笼夜景，河边晚餐。', time: '按落地安排', start: 'DAD → 会安', return: '古城外住处', links: [{ label: '抵达步骤', href: '?tab=practical#guide-arrival' }] },
        { day: '第二天', body: '清晨古城走一圈 → 上午老屋会馆 → 午后休息 → 黄昏市场与夜市。', time: '早晚进城、午后休', start: '住处 → 古城', return: '住处', links: [{ label: '古城', href: '?tab=places#area-old-town' }] },
        { day: '第三天', body: '上午骑稻田或安邦海滩半天，午后返程。', time: '半天外出、午后收尾', start: '住处 → 乡野／海滩', return: '会安 → DAD', links: [{ label: '安邦海滩', href: '?tab=places#area-an-bang' }] },
      ],
    },
    fiveNights: {
      title: '5 晚：把节奏彻底放慢',
      note: '会安小，5 晚适合度假式停留：古城两天、海滩与乡野各半天、烹调课或留白一天。',
      days: [
        { day: '第一天', body: '抵达入住，傍晚灯笼夜景。', time: '按落地安排', start: 'DAD → 会安', return: '住处', links: [{ label: '抵达步骤', href: '?tab=practical#guide-arrival' }] },
        { day: '第二天', body: '古城建筑日：老屋、会馆、市场慢慢走。', time: '早晚走、午后休', start: '古城', return: '住处', links: [{ label: '古城', href: '?tab=places#area-old-town' }] },
        { day: '第三天', body: '稻田骑行半天 + 咖啡馆一下午；晚上再进城看灯。', time: '上午骑行、下午坐', start: '乡道', return: '古城晚餐', links: [{ label: '外围稻田', href: '?tab=places#area-cam-thanh-ricefields' }] },
        { day: '第四天', body: '安邦海滩半天或烹调课一天。', time: '半天到一天', start: '按所选', return: '住处', links: [{ label: '安邦海滩', href: '?tab=places#area-an-bang' }] },
        { day: '第五天', body: '古城补漏慢走、取定制衣（如有），返程。', time: '上午慢走、午后收尾', start: '古城', return: '会安 → DAD', links: [{ label: '古城', href: '?tab=places#area-old-town' }] },
      ],
    },
  },
  safety: {
    city: '会安',
    checkedAt: '2026-09-14',
    emergencyNote: '会安治安好，主要留意雨季内涝、海滩离岸流与骑行安全。夜间古城人多看紧随身物。',
    contacts: [
      { name: '报警', number: '113', dial: '113', use: '盗窃、纠纷', source: vnat, urgent: true },
      { name: '急救', number: '115', dial: '115', use: '医疗急救；严重情况送岘港医院', source: vnat, urgent: true },
      { name: '火警', number: '114', dial: '114', use: '火灾', source: vnat, urgent: true },
      { name: '领事保护', number: '+86-10-12308', dial: '+861012308', use: consularUse, source: consularHotline },
    ],
    phrases: HELP_PHRASES,
    preparation: [
      'e-visa 打印件与电子版齐备。',
      '雨季行程查秋盆河水位与古城通行。',
      '骑行带头盔（越南法规要求机车戴盔，自行车建议）。',
      '境外医疗保险另存；严重医疗送岘港。',
      '海滩只在有救生员区域下水，留意离岸流旗。',
      '记住 113／115／114。',
    ],
    alerts: [
      { title: '雨季内涝', body: '9–1 月雨季古城常积水，街道可能封闭。听从现场管理，不蹚深水——水下可能有坑与漏电风险。', source: vnat },
      { title: '海滩离岸流', body: '安邦海滩有离岸流记录；只在有救生员与旗示区域下水，风大不下。', source: vnat },
      { title: '骑行安全', body: '乡道无灯、岔路多；日落前回程，夜间骑行走主路。', source: vnat },
      { title: '定制与购物议价', body: '裁缝店与纪念品议价是常态；先讲清价格、工期与试身次数再付定金。', source: vnat },
    ],
    scenarios: [
      { id: 'safety-documents', title: '护照丢了', steps: ['到公安报失拿证明。', '联系中国驻岘港总领馆补办旅行证件。', '保留报失证明理赔。', '出境手续留足时间。'], sources: [consular, { label: '中国驻岘港总领馆', url: 'http://danang.china-consulate.gov.cn/' }] },
      { id: 'safety-medical', title: '需要就医', steps: ['会安本地医疗有限，急重症往岘港医院送。', '拨 115 或请酒店安排车。', '保留收据走保险。'], sources: [vnat] },
      { id: 'safety-flood', title: '内涝或暴雨', steps: ['暴雨时不蹚深水、不走封闭街道。', '住处进水先断电再往高处。', '行程改室内或延后，跟住处保持沟通。'], sources: [vnat] },
      { id: 'safety-sea', title: '海上遇险', steps: ['离岸流中不逆流硬游，顺流侧向划出。', '呼救挥手；只乘有资质船只出海。', '出海前看天气与海况预报。'], sources: [vnat] },
      { id: 'safety-fraud', title: '价格或定制定金纠纷', steps: ['定金付前讲清工期、试身次数与退款条件。', '纠纷先留证（单据、聊天记录）再交涉。', '严重纠纷拨 113 或请酒店／平台协助。'], sources: [vnat] },
    ],
  },
  relatedGuides: [
    '河内城市页 → /places/vietnam/hanoi',
    '越南国家页 → /places/vietnam',
    '槟城城市页 → /places/malaysia/penang',
  ],
  sourcesNote: [
    '街区、看点与交通信息来自官方公开资料与通用旅行常识，核对日期见上。',
    '店单按「可核实」标准收录：每家店留核实日期与来源；营业与排队信息以现场和官网为准。',
    `官方入口：${city('hoi-an').officialLinks.map((l) => l.label).join('、')}。`,
  ],
}
