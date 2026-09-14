import type { Attraction } from '../../attractions'

const visitSeoul = { label: '首尔观光官方门户 Visit Seoul', url: 'https://english.visitseoul.net/' }
const cha = { label: '韩国国家遗产厅', url: 'https://www.cha.go.kr/' }
const kto = { label: '韩国旅游发展局 Visit Korea', url: 'https://www.visitkorea.or.kr/' }

export const koreaAttractions: Attraction[] = [
  {
    id: 'gyeongbokgung', city: 'seoul', name: '景福宫', nameLocal: '경복궁 Gyeongbokgung', type: 'heritage', area: '钟路', areaId: 'jongno-bukchon',
    intro: '朝鲜王朝正宫，勤政殿与庆会楼是主轴。穿韩服入场免费——这解释了门口的韩服租赁密度。', duration: '2–3 小时',
    booking: {
      status: 'walk-in', label: '现场购票 · 周二休宫',
      summary: '普通门票 ₩3,000（以官网为准），现场购票；穿规范韩服免费入场。每周二休宫。',
      link: { label: '景福宫官方参观', url: 'https://www.royalpalace.go.kr/' },
      rows: [
        { item: '宫殿参观', ticket: '成人 ₩3,000（以官网为准）', reservation: '现场购票；穿韩服免费' },
        { item: '中文讲解', ticket: '免费导览有固定场次', reservation: '按官网公布的时刻到集合点' },
      ],
      steps: [
        { title: '避开周二', body: '景福宫周二休宫（昌德宫是周一）——两座宫别排在同一天撞休。' },
        { title: '决定要不要韩服', body: '穿韩服免门票、也是本地玩法；不穿也正常，门票本身便宜。' },
        { title: '把守门将换岗排进时段', body: '光化门前有守门将换岗仪式（场次以官网为准）；勤政殿—庆会楼一线为主轴。' },
      ],
      fallback: '休宫日改昌德宫或北村；韩服租赁只在门口比价，不必提前订。',
    },
    price: '成人 ₩3,000（以官网为准）', hours: '09:00–18:00（随季节）；周二休宫', address: '경복궁, 서울특별시 종로구 사직로 161',
    highlights: [
      { title: '勤政殿正殿', body: '朝鲜半岛宫殿的主殿尺度与色彩都在这里；抬头看藻井与彩画。', photo: 0 },
      { title: '庆会楼水殿', body: '建在水上的宴会楼阁，是景福宫最上镜的一角；从侧面看层次最完整。', photo: 1 },
      { title: '宫墙与光化门', body: '宫墙外是光化门广场与现代首尔——宫与城的关系在墙内外最明显。', photo: 2 },
    ],
    walk: [
      { title: '光化门进，走中轴', body: '光化门 → 勤政殿 → 思政殿 → 庆会楼，中轴走完再自由散开。' },
      { title: '东宫与香远亭', body: '东侧的康宁殿、香远亭方向更安静，适合慢走。' },
      { title: '神武门出接北村', body: '北边的神武门出去正对青瓦台方向与北村，继续散步。' },
    ],
    arrival: [
      { title: '轨道到达', body: '3 号线景福宫站 5 号口直通宫门；或 3 号线安国站、5 号线光化门站步行。' },
      { title: '步行串联', body: '与北村、昌德宫、仁寺洞在同一钟路片区，步行可串。' },
    ],
    tips: [
      { title: '韩服免费入场', body: '穿规范韩服免票是官方规则；租赁店集中在宫门两侧，按小时计价。' },
      { title: '周二休宫', body: '首尔几座古宫轮休日不同：景福宫周二、昌德宫周一，排程先核对。' },
    ],
    sources: [{ label: '景福宫官方参观', url: 'https://www.royalpalace.go.kr/' }, visitSeoul, cha],
    restaurantIds: ['tosokchon'], related: ['changdeokgung', 'bukchon-hanok'],
  },
  {
    id: 'changdeokgung', city: 'seoul', name: '昌德宫与秘苑', nameLocal: '창덕궁 Changdeokgung', type: 'heritage', area: '钟路', areaId: 'jongno-bukchon',
    intro: '联合国遗产宫殿，秘苑（后苑）只能跟团进。宫与苑分开看，各值一回。', duration: '宫 1.5 小时 + 秘苑导览约 90 分钟',
    booking: {
      status: 'recommended', label: '秘苑建议先预约',
      summary: '宫殿门票 ₩3,000 现场可买；秘苑必须跟随导览团，名额有限，建议官网提前预约场次（含中文场）。',
      link: { label: '昌德宫官方参观', url: 'https://www.cdg.go.kr/' },
      rows: [
        { item: '宫殿参观', ticket: '成人 ₩3,000（以官网为准）', reservation: '现场购票；周一休宫' },
        { item: '秘苑导览', ticket: '₩5,000 另计（以官网为准）', reservation: '官网预约分时段；现场名额有限' },
      ],
      steps: [
        { title: '先约秘苑场次', body: '秘苑只能跟团，旺季中文场先被订完；先约秘苑时间，再倒推宫殿参观。' },
        { title: '避开周一', body: '昌德宫周一休宫；秘苑导览随宫休。' },
        { title: '按集合时间到', body: '秘苑团在宫内集合点出发，迟到不等人；穿适合坡道的鞋。' },
      ],
      fallback: '秘苑约不到就只参观宫殿区，或改德寿宫/昌庆宫——同为古宫，密度不同。',
    },
    price: '宫 ₩3,000 + 秘苑 ₩5,000（以官网为准）', hours: '09:00–18:00（随季节）；周一休宫', address: '창덕궁, 서울특별시 종로구 율곡로 99',
    highlights: [
      { title: '仁政殿与宣政殿', body: '昌德宫依地形而建，轴线不像景福宫那样笔直——这正是它被单独列入世界遗产的原因。', photo: 0 },
      { title: '秘苑芙蓉池', body: '后苑的核心水面，亭与枫树围绕；秋季是最抢手的时段。', photo: 1 },
      { title: '苑内古木与坡道', body: '秘苑是山林式庭园，坡道与几百年的树比建筑更多。', photo: 2 },
    ],
    walk: [
      { title: '宫殿区先走一圈', body: '敦化门进，走仁政殿—宣政殿一线；比景福宫小，走起来从容。' },
      { title: '秘苑跟导览', body: '导览约 90 分钟，路线固定含坡道；中途离队要提前告知导览员。' },
      { title: '出门接北村或仁寺洞', body: '昌德宫距北村南端步行可达；饿了往仁寺洞方向吃。' },
    ],
    arrival: [
      { title: '轨道到达', body: '3 号线安国站 3 号口步行约 5 分钟；1/3/5 号线钟路 3 街站亦可。' },
      { title: '步行串联', body: '与北村韩屋村、仁寺洞步行相连，放同一片区。' },
    ],
    tips: [
      { title: '秘苑场次是关键', body: '每天导览场次有限、分语言；先约到秘苑再排当天其余内容。' },
      { title: '秋季提前订', body: '红叶季秘苑最抢手，开放预订后尽早下手。' },
    ],
    sources: [{ label: '昌德宫官方参观', url: 'https://www.cdg.go.kr/' }, visitSeoul, cha],
    restaurantIds: [], related: ['gyeongbokgung', 'bukchon-hanok'],
  },
  {
    id: 'bukchon-hanok', city: 'seoul', name: '北村韩屋村', nameLocal: '북촌한옥마을 Bukchon', type: 'heritage', area: '北村', areaId: 'jongno-bukchon',
    intro: '山坡上的韩屋聚落，仍有人居住。安静慢走是规则，不只是礼貌。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '居民区自由参访 · 守时段与安静',
      summary: '开放街区无门票；因居民生活，官方推行限时参访与安静指引（重点街巷 09:00–17:00 为宜）。',
      link: { label: '首尔北村官方介绍', url: 'https://english.visitseoul.net/' },
      rows: [
        { item: '韩屋街巷', ticket: '免费', reservation: '不需要；遵守安静与参访时段指引' },
        { item: '韩屋体验/工房', ticket: '按项目', reservation: '各家单独安排' },
      ],
      steps: [
        { title: '把时段排在白天', body: '这里不是夜景街区：清晨与白天走，傍晚后把安静还给住户。' },
        { title: '从北村文化中心拿图', body: '北村文化中心有地图与看点标注；8 景打卡点之间有坡道。' },
        { title: '拍照留余地', body: '不堵门、不拍窗内、不高声；旅行团的喇叭声是这里的主要矛盾。' },
      ],
      fallback: '人多时段改走西侧的嘉会洞或去昌德宫方向；雨天上坡湿滑，缩短路线。',
    },
    price: '免费', hours: '建议 09:00–17:00 到访；晚间请保持安静', address: '북촌한옥마을, 서울특별시 종로구 계동길 일대',
    highlights: [
      { title: '山坡上的韩屋屋顶', body: '北村的画面感来自坡道与瓦屋顶的层叠；走到高处回望首尔塔方向。', photo: 0 },
      { title: '巷弄的细节', body: '门环、瓦当、矮墙内的院子——放慢速度看细节，比找「八景」机位值。', photo: 1 },
      { title: '仍是居民区', body: '有人在巷子里晾衣、倒垃圾；把它当别人的社区走，体验反而更好。', photo: 2 },
    ],
    walk: [
      { title: '安国站方向进入', body: '从安国站一侧上坡进入主巷；跟着屋顶线走不会迷路。' },
      { title: '选一两个高点', body: '北村「八景」分散在坡上，选一两个高点看层叠屋顶就够。' },
      { title: '下到三清洞或昌德宫', body: '南端接三清洞咖啡街，东侧接昌德宫，看时间选。' },
    ],
    arrival: [
      { title: '轨道到达', body: '3 号线安国站 2/3 号口步行约 10 分钟进入村区。' },
      { title: '村内无车', body: '巷弄窄且坡陡，全程步行；出租车只到外围。' },
    ],
    tips: [
      { title: '守安静规则', body: '居民区有安静的官方指引；傍晚后不喧哗，不航拍。' },
      { title: '坡道穿鞋', body: '坡多且部分路段陡，穿适合走路的鞋；雨雪天注意湿滑。' },
    ],
    sources: [visitSeoul],
    restaurantIds: ['cafe-onion-anguk'], related: ['gyeongbokgung', 'changdeokgung'],
  },
  {
    id: 'gwangjang-market', city: 'seoul', name: '广藏市场', nameLocal: '광장시장 Gwangjang Market', type: 'waterfront', area: '钟路',
    intro: '首尔最老的传统市场，绿豆饼与麻药紫菜包饭的大本营。吃的部分已写进吃页，这里当街区逛。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '开放市场',
      summary: '免费进入的室内市场；食摊集中在中央十字，布料与杂货在周边区。',
      link: { label: '首尔观光：广藏市场', url: 'https://english.visitseoul.net/' },
      rows: [
        { item: '市场', ticket: '免费', reservation: '不需要；食摊约 09:00–21:00' },
        { item: '食摊', ticket: '按摊自付', reservation: '热摊要排；现金与卡通用情况不一' },
      ],
      steps: [
        { title: '上午或傍晚去', body: '食摊白天营业；傍晚市场有市井气，周一部分摊休。' },
        { title: '先走十字再坐下', body: '中央十字是食摊密度最高的地方；走一圈看摊再决定坐哪家。' },
        { title: '吃摊点单', body: '坐下看板点单，同品类摊口味接近——别为「某一家」排太久。' },
      ],
      fallback: '人流过大时拐进周边布料区或直接撤出；同类小吃在明洞也有，不必死守。',
    },
    price: '免费', hours: '约 09:00–21:00（各摊不一）', address: '광장시장, 서울특별시 종로구 창경궁로 88',
    highlights: [
      { title: '食摊十字', body: '市场中央的食摊区是首尔街头小吃的浓缩：绿豆饼在铁板上滋滋作响是背景音。', photo: 0 },
      { title: '布料与旧物区', body: '二楼与周边是韩服布料、旧货与杂货——市场的另一半内容。', photo: 1 },
      { title: '坐下来吃', body: '摊前凳子是流动的座位：坐下点一份饼一份包饭，看摊主手速。', photo: 2 },
    ],
    walk: [
      { title: '从钟路 5 街进入', body: '地铁 1 号线钟路 5 街站最近；从主入口进先到食摊区。' },
      { title: '食摊→布料区', body: '先吃后逛：食摊在中央，布料旧物在四周与二楼。' },
      { title: '接清溪川', body: '市场南侧就是清溪川步道，吃完沿溪走一段消食。' },
    ],
    arrival: [
      { title: '轨道到达', body: '1 号线钟路 5 街站 8 号口，或 2/5 号线乙支路 4 街站步行。' },
      { title: '市场内步行', body: '内部纯步行；叫车到市场外围主路。' },
    ],
    tips: [
      { title: '摊位同质化', body: '绿豆饼、麻药饭卷摊很多家，差别有限；选人少的坐下即可。' },
      { title: '现金备一点', body: '多数摊收卡，小额用现金更快；酒类另点。' },
    ],
    sources: [visitSeoul],
    restaurantIds: ['sunhee-bindaetteok', 'buchon-yukhoe'], related: ['changdeokgung'],
  },
  {
    id: 'n-seoul-tower', city: 'seoul', name: 'N 首尔塔与南山', nameLocal: 'N서울타워 N Seoul Tower', type: 'landmark', area: '南山',
    intro: '南山公园是市民散步地，塔顶是游客展望台。上山散步免费，登塔另算。', duration: '2–3 小时（含上山）',
    booking: {
      status: 'check', label: '展望台票价先核官网',
      summary: '南山公园与登山道免费；塔顶展望台与缆车单独收费，票价以官网当期为准。',
      link: { label: 'N 首尔塔官网', url: 'https://www.seoultower.co.kr/' },
      rows: [
        { item: '南山公园与登山道', ticket: '免费', reservation: '不需要' },
        { item: '展望台', ticket: '以官网为准', reservation: '可现场或线上购票' },
        { item: '南山缆车', ticket: '单程/往返另计', reservation: '现场购票' },
      ],
      steps: [
        { title: '决定步行还是缆车', body: '从明洞侧有缆车与步道；步行上山约 30–40 分钟，傍晚走最舒服。' },
        { title: '塔顶按天气定', body: '阴天与雾霾天展望台意义有限——先看天气再买票。' },
        { title: '把「挂锁墙」当路过', body: '塔下平台的爱情锁区免费可看；不必专程。' },
      ],
      fallback: '天气差就不登塔，只走南山步道；下山接明洞吃饭。',
    },
    price: '公园免费；展望台与缆车另计', hours: '展望台约 10:30–22:00（以官网为准）', address: 'N서울타워, 서울특별시 용산구 남산공원길 105',
    highlights: [
      { title: '南山登山道', body: '从明洞后身上山的步道是本地人的晚间散步线；免费、坡度适中。', photo: 0 },
      { title: '塔下平台与锁墙', body: '塔底广场看市区夜景免费；密集的挂锁是首尔的地标性装置。', photo: 1 },
      { title: '塔顶 360°', body: '展望台看首尔盆地与汉江；值不值全看当天能见度。', photo: 2 },
    ],
    walk: [
      { title: '明洞后身上山', body: '从明洞站方向走南山步道，约 30–40 分钟到塔下；坡道连续。' },
      { title: '塔下先看免费区', body: '平台、锁墙、首尔全景都在塔外免费区域；再决定要不要上塔。' },
      { title: '缆车或步道下', body: '缆车排队长就走步道下；夜间步道有照明但结伴走。' },
    ],
    arrival: [
      { title: '步行/缆车', body: '明洞站方向步行或到南山缆车乘车处；缆车在会贤方向。' },
      { title: '巴士', body: '南山循环巴士从忠武路、首尔站方向上山；班次以官网为准。' },
    ],
    tips: [
      { title: '能见度决定票价', body: '雾霾天花钱上塔看不到什么——先在塔下免费平台看天色。' },
      { title: '傍晚最佳', body: '日落前上山，看完日景接夜景，一次拿到两个画面。' },
    ],
    sources: [{ label: 'N 首尔塔官网', url: 'https://www.seoultower.co.kr/' }, visitSeoul],
    restaurantIds: [], related: ['gwangjang-market'],
  },
  {
    id: 'national-museum-korea', city: 'seoul', name: '国立中央博物馆', nameLocal: '국립중앙박물관', type: 'art', area: '龙山',
    intro: '韩国最大的博物馆，常设展免费。按「三国—高丽—朝鲜」一条线走就值半天。', duration: '2–3 小时',
    booking: {
      status: 'walk-in', label: '常设展免费',
      summary: '常设展厅免费入场（无需预约）；特展与儿童博物馆等另计。',
      link: { label: '国立中央博物馆', url: 'https://www.museum.go.kr/' },
      rows: [
        { item: '常设展', ticket: '免费', reservation: '不需要' },
        { item: '特别展', ticket: '按档期另计', reservation: '官网查看与购票' },
      ],
      steps: [
        { title: '按时间线选楼层', body: '一楼史前与三国、二楼书画与工艺、三楼雕塑——按兴趣选，不必全走。' },
        { title: '二村站直达', body: '地铁二村站有地下通道直达馆门；雨天友好。' },
        { title: '留体力给庭园', body: '馆外有镜池与庭园，看完馆内到湖边走一圈。' },
      ],
      fallback: '周一一般照常开（韩国国立馆多周一开放，以官网为准）；特展售罄只看常设也够。',
    },
    price: '常设展免费', hours: '10:00–18:00（周末延长，以官网为准）', address: '국립중앙박물관, 서울특별시 용산구 서빙고로 137',
    highlights: [
      { title: '三国与高丽展厅', body: '金冠、佛像与青瓷是主线；对半岛史陌生也能按朝代看进去。', photo: 0 },
      { title: '馆内空间本身', body: '大厅尽头的长窗把南山框进来——建筑是展品的一部分。', photo: 1 },
      { title: '镜池庭园', body: '馆外的湖与石桥是免费区域，看展后的散步地。', photo: 2 },
    ],
    walk: [
      { title: '先定楼层', body: '进馆先看导览图选两层重点；每层都大，走马观花会累。' },
      { title: '中间休息', body: '馆内有咖啡与餐厅；看完一层就坐下喝东西再继续。' },
      { title: '出来走庭园', body: '镜池与南山方向收尾，接梨泰院或汉江方向。' },
    ],
    arrival: [
      { title: '轨道到达', body: '4 号线／京义中央线二村站 2 号口有通道直达。' },
      { title: '巴士与车', body: '多条巴士到馆前；打车定位正门。' },
    ],
    tips: [
      { title: '免费不等于浅', body: '常设展质量高，留 2 小时以上；语音导览可租。' },
      { title: '大件行李寄存', body: '馆内提供寄存；背包需寄存部分区域。' },
    ],
    sources: [{ label: '国立中央博物馆', url: 'https://www.museum.go.kr/' }, visitSeoul],
    restaurantIds: [], related: ['n-seoul-tower'],
  }
