import type { Attraction } from '../../attractions'

const vietnamTourism = { label: '越南国家旅游局', url: 'https://vietnam.travel/' }
const hanoiTicket = { label: '门票以现场与官方公布为准', url: 'https://vietnam.travel/' }

export const vietnamAttractions: Attraction[] = [
  {
    id: 'hoan-kiem-lake', city: 'hanoi', name: '还剑湖与玉山祠', nameLocal: 'Hồ Hoàn Kiếm · Đền Ngọc Sơn', type: 'waterfront', area: '老城',
    intro: '河内人的清晨公园与老城中心。湖边走一圈免费，湖心小岛上的玉山祠收门票。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '湖边免费 · 玉山祠小门票',
      summary: '环湖步道免费全天开放；玉山祠经栖旭桥进入，门票以现场为准（约 30,000₫）。',
      link: vietnamTourism,
      rows: [
        { item: '环湖步道', ticket: '免费', reservation: '不需要；清晨与傍晚最热闹' },
        { item: '玉山祠', ticket: '约 30,000₫（以现场为准）', reservation: '现场购票' },
      ],
      steps: [
        { title: '清晨去看河内醒来', body: '06:00–08:00 湖边是太极、慢跑与跳舞的本地日常——这时候的还剑湖是市民的。' },
        { title: '过红桥上岛', body: '朱红的栖旭桥通玉山祠；买票上岛看祠堂与湖心塔。' },
        { title: '周末步行街', body: '周五晚至周日湖边部分路段封车成步行街，氛围不同。' },
      ],
      fallback: '玉山祠很小，不进也行；环湖散步本身才是内容。',
    },
    price: '湖免费；玉山祠约 30,000₫', hours: '湖区全天；玉山祠约 08:00–17:00', address: 'Đền Ngọc Sơn, Đinh Tiên Hoàng, Hoàn Kiếm, Hà Nội',
    highlights: [
      { title: '湖心的龟塔', body: '湖中小塔是河内的象征，只能在岸边远观；清晨雾气里最上镜。', photo: 0 },
      { title: '栖旭桥', body: '朱红色木桥连到玉山祠；过桥即入祠。', photo: 1 },
      { title: '湖边晨练', body: '太极、羽毛球、交谊舞——看河内人怎么用这个湖，比看湖有意思。', photo: 2 },
    ],
    walk: [
      { title: '顺时针绕湖一圈', body: '全程约 1.5 公里；清晨或傍晚走，注意避让摩托。' },
      { title: '北端上岛看祠', body: '买票过栖旭桥；祠小，15 分钟看完。' },
      { title: '回老城喝咖啡', body: '湖边一圈后拐进老城街巷，找鸡蛋咖啡收尾。' },
    ],
    arrival: [
      { title: '步行', body: '老城步行即达；湖边环道注意车流。' },
      { title: '打车', body: '定位还剑湖北侧或玉山祠；湖边车多，下车点选路口。' },
    ],
    tips: [
      { title: '清晨最好', body: '06:00–08:00 的湖边是本地生活现场；白天是游客区。' },
      { title: '周末封路', body: '周五晚至周日湖边部分道路变步行街；打车点会变。' },
    ],
    sources: [vietnamTourism],
    restaurantIds: ['cafe-giang', 'cafe-dinh'], related: ['old-quarter-hanoi', 'st-joseph-cathedral'],
  },
  {
    id: 'temple-of-literature', city: 'hanoi', name: '文庙', nameLocal: 'Văn Miếu', type: 'heritage', area: '巴亭',
    intro: '越南第一所大学与孔庙建筑群，进士碑林是镇馆之宝。安静程度与老城成反比。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '现场购票',
      summary: '门票约 70,000₫（以现场为准）；08:00–17:00 开放。',
      link: hanoiTicket,
      rows: [
        { item: '文庙参观', ticket: '约 70,000₫（以现场为准）', reservation: '现场购票' },
      ],
      steps: [
        { title: '上午去', body: '文庙庭院幽深，上午光线好且人少；旅行团集中在 10:00 后。' },
        { title: '按五进庭院走', body: '棂星门—奎文阁—进士碑林—大成殿一条中轴，顺着走。' },
        { title: '进士碑林细看', body: '82 块驮在龟背上的进士碑是联合国文献遗产；看碑上的汉字与年代。' },
      ],
      fallback: '文庙不大，看完接巴亭区或回老城；内容不够就加越南美术馆。',
    },
    price: '约 70,000₫（以现场为准）', hours: '08:00–17:00', address: 'Văn Miếu, 58 Quốc Tử Giám, Đống Đa, Hà Nội',
    highlights: [
      { title: '进士碑林', body: '石龟驮碑是文庙的标志；每块碑记一科进士名录，汉字刻痕清晰。', photo: 0 },
      { title: '五进庭院', body: '层层门与庭院递进，奎文阁是河内护照上印的建筑。', photo: 1 },
      { title: '大成殿与古乐', body: '大成殿祭孔；偶有传统音乐展演，碰上就听。', photo: 2 },
    ],
    walk: [
      { title: '中轴走五进', body: '按棂星门到后花园的中轴走，别漏掉碑林院。' },
      { title: '碑林慢看', body: '每块碑年代不同，看龟的造型变化。' },
      { title: '出来接巴亭', body: '文庙在巴亭区边缘，与胡志明建筑群步行约 15 分钟。' },
    ],
    arrival: [
      { title: '打车或公交', body: '距老城约 2 公里；Grab 或出租到门口。' },
      { title: '步行串联', body: '与胡志明陵、独柱寺在同一方向，可串成半天。' },
    ],
    tips: [
      { title: '汉字遗迹', body: '碑与楹联全是汉字——看得懂的人在这里有优势。' },
      { title: '毕业季热闹', body: '越南学生毕业照热门地，遇上就看看热闹。' },
    ],
    sources: [hanoiTicket, vietnamTourism],
    restaurantIds: ['koto-van-mieu'], related: ['hcm-mausoleum', 'old-quarter-hanoi'],
  },
  {
    id: 'hcm-mausoleum', city: 'hanoi', name: '胡志明纪念建筑群', nameLocal: 'Lăng Chủ tịch Hồ Chí Minh', type: 'heritage', area: '巴亭',
    intro: '巴亭广场上的国家圣地：陵、故居、独柱寺打包看。着装与安检最严的一处。', duration: '2–3 小时',
    booking: {
      status: 'check', label: '只上午开放 · 周一周五闭陵',
      summary: '胡志明陵仅上午开放，周一与周五闭陵，每年秋季有维护期；故居与博物馆单独收费。出发前务必核对当天开放。',
      link: vietnamTourism,
      rows: [
        { item: '胡志明陵', ticket: '免费', reservation: '仅上午；周一、周五闭陵；排队安检' },
        { item: '主席府与故居', ticket: '另收费', reservation: '现场购票' },
        { item: '胡志明博物馆', ticket: '约 40,000₫（以现场为准）', reservation: '现场购票' },
      ],
      steps: [
        { title: '确认开放日', body: '周一、周五闭陵，每年约 9–11 月遗体维护期不开放——出行前在官网或酒店核实。' },
        { title: '早到排队', body: '陵区安检严格：寄存相机与包、仪容整齐（长裤/裙、有袖上衣）、列队缓步通过。' },
        { title: '陵—故居—独柱寺', body: '动线：巴亭广场—陵—主席府花园—高脚屋故居—独柱寺，一个上午走完。' },
      ],
      fallback: '陵关闭时故居与博物馆仍可参观；整个巴亭广场散步免费。',
    },
    price: '陵免费；故居与博物馆另计', hours: '上午约 07:30–10:30（以官方公告为准）', address: 'Lăng Hồ Chí Minh, Quảng trường Ba Đình, Hà Nội',
    highlights: [
      { title: '巴亭广场与陵墓', body: '灰色花岗岩陵墓立在广场正中；1945 年胡志明在此宣读独立宣言。', photo: 0 },
      { title: '高脚屋故居', body: '胡志明生前居住的高脚木屋简朴至极，与背后的宫殿式主席府对照强烈。', photo: 1 },
      { title: '独柱寺', body: '一根石柱上的莲花小庙，越南最古老的建筑意象之一。', photo: 2 },
    ],
    walk: [
      { title: '广场到陵墓排队', body: '早到排安检队；陵内不许停步、不许拍照、脱帽。' },
      { title: '故居花园慢走', body: '看完陵墓进故居区，高脚屋与芒果园安静得多。' },
      { title: '独柱寺收尾', body: '独柱寺在博物馆旁，看十分钟即可。' },
    ],
    arrival: [
      { title: '打车或公交', body: '距老城约 3 公里；打车到巴亭广场入口。' },
      { title: '安检注意', body: '大包与相机须寄存；带水进陵区有限制，按现场指引。' },
    ],
    tips: [
      { title: '着装与规矩', body: '短裤、无袖、拖鞋可能被拒；陵内肃穆，不拍照不停步。' },
      { title: '只上午开放', body: '把它排在上午；错过就只能看外部与故居。' },
    ],
    sources: [vietnamTourism],
    restaurantIds: ['koto-van-mieu'], related: ['temple-of-literature'],
  },
  {
    id: 'st-joseph-cathedral', city: 'hanoi', name: '圣若瑟大教堂', nameLocal: 'Nhà thờ Lớn Hà Nội', type: 'heritage', area: '法区',
    intro: '河内最老的天主堂，新哥特式立面立在法区街角。开放时间有限，外观随时可看。', duration: '30 分钟–1 小时',
    booking: {
      status: 'walk-in', label: '免费 · 按弥撒与开放时段',
      summary: '外观随时可看；入内参观按开放与弥撒时段（弥撒时间不开放观光）。',
      link: vietnamTourism,
      rows: [
        { item: '外观与广场', ticket: '免费', reservation: '全天可看' },
        { item: '入内参观', ticket: '免费', reservation: '按开放时段；弥撒期间不进' },
      ],
      steps: [
        { title: '看立面就够', body: '大教堂的价值大半在立面与广场；开放入内时段有限，碰上是加分。' },
        { title: '弥撒时段别进', body: '周日与早晚弥撒期间不开放参观；安静从旁路过。' },
        { title: '接法区散步', body: '教堂所在街区是法区最精华的一段，周边咖啡馆密集。' },
      ],
      fallback: '关着就看立面绕广场一圈；法区散步内容不受影响。',
    },
    price: '免费', hours: '按开放与弥撒时段（以现场为准）', address: 'Nhà thờ Lớn, 40 Nhà Chung, Hoàn Kiếm, Hà Nội',
    highlights: [
      { title: '新哥特立面', body: '双塔立面立在窄街上，河内「小巴黎」的一角。', photo: 0 },
      { title: '堂内彩窗', body: '开放时段入内看彩窗与拱顶；本地信徒的弥撒仍在进行。', photo: 1 },
      { title: '教堂前的街角', body: 'Nhà Chung 街与 Nhà Thờ 街的咖啡馆把教堂框进日常——坐对面喝一杯看教堂。', photo: 2 },
    ],
    walk: [
      { title: '广场看立面', body: '先在广场看正面，再绕到侧面看塔与老街的关系。' },
      { title: '开放就入内', body: '开放时段安静入内看彩窗；弥撒时在外等或离开。' },
      { title: '法区咖啡收尾', body: '教堂对面的咖啡馆是河内最早的咖啡区之一。' },
    ],
    arrival: [
      { title: '步行', body: '从还剑湖步行约 10 分钟；法区核心位置。' },
      { title: '打车', body: '定位 Nhà thờ Lớn；周边街道窄，步行最后一段。' },
    ],
    tips: [
      { title: '开放时段不定', body: '入内参观时间以现场为准；弥撒时段不开放。' },
      { title: '法区连着走', body: '教堂—歌剧院—法国区林荫街是同一条散步线。' },
    ],
    sources: [vietnamTourism],
    restaurantIds: ['cafe-giang'], related: ['hoan-kiem-lake', 'old-quarter-hanoi'],
  },
  {
    id: 'vietnam-ethnology-museum', city: 'hanoi', name: '越南民族学博物馆', nameLocal: 'Bảo tàng Dân tộc học Việt Nam', type: 'art', area: '纸桥郡',
    intro: '54 个民族的实物与户外原尺寸民居。比想象中好看，是理解越南的最好背景课。', duration: '2–3 小时',
    booking: {
      status: 'walk-in', label: '现场购票 · 周一休',
      summary: '门票约 40,000₫（以现场为准）；周一休馆，其余时间 08:30–17:30。',
      link: { label: '越南民族学博物馆', url: 'https://vme.org.vn/' },
      rows: [
        { item: '常设展与户外区', ticket: '约 40,000₫（以现场为准）', reservation: '现场购票' },
      ],
      steps: [
        { title: '先看馆内再看户外', body: '馆内按民族分区；户外园区有原尺寸高脚屋与公共屋，重点看这里。' },
        { title: '打车去', body: '博物馆在市区西侧（纸桥郡），距老城约 7 公里——打车最方便。' },
        { title: '留 2 小时以上', body: '户外区要走路看房子，别排太紧。' },
      ],
      fallback: '周一休馆改去文庙或美术馆；打车路上看河内街景也是内容。',
    },
    price: '约 40,000₫（以现场为准）', hours: '08:30–17:30；周一休馆', address: 'Bảo tàng Dân tộc học, Nguyễn Văn Huyên, Cầu Giấy, Hà Nội',
    highlights: [
      { title: '户外民居园', body: '埃第族长屋、巴拿族公共屋等原尺寸建筑可以直接走进去——博物馆最好的部分。', photo: 0 },
      { title: '54 个民族展厅', body: '按民族分的服饰、器具与生活场景，是认识越南多样性的速成课。', photo: 1 },
      { title: '水傀儡与仪式展', body: '馆内常有水傀儡戏与传统仪式展示，赶上就看。', photo: 2 },
    ],
    walk: [
      { title: '馆内一小时', body: '先按民族分区走主线，选感兴趣的细看。' },
      { title: '户外区重点看', body: '高脚屋与公共屋逐栋走进去；这是别处看不到的实物。' },
      { title: '回城方向吃饭', body: '博物馆一带吃的少；回老城或西湖方向解决午饭。' },
    ],
    arrival: [
      { title: '打车', body: '距老城约 7 公里，Grab/出租约 20–30 分钟；回程在门口叫车。' },
      { title: '公交', body: '有公交线路可达但耗时长；打车更实际。' },
    ],
    tips: [
      { title: '周一休馆', body: '安排行程避开周一；周五下午人最少。' },
      { title: '留体力给户外', body: '户外园区大，穿能走路的鞋；夏天带水。' },
    ],
    sources: [{ label: '越南民族学博物馆', url: 'https://vme.org.vn/' }, vietnamTourism],
    restaurantIds: [], related: ['temple-of-literature'],
  },
  {
    id: 'old-quarter-hanoi', city: 'hanoi', name: '三十六行街', nameLocal: 'Phố cổ Hà Nội', type: 'waterfront', area: '老城',
    intro: '一千多年的街巷迷宫，每条街曾专售一行。来这里不是看一个点，是把自己丢进巷子里走。', duration: '2–3 小时',
    booking: {
      status: 'walk-in', label: '开放街区',
      summary: '老街区全天开放；早上 9 点前是批发市场时段，最能看到它本来的样子。',
      link: vietnamTourism,
      rows: [
        { item: '街区散步', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '不设目标地走', body: '老城的价值在迷路：Hang Bac 卖银、Hang Gai 卖丝、Hang Ma 卖纸品——街名就是行业。' },
        { title: '清晨看批发', body: '早市与卸货的街巷是本地人时间；看批货进档口比看游客商店有意思。' },
        { title: '火车街时段', body: '火车街（Train Street）近年因安全管制时开时关——以现场与官方最新指引为准，不强闯。' },
      ],
      fallback: '人太多就往法区或湖边撤；老城的密度允许随时换一条街。',
    },
    price: '免费', hours: '全天；清晨 06:00–09:00 是批发时段', address: 'Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội',
    highlights: [
      { title: '街名即行业', body: 'Hang Bac 银器、Hang Gai 丝绸、Thuoc Bac 药材——按街名认行业是看懂老城的方法。', photo: 0 },
      { title: '筒子楼与巷院', body: '窄面宽深的「管屋」排在一起，巷子里藏着大宅与寺庙。', photo: 1 },
      { title: '白梅夜市与街头摊', body: '入夜后街头的排挡与夜市是老城的另一面；周五至周日夜市开。', photo: 2 },
    ],
    walk: [
      { title: '从湖边拐进去', body: '从还剑湖北侧任何一条巷进老城；往 Hang Bac、Hang Ma 方向走。' },
      { title: '看门牌认行业', body: '每条街仍有主营——看门面招牌认街的行当。' },
      { title: '拐进同春市场', body: '老城边缘的同春市场是最大的批发市场，乱但真。' },
    ],
    arrival: [
      { title: '步行', body: '老城即住处步行范围；摩托多，过街匀速走别停。' },
      { title: '打车到外围', body: '巷内不适合车；到还剑湖北侧下车再步行。' },
    ],
    tips: [
      { title: '摩托过街诀窍', body: '匀速直行让车绕你——停下或急退反而危险。' },
      { title: '火车街别硬闯', body: '管制随政策变；有人拉客进咖啡店「保证看车」的多半是钻空子，自行判断。' },
    ],
    sources: [vietnamTourism],
    restaurantIds: ['pho-bat-dan', 'banh-mi-25', 'xoi-yen'], related: ['hoan-kiem-lake', 'st-joseph-cathedral'],
  },
  {
    id: 'japanese-bridge', city: 'hoi-an', name: '日本廊桥', nameLocal: 'Chùa Cầu', type: 'heritage', area: '古城',
    intro: '会安的象征：16 世纪日本商人建的廊桥，桥内供庙。古城通票覆盖。', duration: '30 分钟–1 小时',
    booking: {
      status: 'walk-in', label: '含在古城通票',
      summary: '会安古城通票（约 120,000₫）含 5 个点，日本廊桥是其一；桥本身在街口随时可看外观。',
      link: vietnamTourism,
      rows: [
        { item: '古城通票', ticket: '约 120,000₫（以现场为准）', reservation: '通票含 5 个参观点，当天有效' },
        { item: '桥内参观', ticket: '用通票点数', reservation: '现场检票' },
      ],
      steps: [
        { title: '先买通票', body: '古城通票在入口售票点购买，可选 5 个参观点；桥是第一站。' },
        { title: '清晨与晚上各看一次', body: '白天的桥看结构，夜里打灯后是另一张脸——都在同一条路上。' },
        { title: '桥内看庙', body: '桥内小庙供北帝；内部很小，检票进去几分钟看完。' },
      ],
      fallback: '只拍外观不检票也行；桥周边任何时候都能看。',
    },
    price: '古城通票约 120,000₫（含 5 点）', hours: '古城全天；参观点约 07:00–21:00', address: 'Chùa Cầu, Nguyễn Thị Minh Khai, Hội An',
    highlights: [
      { title: '桥本身', body: '朱漆木廊桥跨在小渠上，两端各有猴与犬的石像——日本纪年的起点与终点。', photo: 0 },
      { title: '桥内小庙', body: '桥顶下供着玄天北帝；桥庙合一是它独特的形制。', photo: 1 },
      { title: '夜色中的桥', body: '入夜后灯笼亮起，桥与河灯是会安最经典的画面。', photo: 2 },
    ],
    walk: [
      { title: '白天先看结构', body: '从两端看桥身与石像；过桥到对岸老街。' },
      { title: '入桥内看庙', body: '用通票点数进桥内；空间小，看完即出。' },
      { title: '夜里回来看灯', body: '晚饭后回河边看桥与灯笼——会安的正确收尾。' },
    ],
    arrival: [
      { title: '步行', body: '古城内步行即达；入口售票点在主要街口。' },
      { title: '从岘港', body: '岘港打车约 45 分钟；到古城外围下车步行。' },
    ],
    tips: [
      { title: '通票规划', body: '通票 5 个点自己选——日本桥+一处会馆+一处老宅+一处祠堂+一处博物馆刚好。' },
      { title: '水淹季', body: '秋雨季会安偶有淹水；看天气预报，淹水期改安排。' },
    ],
    sources: [vietnamTourism],
    restaurantIds: ['banh-mi-phuong', 'mot-hoi-an'], related: ['fujian-hall', 'tan-ky-house', 'hoi-an-lantern'],
  },
  {
    id: 'fujian-hall', city: 'hoi-an', name: '福建会馆', nameLocal: 'Hội quán Phúc Kiến', type: 'heritage', area: '古城',
    intro: '古城里最华丽的会馆：天后宫的门楼与庭院，闽商当年在会安的分量都在墙上。', duration: '45 分钟–1 小时',
    booking: {
      status: 'walk-in', label: '含在古城通票',
      summary: '用古城通票一个点进入；会馆仍在做祭祀，不是纯景点。',
      link: vietnamTourism,
      rows: [
        { item: '会馆参观', ticket: '用通票点数', reservation: '现场检票' },
      ],
      steps: [
        { title: '通票点数分配', body: '把会馆放进通票 5 点内；它是最值得用点的一处。' },
        { title: '看门楼与庭院', body: '三川门、天井、正殿天后像——按中轴看进去。' },
        { title: '看瓷片与龙柱', body: '屋脊上的剪瓷与龙柱是闽南工艺的海外样本。' },
      ],
      fallback: '会馆有时举办法事——遇上有仪式在外围看，不打扰。',
    },
    price: '用古城通票', hours: '约 07:00–18:00（以现场为准）', address: 'Hội quán Phúc Kiến, 46 Trần Phú, Hội An',
    highlights: [
      { title: '三川门与庭院', body: '门楼的瓷片与雕工是会馆的脸面；庭院天井采光极好。', photo: 0 },
      { title: '天后殿', body: '正殿供妈祖——会安港口城市身份的直接证据。', photo: 1 },
      { title: '剪瓷与龙柱', body: '屋顶的剪瓷龙与正殿龙柱细看是闽工的密集展示。', photo: 2 },
    ],
    walk: [
      { title: '陈富路进', body: '会馆在古城主街 Trần Phú 上；门脸显眼。' },
      { title: '庭院正殿细看', body: '看妈祖像与两侧的陪祀；遇祭祀安静绕行。' },
      { title: '接老宅与河边', body: '出会馆往东接老宅方向，或回河边。' },
    ],
    arrival: [
      { title: '步行', body: '古城内步行；与日本桥同一条主街。' },
    ],
    tips: [
      { title: '仍是庙宇', body: '会馆内祭祀进行中；拍照看场合。' },
      { title: '广肇会馆备选', body: '若通票点数紧张，广肇会馆与潮州会馆也在附近可替换。' },
    ],
    sources: [vietnamTourism],
    restaurantIds: [], related: ['japanese-bridge', 'tan-ky-house'],
  },
  {
    id: 'tan-ky-house', city: 'hoi-an', name: '进记老宅', nameLocal: 'Nhà cổ Tấn Ký', type: 'heritage', area: '古城',
    intro: '两百多年七代人住过的商人老宅，中越日三种建筑语言在一栋房子里。', duration: '30–45 分钟',
    booking: {
      status: 'walk-in', label: '含在古城通票',
      summary: '用通票点数进入；宅子有人值守讲解，细看梁柱与洪水刻痕。',
      link: vietnamTourism,
      rows: [
        { item: '老宅参观', ticket: '用通票点数', reservation: '现场检票' },
      ],
      steps: [
        { title: '听宅内讲解', body: '值守人员会简讲宅史与建筑细节；跟着听一段比自看值。' },
        { title: '看洪水刻痕', body: '墙上刻着历年水淹高度——会安与水共生的直接证据。' },
        { title: '看结构与采光', body: '天井、木梁与三层空间是怎么塞进窄面宽里的，值得看。' },
      ],
      fallback: '老宅多处可选，通票点数不够就选一处细看；进记与德安号等可替换。',
    },
    price: '用古城通票', hours: '约 08:00–17:30（以现场为准）', address: 'Nhà cổ Tấn Ký, 101 Nguyễn Thái Học, Hội An',
    highlights: [
      { title: '三合一的建筑', body: '中式天井、日式屋顶、越式排门在一栋宅子里共存——看梁柱就看得懂。', photo: 0 },
      { title: '洪水刻痕', body: '后墙上的水位线记了几十年的秋盆河洪水；比任何展牌都直观。', photo: 1 },
      { title: '七代人的商宅', body: '前店后宅的格局保留完整，账房与货仓位置仍看得出。', photo: 2 },
    ],
    walk: [
      { title: '前门进看铺面', body: '阮太学街一侧的门面是当年的店面；先看清格局。' },
      { title: '听讲解看细节', body: '跟着宅内讲解走一遍梁柱与刻痕。' },
      { title: '后门通河边', body: '老宅后门通河边街——商宅前街后河的设计一目了然。' },
    ],
    arrival: [
      { title: '步行', body: '古城阮太学街上步行即达。' },
    ],
    tips: [
      { title: '讲解在宅内', body: '宅内值守讲解用英语为主；听不懂就自己看刻痕与结构。' },
      { title: '挑一处老宅细看', body: '会安老宅不只一处；时间紧就细看进记一处即可。' },
    ],
    sources: [vietnamTourism],
    restaurantIds: ['morning-glory'], related: ['japanese-bridge', 'fujian-hall'],
  },
  {
    id: 'hoi-an-market', city: 'hoi-an', name: '会安中央市场', nameLocal: 'Chợ Hội An', type: 'waterfront', area: '古城东',
    intro: '河边市场，清晨是本地人时间。吃一碗高楼面当早餐，看卸货与卖菜。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '开放市场',
      summary: '免费进入；清晨最旺，午后市内渐收。',
      link: vietnamTourism,
      rows: [
        { item: '市场', ticket: '免费', reservation: '不需要；清晨至上午最佳' },
        { item: '吃摊', ticket: '按摊自付', reservation: '现金为主' },
      ],
      steps: [
        { title: '清晨去', body: '07:00–09:00 是市场最活的时候；河边卸货、摊头摆菜都在这个时段。' },
        { title: '在市场里吃早餐', body: '市场内食摊有高楼面（cao lầu）与法包——市场里的一碗比餐厅版本更接近日常。' },
        { title: '河边看船', body: '市场后侧接河埠头，看船卸货收尾。' },
      ],
      fallback: '中午后市场渐收，改去古城内；市场气味与拥挤不适应就走外围。',
    },
    price: '免费', hours: '清晨至午后（约 05:00–14:00 最旺）', address: 'Chợ Hội An, Trần Phú / Nguyễn Huệ, Hội An',
    highlights: [
      { title: '清晨卸货', body: '河埠头搬鱼搬菜是市场最有活力的时刻；看摊主接货比看摊有意思。', photo: 0 },
      { title: '市场里的高楼面', body: '在市场食摊吃一碗 cao lầu——面条原料传说要用城里井水，市场里吃的是原味。', photo: 1 },
      { title: '香料与食材摊', body: '会安食材摊上的青柠叶、香茅与米粉是理解本地菜的入口。', photo: 2 },
    ],
    walk: [
      { title: '河边进市场', body: '从河埠头一侧进，先看水产与菜摊。' },
      { title: '食摊区吃早餐', body: '找生意好的摊坐下点一碗高楼面；看邻桌本地人点什么。' },
      { title: '穿到古城', body: '市场西门出即古城主街，接着散步。' },
    ],
    arrival: [
      { title: '步行', body: '古城东侧步行即达；清晨从住处走过来。' },
    ],
    tips: [
      { title: '现金与小摊规矩', body: '摊头现金为主；先问价再吃，市场内价格实在。' },
      { title: '清晨最真实', body: '九点后的市场开始为游客供货，清晨才是本地人版本。' },
    ],
    sources: [vietnamTourism],
    restaurantIds: ['cao-lau-thanh'], related: ['japanese-bridge'],
  },
  {
    id: 'hoi-an-lantern', city: 'hoi-an', name: '古城灯笼之夜', nameLocal: 'Phố cổ về đêm', type: 'waterfront', area: '古城河边',
    intro: '入夜后的会安是灯笼与河灯的主场。不用买票，河边走就是内容；放河灯看意愿。', duration: '1.5–2 小时（晚间）',
    booking: {
      status: 'walk-in', label: '开放街区 · 放灯自选',
      summary: '古城夜间河边免费；河灯小船按次收费（约 150,000–200,000₫/船，以现场议价为准）。',
      link: vietnamTourism,
      rows: [
        { item: '河边夜走', ticket: '免费', reservation: '不需要' },
        { item: '河灯小船', ticket: '按船议价（约 15–20 万₫）', reservation: '现场议价，拼船或包船' },
      ],
      steps: [
        { title: '日落后去河边', body: '灯笼在天黑后最亮；先沿秋盆河边走一遍看密度。' },
        { title: '放灯自选', body: '河灯小船可坐可不坐——沿岸看船与灯免费且好看。' },
        { title: '夜市顺路', body: '河对岸的灯笼夜市（Nguyễn Hoàng 街）卖灯笼与小物，价格可议。' },
      ],
      fallback: '人多就往会安老街深处走，离河越远越安静；月圆之夜（十四）有特别氛围。',
    },
    price: '免费（放灯另计）', hours: '日落后至约 21:30', address: 'Bờ sông Thu Bồn, Hội An',
    highlights: [
      { title: '灯笼街', body: 'Trần Phú 与河边街挂满绸灯笼——会安夜里没有路灯，只有灯笼。', photo: 0 },
      { title: '河灯与船', body: '河上的摇船与点亮的河灯是会安的招牌画面；坐船或岸上看都行。', photo: 1 },
      { title: '对岸灯笼夜市', body: 'Nguyễn Hoàng 夜市街的灯笼摊最集中；买一盏带走比拍照更实际。', photo: 2 },
    ],
    walk: [
      { title: '天黑后沿河边走', body: '从日本桥沿河南岸往东走，看两岸灯笼倒影。' },
      { title: '过步行桥到夜市', body: 'An Hội 步行桥到对岸夜市；灯笼摊密集。' },
      { title: '选一处坐下', body: '河边咖啡馆或排挡坐下看灯——站着看完不如坐着看完。' },
    ],
    arrival: [
      { title: '步行', body: '古城内步行；夜间核心街区只准步行与自行车。' },
    ],
    tips: [
      { title: '放灯议价', body: '河灯船价可议，拼船更便宜；现金付。' },
      { title: '人潮峰值', body: '19:00–21:00 人最密；21:00 后渐散，那时候再走一遍更舒服。' },
    ],
    sources: [vietnamTourism],
    restaurantIds: [], related: ['japanese-bridge', 'hoi-an-market'],
  },
]
