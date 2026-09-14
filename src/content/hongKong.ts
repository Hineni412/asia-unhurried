/** Hong Kong city page content — structured from places/hong-kong/香港.md
 * Clone this pattern for other cities. Do not invent shops, prices, or ratings.
 */

import { foodImages } from './cities/photoData'

export type SourceLink = { label: string; url: string }

export type Restaurant = {
  id: string
  name: string
  nameEn?: string
  neighborhood: string
  location?: { address: string; areaId?: string; connection: string; source: SourceLink }
  order: string[]
  whyLinger: string
  practical: string
  verifiedAt: string
  sources: SourceLink[]
  queueNote?: string
}

export type CategoryImage = {
  src: string
  alt: string
  credit?: string
}

export type EatCategory = {
  id: string
  title: string
  intro: string
  image?: CategoryImage
  restaurants: Restaurant[]
}

export type Neighborhood = {
  id: string
  title: string
  body: string
  suited: string
  visit?: { duration: string; entry: string; walk: string; return: string; stay: string; source: SourceLink }
  image?: CategoryImage
}

export type DayTrip = {
  direction: string
  how: string
  worth: string
  image?: CategoryImage
  /** Optional internal link rendered under the direction title. */
  link?: { label: string; to: string }
}

export type MetaField = { label: string; value: string }

export type Essential = {
  title: string
  body: string
  action?: { label: string; to: string }
  links?: SourceLink[]
}