,
  {
    id: 'hallasan', city: 'jeju', name: '汉拿山', nameLocal: '한라산 Hallasan', type: 'nature', area: '岛中央山区',
    intro: '韩国最高峰（1947 米）与火山湖白鹿潭。登顶线需预约且有名额与天气管制；半山线更松。', duration: '登顶一天；半山线半天',
    booking: {
      status: 'check', label: '登顶线需预约',
      summary: '白鹿潭登顶线（城板岳、观音寺）需提前在官网预约且每日名额有限；御里牧、灵室等半山线不需登顶许可。按天气开关。',
      link: { label: '汉拿山国立公园', url: 'https://www.jeju.go.kr/hallasan/' },
      rows: [
        { item: '登顶线（城板岳／观音寺）', ticket: '免费但需预约', reservation: '官网提前预约＋当日名额；天气管制' },
        { item: '半山线（御里牧／灵室等）', ticket: '免费', reservation: '不需登顶许可，按开放情况' },
      ],
      steps: [
        { title: '先定登不登顶', body: '登顶线往返 18–20 公里需 8 小时上下，早出发；半山线 3–4 小时看山看林即可。' },
        { title: '登顶线先预约', body: '官网预约取得二维码，进山扫码；名额按日期放。' },
        { title: '按天气执行', body: '山岳天气说封就封——出发前看当日开放公告。' },
      ],
      fallback: '封山或没约到就换御里牧半山线或改排西归浦／东岸内容。',
    },
    price: '免费（登顶线需预约）', hours: '进山有时间管制（登顶线须正午前通过管制点）', address: '한라산국립공원，제주특별자치도',
    highlights: [
      { title: '白鹿潭', body: '山顶火山湖——登顶线的终点，云开时俯瞰全岛。', photo: 0 },
      { title: '城板岳杜鹃林道', body: '登顶东线前段是平缓林道，春杜鹃、秋红叶。', photo: 1 },
      { title: '御里牧半山线', body: '不需预约的半山线：岳石与矮曲林带，3–4 小时往返。', photo: 2 },
    ],
    walk: [
      { title: '早进山', body: '登顶线清晨进山；半山线上午出发也从容。' },
      { title: '分层穿衣', body: '山上比海边冷十度上下，防风层必带。' },
      { title: '原路下山', body: '登顶线与半山线都原路返回为主。' },
    ],
    arrival: [
      { title: '巴士到登山口', body: '济州市外巴士总站有到城板岳／观音寺方向线路；班次按当天查。' },
      { title: '出租车', body: '济州市区打车到登山口可行；回程请先约车。' },
    ],
    tips: [
      { title: '预约与管制分开看', body: '约到名额不等于能进山——当天可能因风封山，以现场公告为准。' },
      { title: '没有补给点', body: '登顶线中途无卖水处，带足水与干粮。' },
    ],
    sources: [{ label: '汉拿山国立公园', url: 'https://www.jeju.go.kr/hallasan/' }, kto],
    restaurantIds: [], related: ['seongsan-ilchulbong'],
  },
  {
    id: 'seongsan-ilchulbong', city: 'jeju', name: '城山日出峰', nameLocal: '성산일출봉 Seongsan Ilchulbong', type: 'nature', area: '城山（东岸）', areaId: 'seongsan-east',
    intro: '海上火山口，济州的头像。登顶看日出是仪式感，海边步道免费看全景。', duration: '1.5–2 小时',
    booking: {
      status: 'partial', label: '登顶购票 · 海边步道免费',
      summary: '登顶步道购票（UNESCO 遗产管理）；山脚海边步道与海女表演区免费。',
      link: { label: 'Visit Jeju', url: 'https://www.visitjeju.net/' },
      rows: [
        { item: '登顶步道', ticket: '收费', reservation: '现场购票' },
        { item: '海边步道／海女表演区', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '清晨或傍晚去', body: '日出峰顾名思义看日出；旅行团高峰是上午十点后。' },
        { title: '山脚先看海女', body: '东侧海边有海女作业与表演（天气允许），先看再上。' },
      ],
      fallback: '大风天步道可能管制；只走海边步道也值得来。',
    },
    price: '登顶收费；山脚免费', hours: '登顶约 05:00–19:00（季节调整）', address: '성산일출봉，제주특별자치도 서귀포시 성산읍 성산리',
    highlights: [
      { title: '火山口顶', body: '182 米登顶约 20–30 分钟；碗状火山口长满草，海在四周。', photo: 0 },
      { title: '海边步道视角', body: '不登顶的视角：从海平面看整座火山锥，是明信片角度。', photo: 1 },
      { title: '海女作业', body: '城山脚下的海女下海捞捕；天气允许有定时表演。', photo: 2 },
    ],
    walk: [
      { title: '先到海边步道', body: '山脚东侧步道看海女与全景。' },
      { title: '登顶步道', body: '台阶多但规整，慢走 30 分钟到顶。' },
      { title: '下山接涉地可支', body: '两点半间可打车接驳。' },
    ],
    arrival: [
      { title: '巴士', body: '济州市外巴士总站乘东岸线约一个半小时；城山日出峰入口下。' },
      { title: '轮渡接驳', body: '去牛岛走城山港，与日出峰同片区可同排。' },
    ],
    tips: [
      { title: '想看日出住一晚', body: '济州市赶首班巴士赶不上日出；城山住一晚是解法。' },
      { title: '风大', body: '全年风口，帽子要抓牢。' },
    ],
    sources: [{ label: 'Visit Jeju', url: 'https://www.visitjeju.net/' }, kto],
    restaurantIds: ['myeongjin-jeonbok'], related: ['seopjikoji', 'udo-island'],
  },
  {
    id: 'seopjikoji', city: 'jeju', name: '涉地可支', nameLocal: '섭지코지 Seopjikoji', type: 'nature', area: '城山方向（东岸）', areaId: 'seongsan-east',
    intro: '火山岩海岸草甸步道，尽头是白灯塔。韩剧取景地之外，本身就是济州东岸最舒展的一段海岸。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '免费',
      summary: '海岸步道与灯塔区域免费；园区内美术馆（安藤忠雄）另收费。',
      link: { label: 'Visit Jeju', url: 'https://www.visitjeju.net/' },
      rows: [
        { item: '海岸步道与灯塔', ticket: '免费', reservation: '不需要' },
        { item: 'Yumin 美术馆等', ticket: '收费', reservation: '现场购票' },
      ],
      steps: [
        { title: '入口到灯塔约半小时', body: '沿草甸步道一路走到底就是白灯塔，往返一小时多。' },
        { title: '与城山同排', body: '日出峰下山后打车十分钟到涉地可支。' },
      ],
      fallback: '大风天照走（穿好防风）；美术馆是雨天退路。',
    },
    price: '免费', hours: '步道全天（建议日间）', address: '섭지코지，제주특별자치도 서귀포시 성산읍 고성리',
    highlights: [
      { title: '白灯塔', body: '步道尽头丘上的白灯塔，回看城山日出峰的同框点。', photo: 0 },
      { title: '火山岩海岸', body: '黑色火山岩与草甸坡的组合，是济州海岸的标准长相。', photo: 1 },
      { title: '春油菜花', body: '三四月草甸油菜花季，黄绿黑三层配色。', photo: 2 },
    ],
    walk: [
      { title: '入口步道向海', body: '草甸缓坡向灯塔方向走。' },
      { title: '灯塔丘上绕', body: '丘上回看日出峰与海岸线。' },
      { title: '原路回', body: '回程沿线有马场与咖啡馆。' },
    ],
    arrival: [
      { title: '巴士＋步行', body: '城山方向巴士到附近站再步行；或日出峰打车十分钟。' },
    ],
    tips: [
      { title: '风全年大', body: '防风外套常备；伞无用。' },
      { title: '与日出峰绑定', body: '两个点同在东岸，半天各一最顺。' },
    ],
    sources: [{ label: 'Visit Jeju', url: 'https://www.visitjeju.net/' }],
    restaurantIds: ['myeongjin-jeonbok'], related: ['seongsan-ilchulbong', 'udo-island'],
  },
  {
    id: 'udo-island', city: 'jeju', name: '牛岛', nameLocal: '우도 Udo', type: 'nature', area: '城山港外岛', areaId: 'seongsan-east',
    intro: '城山港 15 分钟船程的小岛：白沙滩、花生冰淇淋与环岛骑行。风浪停航常见，去前先查运行。', duration: '半天到一天',
    booking: {
      status: 'check', label: '轮渡购票 · 看风浪',
      summary: '城山港码头购往返船票（需护照）；大风浪停航常见，出发前查当日运行。',
      link: { label: 'Visit Jeju', url: 'https://www.visitjeju.net/' },
      rows: [
        { item: '往返轮渡', ticket: '收费', reservation: '码头现场购票；需护照登记' },
        { item: '岛内交通', ticket: '巴士／自行车／电助力车另租', reservation: '码头旁租' },
      ],
      steps: [
        { title: '查当日运行', body: '轮渡按风浪开关——出发前查官网或请酒店确认。' },
        { title: '码头购票带护照', body: '填写乘船单＋护照核验；往返票一次买好。' },
        { title: '选岛内交通', body: '环岛巴士随上随下最稳；电动自行车需合规驾照，别勉强。' },
      ],
      fallback: '停航就改涉地可支＋城山加深走；岛内雨具备好，天气变得快。',
    },
    price: '轮渡收费', hours: '船班约 08:00–17:00（季节与天气调整）', address: '우도，제주특별자치도 우도면（城山港乘船）',
    highlights: [
      { title: '珊瑚沙白滩', body: '西滨白沙与东滨的海水是岛上招牌。', photo: 0 },
      { title: '环岛路与灯塔', body: '一圈十几公里的环岛路，黑石滩与灯塔错落。', photo: 1 },
      { title: '花生冰淇淋', body: '牛岛花生是特产，海边店几乎家家有花生拿铁／冰淇淋。', photo: 2 },
    ],
    walk: [
      { title: '码头租环岛巴士票', body: '随上随下一圈四个主点。' },
      { title: '两滩一灯', body: '白滩、黑滩与灯塔按圈走。' },
      { title: '留末班船时间', body: '末班船前回码头；错过只能在岛上过夜。' },
    ],
    arrival: [
      { title: '轮渡', body: '城山港码头乘船约 15 分钟；与日出峰同片区。' },
    ],
    tips: [
      { title: '护照必带', body: '购票登船要护照。' },
      { title: '别硬骑车', body: '岛坡多风大，体力一般选环岛巴士。' },
    ],
    sources: [{ label: 'Visit Jeju', url: 'https://www.visitjeju.net/' }, kto],
    restaurantIds: [], related: ['seongsan-ilchulbong', 'seopjikoji'],
  },
  {
    id: 'dongmun-market-jeju', city: 'jeju', name: '东门市场', nameLocal: '동문재래시장 Dongmun Market', type: 'waterfront', area: '老济州', areaId: 'jeju-old-town',
    intro: '济州最大的传统市场：黑猪肉卷、橘子摊与夜市。老济州散步的吃中心。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '市场开放',
      summary: '市场免费开放；夜市摊区傍晚起（以现场为准）。',
      link: { label: 'Visit Jeju', url: 'https://www.visitjeju.net/' },
      rows: [{ item: '市场', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '观德亭旁即是', body: '老济州中心，巴士与步行都顺。' },
        { title: '白天水果海鲜，晚上摊区', body: '日市是菜果海产，夜摊区是小吃集中带。' },
      ],
      fallback: '雨天顶棚区照走；摊区休市时市场内餐馆照常。',
    },
    price: '免费', hours: '市场约 08:00–21:00；摊区傍晚起', address: '동문재래시장，제주시 관덕로14길 20',
    highlights: [
      { title: '夜市摊区', body: '傍晚起成排小吃摊：黑猪肉卷、烤海鲜、橘子汁。', photo: 0 },
      { title: '橘子与特产摊', body: '济州橘子、汉拿峰柑橘按袋卖，可讲价。', photo: 1 },
      { title: '海产与老铺', body: '带鱼、鲍鱼与本地糕点的日常市场面。', photo: 2 },
    ],
    walk: [
      { title: '主门进走一圈', body: '先走外围看结构再进摊区。' },
      { title: '摊区按人排', body: '哪家队伍长吃哪家，份量留给品类数。' },
    ],
    arrival: [
      { title: '轨道／步行', body: '老济州中心；中央路商店街步行可达。' },
    ],
    tips: [
      { title: '现金与卡均可', body: '摊区现金更顺。' },
      { title: '带橘子走', body: '当伴手礼；注意离岛行李重量。' },
    ],
    sources: [{ label: 'Visit Jeju', url: 'https://www.visitjeju.net/' }],
    restaurantIds: ['dongmun-market-stalls'], related: [],
  },
  {
    id: 'jeongbang-falls', city: 'jeju', name: '正房瀑布', nameLocal: '정방폭포 Jeongbang Falls', type: 'nature', area: '西归浦', areaId: 'seogwipo',
    intro: '亚洲少见的直接入海瀑布：23 米水柱落进海边礁石。西归浦步行可达。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '购票入场',
      summary: '景区购票入场；台阶下到海边观瀑点。',
      link: { label: 'Visit Jeju', url: 'https://www.visitjeju.net/' },
      rows: [{ item: '景区', ticket: '收费（小额）', reservation: '现场购票' }],
      steps: [
        { title: '西归浦市区步行或短车程', body: '从偶来市场步行约 15–20 分钟。' },
        { title: '台阶下到礁石滩', body: '下到瀑布近处需走湿滑礁石，穿防滑鞋。' },
      ],
      fallback: '台风大浪时下层关闭；上层展望仍可看。',
    },
    price: '收费（小额）', hours: '约 09:00–17:30（以现场为准）', address: '정방폭포，제주특별자치도 서귀포시 칠십리로214번길 37',
    highlights: [
      { title: '入海瀑布', body: '水柱直接落向海岸礁石——内陆瀑布看不到的构图。', photo: 0 },
      { title: '礁石滩视角', body: '下到滩上仰视水幕，离得近会溅湿。', photo: 1 },
      { title: '西归浦海岸', body: '瀑布外海岸线也值得一走。', photo: 2 },
    ],
    walk: [
      { title: '入口下台阶', body: '阶梯下到海边，回爬费点腿。' },
      { title: '接偶来市场', body: '走完去每日偶来市场吃，动线顺。' },
    ],
    arrival: [
      { title: '巴士＋步行', body: '西归浦市区内步行或出租车短途。' },
    ],
    tips: [
      { title: '礁石滑', body: '防滑鞋必穿，别跨警戒线。' },
    ],
    sources: [{ label: 'Visit Jeju', url: 'https://www.visitjeju.net/' }],
    restaurantIds: [], related: ['seogwipo-market'],
  },
  {
    id: 'seogwipo-market', city: 'jeju', name: '每日偶来市场', nameLocal: '서귀포매일올레시장', type: 'waterfront', area: '西归浦', areaId: 'seogwipo',
    intro: '西归浦的日常市场：比东门更本地，橘子、海产、小吃摊与「偶来」之名来自济州方言小巷。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '市场开放',
      summary: '免费开放；白天与傍晚都活。',
      link: { label: 'Visit Jeju', url: 'https://www.visitjeju.net/' },
      rows: [{ item: '市场', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '西归浦市区中心', body: '正房瀑布步行可达；600 路机场巴士西归浦站附近。' },
        { title: '走中轴巷', body: '一条主巷加两侧分巷，吃喝买都在内。' },
      ],
      fallback: '雨天有顶棚；店休多时周边餐馆补。',
    },
    price: '免费', hours: '约 07:00–21:00（各店不同）', address: '서귀포매일올레시장，제주특별자치도 서귀포시 중앙로62번길 18',
    highlights: [
      { title: '本地日常', body: '比东门市场少游客、多本地采买，是西归浦的厨房。', photo: 0 },
      { title: '小吃摊带', body: '黑猪肉包、橘子汁、糖饼摊集中在主巷。', photo: 1 },
      { title: '海产摊', body: '带鱼与海女直供海产是市场底色。', photo: 2 },
    ],
    walk: [
      { title: '正门进', body: '主巷走到底再绕分巷。' },
      { title: '接瀑布或港边', body: '与正房瀑布或西归浦港散步联排。' },
    ],
    arrival: [
      { title: '巴士', body: '600 路机场巴士或市内巴士西归浦站下车步行可达。' },
    ],
    tips: [
      { title: '当午餐与伴手礼点', body: '橘子与糕点在此买比景区便宜。' },
    ],
    sources: [{ label: 'Visit Jeju', url: 'https://www.visitjeju.net/' }],
    restaurantIds: [], related: ['jeongbang-falls'],
  },
  {
    id: 'hamdeok-beach', city: 'jeju', name: '咸德海水浴场', nameLocal: '함덕해수욕장 Hamdeok Beach', type: 'nature', area: '东北岸',
    intro: '济州市区最近的白沙滩：果冻色浅水、犀牛峰岬角与海边咖啡馆。不住东岸的看海首选。', duration: '1.5–2.5 小时',
    booking: {
      status: 'walk-in', label: '开放免费',
      summary: '浴场免费开放；夏季有遮阳伞与冲洗设施。',
      link: { label: 'Visit Jeju', url: 'https://www.visitjeju.net/' },
      rows: [{ item: '沙滩', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '济州市巴士约 40 分钟', body: '东北岸巴士直达咸德；比去西归浦近得多。' },
        { title: '上犀牛峰岬角', body: '沙滩旁的서우봉小丘步道俯瞰整片滩。' },
      ],
      fallback: '大风天海边难受，退到咖啡馆看海。',
    },
    price: '免费', hours: '全天', address: '함덕해수욕장，제주시 조천읍 함덕리',
    highlights: [
      { title: '果冻色浅滩', body: '白沙与浅绿水色是济州最有「度假感」的一段滩。', photo: 0 },
      { title: '犀牛峰（서우봉）', body: '沙滩边的小丘步道，十分钟上顶看全景。', photo: 1 },
      { title: '海边咖啡带', body: 'Delmoondo 等平台咖啡馆正对沙滩。', photo: 2 },
    ],
    walk: [
      { title: '沙滩走一段', body: '赤脚踩水后上犀牛峰。' },
      { title: '咖啡馆收尾', body: '看海坐住是这里的正确句点。' },
    ],
    arrival: [
      { title: '巴士', body: '济州市乘东北岸方向巴士到咸德站。' },
    ],
    tips: [
      { title: '夏季下饺', body: '旺季人多；清晨与傍晚最好。' },
    ],
    sources: [{ label: 'Visit Jeju', url: 'https://www.visitjeju.net/' }],
    restaurantIds: ['cafe-delmoondo'], related: ['seongsan-ilchulbong'],
  },
  {
    id: 'aewol-coast', city: 'jeju', name: '涯月海岸', nameLocal: '애월해안도로 Aewol Coast', type: 'nature', area: '西岸',
    intro: '西海岸的熔岩海岸公路：黑礁石、果冻海与一排海景咖啡馆。看日落的方向。', duration: '2–3 小时',
    booking: {
      status: 'walk-in', label: '开放免费',
      summary: '海岸公路与步道免费；沿线咖啡馆与体验另计。',
      link: { label: 'Visit Jeju', url: 'https://www.visitjeju.net/' },
      rows: [{ item: '海岸公路与步道', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '济州市巴士约 40 分钟', body: '西向巴士到涯月一带下。' },
        { title: '走海岸步道', body: '郭支海水浴场到涯月一段熔岩步道是主体。' },
      ],
      fallback: '阴天失色——换市区内容，或干脆泡咖啡馆。',
    },
    price: '免费', hours: '全天；日落前后最好', address: '애월해안도로，제주시 애월읍',
    highlights: [
      { title: '熔岩海岸步道', body: '黑礁石与绿海对比，步道顺岸弯。', photo: 0 },
      { title: '海景咖啡馆', body: '整排平台咖啡馆面向西边海——日落位要早占。', photo: 1 },
      { title: '郭支海水浴场', body: '步道起点的小滩，水色好。', photo: 2 },
    ],
    walk: [
      { title: '郭支滩起走', body: '沿熔岩步道往涯月方向。' },
      { title: '选一家咖啡馆坐住', body: '按座位朝向选店，看海等日落。' },
    ],
    arrival: [
      { title: '巴士', body: '济州市乘西向巴士；回程末班早，注意时间。' },
    ],
    tips: [
      { title: '日落限定', body: '这个方向的价值在傍晚；别上午来又赶晚走。' },
    ],
    sources: [{ label: 'Visit Jeju', url: 'https://www.visitjeju.net/' }],
    restaurantIds: [], related: ['hamdeok-beach'],
  },
  {
    id: 'manjanggul', city: 'jeju', name: '万丈窟', nameLocal: '만장굴 Manjanggul Lava Tube', type: 'nature', area: '东北岸（金宁）',
    intro: '世界最长的熔岩洞之一：洞内常年 11–15 度，看 7.6 米熔岩石柱。与东岸同日顺路。', duration: '1–1.5 小时',
    booking: {
      status: 'partial', label: '购票入场 · 偶有关闭修缮',
      summary: '洞穴景区购票入场；偶因修缮或保护关闭区间，出发前查开放状态。',
      link: { label: 'Visit Jeju', url: 'https://www.visitjeju.net/' },
      rows: [{ item: '洞窟入场', ticket: '收费（小额）', reservation: '现场购票；开放区间以公告为准' }],
      steps: [
        { title: '查开放状态', body: '万丈窟偶因维护关闭——出发前在 Visit Jeju 或官网确认。' },
        { title: '带薄外套', body: '洞内常年 11–15 度，夏天也要外套。' },
      ],
      fallback: '关闭时改拒文岳（거문오름）熔岩洞预约线或金宁海边。',
    },
    price: '收费（小额）', hours: '约 09:00–17:00（以现场为准）', address: '만장굴，제주시 구좌읍 만장굴길 182',
    highlights: [
      { title: '熔岩洞主廊', body: '一人高的熔岩管廊向前伸，灯光打得克制。', photo: 0 },
      { title: '熔岩石柱', body: '洞内尽头的 7.6 米石柱是镇洞之宝。', photo: 1 },
      { title: '洞外林地', body: '洞口外的金宁森林步道也凉。', photo: 2 },
    ],
    walk: [
      { title: '入口下洞', body: '下台阶进洞，走到石柱返回，往返约一公里。' },
      { title: '接金宁海边', body: '洞旁金宁海水浴场顺路看海。' },
    ],
    arrival: [
      { title: '巴士', body: '东岸方向巴士到金宁／万丈窟站；班次先查。' },
    ],
    tips: [
      { title: '常年低温', body: '带外套；地湿防滑。' },
      { title: '可能关闭', body: '以当日公告为准，别专程白跑。' },
    ],
    sources: [{ label: 'Visit Jeju', url: 'https://www.visitjeju.net/' }],
    restaurantIds: [], related: ['seongsan-ilchulbong', 'hamdeok-beach'],
  }
