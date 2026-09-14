import type { Attraction } from '../../attractions'

const travelTaipei = { label: '台北旅游网', url: 'https://www.travel.taipei/' }
const taiwanTourism = { label: '台湾交通部观光署', url: 'https://eng.taiwan.net.tw/' }

export const taiwanAttractions: Attraction[] = [
  {
    id: 'national-palace-museum', city: 'taipei', name: '国立故宫博物院', nameLocal: '國立故宮博物院', type: 'art', area: '士林／外双溪',
    intro: '翠玉白菜与肉形石在这里，但真正的密度在瓷器与书画轮换展。留足半天。', duration: '3–4 小时',
    booking: {
      status: 'partial', label: '现场或线上购票',
      summary: '普通参观券 NT$350（以官网为准）；特展与联票另计。非假日不排队，假日上午人最多。',
      link: { label: '故宫官网参观资讯', url: 'https://www.npm.gov.tw/' },
      rows: [
        { item: '普通参观', ticket: '成人 NT$350（以官网为准）', reservation: '现场购票或官网线上购票' },
        { item: '特展／联票', ticket: '按档期另计', reservation: '官网查看' },
      ],
      steps: [
        { title: '先查当期展', body: '书画轮换频繁——官网「当期展览」页先看有什么；名品展出与否不定。' },
        { title: '留出往返时间', body: '故宫在士林区外双溪，捷运到士林站再转公交或打车约 15 分钟。' },
        { title: '三楼看起', body: '翠玉白菜、肉形石、毛公鼎等名品在三楼；先看名品再按兴趣选展厅。' },
      ],
      fallback: '名品行踪不定，没遇到就按展厅主题看；改去顺益原住民博物馆或士林官邸也在同一方向。',
    },
    price: '成人 NT$350（以官网为准）', hours: '09:00–17:00（以官网为准）', address: '國立故宮博物院，台北市士林區至善路二段 221 號',
    highlights: [
      { title: '三楼名品区', body: '翠玉白菜、肉形石、毛公鼎——排队看的人多，但器物是真的精致。', photo: 0 },
      { title: '瓷器与书画', body: '汝窑、青花与宋元书画是故宫的底色；轮换展出，每次来看到的不同。', photo: 1 },
      { title: '至善园与建筑', body: '馆外有至善园（凭当日票根可入）；宫殿式建筑本身是展览的一部分。', photo: 2 },
    ],
    walk: [
      { title: '三楼名品先看', body: '开门时段人最少，先看名品再从容看其他展厅。' },
      { title: '按主题选两层', body: '瓷器、玉器、书画按兴趣选；一层层仔细看比全走完值。' },
      { title: '出来走至善园', body: '庭园免费（凭票根），看完后山脚下的中式庭园再走。' },
    ],
    arrival: [
      { title: '捷运+公交', body: '淡水线士林站下车转公交（红 30 等）或打车；末段山路，公共交通班次以台北公车为准。' },
      { title: '叫车', body: '从市区打车约 20–30 分钟；回程在馆前排队区上车。' },
    ],
    tips: [
      { title: '留半天给它', body: '故宫内容密度极高，赶时间的 1 小时版本体验差；上午去人少。' },
      { title: '馆内冷', body: '展厅空调很强，夏天也带件薄外套。' },
    ],
    sources: [{ label: '故宫官网参观资讯', url: 'https://www.npm.gov.tw/' }, travelTaipei],
    restaurantIds: [], related: ['longshan-temple', 'dihua-street'],
  },
  {
    id: 'longshan-temple', city: 'taipei', name: '艋舺龙山寺', nameLocal: '艋舺龍山寺', type: 'heritage', area: '万华',
    intro: '台北最老的寺庙之一，仍是真的信仰现场。早晚的香客比白天的游客更值得看。', duration: '45 分钟–1.5 小时',
    booking: {
      status: 'walk-in', label: '免费 · 无需预约',
      summary: '全天免费开放；是活的庙宇不是博物馆，按参拜动线走。',
      link: { label: '艋舺龙山寺官网', url: 'https://www.lungshan.org.tw/' },
      rows: [
        { item: '参拜参观', ticket: '免费', reservation: '不需要；清晨与傍晚氛围最好' },
      ],
      steps: [
        { title: '清晨或傍晚去', body: '早课与傍晚的香客是龙山寺的日常；正午旅行团最密集。' },
        { title: '看建筑细节', body: '三川殿的龙柱、交趾陶与剪黏是台湾传统工艺的教科书级现场。' },
        { title: '接剥皮寮或华西街', body: '寺旁就是剥皮寮历史街区；华西街夜市在隔壁。' },
      ],
      fallback: '遇法事活动不打扰、在外围看；周边街区随时可接。',
    },
    price: '免费', hours: '约 06:00–22:00（以寺方公布为准）', address: '艋舺龍山寺，台北市萬華區廣州街 211 號',
    highlights: [
      { title: '三川殿与龙柱', body: '前殿的蟠龙柱与彩绘门神是看点；抬头看屋顶的剪黏。', photo: 0 },
      { title: '后殿诸神', body: '后殿按神明分区，妈祖、关公、文昌帝君同在——民间信仰的「总铺」。', photo: 1 },
      { title: '香炉与掷筊', body: '看香客掷筊问签是理解庙宇的最好方式；站远一点看，不打扰。', photo: 2 },
    ],
    walk: [
      { title: '前殿到中庭', body: '三川殿进，中庭看香炉与正殿；右侧动线绕到后殿。' },
      { title: '后殿绕一圈', body: '各龛神像不同，慢慢看；月老龛总是最热闹。' },
      { title: '出门接剥皮寮', body: '东侧就是剥皮寮街区，两个内容连起来刚好半天。' },
    ],
    arrival: [
      { title: '捷运', body: '板南线龙山寺站 1 号口，出站即达。' },
      { title: '步行串联', body: '与剥皮寮、华西街夜市步行相连。' },
    ],
    tips: [
      { title: '这是活的庙宇', body: '拍照看场合，正殿内按现场标识；不打扰掷筊与诵经的人。' },
      { title: '周边注意', body: '万华老城区人流杂，看好随身物；夜市消费先问价。' },
    ],
    sources: [{ label: '艋舺龙山寺官网', url: 'https://www.lungshan.org.tw/' }, travelTaipei],
    restaurantIds: [], related: ['bopiliao', 'dihua-street'],
  },
  {
    id: 'bopiliao', city: 'taipei', name: '剥皮寮历史街区', nameLocal: '剝皮寮歷史街區', type: 'heritage', area: '万华',
    intro: '整片修复的清末民初街区，免费入场。红砖瓦拱廊配上偶尔的展，半小时到一小时。', duration: '45 分钟–1 小时',
    booking: {
      status: 'walk-in', label: '免费 · 周一休',
      summary: '修复街区免费开放；周一休街，其余时间 09:00–18:00 开放（以官网为准）。',
      link: { label: '台北旅游网景点页', url: 'https://www.travel.taipei/' },
      rows: [
        { item: '街区参观', ticket: '免费', reservation: '不需要；周一休' },
      ],
      steps: [
        { title: '和龙山寺排一起', body: '两处隔一条街，组合起来是万华半天；先看寺再看街。' },
        { title: '看有没有展', body: '街区内常设小型展览与装置，内容随档期变——到现场看海报。' },
      ],
      fallback: '周一休街改走大稻埕；都是老街区，气质相近。',
    },
    price: '免费', hours: '09:00–18:00；周一休', address: '剝皮寮歷史街區，台北市萬華區康定路 173 巷',
    highlights: [
      { title: '红砖拱廊街', body: '整条清代街廓修复后保留原貌；红砖、木窗与拱廊是拍照背景，也是历史现场。', photo: 0 },
      { title: '店内看建筑', body: '部分店屋可入内看剖面与老物件，理解店屋怎么住人。', photo: 1 },
      { title: '与龙山寺同框', body: '街区与现代台北、龙山寺紧挨着，新旧叠在一起是万华的气质。', photo: 2 },
    ],
    walk: [
      { title: '从康定路侧进', body: '沿拱廊走一遍先，再看能进哪些店屋。' },
      { title: '看展览与剖面', body: '当期的展随档期变化；建筑本身的剖面说明值得读。' },
      { title: '接华西街或广州街', body: '走完接华西街夜市方向，或回龙山寺站。' },
    ],
    arrival: [
      { title: '捷运', body: '板南线龙山寺站步行约 5 分钟。' },
      { title: '步行串联', body: '与龙山寺、华西街在同一街坊内。' },
    ],
    tips: [
      { title: '周一休街', body: '安排行程时避开周一；节庆活动日更热闹。' },
      { title: '展期不定', body: '把剥皮寮当「街区散步」而不是「看展」，有展是加分项。' },
    ],
    sources: [travelTaipei],
    restaurantIds: [], related: ['longshan-temple'],
  },
  {
    id: 'cks-memorial', city: 'taipei', name: '中正纪念堂', nameLocal: '中正紀念堂', type: 'heritage', area: '中正区',
    intro: '白色主建筑与自由广场牌楼；整点换岗仪式仍是招牌。广场本身比建筑好逛。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '免费 · 无需预约',
      summary: '广场与园区免费；纪念堂展厅免费入场，换岗仪式按整点进行（以官网为准）。',
      link: { label: '中正纪念堂官网', url: 'https://www.cksmh.gov.tw/' },
      rows: [
        { item: '园区与广场', ticket: '免费', reservation: '不需要' },
        { item: '展厅与换岗', ticket: '免费', reservation: '整点仪式；馆内按开放时间' },
      ],
      steps: [
        { title: '看整点换岗', body: '仪队换岗约每小时一次（以官网为准）；想占好位置提前几分钟到。' },
        { title: '牌楼与大中至正', body: '从自由广场牌楼下往里走是最经典的进入方式。' },
        { title: '两侧园廊', body: '国家戏剧院与音乐厅在广场两侧；园区鸽群与老人下棋是日常。' },
      ],
      fallback: '不看换岗也行——广场与两侧的回廊本身就值得走；雨天进馆内展厅。',
    },
    price: '免费', hours: '园区 05:00–24:00；馆内 09:00–18:00', address: '中正紀念堂，台北市中正區中山南路 21 號',
    highlights: [
      { title: '自由广场牌楼', body: '广场入口的牌楼是台北的地标画面；从牌楼看主建筑的轴线最正。', photo: 0 },
      { title: '换岗仪式', body: '整点的仪队交接仍在进行，约十分钟；在馆内大厅举行。', photo: 1 },
      { title: '两厅院与回廊', body: '广场两侧的戏剧院与音乐厅是传统宫殿式屋顶；回廊下常有学生练舞。', photo: 2 },
    ],
    walk: [
      { title: '牌楼进、绕广场', body: '从中山南路进牌楼，沿广场边走一圈看两庑。' },
      { title: '馆内看展', body: '展厅有常设与特展；换岗在大厅，提前到。' },
      { title: '接东门或植物园', body: '东侧接东门／永康街方向吃饭，西侧可接植物园。' },
    ],
    arrival: [
      { title: '捷运', body: '淡水信义线／松山新店线中正纪念堂站 5 号口直达园区。' },
      { title: '步行串联', body: '与总统府、二二八公园、植物园步行可串。' },
    ],
    tips: [
      { title: '换岗看整点', body: '仪式时间偶有调整，以官网公告为准；提前占正面位置。' },
      { title: '傍晚的广场', body: '傍晚广场人少光好，本地人在此散步遛狗——比白天更像城市客厅。' },
    ],
    sources: [{ label: '中正纪念堂官网', url: 'https://www.cksmh.gov.tw/' }, travelTaipei],
    restaurantIds: ['jin-feng'], related: ['longshan-temple'],
  },
  {
    id: 'dihua-street', city: 'taipei', name: '迪化街与大稻埕', nameLocal: '迪化街', type: 'waterfront', area: '大同／大稻埕',
    intro: '南北货与中药行的老街，过年前是全台北最挤的一条街。平日走起来是另一种安静。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '开放街区',
      summary: '开放街道无门票；店铺多为白天营业，年货大街时段（农历年前）另当别论。',
      link: { label: '台北旅游网景点页', url: 'https://www.travel.taipei/' },
      rows: [
        { item: '街区散步', ticket: '免费', reservation: '不需要；店铺约 10:00–18:00' },
      ],
      steps: [
        { title: '平日去', body: '农历年前的迪化街是年货战场；平日才能看清店屋与街廓。' },
        { title: '南北货看懂再买', body: '中药、干货、布匹按行分区；老街的「行情」比观光纪念品有意思。' },
        { title: '接霞海城隍庙', body: '街上的霞海城隍庙求姻缘出名，顺路看。' },
      ],
      fallback: '店铺关早的傍晚转去河边：大稻埕码头看淡水河落日。',
    },
    price: '免费', hours: '街区全天；店铺约 10:00–18:00', address: '迪化街，台北市大同區迪化街一段',
    highlights: [
      { title: '长条店屋与骑楼', body: '闽南式店屋连成的骑楼街，看立面比进店先。', photo: 0 },
      { title: '南北货行', body: '干贝、香菇、药材铺在骑楼下开店——这条街仍是批发市场。', photo: 1 },
      { title: '大稻埕码头', body: '街尾接淡水河边码头，傍晚看河景收尾。', photo: 2 },
    ],
    walk: [
      { title: '从永乐市场侧进', body: '从南京西路／永乐市场一侧进迪化街，往北走。' },
      { title: '骑楼慢走', body: '骑楼下走，看各行的招牌与货色；霞海城隍庙在中段。' },
      { title: '河滨收尾', body: '街尽头接大稻埕码头；傍晚风大，看落日再走。' },
    ],
    arrival: [
      { title: '捷运', body: '松山新店线北门站或大桥头站步行约 10 分钟。' },
      { title: '步行串联', body: '与宁夏夜市、建成圆环方向步行相连。' },
    ],
    tips: [
      { title: '年货季例外', body: '农历年前的迪化街是全城最挤的街——专程来感受可以，散步就别。' },
      { title: '店铺收得早', body: '批发行傍晚关得早；喝茶买货趁下午。' },
    ],
    sources: [travelTaipei, taiwanTourism],
    restaurantIds: [], related: ['longshan-temple', 'national-palace-museum'],
  },
  {
    id: 'xiangshan', city: 'taipei', name: '象山步道', nameLocal: '象山登山步道', type: 'nature', area: '信义',
    intro: '二十分钟台阶换一张台北 101 的明信片机位。傍晚上山，看亮灯。', duration: '1–1.5 小时（含停留）',
    booking: {
      status: 'walk-in', label: '免费 · 全天开放',
      summary: '登山步道免费全天开放；全程台阶，到摄影平台约 15–20 分钟。',
      link: { label: '台北旅游网景点页', url: 'https://www.travel.taipei/' },
      rows: [
        { item: '步道', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '傍晚上山', body: '日落前上山占机位；看 101 亮灯与夜景是这里的意义。' },
        { title: '穿能走的鞋', body: '全程台阶且部分较陡；雨后石阶湿滑。' },
        { title: '摄影平台就够用', body: '多数人只到六巨石／摄影平台，再往上是连续山路，按体力决定。' },
      ],
      fallback: '雾霾或雨天展望差，改信义区室内行程；夜爬注意结伴与头灯。',
    },
    price: '免费', hours: '全天开放（夜间注意安全）', address: '象山步道入口，台北市信義區信義路五段 150 巷',
    highlights: [
      { title: '101 明信片机位', body: '摄影平台看 101 与信义区天际线；黄昏是黄金时段。', photo: 0 },
      { title: '六巨石', body: '步道中途的巨大岩石是经典取景位；爬上去看更开阔。', photo: 1 },
      { title: '台阶林荫', body: '步道本身在城市边的山里，树荫与虫鸣在 20 分钟内换一片天。', photo: 2 },
    ],
    walk: [
      { title: '信义路五段入口', body: '从信义路五段 150 巷或松仁路侧上山；台阶连续向上。' },
      { title: '摄影平台停留', body: '到平台先休息看景；想更安静继续往上走。' },
      { title: '原路下或接虎山', body: '步道系统接虎山、狮山；时间够可串一段。' },
    ],
    arrival: [
      { title: '捷运', body: '淡水信义线象山站 2 号口步行约 10 分钟到登山口。' },
      { title: '从 101', body: '从台北 101 方向步行约 15–20 分钟到登山口。' },
    ],
    tips: [
      { title: '防蚊与水', body: '山林步道带水和防蚊；夏天闷热。' },
      { title: '夜景机位早占', body: '黄昏后摄影平台人多；想拍就早到占位置。' },
    ],
    sources: [travelTaipei],
    restaurantIds: ['din-tai-fung'], related: [],
  },
]