export const hongKong = {
  slug: 'hong-kong',
  name: '香港',
  nameEn: 'Hong Kong',
  tagline:
    '密度很高，但慢旅行依然成立：选一侧港岛或九龙住稳，用步行和渡轮代替追景点。早餐茶餐厅、中午有遮阴的街、黄昏海港，重复三次，比赶五个山顶有用。',
  note: '本页把香港当作独立 Places，不并入大陆行程。澳门只作短联游入口，不在此写满页。',
  verifiedAt: '2026-09-11',
  meta: [
    {
      label: '最佳季节',
      value: '秋冬更干爽好走；夏天湿热，台风季行程要留弹性。具体月份以出行当年气象为准。',
    },
    { label: '机场', value: '香港国际机场（HKG）' },
    {
      label: '建议停留',
      value: '4–5 晚不赶；3 晚只够一侧 + 一次渡轮。住稳一侧，少换酒店。',
    },
    {
      label: '地区标签',
      value: '东亚 · 独立目的地（不含中国大陆） · Wave 1',
    },
    { label: '气质', value: '港岛坡道与海港、九龙街市、离岛慢线' },
    { label: '核实日期', value: '2026-09-11' },
  ] as MetaField[],

  essentials: [
    {
      title: '机场 → 市区',
      body: '先确定酒店在港岛还是九龙，再比较机场快线加接驳、机场巴士或的士。不能只看列车时间，还要算车站到酒店的一段；晚到、带行李时先确认酒店接待和末班。',
      action: { label: '查看抵达步骤', to: '?tab=practical#guide-arrival' },
      links: [{ label: 'MTR', url: 'https://www.mtr.com.hk/' }],
    },
    {
      title: '建议住哪',
      body: '第一次来想走旧城、饮茶，可先看上环；重视九龙日常餐食，可先看油麻地–佐敦。全程住一侧即可。港岛特别看坡度，旧楼特别问电梯；在邻里页比较进出路线后再订房。',
      action: { label: '订房前逐项检查', to: '?tab=practical#guide-stay' },
    },
    {
      title: '建议晚数',
      body: '3 晚安排抵达、港岛一天、九龙一天和离开；5 晚再加西贡一天、一次市区留白。示例全程一家酒店，每天只定一个主要方向，行程页可展开查看。',
      action: { label: '展开每天安排', to: '?tab=itinerary#plan-three' },
    },
  ] as Essential[],

  overview: [
    '香港的节奏默认是快的。不疾不徐的做法不是「走完」，而是挑一条走廊住进去：同一条坡、同一间早餐、同一班天星。',
    '港岛这边，中环到上环再到西营盘、坚尼地城，是一条可以反复走的线。大馆给一个可以坐下来的院子；街市和楼梯街给日常。',
    '九龙这边，油麻地庙街、佐敦白加士街一带，比旺角更好停。旺角适合路过买东西，不适合当慢待基地——人流会把你推着走。',
    '海是出口。天星小轮十来分钟，不是景点，是换岸的方式。城市太密时，西贡或离岛比再排一个商场有用。',
  ],

  gettingThere: {
    intro: [
      '出发前先选好机场到酒店的整段路线。落地后连网、取行李，再按已确认的快线、巴士或出租车方案进城；八达通卡种和充值步骤见“出行指南”。',
      '市内以港铁 + 步行 + 巴士为主。港岛有坡，下午热的时候少安排「连续爬楼梯」。天星小轮中环—尖沙咀是换岸最快的海路，八达通可拍。离岛看当天船期，台风或大风会停航。',
      '叫车：出租车遍布；也有本地网约选项。高峰过海隧道会堵，短距离宁可地铁。',
    ],
    links: [{ label: '八达通官网', url: 'https://www.octopus.com.hk/' }],
    verifyReminders: [
      '机场快线是否仍直达香港站 / 九龙站，以及行李托运是否仍办',
      '八达通旅游版、手机版、租借版的押金与退款规则',
      '港铁节假日或检修对机场线、过海线的影响',
      '到澳门的船公司、码头（上环 / 九龙）与当日班次',
    ],
  },

  neighborhoods: [
    {
      id: 'central-sheung-wan',
      visit: {
        "duration": "2–3 小时；饮茶或参观另加。",
        "entry": "从上环站出发；出站前看街道图确认电梯及出口。",
        "walk": "德辅道中 → 荷李活道 → 大馆。坡道和楼梯较多，可缩成上环平路一段。",
        "return": "大馆之后往中环站返回；疲累时不要再走回上环。",
        "stay": "适合常在港岛活动的人。订房核对酒店所在坡度、电梯及实际入口。",
        "source": {
          "label": "香港旅发局旧城步行地图",
          "url": "https://www.discoverhongkong.com/content/dam/dhk/market-site/in/e-guidebook/pdf/Old%20Town%20Central.pdf"
        }
      },
      title: '中环–上环（含大馆）',
    image: {
      src: '/images/places/nb-central.jpg',
      alt: '中环大馆（旧中区警署）',
      credit: 'Wikimedia Commons',
    },
      body: "上环街市与中环旧建筑可以串成一程。先挑一间茶楼，再决定是否走到大馆，避免用餐与参观都排满。",
      suited: "第一次来、喜欢饮茶和旧建筑，能接受坡道的人。",
    },
    {
      id: 'yau-ma-tei-jordan',
      visit: {
        "duration": "1.5–2.5 小时；不含排队。",
        "entry": "从油麻地站进入，先在街道图找庙街。",
        "walk": "庙街 → 佐敦道一带 → 白加士街。美都与澳牛、麦文记分处两段。",
        "return": "在佐敦站返回；想看尖沙咀海港可另搭港铁，不必强行往返步行。",
        "stay": "适合重视日常餐食、以九龙为基地的人；核对临街噪声和客房大小。",
        "source": {
          "label": "港铁车站及街道图",
          "url": "https://www.mtr.com.hk/en/customer/services/system_map.html"
        }
      },
      title: '油麻地–佐敦',
    image: {
      src: '/images/places/nb-temple.jpg',
      alt: '庙街夜市牌楼',
      credit: 'Wikimedia Commons',
    },
      body: "庙街和白加士街分开走，中间留一次休息。早餐与云吞面不必同一顿完成。",
      suited: "想以九龙为基地、把早餐和街坊餐食放在前面的人。",
    },
    {
      id: 'sai-ying-pun-kennedy',
      visit: {
        "duration": "1.5–2 小时；只选一端。",
        "entry": "西营盘站或坚尼地城站二选一，不必贯穿整个港岛西。",
        "walk": "选定一站后走附近街道和海旁，再回同一站；西营盘往山坡方向会遇到上坡。",
        "return": "回所选港铁站；两区之间想换位置可搭港铁。",
        "stay": "适合愿意在同一区重复走的人；先看酒店离车站的坡度和距离。",
        "source": {
          "label": "港铁车站及街道图",
          "url": "https://www.mtr.com.hk/en/customer/services/system_map.html"
        }
      },
      title: '西营盘–坚尼地城',
    image: {
      src: '/images/places/nb-saiyingpun.jpg',
      alt: '西营盘高街',
      credit: 'Wikimedia Commons',
    },
      body: "这两个区域适合分别慢走。第一次来先选一端，留下一端给下一天，不把它们当作连续必走的海滨线。",
      suited: "愿意在同一区反复散步，不追求密集景点的人。",
    },
    {
      id: 'wan-chai',
      visit: {
        "duration": "1.5–2 小时；吃饭另留。",
        "entry": "从湾仔站进入，查看站外街道图。",
        "walk": "轩尼诗道 → 庄士敦道一带，按用餐地点选择起点；过街走正式通道。",
        "return": "回湾仔站，不必为了串中环而继续长距离步行。",
        "stay": "若主要活动在港岛可考虑；本行程无需为一顿烧鹅换酒店。",
        "source": {
          "label": "港铁车站及街道图",
          "url": "https://www.mtr.com.hk/en/customer/services/system_map.html"
        }
      },
      title: '湾仔（走廊，不必单住）',
    image: {
      src: '/images/places/nb-wanchai.jpg',
      alt: '湾仔海旁天际线',
      credit: 'Wikimedia Commons',
    },
      body: "以一顿饭为中心安排附近街道。甘牌与糖水店不是同一店面，吃不下时选一家就够。",
      suited: "想围绕一顿烧鹅或糖水安排半天的人。",
    },
    {
      id: 'sai-kung',
      visit: {
        "duration": "镇上 3–4 小时；往返市区另留。",
        "entry": "先在出行指南确认巴士或小巴路线，到西贡市中心公共交通站点下车。",
        "walk": "镇中心 → 海旁 → 公众码头附近；本路线只走镇上，不自动包含出海。",
        "return": "到海旁交通总站核对回程方向及末班；去程先记下回程站名。",
        "stay": "适合五晚行程中抽一天换环境；以香港市区为基地，不需要搬酒店。",
        "source": {
          "label": "香港旅发局西贡海旁与交通",
          "url": "https://www.discoverhongkong.com/eng/place-to-go/travel.guide-sharp-island.html"
        }
      },
      title: '西贡（慢半日到一日）',
    image: {
      src: '/images/places/nb-saikung.jpg',
      alt: '西贡海旁',
      credit: 'Wikimedia Commons',
    },
      body: "先把镇上和海旁走舒服。坐船是额外行程，需要另核天气、船班与回程，不能临时当作必选项目。",
      suited: "在香港住五晚左右，想抽一天看海、放慢节奏的人。",
    },
  ] as Neighborhood[],

  dayTrips: [
    {
      direction: '天星 + 尖沙咀海旁',
    image: {
      src: '/images/daytrips/day-ferry.jpg',
      alt: '天星小轮驶过维港',
      credit: 'Wikimedia Commons',
    },
      how: '渡轮过海，黄昏走',
      worth: '不必占整天。当晚走完坐地铁回家。',
    },
    {
      direction: '西贡',
    image: {
      src: '/images/daytrips/day-saikung.jpg',
      alt: '西贡避风塘',
      credit: 'Wikimedia Commons',
    },
      how: '巴士 / 小巴',
      worth: '值得半日到一日。海鲜当场景，不指定店。',
    },
    {
      direction: '长洲 / 南丫',
      image: {
        src: '/images/daytrips/day-island.jpg',
        alt: '离岛海边',
        credit: 'Pexels',
      },
      how: '中环出发的离岛渡轮',
      worth: '值得一天。船期和风浪先核。别两岛同一天赶。',
    },
    {
      direction: '大澳',
      how: '较远，需接驳',
      worth: '只在你真想看水乡时占一天。回来会累。',
    },
    {
      direction: '澳门',
      how: '上环或九龙客轮码头',
      worth: '一日能走历史城区一圈 + 一顿饭；过夜更不赶。详见联游，不在此写满页。',
    },
  ] as DayTrip[],

  eatIntro:
    '茶餐厅是日常，点心是坐下来的时段，一碗面可以解决一餐。不写「必吃 30 店」——固定一种早餐节奏，正餐只认真安排一次。',

  eatCriteria: [
    { title: '慢待契合', body: '能坐住，或本身就是本地日常节奏；不只为排队拍照。' },
    { title: '品类代表性', body: '能说明这一类香港食物怎么吃，而不是孤立的店名。' },
    { title: '可核实', body: 'OpenRice、官网或近年靠谱指南有近况；不确定仍营业则不用。' },
    { title: '邻里可走', body: '能挂到一带或地铁站，方便住稳一侧的人走到。' },
    { title: '点单可执行', body: '每店只给 1–3 个具体「点什么」。' },
    { title: '场景诚实', body: '长队、贵价正餐、吃完快走，如实写。' },
    { title: '多样性', body: '品类铺开；同品类一般 1–2 家。' },
    { title: '不编造', body: '不写评分、人均、神器说法；每店留核实日期与来源。' },
  ],

  eatExclude:
    '排除：游客陷阱、只有旧文没有近况、纯连锁灌水。知名排队店若仍列入，会写明排队与是否值得占掉半天。',

  howToOrder: [
    '茶餐厅：看墙上或纸餐牌，一次点齐。服务员语速快，想清楚再开口。普通话多数能沟通，写下来也行。',
    '早茶：有推车就拦车；没车就填点心卡或口头点。茶位是常规。',
    '云吞面：细蓉 / 大蓉是份量说法；捞面则面和汤分开。',
    '车仔面：自己拣面、汤底、配料。不要一次夹到碗沿。',
    '烧腊：按份或按部位；一人点「半只」通常过量，拼盘更合适。',
    '忌口：花生、海鲜、麸质在街头和小店并不总标得清楚。有过敏先问，或避开复杂配料的车仔面。',
  ],

  avoid: [
    '为「丝袜奶茶始祖」「最平米其林」去排一小时，回来只剩赶路。兰芳园、添好运这类名店近况仍在，但本页不列入——场景是队列，不是慢待。',
    '佳佳甜品仍有分店，2026 年 OpenRice 食评对佐敦店水准分歧较大，故不推荐。',
    '旺角、尖沙咀商场里的「港式」连锁，味道稳定，但学不到这条街。',
    '西贡海鲜不要被门口拉客定菜单绑死；看价、看秤，或改吃镇上普通食肆。',
  ],

  eatRhythm:
    '固定一间茶餐厅或一碗面当早餐 / 早午餐，午餐看走到哪，晚上只认真坐一顿（镛记或西贡）。糖水放在走路之后。不要一天排三家排队店。连锁保底：便利店关东煮和饭团能救急；大家乐、大快活、美心一类遍地都是，饿了就进，不当体验。',

  allergies: [
    '云吞、烧卖常见虾、猪肉混合。',
    '车仔面配料含鱼蛋、牛杂、辣油，交叉污染难免。',
    '糖水常见奶、糖、坚果（杏仁霜、芝麻糊）。',
    '素食选乐茶轩，比在普通茶餐厅「不要肉」可靠。',
  ],

  categories: [
    {
      id: 'cha-chaan-teng',
      title: '茶餐厅 / 常餐',
      image: foodImages['eat-hong-kong-cha-chaan-teng'],
      intro:
        '茶餐厅是香港的日常桌。菜单中西混杂：奶茶、炒蛋、焗饭、通粉。有的店让你坐住，有的店要你吃完就走——两种都是本地节奏。',
      restaurants: [
        {
          id: 'mido',
        location: {
          "address": "香港油麻地庙街63号地下",
          "areaId": "yau-ma-tei-jordan",
          "connection": "在油麻地庙街一端；与佐敦白加士街不是同一条街。",
          "source": {
            "label": "OpenRice 地址",
            "url": "https://www.openrice.com/zh/hongkong/r-美都餐室-油麻地-港式-r2310"
          }
        },
          name: '美都餐室',
          nameEn: 'Mido Cafe',
          neighborhood: '油麻地庙街 63 号地铺 · 油麻地站 C 出口步行约 4 分钟',
          order: ['焗排骨饭或焗猪扒饭', '红豆莲子冰', '想简单就西多士 + 奶茶'],
          whyLinger:
            '开业数十年的旧式餐室，楼上雅座能坐住。食物不是全城第一，场景是油麻地还在用的冰室。近年游客多了，仍比佐敦那条排队街好坐。',
          practical:
            '现况资料以现金为主。周三全日休息。OpenRice 列 11:00–20:00（周三休），以到店为准。下午去比午饭好等。有食评提到店内对拍照不欢迎——当吃饭，不当布景。',
          verifiedAt: '2026-09-11',
          sources: [
            {
              label: 'OpenRice',
              url: 'https://www.openrice.com/zh/hongkong/r-美都餐室-油麻地-港式-r2310',
            },
            {
              label: 'Time Out Hong Kong 茶餐厅榜，2026-05',
              url: 'https://www.timeout.com/hong-kong/restaurants/hong-kongs-best-cha-chaan-teng-cafes',
            },
          ],
        },
        {
          id: 'australia-dairy',
        location: {
          "address": "香港佐敦白加士街47–49号地下",
          "areaId": "yau-ma-tei-jordan",
          "connection": "与麦文记同在白加士街，可二选一，不必连吃两顿。",
          "source": {
            "label": "OpenRice 地址",
            "url": "https://www.openrice.com/en/hongkong/r-australia-dairy-company-jordan-hong-kong-style-dessert-r90"
          }
        },
          name: '澳洲牛奶公司',
          nameEn: 'Australia Dairy Company',
          neighborhood: '佐敦白加士街 · 佐敦站',
          order: ['炒蛋厚多士', '通粉或通心粉套餐', '炖奶'],
          whyLinger:
            '严格说，不适合慢待。这是本地「光速餐」：点得快、吃得快、让位快。列入是因为它仍是茶餐厅常餐的标本，不是因为值得坐一下午。体验一次即可，不要当下午茶。',
          practical:
            '长队是常态，Time Out 也写明 almost always a long queue。只收现金的说法在近年介绍里反复出现，带备现金。店员语速极快，想好再进门。OpenRice 2025 港式餐厅金奖仍记在此店名下——奖项只作近况旁证，不当评分。',
          verifiedAt: '2026-09-11',
          queueNote: '长队是常态。体验一次即可，不要当下午茶。',
          sources: [
            {
              label: 'OpenRice',
              url: 'https://www.openrice.com/en/hongkong/r-australia-dairy-company-jordan-hong-kong-style-dessert-r90',
            },
            {
              label: 'Time Out，2026-05',
              url: 'https://www.timeout.com/hong-kong/restaurants/hong-kongs-best-cha-chaan-teng-cafes',
            },
            {
              label: 'OpenRice Best Restaurants 2025',
              url: 'https://www.openrice.com/zh/hongkong/article/the-results-of-openrice-best-restaurants-2025-a8944',
            },
          ],
        },
      ],
    },
    {
      id: 'dim-sum',
      title: '早茶 / 点心',
      image: foodImages['eat-hong-kong-dim-sum'],
      intro: '饮茶是坐下来的时段。早去比午市舒服。推车茶楼和老派茶室是两种节奏，各去一家就够。',
      restaurants: [
        {
          id: 'lin-heung',
        location: {
          "address": "香港上环德辅道中249–253号东宁大厦地下9及10号、1–2楼",
          "areaId": "central-sheung-wan",
          "connection": "这里使用上环现址，请勿导航到旧威灵顿街店址。",
          "source": {
            "label": "OpenRice 现址",
            "url": "https://www.openrice.com/en/hongkong/r-lin-heung-lau-sheung-wan-guangdong-dim-sum-r1128979"
          }
        },
          name: '莲香楼',
          nameEn: 'Lin Heung Lau · 上环东宁大厦',
          neighborhood: '上环德辅道中 249–253 号东宁大厦 · 上环站 B 出口步行约 2 分钟',
          order: ['虾饺、烧卖（一盅两件的基本功）', '鸡扎或鯪鱼球', '想坐久一点可加一笼甜品'],
          whyLinger:
            '1927 年一脉的茶楼，迁址后仍推点心车、仍用盖碗。白天点心、晚上粤菜。热闹，但允许你坐着等下一辆车。这是「饮茶」本身，不是打卡橱窗。',
          practical:
            'OpenRice 列可刷卡、八达通、支付宝 / 微信支付等，也收现金。营业时间各源不完全一致（有的写清晨到午夜，有的写较晚开门）——出发前核 OpenRice 或致电。周末早市仍会等。可网上订座的说法以店内 / OpenRice 为准。',
          verifiedAt: '2026-09-11',
          sources: [
            {
              label: 'OpenRice（2026-09 仍有食评）',
              url: 'https://www.openrice.com/en/hongkong/r-lin-heung-lau-sheung-wan-guangdong-dim-sum-r1128979',
            },
            {
              label: 'Time Out，2026-05-13',
              url: 'https://www.timeout.com/hong-kong/restaurants/lin-heung-lau',
            },
          ],
        },
        {
          id: 'luk-yu',
        location: {
          "address": "香港中环士丹利街24号",
          "areaId": "central-sheung-wan",
          "connection": "可搭配中环散步，与上环莲香楼择一饮茶。",
          "source": {
            "label": "陆羽官网",
            "url": "https://www.lukyuteahouse.com/contactus/"
          }
        },
          name: '陆羽茶室',
          nameEn: 'Luk Yu Tea House',
          neighborhood: '中环士丹利街 24 号 · 中环站 D2 出口步行约 3 分钟',
          order: [
            '凤爪、荷叶饭、虾饺一类老派点心',
            '想吃菜可以加一碟炒面或炸子鸡（以当日餐牌为准）',
          ],
          whyLinger:
            '多层旧茶室，酸枝椅、白衫侍应，节奏比推车茶楼慢一点。米其林指南仍收录。出品有年头，近年食评也写过参差——来这里是为坐得住，不是为追「每一笼都完美」。',
          practical:
            'OpenRice 列 07:00–22:00；Visa / Master / 八达通 / 现金等。电话订座，上午时段可能不受理（OpenRice 注）。有加一。中午办公客多，下午茶较松。',
          verifiedAt: '2026-09-11',
          sources: [
            {
              label: 'OpenRice（2026 年食评）',
              url: 'https://www.openrice.com/en/hongkong/r-luk-yu-tea-house-central-guangdong-dim-sum-r1966',
            },
            {
              label: 'Michelin Guide',
              url: 'https://guide.michelin.com/mo/en/hong-kong-region/hong-kong/restaurant/luk-yu-tea-house',
            },
          ],
        },
      ],
    },
    {
      id: 'noodles',
      title: '面条 / 云吞面 / 车仔面',
      image: foodImages['eat-hong-kong-noodles'],
      intro: '一碗面是香港最省事的一餐。云吞面讲汤、皮、面；车仔面讲自己配。各去一种即可，不必同天两家。',
      restaurants: [
        {
          id: 'maks',
        location: {
          "address": "香港九龙佐敦白加士街51号地下",
          "areaId": "yau-ma-tei-jordan",
          "connection": "认准麦文记，别与英文名称相似的麦奀记混淆。",
          "source": {
            "label": "麦文记官网",
            "url": "https://www.mmk.hk/"
          }
        },
          name: '麦文记面家',
          nameEn: "Mak Man Kee Noodle Shop",
          neighborhood: '佐敦白加士街 51 号 · 佐敦站 C2 出口步行约 2 分钟',
          order: ['鲜虾云吞面（或捞面）', '想加一点就猪手或菜心，以店内所供为准'],
          whyLinger:
            '扎根佐敦数十年的街坊面店，不是商场里的展览。店小、翻桌快，但吃的是一碗日常的面，不是表演。米其林指南 2026-08 更新的云吞面文仍收录。',
          practical:
            'OpenRice 列 12:00–00:30；支付见 AlipayHK / 微信 / 现金 / FPS 等（旧游记有「只收现金」——以柜枱告示为准，现金仍建议带）。份量看起来不大，一碗够午餐。与澳牛同街，不要两家连排。',
          verifiedAt: '2026-09-11',
          sources: [
            {
              label: 'OpenRice',
              url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E6%96%87%E8%A8%98%E9%BA%B5%E5%AE%B6-%E4%BD%90%E6%95%A6-%E6%B8%AF%E5%BC%8F-%E9%9B%B2%E5%90%9E-%E9%A4%83%E5%AD%90-r6016',
            },
            {
              label: 'Michelin 云吞面综述，2026-08-25',
              url: 'https://guide.michelin.com/hk/zh_HK/best-of/best-wonton-noodles-hong-kong',
            },
            { label: '店方站点', url: 'https://www.mmk.hk/' },
          ],
        },
        {
          id: 'man-kee',
        location: {
          "address": "香港深水埗福荣街121号",
          "connection": "在深水埗，超出本页油麻地–佐敦散步线；另留一程交通。",
          "source": {
            "label": "文记官网",
            "url": "https://www.mankeecartnoodles.com/"
          }
        },
          name: '文记车仔面',
          nameEn: 'Man Kee Cart Noodles · 深水埗',
          neighborhood: '深水埗福荣街一带（官网列福荣街 121 号）· 深水埗站',
          order: [
            '自选面 + 一种汤底 + 两三种配料（鱼蛋、萝卜、猪皮一类常见）',
            '不要一次夹满',
          ],
          whyLinger:
            '车仔面是香港街头配菜的活法。文记总店仍走传统点菜；同街分店更现代化，官网也写过输送带。来总店，当一次自己配一碗的练习，不是追米其林。',
          practical:
            '官网列 11:00–04:00。福荣街有多家文记，认总店还是认最近一家，到了再看门口。高峰会排。支付以店内为准，现金稳妥。深夜仍开，并不等于值得深夜专程过去。',
          verifiedAt: '2026-09-11',
          sources: [
            {
              label: '文记官网',
              url: 'https://www.mankeecartnoodles.com/',
            },
          ],
        },
      ],
    },
    {
      id: 'roast',
      title: '烧腊 / 白切鸡',
      image: foodImages['eat-hong-kong-roast'],
      intro:
        '烧鹅、叉烧、油鸡是橱窗里的日常。一人不要点整只。白切鸡 / 油鸡在烧腊店比另找「鸡专门店」省事。',
      restaurants: [
        {
          id: 'kams',
        location: {
          "address": "香港湾仔轩尼诗道226号宝华商业中心地下",
          "areaId": "wan-chai",
          "connection": "搭配湾仔半天散步，排队时间另留。",
          "source": {
            "label": "甘牌官网",
            "url": "https://www.krg.com.hk/contact/contact.html"
          }
        },
          name: '甘牌烧鹅',
          nameEn: "Kam's Roast Goose",
          neighborhood: '湾仔轩尼诗道 226 号宝华商业中心地下 · 湾仔站',
          order: ['烧鹅（按份，一人点小份或拼盘）', '鹅油太子捞面', '想吃鸡就看当日油鸡 / 白切'],
          whyLinger:
            '食物本身是烧腊课，店却不是慢待店。店小、门前常见人龙，米其林一星仍在指南页上。列入是因为品类代表，且比中环镛记更「站着也要吃到鹅」的街店。排就排，排完快走；不要幻想在这里喝茶聊天。',
          practical:
            '指南页列约 11:30–21:30，每日。预约以店家为准，多数情况是排队入座。周末更长。适合两人分半只或一碟拼，单人点整只浪费。支付以到店为准。',
          verifiedAt: '2026-09-11',
          queueNote: '门前常见人龙。排完快走；不要幻想在这里喝茶聊天。',
          sources: [
            {
              label: 'Michelin 指南页',
              url: 'https://guide.michelin.com/hk/zh_HK/hong-kong-region/hong-kong/restaurant/kam-s-roast-goose',
            },
            { label: '甘牌官网', url: 'https://www.krg.com.hk/' },
            {
              label: 'OpenRice',
              url: 'https://www.openrice.com/en/hongkong/r-kams-roast-goose-wan-chai-guangdong-chinese-bbq-r175339',
            },
          ],
        },
      ],
    },
    {
      id: 'dai-pai-dong',
      title: '街头小吃 / 大牌档',
      image: foodImages['eat-hong-kong-dai-pai-dong'],
      intro:
        '鸡蛋仔、鱼蛋、碗仔翅是走路上的东西，档口开停快，本页不指定一家鸡蛋仔——邻里不同，遇到现做再停。大牌档能坐下来的，比边走边拍有用。',
      restaurants: [
        {
          id: 'sing-heung-yuen',
        location: {
          "address": "香港中环美轮街2号地下排档",
          "areaId": "central-sheung-wan",
          "connection": "适合放在中环–上环一程中；先在地图确认巷口。",
          "source": {
            "label": "香港旅发局",
            "url": "https://www.discoverhongkong.com/uk/place-to-go/sing-heung-yuen.html"
          }
        },
          name: '胜香园',
          nameEn: 'Sing Heung Yuen',
          neighborhood: '中环美轮街 2 号排档 · 上环站 A2 出口步行约 5 分钟（也可从中环走过来）',
          order: ['番茄牛肉通粉或番茄公仔面', '柠蜜脆脆（柠檬蜜糖烤猪仔包）'],
          whyLinger:
            '露天大牌档，铁桌、太阳与人声。不是精致，是中环还在用的午餐。坐下来等一碗番茄汤，比拿着鸡蛋仔在中环站赶路像香港。',
          practical:
            'OpenRice 列周一至周六 08:00–15:45；周日及公众假期休息。只列现金。午饭后段开始排队。没有厕所可预期。下雨天体验会差，改日即可。',
          verifiedAt: '2026-09-11',
          sources: [
            {
              label: 'OpenRice（2026 年食评）',
              url: 'https://www.openrice.com/zh/hongkong/r-胜香园-中环-港式-r10577',
            },
          ],
        },
      ],
    },
    {
      id: 'dessert',
      title: '甜品 / 糖水',
      image: foodImages['eat-hong-kong-dessert'],
      intro:
        '走热了再吃甜。传统街坊糖水铺近年水准波动大，有近况争议的不列入。下面这家能坐，也常排队——如实看。',
      restaurants: [
        {
          id: 'c-dessert',
        location: {
          "address": "香港湾仔庄士敦道35–45号利文楼地下1D号铺",
          "areaId": "wan-chai",
          "connection": "庄士敦道这家店可与湾仔散步搭配。",
          "source": {
            "label": "OpenRice 地址",
            "url": "https://www.openrice.com/en/hongkong/r-c-dessert-wan-chai-hong-kong-style-dessert-r819128"
          }
        },
          name: '聪。C Dessert',
          nameEn: 'C Dessert · 原聪嫂班底',
          neighborhood: '湾仔庄士敦道 35–45 号利文楼地下 1D · 湾仔站 B2 出口步行约 4 分钟',
          order: ['龙眼椰果冰', '榴梿类冰品（能接受再点）', '想热的选炖品或姜汁鲜奶一类'],
          whyLinger:
            '能坐下来吃完一碗。疫情后由原聪嫂班底以新店名重开，2026 年 Time Out、Vogue HK 仍写。不是秘密街坊店，是有座位的糖水；排队时把它当走路的终点，不要当一天的主轴。',
          practical:
            'OpenRice 列午后开门，平日约至 23:00，周末更晚。卡、八达通、支付宝 / 微信、现金都有记录。翻桌快，队不一定等于一小时。与甘牌同在湾仔，不要两家连着排。',
          verifiedAt: '2026-09-11',
          queueNote: '常排队——把它当走路的终点，不要当一天的主轴。',
          sources: [
            {
              label: 'OpenRice',
              url: 'https://www.openrice.com/en/hongkong/r-c-dessert-wan-chai-hong-kong-style-dessert-r819128',
            },
            {
              label: 'Time Out HK 2026 甜品文',
              url: 'https://www.timeout.com.hk/hong-kong/hk/餐厅/香港甜品店推介2026：怀旧复古风设计-人气牛扒店副线-手工芋圆甜品专门店',
            },
            {
              label: 'Vogue HK，2026-07',
              url: 'https://www.voguehk.com/zh/article/art-lifestyle/hong-kong-dessert/',
            },
          ],
        },
      ],
    },
    {
      id: 'cantonese',
      title: '值得慢慢坐的一顿（粤菜）',
      image: foodImages['eat-hong-kong-cantonese'],
      intro:
        '留一晚给坐得住的桌子。贵一些，说清楚：这是正餐，不是小吃打卡。西贡海鲜当场景，不在此点名店铺。',
      restaurants: [
        {
          id: 'yung-kee',
        location: {
          "address": "香港中环威灵顿街32–40号",
          "areaId": "central-sheung-wan",
          "connection": "在中环一侧，先安排订位再决定散步结束时间。",
          "source": {
            "label": "镛记官网",
            "url": "https://yungkee.com.hk/en/contact-us/"
          }
        },
          name: '镛记酒家',
          nameEn: 'Yung Kee Restaurant',
          neighborhood: '中环威灵顿街 32–40 号 · 中环站',
          order: ['烧鹅（按份，两人够）', '再加一碟时菜或一碗汤，按当日餐牌'],
          whyLinger:
            '1942 年至今的粤菜酒家，有楼层、有侍应、允许你把一顿饭吃完。烧鹅是招牌，场景是坐下来的中环晚上。比甘牌贵、也比甘牌能坐。家族后来另开甘牌，两家不必同一周都去——选一种烧鹅节奏即可。',
          practical:
            '官网列每日 11:00–23:00；电话 / WhatsApp +852 2522 1624。建议预订。有加一可预期。正餐价位，不当小吃预算。支付以店内为准，酒家类通常收卡。',
          verifiedAt: '2026-09-11',
          sources: [
            { label: '镛记官网', url: 'https://yungkee.com.hk/' },
            {
              label: 'OpenRice',
              url: 'https://www.openrice.com/en/hongkong/r-yung-kee-restaurant-central-guangdong-chinese-bbq-r4203',
            },
          ],
        },
      ],
    },
    {
      id: 'vegetarian',
      title: '素食或清淡',
      image: foodImages['eat-hong-kong-vegetarian'],
      intro: '普通茶餐厅「不要肉」并不可靠。要清淡或素，去茶馆比去改菜单安全。',
      restaurants: [
        {
          id: 'lockcha',
        location: {
          "address": "香港金钟红棉路10号香港公园罗桂祥茶艺馆地下",
          "connection": "本链接指向香港公园店；大馆是另一分店。公园另排一段，不把两店混在同一地址。",
          "source": {
            "label": "乐茶轩公园店官网",
            "url": "https://www.lockcha.com/locations/hong-kong-park/"
          }
        },
          name: '乐茶轩',
          nameEn: 'LockCha · 香港公园店优先',
          neighborhood:
            '旗舰店在金钟香港公园 KS Lo Gallery 地面 · 金钟站一带步行入园；大馆也有分店（中环荷李活道 10 号大馆 01 座）',
          order: [
            '素点心两三笼（潮州粉果、素饺一类，以当日为准）+ 一壶茶',
            '公园店为坐茶；大馆店另有茶饮、茶啤酒',
          ],
          whyLinger:
            '全日素点心，茶多。公园店是城里少有的能把一顿饭和园子放在一起的地方。大馆店方便看完展览接着坐。官网与大馆页面 2026 年仍列两店。',
          practical:
            '公园店电话 +852 2801 7177；大馆店 +852 2276 5777，可网上订座。大馆店 Time Out / 大馆页列周日–周四约 11:00–22:00，周五–周六至 23:00，以店方为准。有加一可预期。英语 / 粤语 / 普通话都写在官网。',
          verifiedAt: '2026-09-11',
          sources: [
            {
              label: 'LockCha 官网 · 香港公园',
              url: 'https://www.lockcha.com/locations/hong-kong-park/',
            },
            {
              label: 'LockCha · 大馆',
              url: 'https://www.lockcha.com/locations/tai-kwun/',
            },
            {
              label: '大馆商户页',
              url: 'https://www.taikwun.hk/en/lifestyle_enjoyment/shop/lockcha-tea-house/13',
            },
            {
              label: 'OpenRice 大馆店',
              url: 'https://www.openrice.com/en/hongkong/r-lockcha-central-guangdong-vegetarian-r577634',
            },
          ],
        },
      ],
    },
  ] as EatCategory[],

  itinerary: {
  "threeNights": {
    "title": "3 晚 · 一家酒店，港岛与九龙各一天",
    "note": "适合第一次来、看城市日常的人。住上环或油麻地–佐敦一侧，全程不换酒店；D2、D3 可按住宿位置互换。",
    "days": [
      {
        "day": "D1 抵达",
        "body": "落地后解决上网、进城和入住，晚饭放在酒店附近。",
        "time": "按航班安排；入住后只留一段附近散步。",
        "start": "机场到达大厅，按事先选好的交通方式进城。",
        "return": "回同一家酒店休息，保存酒店地址。",
        "links": [
          {
            "label": "抵达步骤",
            "href": "?tab=practical#guide-arrival"
          },
          {
            "label": "入住检查",
            "href": "?tab=practical#guide-stay"
          }
        ]
      },
      {
        "day": "D2 港岛旧城",
        "body": "上环饮茶 → 荷李活道一带 → 大馆；下午累了就回酒店。",
        "time": "街区预留 2–3 小时，饮茶与参观另留。",
        "start": "上环站。住九龙的人先搭港铁过来，也可先在住处吃早餐。",
        "return": "从中环站搭港铁回住宿区域。",
        "links": [
          {
            "label": "中环–上环路线",
            "href": "?tab=places#area-central-sheung-wan"
          },
          { "label": "大馆参观与预约", "href": "/places/hong-kong/attractions/tai-kwun" },
          {
            "label": "莲香楼现址",
            "href": "?tab=eat#lin-heung"
          },
          {
            "label": "港铁步骤",
            "href": "?tab=practical#guide-transit"
          }
        ]
      },
      {
        "day": "D3 九龙街道",
        "body": "油麻地庙街 → 佐敦白加士街，茶餐厅或云吞面二选一；海港作为额外选择。",
        "time": "街区预留 1.5–2.5 小时；海港另留时间。",
        "start": "油麻地站；住佐敦也可反方向走。",
        "return": "在佐敦或油麻地站搭港铁回酒店，不强求海港往返步行。",
        "links": [
          {
            "label": "油麻地–佐敦路线",
            "href": "?tab=places#area-yau-ma-tei-jordan"
          },
          {
            "label": "麦文记地址和点单",
            "href": "?tab=eat#maks"
          },
          {
            "label": "过海交通",
            "href": "?tab=practical#guide-transit"
          }
        ]
      },
      {
        "day": "D4 离开",
        "body": "早餐、退房和前往机场，不加远郊景点。",
        "time": "按航司要求的到场时间倒推，另留交通和行李缓冲。",
        "start": "酒店；前一晚确认接车点或公共交通首班。",
        "return": "到正确航站楼办理手续，抵达机场不等于完成值机。",
        "links": [
          {
            "label": "交通安排",
            "href": "?tab=practical#guide-transit"
          },
          {
            "label": "证件检查",
            "href": "?tab=practical#guide-documents"
          }
        ]
      }
    ]
  },
  "fiveNights": {
    "title": "5 晚 · 城市慢走，加一天西贡",
    "note": "适合想多休息、少换酒店的人。前三天沿用城市路线，第四天只加一个外出方向，第五天回市区留白；天气或体力不合适就取消远郊安排。",
    "days": [
      {
        "day": "D1 抵达",
        "body": "落地后解决上网、进城和入住，晚饭放在酒店附近。",
        "time": "按航班安排；入住后只留一段附近散步。",
        "start": "机场到达大厅，按事先选好的交通方式进城。",
        "return": "回同一家酒店休息，保存酒店地址。",
        "links": [
          {
            "label": "抵达步骤",
            "href": "?tab=practical#guide-arrival"
          },
          {
            "label": "入住检查",
            "href": "?tab=practical#guide-stay"
          }
        ]
      },
      {
        "day": "D2 港岛旧城",
        "body": "上环饮茶 → 荷李活道一带 → 大馆；下午累了就回酒店。",
        "time": "街区预留 2–3 小时，饮茶与参观另留。",
        "start": "上环站。住九龙的人先搭港铁过来，也可先在住处吃早餐。",
        "return": "从中环站搭港铁回住宿区域。",
        "links": [
          {
            "label": "中环–上环路线",
            "href": "?tab=places#area-central-sheung-wan"
          },
          { "label": "大馆参观与预约", "href": "/places/hong-kong/attractions/tai-kwun" },
          {
            "label": "莲香楼现址",
            "href": "?tab=eat#lin-heung"
          },
          {
            "label": "港铁步骤",
            "href": "?tab=practical#guide-transit"
          }
        ]
      },
      {
        "day": "D3 九龙街道",
        "body": "油麻地庙街 → 佐敦白加士街，茶餐厅或云吞面二选一；海港作为额外选择。",
        "time": "街区预留 1.5–2.5 小时；海港另留时间。",
        "start": "油麻地站；住佐敦也可反方向走。",
        "return": "在佐敦或油麻地站搭港铁回酒店，不强求海港往返步行。",
        "links": [
          {
            "label": "油麻地–佐敦路线",
            "href": "?tab=places#area-yau-ma-tei-jordan"
          },
          {
            "label": "麦文记地址和点单",
            "href": "?tab=eat#maks"
          },
          {
            "label": "过海交通",
            "href": "?tab=practical#guide-transit"
          }
        ]
      },
      {
        "day": "D4 西贡",
        "body": "只安排西贡镇中心和海旁，不附加出海或徒步。天气不适合时改成市内休息。",
        "time": "镇上 3–4 小时；往返交通另留，出发前核对回程。",
        "start": "酒店出发，先查到西贡镇的巴士／小巴及换乘。",
        "return": "从西贡交通总站按已确认的线路回酒店，不等到末班才出发。",
        "links": [
          {
            "label": "西贡半日路线",
            "href": "?tab=places#area-sai-kung"
          },
          {
            "label": "查路线与回程",
            "href": "?tab=practical#guide-transit"
          }
        ]
      },
      {
        "day": "D5 港岛留白",
        "body": "西营盘或坚尼地城选一端走海旁；更想坐茶，可改去香港公园乐茶轩，两者择一。",
        "time": "海旁预留 1.5–2 小时，或给茶馆与公园留半天；其余时间休息。",
        "start": "所选港铁站；去乐茶轩认准香港公园店地址。",
        "return": "回原酒店，确认次日机场交通。",
        "links": [
          {
            "label": "港岛西怎么选",
            "href": "?tab=places#area-sai-ying-pun-kennedy"
          },
          {
            "label": "乐茶轩公园店",
            "href": "?tab=eat#lockcha"
          },
          { "label": "香港公园怎么逛", "href": "/places/hong-kong/attractions/hong-kong-park" }
        ]
      },
      {
        "day": "D6 离开",
        "body": "早餐、退房和前往机场，不加远郊景点。",
        "time": "按航司要求的到场时间倒推，另留交通和行李缓冲。",
        "start": "酒店；前一晚确认接车点或公共交通首班。",
        "return": "到正确航站楼办理手续，抵达机场不等于完成值机。",
        "links": [
          {
            "label": "交通安排",
            "href": "?tab=practical#guide-transit"
          },
          {
            "label": "证件检查",
            "href": "?tab=practical#guide-documents"
          }
        ]
      }
    ]
  }
},

  relatedGuides: [
    '香港：住稳一侧的四日停法（待写）',
    '渡轮与离岛：当城市太密时的出口（待写）',
    '香港 → 澳门一日或过夜：怎么走、怎么不赶（待写）',
    '澳门城市页 → /places/macau',
  ],

  startHere: [
    { label: '签证与入境 · 香港', href: '/start/visas/hong-kong', status: '待写；先读 /start/visas' },
    { label: '支付 · 香港', href: '/start/paying/hong-kong', status: '待写；先读 /start/paying' },
    { label: '上网 · 香港', href: '/start/online/hong-kong', status: '待写；先读 /start/online' },
    {
      label: '交通 · 香港',
      href: '/start/transport/hong-kong',
      status: '待写；先读 /start/transport',
    },
  ],

  sourcesNote: [
    '餐饮与邻里原内容核实日期：2026-09-11；出行指南与安全资料：2026-09-12，各项附来源',
    '餐厅近况主要来自 OpenRice、店方官网、Michelin Guide、Time Out Hong Kong、Vogue HK（2025–2026 仍在更新的条目）',
    '交通与八达通来自 MTR、Octopus 官网公开页',
    '不引用已过时的「必吃榜」当营业证据',
  ],
}

export function countRestaurants(): number {
  return hongKong.categories.reduce((n, c) => n + c.restaurants.length, 0)
}