,
  {
    id: 'jagalchi-market', city: 'busan', name: '札嘎其市场', nameLocal: '자갈치시장 Jagalchi Market', type: 'waterfront', area: '南浦', areaId: 'nampo-jagalchi',
    intro: '韩国最大鱼市：楼下挑鱼楼上代客料理，港口边现切现吃。先问总价再坐。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '市场开放',
      summary: '市场免费进入；一楼选鱼、二楼食堂区代客料理（另收料理费）。',
      link: { label: 'Visit Busan', url: 'https://www.visitbusan.net/' },
      rows: [
        { item: '市场', ticket: '免费', reservation: '不需要' },
        { item: '代客料理', ticket: '食材费＋料理费', reservation: '先谈价再坐' },
      ],
      steps: [
        { title: '一楼看水箱', body: '鲜活度与明码价是挑店标准；不指名摊位，看当天水箱。' },
        { title: '先谈价再上楼', body: '食材费、代料理费、人头费逐项问清再下单。' },
      ],
      fallback: '不想赌市场就去市场旁的老字号生鱼片店，价格透明。',
    },
    price: '免费（吃按消费）', hours: '约 08:00–22:00（二楼食堂至晚）', address: '자갈치시장，부산 중구 자갈치해안로 52',
    highlights: [
      { title: '一楼水箱区', body: '帝王蟹、章鱼、鲍鱼排开——市场本体比吃更值一看。', photo: 0 },
      { title: '二楼食堂区', body: '代客料理的长桌区，窗外是港。', photo: 1 },
      { title: '海边鱼市广场', body: '楼外露天鱼市与「札嘎其大嫂」摊位是老釜山画面。', photo: 2 },
    ],
    walk: [
      { title: '楼内一层走一圈', body: '先看海鲜再决定吃不吃。' },
      { title: '二楼或外围吃', body: '楼上代客料理或外围生鱼片店。' },
      { title: '接国际市场', body: '隔壁国际市场与富平市场步行串联。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁 1 号线札嘎其站 10 号口步行约 2 分钟。' },
    ],
    tips: [
      { title: '时价要问清', body: '不写价的店先问总价；代料理费是潜规则。' },
      { title: '早市最活', body: '上午渔船卸货时段最有生气。' },
    ],
    sources: [{ label: 'Visit Busan', url: 'https://www.visitbusan.net/' }, kto],
    restaurantIds: ['jagalchi-market-hall'], related: ['bupyeong-market', 'yongdusan-park'],
  },
  {
    id: 'gamcheon-village', city: 'busan', name: '甘川文化村', nameLocal: '감천문화마을 Gamcheon Culture Village', type: 'heritage', area: '山坡村落', areaId: 'gamcheon',
    intro: '沿山坡层叠的彩色村落，从难民聚落到文创村。小巴上山、沿巷下行是正确走法。', duration: '2–3 小时',
    booking: {
      status: 'walk-in', label: '村落开放 · 免费',
      summary: '村落开放免费；个别观景设施与小展馆另收费。',
      link: { label: '甘川文化村', url: 'https://www.gamcheon.or.kr/' },
      rows: [{ item: '村落', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '土城站换小巴上山', body: '地铁 1 号线土城站换村巴到村口；步行上山费腿不建议。' },
        { title: '村口领地图', body: '旅游咨询处有盖章地图；巷弄岔多按主路。' },
      ],
      fallback: '雨天台阶湿滑注意；人多时放弃网红机位走背巷。',
    },
    price: '免费', hours: '村落全天（居民生活区，晚间安静）', address: '감천문화마을，부산 사하구 감내2로 203',
    highlights: [
      { title: '村口展望台', body: '第一眼就是整片彩色坡屋——机位在咨询处旁。', photo: 0 },
      { title: '小王子机位', body: '村中小王子与狐狸雕塑排队点；人多就走背巷。', photo: 1 },
      { title: '巷弄与居民', body: '真住区——轻声走，看墙画与猫，比机位更有内容。', photo: 2 },
    ],
    walk: [
      { title: '村口展望台起', body: '先拍全景再下巷子。' },
      { title: '沿主路下行', body: '主街→支巷穿走，岔路多凭感觉回主路。' },
      { title: '山脚小巴回', body: '下到山脚乘村巴回土城站。' },
    ],
    arrival: [
      { title: '轨道＋小巴', body: '地铁 1 号线土城站 6 号口换村巴（绿色小巴）。' },
    ],
    tips: [
      { title: '是居民区', body: '放低音量、不闯私宅门口；按标识走。' },
      { title: '别拖箱', body: '台阶多坡陡，背包就好。' },
    ],
    sources: [{ label: '甘川文化村', url: 'https://www.gamcheon.or.kr/' }, { label: 'Visit Busan', url: 'https://www.visitbusan.net/' }],
    restaurantIds: [], related: ['jagalchi-market'],
  },
  {
    id: 'haeundae-beach', city: 'busan', name: '海云台海水浴场', nameLocal: '해운대해수욕장 Haeundae Beach', type: 'waterfront', area: '海云台', areaId: 'haeundae-dongbaek',
    intro: '韩国最有名的城市海滩：一公里半白沙滩，背后是高层酒店群。黄昏与冬柏岛环线同排。', duration: '半天',
    booking: {
      status: 'walk-in', label: '开放免费',
      summary: '沙滩全天开放免费；夏季有遮阳伞租赁与冲洗设施。',
      link: { label: 'Visit Busan', url: 'https://www.visitbusan.net/' },
      rows: [{ item: '沙滩', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '海云台站出来走到底', body: '地铁站直走约 10 分钟见海。' },
        { title: '与冬柏岛联排', body: '沙滩西端接冬柏岛木栈道，一次走完。' },
      ],
      fallback: '浪大禁泳旗时下不了水——走冬柏岛与海岸咖啡馆。',
    },
    price: '免费', hours: '全天', address: '해운대해수욕장，부산 해운대구 우동',
    highlights: [
      { title: '白沙滩', body: '宽阔细沙与背山面海的城市天际线。', photo: 0 },
      { title: '冬柏岛望海', body: '从岛上看沙滩全景是更好角度。', photo: 1 },
      { title: '海边落日', body: '朝东的海滩落日看光线染楼群，夜景也亮。', photo: 2 },
    ],
    walk: [
      { title: '沙滩走西端', body: '从地铁侧走到西端接冬柏岛。' },
      { title: '木栈道环一圈', body: '冬柏岛环线回海云台。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁 2 号线海云台站步行约 10 分钟。' },
    ],
    tips: [
      { title: '夏季人海', body: '旺季极挤；清晨与淡季更好。' },
      { title: '看旗语', body: '红旗禁泳、黄旗谨慎——浪大硬下危险。' },
    ],
    sources: [{ label: 'Visit Busan', url: 'https://www.visitbusan.net/' }],
    restaurantIds: [], related: ['dongbaek-island', 'blueline-park'],
  },
  {
    id: 'dongbaek-island', city: 'busan', name: '冬柏岛', nameLocal: '동백섬 Dongbaekseom', type: 'nature', area: '海云台', areaId: 'haeundae-dongbaek',
    intro: '海云台西端的小丘岛：木栈道环一圈约 40 分钟，Nurimaru 峰顶看广安大桥与沙滩。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '开放免费',
      summary: '木栈道与 Nurimaru APEC 会址外观免费开放。',
      link: { label: 'Visit Busan', url: 'https://www.visitbusan.net/' },
      rows: [{ item: '岛与木栈道', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '海云台上岸即入岛', body: '沙滩西端步道接上岛环线。' },
        { title: '环一圈', body: '木栈道环行，Nurimaru 与展望台在中段。' },
      ],
      fallback: '雨天木栈湿滑；可只看 Nurimaru 外观就回。',
    },
    price: '免费', hours: '全天（建议日间）', address: '동백섬，부산 해운대구 우동',
    highlights: [
      { title: '木栈道环线', body: '林与海之间的高架木道，走一圈约 40 分钟。', photo: 0 },
      { title: 'Nurimaru', body: 'APEC 会址韩式屋顶建筑，立在海角上。', photo: 1 },
      { title: '看海云台全景', body: '回望沙滩与楼群是岛上最佳机位。', photo: 2 },
    ],
    walk: [
      { title: '沙滩接上', body: '海云台西端直接入岛。' },
      { title: '顺时针环', body: 'Nurimaru→展望台→回海云台。' },
    ],
    arrival: [
      { title: '步行', body: '海云台沙滩西端步行接入。' },
    ],
    tips: [
      { title: '与海云台绑定', body: '单为它来不值，连沙滩半天刚好。' },
    ],
    sources: [{ label: 'Visit Busan', url: 'https://www.visitbusan.net/' }],
    restaurantIds: [], related: ['haeundae-beach', 'blueline-park'],
  },
  {
    id: 'blueline-park', city: 'busan', name: '海云台蓝线海岸列车', nameLocal: '해운대 블루라인파크 Blue Line Park', type: 'waterfront', area: '海云台—松亭',
    intro: '旧铁路改的海岸观光列车：尾浦到松亭贴着海开。天空胶囊（高架小车）是另一层玩法。', duration: '1–2 小时',
    booking: {
      status: 'recommended', label: '购票 · 建议订胶囊',
      summary: '海岸列车与天空胶囊分别购票；胶囊车在假日容易售罄，官网可预购。',
      link: { label: 'Blue Line Park', url: 'https://www.bluelinepark.com/' },
      rows: [
        { item: '海岸列车', ticket: '收费', reservation: '现场或官网' },
        { item: '天空胶囊', ticket: '收费', reservation: '建议官网预购；假日易满' },
      ],
      steps: [
        { title: '尾浦或松亭上车', body: '尾浦在海云台东侧最近；胶囊与列车站台分开。' },
        { title: '单程加回程散步', body: '坐到松亭走海边回程，或往返乘。' },
      ],
      fallback: '胶囊售罄就坐列车——看的是同一片海。',
    },
    price: '收费', hours: '约 09:30–20:30（季节调整，以官网为准）', address: '해운대 블루라인파크，부산 해운대구 달맞이길62번길 13',
    highlights: [
      { title: '海岸列车', body: '贴海行驶的小火车，窗景一路是礁岸。', photo: 0 },
      { title: '天空胶囊', body: '高架彩色小舱悬在海岸线上——网红但视野确实好。', photo: 1 },
      { title: '松亭海滩', body: '终点松亭是比海云台本地的海滩。', photo: 2 },
    ],
    walk: [
      { title: '尾浦上', body: '海云台步行到尾浦站。' },
      { title: '松亭下', body: '松亭下车走海滩，或胶囊回程看夕照。' },
    ],
    arrival: [
      { title: '轨道＋步行', body: '海云台站步行到尾浦乘车区约 15 分钟。' },
    ],
    tips: [
      { title: '胶囊要订', body: '假日天空胶囊常售罄；想坐提前官网订。' },
      { title: '单程够用', body: '不必往返——去程坐车、回程走海岸步道更好。' },
    ],
    sources: [{ label: 'Blue Line Park', url: 'https://www.bluelinepark.com/' }, { label: 'Visit Busan', url: 'https://www.visitbusan.net/' }],
    restaurantIds: [], related: ['haeundae-beach', 'dongbaek-island'],
  },
  {
    id: 'haedong-yonggungsa', city: 'busan', name: '海东龙宫寺', nameLocal: '해동용궁사 Haedong Yonggungsa', type: 'heritage', area: '机张方向（北海岸）',
    intro: '韩国少见的临海寺：依崖建在礁岸上，海浪就在殿前。早去人少。', duration: '2 小时（含往返车程）',
    booking: {
      status: 'walk-in', label: '免费参拜',
      summary: '寺域免费；无预约，按开放时间来。',
      link: { label: 'Visit Busan', url: 'https://www.visitbusan.net/' },
      rows: [{ item: '寺域', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '海云台方向巴士', body: '从海云台换巴士北上约 30 分钟；下车后步行一段。' },
        { title: '108 阶下寺', body: '进寺先下台阶到崖上寺区。' },
      ],
      fallback: '大浪天崖边步道管制；寺区照常。',
    },
    price: '免费', hours: '约 05:00–日落', address: '해동용궁사，부산 기장군 기장읍 용궁길 86',
    highlights: [
      { title: '临海寺区', body: '殿阁嵌在礁岸上，浪声就在脚下——与山寺完全不同的气场。', photo: 0 },
      { title: '日出岩与海岸', body: '寺外礁石海岸日出方向好，跨年日出名所。', photo: 1 },
      { title: '主殿回廊', body: '回廊挂满祈愿灯，顺阶绕一圈。', photo: 2 },
    ],
    walk: [
      { title: '停车场段下行', body: '经市场摊街到台阶，下到寺区。' },
      { title: '绕崖一圈', body: '主殿→日出岩→海边步道。' },
    ],
    arrival: [
      { title: '巴士', body: '海云台站换 181 路等巴士；车程约 30 分钟。' },
    ],
    tips: [
      { title: '赶早', body: '上午十点前旅行团未到，最松。' },
      { title: '新年日出', body: '元旦日出名所，赶节人极多。' },
    ],
    sources: [{ label: 'Visit Busan', url: 'https://www.visitbusan.net/' }, kto],
    restaurantIds: [], related: ['haeundae-beach'],
  },
  {
    id: 'beomeosa', city: 'busan', name: '梵鱼寺', nameLocal: '범어사 Beomeosa', type: 'heritage', area: '金井山',
    intro: '金井山麓的大寺，678 年建。山林参道、三开门与石塔——釜山的山气所在。', duration: '2–3 小时',
    booking: {
      status: 'walk-in', label: '免费参拜',
      summary: '寺域免费开放；个别殿堂与宿坊体验另计。',
      link: { label: '梵鱼寺官网', url: 'https://www.beomeosa.co.kr/' },
      rows: [{ item: '寺域', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '地铁梵鱼寺站换巴士', body: '1 号线梵鱼寺站出换 90 路小巴上山约 10 分钟。' },
        { title: '走一柱门参道', body: '山门下参道林阴好，慢慢上。' },
      ],
      fallback: '枫叶季人多；雨天寺区照常但山路滑。',
    },
    price: '免费', hours: '约日出–日落', address: '범어사，부산 금정구 범어사로 250',
    highlights: [
      { title: '一柱门', body: '山门牌坊与参道是梵鱼寺的开场白。', photo: 0 },
      { title: '大雄殿与三层石塔', body: '寺域主殿与石塔，秋日红叶环抱。', photo: 1 },
      { title: '金井山参道', body: '寺后接金井山城登山道，想走山的接得上。', photo: 2 },
    ],
    walk: [
      { title: '小巴到山门', body: '梵鱼寺站 90 路小巴直达。' },
      { title: '参道步行', body: '一柱门进，天王门、不二门依次上。' },
      { title: '按体力选加山', body: '金井山城方向可走一段或回。' },
    ],
    arrival: [
      { title: '轨道＋小巴', body: '地铁 1 号线梵鱼寺站 5 号口外换 90 路。' },
    ],
    tips: [
      { title: '秋日最值', body: '枫叶季金井山是釜山名所。' },
      { title: '晨钟暮鼓', body: '早晚课时段最静。' },
    ],
    sources: [{ label: '梵鱼寺官网', url: 'https://www.beomeosa.co.kr/' }, { label: 'Visit Busan', url: 'https://www.visitbusan.net/' }],
    restaurantIds: [], related: [],
  },
  {
    id: 'gwangalli-beach', city: 'busan', name: '广安里海滩', nameLocal: '광안리해수욕장 Gwangalli Beach', type: 'waterfront', area: '广安里', areaId: 'gwangalli',
    intro: '正对广安大桥的弧形海滩：白天看海、晚上看桥灯。民乐洞一侧生鱼片巷与咖啡馆密集。', duration: '半天到一晚',
    booking: {
      status: 'walk-in', label: '开放免费',
      summary: '沙滩全天开放免费。',
      link: { label: 'Visit Busan', url: 'https://www.visitbusan.net/' },
      rows: [{ item: '沙滩', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '广安站步行 10 分钟', body: '地铁 2 号线广安站往海方向走。' },
        { title: '黄昏加夜景', body: '日落前后到，看桥灯亮起是定番。' },
      ],
      fallback: '雨天海滩失色，民乐洞咖啡馆照常看窗景。',
    },
    price: '免费', hours: '全天；桥灯入夜亮', address: '광안리해수욕장，부산 수영구 광안해변로',
    highlights: [
      { title: '广安大桥夜景', body: '沙滩正对双索大桥，入夜灯亮起是釜山名片。', photo: 0 },
      { title: '民乐洞生鱼片巷', body: '滩后巷内一排生鱼片店与咖啡馆，比海云台本地。', photo: 1 },
      { title: '弧形沙滩', body: '弧形滩线与桥同框，无人机式构图在滩上就有。', photo: 2 },
    ],
    walk: [
      { title: '滩走一段', body: '从民乐洞侧往桥方向走。' },
      { title: '找家咖啡馆等灯', body: '二楼以上座位正对桥。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁 2 号线广安站或金莲山站步行约 10 分钟。' },
    ],
    tips: [
      { title: '周五无人机秀', body: '部分周末有广安里无人机灯光秀（以公告为准）。' },
      { title: '夜归注意末班', body: '看完夜景地铁回；深夜出租车可打。' },
    ],
    sources: [{ label: 'Visit Busan', url: 'https://www.visitbusan.net/' }],
    restaurantIds: ['momos-oncheoncheon'], related: ['haeundae-beach'],
  },
  {
    id: 'bupyeong-market', city: 'busan', name: '富平罐头市场', nameLocal: '부평깡통시장 Bupyeong Kkangtong Market', type: 'waterfront', area: '南浦', areaId: 'nampo-jagalchi',
    intro: '白天传统市场、晚上夜市摊区：「罐头市场」的名字来自韩战年代进口罐头。坚果糖饼是招牌。', duration: '1–1.5 小时（傍晚最好）',
    booking: {
      status: 'walk-in', label: '市场开放',
      summary: '市场免费；夜市摊区约 19:00 起（以现场为准）。',
      link: { label: 'Visit Busan', url: 'https://www.visitbusan.net/' },
      rows: [{ item: '市场与摊区', ticket: '免费（按摊消费）', reservation: '不需要' }],
      steps: [
        { title: '札嘎其旁步行可达', body: '与札嘎其、国际市场连成一片。' },
        { title: '傍晚来', body: '摊区点灯后人声鼎沸才是本体。' },
      ],
      fallback: '摊区休市（少见）时市场内餐馆照常。',
    },
    price: '免费（按摊消费）', hours: '市场白天；摊区约 19:00–23:00', address: '부평깡통시장，부산 중구 부평1길 48',
    highlights: [
      { title: '夜市摊区', body: '成排小吃摊：糖饼、饺子、烤肉串、鱼糕。', photo: 0 },
      { title: '坚果糖饼', body: '씨앗호떡——釜山版本的糖饼塞满坚果，排队王。', photo: 1 },
      { title: '国际市场连走', body: '隔壁国际市场与日用小商品街一并走。', photo: 2 },
    ],
    walk: [
      { title: '先走市场', body: '白天看市场结构，傍晚回摊区。' },
      { title: '摊区按人排', body: '哪家队伍长吃哪家；糖饼先垫一个。' },
    ],
    arrival: [
      { title: '轨道到达', body: '札嘎其站或南浦站步行 5–10 分钟。' },
    ],
    tips: [
      { title: '备现金', body: '摊位现金更顺。' },
      { title: '与札嘎其同排', body: '白天鱼市＋晚上摊区是南浦一天的完整内容。' },
    ],
    sources: [{ label: 'Visit Busan', url: 'https://www.visitbusan.net/' }],
    restaurantIds: ['bupyeong-night-stalls'], related: ['jagalchi-market', 'yongdusan-park'],
  },
  {
    id: 'yongdusan-park', city: 'busan', name: '龙头山公园与釜山塔', nameLocal: '용두산공원・부산타워', type: 'landmark', area: '南浦', areaId: 'nampo-jagalchi',
    intro: '南浦后山的小公园与釜山塔展望台：老港区的全景在这里看。扶梯从光复路上山。', duration: '1–1.5 小时',
    booking: {
      status: 'partial', label: '公园免费 · 塔收费',
      summary: '公园与扶梯免费；釜山塔展望台购票入场。',
      link: { label: 'Visit Busan', url: 'https://www.visitbusan.net/' },
      rows: [
        { item: '公园', ticket: '免费', reservation: '不需要' },
        { item: '釜山塔展望台', ticket: '收费', reservation: '现场购票' },
      ],
      steps: [
        { title: '光复路扶梯上山', body: '南浦商店街旁的登山扶梯直接上公园。' },
        { title: '塔上看港', body: '展望台看釜山港与影岛方向——老港的全景机位。' },
      ],
      fallback: '塔不想登就公园散步；看塔夜景灯从街上即可。',
    },
    price: '公园免费；塔收费', hours: '公园全天；塔约 10:00–22:00（以官网为准）', address: '용두산공원，부산 중구 용두산길 37-55',
    highlights: [
      { title: '釜山塔展望', body: '看港、影岛大桥与老港区全景。', photo: 0 },
      { title: '登山扶梯', body: '从光复路直接上山的扶梯本身是老城区设施景观。', photo: 1 },
      { title: '钟楼与花坛', body: '市民公园的日常：下棋老人与花钟。', photo: 2 },
    ],
    walk: [
      { title: '扶梯上公园', body: '光复路登山扶梯到公园层。' },
      { title: '绕公园一圈', body: '塔、钟楼、李舜臣像顺路。' },
      { title: '回南浦吃', body: '下山接南浦洞商店街。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁 1 号线南浦站步行约 5 分钟到扶梯口。' },
    ],
    tips: [
      { title: '看港景值', body: '展望台看的是釜山港工业景——与海滩景完全不同的釜山。' },
    ],
    sources: [{ label: 'Visit Busan', url: 'https://www.visitbusan.net/' }],
    restaurantIds: [], related: ['jagalchi-market', 'bupyeong-market'],
  },
  {
    id: 'taejongdae', city: 'busan', name: '太宗台', nameLocal: '태종대 Taejongdae', type: 'nature', area: '影岛',
    intro: '影岛南端的崖岸公园：松林、灯塔与观景台看外海。环园小火车（Danubi）省腿。', duration: '2–3 小时',
    booking: {
      status: 'walk-in', label: '公园免费 · 小火车收费',
      summary: '公园免费开放；环园 Danubi 小火车另收费随上随下。',
      link: { label: 'Visit Busan', url: 'https://www.visitbusan.net/' },
      rows: [
        { item: '公园', ticket: '免费', reservation: '不需要' },
        { item: 'Danubi 小火车', ticket: '收费', reservation: '现场购票' },
      ],
      steps: [
        { title: '南浦巴士到影岛', body: '南浦方向巴士过影岛大桥到太宗台终点。' },
        { title: '小火车代步', body: '环园一圈约 4 公里，观景台与灯塔两站重点下。' },
      ],
      fallback: '大浪天崖边管制；火车照跑时可改车览。',
    },
    price: '公园免费；小火车收费', hours: '公园约 04:00–24:00；小火车按时刻', address: '태종대，부산 영도구 전망로 24',
    highlights: [
      { title: '崖岸展望台', body: '松林尽头的外海崖景，天好能看到对马岛方向。', photo: 0 },
      { title: '太宗台灯塔', body: '白灯塔与崖下卵石滩，下台阶可达。', photo: 1 },
      { title: '松林与海', body: '影岛南端的松林岸线，釜山最「野」的市区段。', photo: 2 },
    ],
    walk: [
      { title: '门口上车', body: 'Danubi 小火车到展望台站。' },
      { title: '两站下', body: '展望台与灯塔两处重点。' },
      { title: '回影岛或南浦', body: '巴士回南浦接南浦内容。' },
    ],
    arrival: [
      { title: '巴士', body: '南浦方向乘巴士到太宗台终点。' },
    ],
    tips: [
      { title: '与影岛同排', body: '白浅滩文化村（흰여울문화마을）在影岛北岸，顺路加。' },
    ],
    sources: [{ label: 'Visit Busan', url: 'https://www.visitbusan.net/' }],
    restaurantIds: [], related: ['jagalchi-market'],
  }
]
