import type { Attraction } from '../../attractions'

const myTourism = { label: '马来西亚旅游局', url: 'https://www.malaysia.travel/' }

export const malaysiaAttractions: Attraction[] = [
  {
    id: 'petronas-towers', city: 'kuala-lumpur', name: '双子塔', nameLocal: 'Petronas Twin Towers', type: 'landmark', area: 'KLCC',
    intro: '吉隆坡的天际线本尊。底层商场免费逛，天桥与观景台售票——值不值看天气。', duration: '1–2 小时（登塔另计）',
    booking: {
      status: 'recommended', label: '登塔建议线上购票',
      summary: '41 层天桥与 86 层观景台需购票（票价以官网为准），线上可买且常售罄；底层 KLCC 商场与公园免费。',
      link: { label: '双子塔官方票务', url: 'https://www.petronastwintowers.com.my/' },
      rows: [
        { item: '天桥+观景台', ticket: '以官网为准', reservation: '官网线上购票，分时段' },
        { item: '底层商场与 KLCC 公园', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '先定登不登塔', body: '天桥+观景台是收费项目；只在下面看塔与公园免费，也一样好看。' },
        { title: '晴天看全景', body: '观景台意义全看天气——能见度差就别买。' },
        { title: 'KLCC 公园绕一圈', body: '塔后的 KLCC 公园是看双子塔最好的免费机位；黄昏灯光亮时来。' },
      ],
      fallback: '票售罄或天气差就只在公园看塔；晚上 KLCC 喷泉灯光秀免费。',
    },
    price: '底层免费；观景台以官网为准', hours: '观景台约 09:00–21:00（以官网为准）；公园全天', address: 'Petronas Twin Towers, Kuala Lumpur City Centre, 50088 Kuala Lumpur',
    highlights: [
      { title: '塔底仰望', body: '从 KLCC 公园侧看双塔最完整；白天看钢结构，晚上看灯光。', photo: 0 },
      { title: '41 层天桥', body: '购票项目：站在连接双塔的天桥上看市区。', photo: 1 },
      { title: 'KLCC 公园夜景', body: '塔后公园的湖与喷泉是看双塔的免费经典机位。', photo: 2 },
    ],
    walk: [
      { title: '塔底进商场', body: 'Suria KLCC 商场从塔底进入；购物餐饮同楼。' },
      { title: '塔后公园', body: '穿商场或绕行到 KLCC 公园——看塔的最好角度在这里。' },
      { title: '接 Pavilion 或阿罗街', body: '沿天桥廊道可走到 Pavilion 方向；晚上接阿罗街吃饭。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'LRT Kelana Jaya 线 KLCC 站直达商场地下；或单轨到附近站。' },
      { title: '打车', body: '定位 Petronas Twin Towers / Suria KLCC。' },
    ],
    tips: [
      { title: '登塔分时段', body: '观景台分时段入场，线上购票先选时段；售罄就公园看。' },
      { title: '免费也足够', body: '多数人只看塔与公园——登塔是加分项不是必做。' },
    ],
    sources: [{ label: '双子塔官方票务', url: 'https://www.petronastwintowers.com.my/' }, myTourism],
    restaurantIds: ['madam-kwans'], related: ['merdeka-square', 'central-market-kl'],
  },
  {
    id: 'merdeka-square', city: 'kuala-lumpur', name: '独立广场', nameLocal: 'Dataran Merdeka', type: 'heritage', area: '老城',
    intro: '1957 年国旗第一次升起的广场，苏丹阿都沙末大厦立在对面。殖民建筑群与老城散步的起点。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '开放广场',
      summary: '免费开放的城市广场；周边建筑群外观可看，部分建筑按时段开放。',
      link: myTourism,
      rows: [
        { item: '广场与外观', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '清晨或傍晚', body: '中午的广场毫无遮蔽极晒；黄昏光最好。' },
        { title: '看苏丹阿都沙末大厦', body: '广场对面的摩尔式大厦是吉隆坡最上镜的殖民建筑。' },
        { title: '接茨厂街', body: '广场步行到茨厂街（Petaling Street）约 10 分钟，连起来走。' },
      ],
      fallback: '正午太热就跳过广场只看大厦外观；先去茨厂街室内骑楼。',
    },
    price: '免费', hours: '全天开放', address: 'Dataran Merdeka, Jalan Raja, 50050 Kuala Lumpur',
    highlights: [
      { title: '苏丹阿都沙末大厦', body: '铜顶与拱廊的摩尔式建筑是吉隆坡最著名的立面；从广场草坪看最正。', photo: 0 },
      { title: '大草坪与旗杆', body: '1957 年独立的升旗地；百米旗杆是世界最高之一。', photo: 1 },
      { title: '老城建筑群', body: '广场周边集中了皇家雪兰莪俱乐部、圣马利亚堂等殖民建筑。', photo: 2 },
    ],
    walk: [
      { title: '广场草坪绕一圈', body: '看旗杆、喷水池与对面大厦的立面。' },
      { title: '周边建筑外观', body: '圣马利亚堂、皇家雪兰莪俱乐部看外观。' },
      { title: '接茨厂街或中央市场', body: '往南走 10 分钟到茨厂街；中央市场顺路。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'LRT Masjid Jamek 站步行约 10 分钟。' },
      { title: '步行串联', body: '与茨厂街、中央市场、国家清真寺步行相连。' },
    ],
    tips: [
      { title: '正午极晒', body: '广场无遮阴；傍晚来或阴天来。' },
      { title: '与老城打包', body: '单独来一趟不值——与茨厂街、中央市场串成半天。' },
    ],
    sources: [myTourism],
    restaurantIds: [], related: ['petaling-street', 'masjid-negara'],
  },
  {
    id: 'batu-caves', city: 'kuala-lumpur', name: '黑风洞', nameLocal: 'Batu Caves', type: 'heritage', area: '市郊北',
    intro: '石灰岩洞里的印度教圣地：272 级彩阶、巨像与洞内天光。半天的市郊方向。', duration: '半天（含往返）',
    booking: {
      status: 'walk-in', label: '主洞免费',
      summary: '主洞（Temple Cave）免费；登 272 级台阶进洞。大宝森节期间人潮另计。',
      link: myTourism,
      rows: [
        { item: '主洞参观', ticket: '免费', reservation: '不需要' },
        { item: 'Dark Cave（保育区）', ticket: '另收费·导览', reservation: '以现场为准' },
      ],
      steps: [
        { title: 'KTM 通勤车直达', body: '从 KL Sentral 坐 KTM Komuter 到 Batu Caves 终点站下车即到；最省事。' },
        { title: '272 级彩阶', body: '彩阶直上洞口；台阶较陡，看体力。猴子多，别拿食物外露。' },
        { title: '洞内看天光', body: '洞口开天窗，正午光线直射进洞是招牌画面。' },
      ],
      fallback: '雨天台阶湿滑仍可走但要慢；大宝森节（约 1–2 月）人潮极多，自行取舍。',
    },
    price: '主洞免费', hours: '约 06:00–21:00', address: 'Batu Caves, Gombak, 68100 Selangor',
    highlights: [
      { title: '彩阶与巨像', body: '272 级彩色台阶与世界最高 Murugan 像——山脚下的画面感极强。', photo: 0 },
      { title: '洞内天光', body: '主洞顶部的开口让天光直射进石灰岩洞，正午最震撼。', photo: 1 },
      { title: '猴群', body: '台阶上的长尾猕猴不怕人；看好包与食物。', photo: 2 },
    ],
    walk: [
      { title: '巨像下进', body: '从山脚 Murugan 像下开始上台阶。' },
      { title: '洞内绕', body: '洞内看天光与祭坛；顶部的光井是重点。' },
      { title: '下山回车站', body: '原路下山回 KTM 站，接市区。' },
    ],
    arrival: [
      { title: 'KTM Komuter', body: 'KL Sentral 坐 KTM 到 Batu Caves 终点约 30 分钟。' },
      { title: '打车', body: '市区打车约 20–30 分钟；回程洞口叫车。' },
    ],
    tips: [
      { title: '着装', body: '遮膝遮肩为宜；阶梯陡，穿能走的鞋。' },
      { title: '防猴', body: '食物、塑料袋、手机收好——猴子抢东西是真的。' },
    ],
    sources: [myTourism],
    restaurantIds: [], related: ['masjid-negara'],
  },
  {
    id: 'petaling-street', city: 'kuala-lumpur', name: '茨厂街', nameLocal: 'Jalan Petaling / Petaling Street', type: 'waterfront', area: '老城唐人街',
    intro: '吉隆坡唐人街的主街：骑楼、老字号与市井摊。清晨吃酿豆腐或猪肠粉，傍晚看摊。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '开放街区',
      summary: '开放市场街无门票；白天与傍晚摊位都在，傍晚更有气氛。',
      link: myTourism,
      rows: [
        { item: '街区', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '从骑楼下走', body: '茨厂街主街加了顶棚；两侧骑楼老字号与摊交错。' },
        { title: '认老店', body: '金莲记（福建面）、汉记（猪肠粉）等老档就在街里——吃页有店名。' },
        { title: '接中央市场', body: '茨厂街尽头步行 5 分钟到中央市场，可连走。' },
      ],
      fallback: '想买实惠纪念品要砍价；不想买就当散步看招牌。',
    },
    price: '免费', hours: '约 10:00–21:00（各摊不一）', address: 'Jalan Petaling, 50000 Kuala Lumpur',
    highlights: [
      { title: '骑楼与老招牌', body: '中文老招牌与骑楼立面是茨厂街的底子；抬头看。', photo: 0 },
      { title: '市集摊', body: '衣物、小物、小吃摊密集；砍价是规则。', photo: 1 },
      { title: '巷内美食', body: '主街两侧巷里有老档口——别只在主街看。', photo: 2 },
    ],
    walk: [
      { title: '主街走一遍', body: '从南口进走到底；看招牌与摊。' },
      { title: '支巷找吃', body: '支巷内的老档口更本地。' },
      { title: '接中央市场', body: '往西北走接中央市场与独立广场方向。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'LRT Pasar Seni 站步行约 5 分钟。' },
      { title: '步行串联', body: '与独立广场、中央市场、国家清真寺在同一片区。' },
    ],
    tips: [
      { title: '砍价', body: '摊货按 60–70% 起砍；不想买就别停留。' },
      { title: '看管好随身物', body: '人多杂，看好包；现金分散放。' },
    ],
    sources: [myTourism],
    restaurantIds: ['kim-lian-kee'], related: ['merdeka-square', 'central-market-kl'],
  },
  {
    id: 'masjid-negara', city: 'kuala-lumpur', name: '国家清真寺', nameLocal: 'Masjid Negara', type: 'heritage', area: '湖滨公园侧',
    intro: '吉隆坡最优雅的现代清真寺：蓝白星形屋顶与伞形柱廊。非穆斯林按指定时段参观。', duration: '45 分钟–1 小时',
    booking: {
      status: 'walk-in', label: '免费 · 按开放时段',
      summary: '非穆斯林游客有指定参观时段（礼拜时间不开放）；免费入场，袍子现场借。',
      link: myTourism,
      rows: [
        { item: '参观', ticket: '免费', reservation: '按非穆斯林开放时段到访' },
      ],
      steps: [
        { title: '查参观时段', body: '清真寺对游客有固定参观窗口（礼拜时间不开放）——到前看官网或现场牌示。' },
        { title: '借袍入内', body: '入口提供长袍与头巾；脱鞋入内。' },
        { title: '看柱廊与主殿', body: '伞形柱廊与蓝白主殿是看点；远看星形屋顶。' },
      ],
      fallback: '遇上不开放时段就绕外围看屋顶——湖滨公园与伊斯兰艺术博物馆在附近。',
    },
    price: '免费', hours: '非穆斯林参观时段以现场公告为准', address: 'Masjid Negara, Jalan Perdana, 50480 Kuala Lumpur',
    highlights: [
      { title: '伞形柱廊', body: '前庭的混凝土伞柱是这寺最出片的结构——行列感极强。', photo: 0 },
      { title: '星形屋顶', body: '主殿的 18 角星形屋顶代表五功与十三州；远观最完整。', photo: 1 },
      { title: '主殿内部', body: '蓝白主殿采光极好；非穆斯林可入指定区域看。', photo: 2 },
    ],
    walk: [
      { title: '前庭柱廊', body: '进寺先看柱廊的伞形阵列。' },
      { title: '主殿静观', body: '殿内看几何图案与采光；保持安静。' },
      { title: '接湖滨公园', body: '寺在湖滨公园南侧，出寺可接公园散步。' },
    ],
    arrival: [
      { title: '轨道/步行', body: 'KTM Kuala Lumpur 老火车站步行约 10 分钟；或从独立广场方向步行。' },
    ],
    tips: [
      { title: '时段限制', body: '周五上午与礼拜时段不开放；出发前核实。' },
      { title: '伊斯兰艺术博物馆在旁边', body: '国家清真寺旁的伊斯兰艺术博物馆值得连看（另收费）。' },
    ],
    sources: [myTourism],
    restaurantIds: [], related: ['merdeka-square', 'batu-caves'],
  },
  {
    id: 'central-market-kl', city: 'kuala-lumpur', name: '中央市场', nameLocal: 'Central Market / Pasar Seni', type: 'waterfront', area: '老城',
    intro: '1930 年代的装饰艺术市场建筑改成的工艺市集。遮雨、有冷气，是老城散步的中继站。', duration: '45 分钟–1.5 小时',
    booking: {
      status: 'walk-in', label: '开放市场',
      summary: '免费进入；手工艺品、蜡染与小吃集中在一栋楼里。',
      link: { label: '中央市场官网', url: 'https://www.centralmarket.com.my/' },
      rows: [
        { item: '市集', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '当散步中继', body: '走茨厂街—独立广场一线时把中央市场当休息点。' },
        { title: '看蜡染与手作', body: '马来西亚蜡染（batik）与锡器在这里可买可逛。' },
        { title: '后巷看壁画', body: '市场后的 Kasturi Walk 与壁画巷顺路。' },
      ],
      fallback: '不想买手信就走一圈出来；旁边的 Annexe Gallery 有时有小展。',
    },
    price: '免费', hours: '约 10:00–21:30', address: 'Central Market, Jalan Hang Kasturi, 50050 Kuala Lumpur',
    highlights: [
      { title: '装饰艺术楼', body: '浅蓝色 1930 年代市场建筑本身比卖的东西耐看。', photo: 0 },
      { title: '蜡染与锡器', body: 'batik 布料与 Royal Selangor 锡器是马来西亚手信的两大件。', photo: 1 },
      { title: 'Kasturi Walk', body: '市场旁的有顶市集廊，卖小吃与纪念品。', photo: 2 },
    ],
    walk: [
      { title: '楼内绕一圈', body: '看摊位与建筑结构；看上了再还价。' },
      { title: '接 Kasturi Walk', body: '出门接旁边市集廊。' },
      { title: '回茨厂街', body: '步行 5 分钟回茨厂街继续。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'LRT Pasar Seni 站步行 3 分钟。' },
    ],
    tips: [
      { title: '空调休息站', body: '老城散步热了就进来吹冷气——它的功能价值大于购物。' },
      { title: '还价', body: '手工艺品可还价；锡器等品牌店标价固定。' },
    ],
    sources: [{ label: '中央市场官网', url: 'https://www.centralmarket.com.my/' }, myTourism],
    restaurantIds: [], related: ['petaling-street', 'merdeka-square'],
  },
]
