/** Hong Kong city page content — structured from places/hong-kong/香港.md
 * Clone this pattern for other cities. Do not invent shops, prices, or ratings.
 */

export type SourceLink = { label: string; url: string }

export type Restaurant = {
  id: string
  name: string
  nameEn?: string
  neighborhood: string
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
  image?: CategoryImage
}

export type DayTrip = {
  direction: string
  how: string
  worth: string
  image?: CategoryImage
}

export type MetaField = { label: string; value: string }

export type VerifyRow = {
  category: string
  what: string
  where: string
  links?: SourceLink[]
}

export type PracticalBlock = {
  id: string
  title: string
  items: string[]
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
      body: '机场快线到香港站 / 九龙站最快；也可坐机场巴士或港铁。票价与班次出行前核 MTR 与机场快线说明，不把某次报价当恒定。',
      links: [{ label: 'MTR', url: 'https://www.mtr.com.hk/' }],
    },
    {
      title: '建议住哪',
      body: '港岛选上环 / 西营盘 / 坚尼地城（可走、有日常食肆）；九龙选油麻地 / 佐敦（比尖沙咀商场区和旺角更适合重复走）。尖沙咀适合黄昏海港，不一定适合当整段住宿。',
    },
    {
      title: '建议晚数',
      body: '4–5 晚。想加西贡或离岛，别从核心区天数里硬挤。',
    },
  ],

  overview: [
    '香港的节奏默认是快的。不疾不徐的做法不是「走完」，而是挑一条走廊住进去：同一条坡、同一间早餐、同一班天星。',
    '港岛这边，中环到上环再到西营盘、坚尼地城，是一条可以反复走的线。大馆给一个可以坐下来的院子；街市和楼梯街给日常。',
    '九龙这边，油麻地庙街、佐敦白加士街一带，比旺角更好停。旺角适合路过买东西，不适合当慢待基地——人流会把你推着走。',
    '海是出口。天星小轮十来分钟，不是景点，是换岸的方式。城市太密时，西贡或离岛比再排一个商场有用。',
  ],

  gettingThere: {
    intro: [
      '落地第一小时：先解决八达通（手机旅游版或实体卡，种类与退款规则以八达通官网为准），再决定机场快线还是巴士。不要在到达层做复杂换乘决定。',
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
      title: '中环–上环（含大馆）',
    image: {
      src: '/images/places/nb-central.jpg',
      alt: '中环大馆（旧中区警署）',
      credit: 'Wikimedia Commons',
    },
      body: '港岛这一侧的日常走廊。早上可以饮茶，白天走楼梯街和街市，下午进大馆坐院子。陆羽、莲香楼、胜香园都在步行范围内。中环办公楼区中午会挤，错过午高峰更好走。',
      suited: '第一段住宿；把「到了香港」落成可以重复的几条街。',
    },
    {
      id: 'yau-ma-tei-jordan',
      title: '油麻地–佐敦',
    image: {
      src: '/images/places/nb-temple.jpg',
      alt: '庙街夜市牌楼',
      credit: 'Wikimedia Commons',
    },
      body: '比尖沙咀少商场，比旺角少推搡。庙街、玉器市场、旧冰室、云吞面店可以同一条街解决。美都、澳牛、麦文记都在这一带。晚上可以走到尖沙咀看海，走回去睡觉。',
      suited: '九龙一侧的住稳选择；早餐和宵夜都近。',
    },
    {
      id: 'sai-ying-pun-kennedy',
      title: '西营盘–坚尼地城',
    image: {
      src: '/images/places/nb-saiyingpun.jpg',
      alt: '西营盘高街',
      credit: 'Wikimedia Commons',
    },
      body: '港岛西的慢一点的尽头。海旁可以走，食肆偏街坊和较新的小店混杂。适合已经在上环住过、还想把同一条港铁线再往西推一站的人。不必当成打卡区，当成散步区。',
      suited: '想少游客、多重复走海旁的停留。',
    },
    {
      id: 'wan-chai',
      title: '湾仔（走廊，不必单住）',
    image: {
      src: '/images/places/nb-wanchai.jpg',
      alt: '湾仔海旁天际线',
      credit: 'Wikimedia Commons',
    },
      body: '轩尼诗道一带密，但甘牌、C Dessert 都在可走范围内。适合从中环或铜锣湾步行串一天，不必单独换酒店。修顿球场、庄士敦道晚上仍有人，早收工比深夜闲逛更舒服。',
      suited: '烧鹅或一碗糖水的半日；不当主住宿。',
    },
    {
      id: 'sai-kung',
      title: '西贡（慢半日到一日）',
    image: {
      src: '/images/places/nb-saikung.jpg',
      alt: '西贡海旁',
      credit: 'Wikimedia Commons',
    },
      body: '出城换空气。海鲜街是场景，不是必须点名某家。可以走海旁、坐一趟小船或只在镇上吃饭。交通以巴士 / 小巴为主，班次和排队以当天为准。',
      suited: '城市太密时的出口；热天选有遮阴的时段。',
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
      image: {
        src: '/images/eat/ill-chachaanteng.webp',
        alt: '茶餐厅手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '茶餐厅是香港的日常桌。菜单中西混杂：奶茶、炒蛋、焗饭、通粉。有的店让你坐住，有的店要你吃完就走——两种都是本地节奏。',
      restaurants: [
        {
          id: 'mido',
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
      image: {
        src: '/images/eat/ill-dimsum.webp',
        alt: '点心手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro: '饮茶是坐下来的时段。早去比午市舒服。推车茶楼和老派茶室是两种节奏，各去一家就够。',
      restaurants: [
        {
          id: 'lin-heung',
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
      image: {
        src: '/images/eat/ill-noodles.webp',
        alt: '面食手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro: '一碗面是香港最省事的一餐。云吞面讲汤、皮、面；车仔面讲自己配。各去一种即可，不必同天两家。',
      restaurants: [
        {
          id: 'maks',
          name: '麦文记面家',
          nameEn: "Mak's Noodle / 麦文记",
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
      image: {
        src: '/images/eat/ill-roast.webp',
        alt: '烧腊手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '烧鹅、叉烧、油鸡是橱窗里的日常。一人不要点整只。白切鸡 / 油鸡在烧腊店比另找「鸡专门店」省事。',
      restaurants: [
        {
          id: 'kams',
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
      image: {
        src: '/images/eat/ill-street.webp',
        alt: '大牌档手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '鸡蛋仔、鱼蛋、碗仔翅是走路上的东西，档口开停快，本页不指定一家鸡蛋仔——邻里不同，遇到现做再停。大牌档能坐下来的，比边走边拍有用。',
      restaurants: [
        {
          id: 'sing-heung-yuen',
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
      image: {
        src: '/images/eat/ill-dessert.webp',
        alt: '糖水手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '走热了再吃甜。传统街坊糖水铺近年水准波动大，有近况争议的不列入。下面这家能坐，也常排队——如实看。',
      restaurants: [
        {
          id: 'c-dessert',
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
      image: {
        src: '/images/eat/ill-cantonese.webp',
        alt: '粤菜手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '留一晚给坐得住的桌子。贵一些，说清楚：这是正餐，不是小吃打卡。西贡海鲜当场景，不在此点名店铺。',
      restaurants: [
        {
          id: 'yung-kee',
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
      image: {
        src: '/images/eat/ill-vegetarian.webp',
        alt: '素食手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro: '普通茶餐厅「不要肉」并不可靠。要清淡或素，去茶馆比去改菜单安全。',
      restaurants: [
        {
          id: 'lockcha',
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

  localTransit: [
    '港铁覆盖主城区。过海坐地铁或天星，看你想不想吹风。巴士补地铁到不了的坡和西贡、南区。',
    '八达通几乎是默认：地铁、巴士、部分渡轮、便利店。老茶餐厅和大牌档仍可能只收现金——当天口袋里留几张纸币。',
    '港岛中部有电梯和自动扶梯系统（中环至半山），能少爬一段；不要把它当成必须完成的项目。热天下午改室内或茶馆。',
    '台风、暴雨会停渡轮、关登山缆车。那天改茶楼、博物馆或睡觉，不要坚持离岛。',
  ],

  practical: [
    {
      id: 'payment',
      title: '支付',
      items: [
        '八达通：交通和大量零售。手机旅游版（iPhone / 部分安卓与华为渠道）和实体旅游卡、租借卡并存，规则不同。种类、押金、退款以 octopus.com.hk 为准，不把某年售价抄进行程当恒定。',
        '卡：Visa / Mastercard 在酒店、商场、多数酒家常见。街边、冰室、大牌档不要赌。',
        '移动支付：支付宝、微信支付、AlipayHK、PayMe 覆盖在增加，仍非全境。主卡 + 八达通 + 少量港币现金。',
        '小费：坐店常见加一（10%）。茶餐厅、面店、大牌档通常不加；找零可以不留。',
        'DCC：ATM 和部分刷卡机不要选「以人民币结算」的动态货币转换，费率通常差。',
      ],
    },
    {
      id: 'online',
      title: '上网',
      items: [
        '短途可靠漫游或落地 eSIM。机场有柜枱和自助，品牌常换，出行前比覆盖与热点，不在此写死套餐。港铁和商场 Wi‑Fi 能救急，不要当唯一方案。离线下载港铁图和一两家店地址。',
      ],
    },
    {
      id: 'language',
      title: '语言',
      items: [
        '日常粤语。书面中文足够点餐。普通话在游客区和年轻店员处常见，老店不保证。中环、尖沙咀英语通行。不会粤语不怕，怕的是点单时犹豫——先看餐牌指。',
      ],
    },
    {
      id: 'docs',
      title: '证件与范围',
      items: [
        '持中国护照赴港，常见路径是往来港澳通行证 + 有效赴港签注，或其他当时仍开放的政策。本页不写停留天数和费用。回乡证是港澳居民出入内地用的证件，不要和赴港签注混为一谈。本项目不含中国大陆行程。',
      ],
    },
    {
      id: 'macau',
      title: '澳门联游',
      items: [
        '上环港澳码头或九龙出发的客轮，到澳门外港或氹仔，视你要历史城区还是路氹。一日够走城区 + 一顿饭；想坐下来吃一顿葡亚太或只是不想当晚赶船，就过夜。船期、证件、码头以船公司及澳门入境页为准。赌场不是本站重点。澳门短页待写：/places/macau。',
      ],
    },
    {
      id: 'weather',
      title: '天气与坡道',
      items: [
        '夏天湿热，暴雨来得快。带一把伞比带第四件外套有用。港岛多坡，鞋底要有抓地。台风信号生效时，改室内，不要坚持山顶或离岛。',
      ],
    },
  ] as PracticalBlock[],

  practicalLinks: [
    {
      label: '八达通旅游选项',
      url: 'https://www.octopus.com.hk/en/consumer/tourist/choices/index.html',
    },
  ],

  itinerary: {
    threeNights: {
      title: '3 晚（只住一侧）',
      note: '住上环或油麻地，不要两边各一半。',
      days: [
        { day: 'D1', body: '落地、八达通、晚饭近住处。不安排景点。' },
        {
          day: 'D2',
          body: '早茶（莲香或陆羽）→ 同一侧步行 → 黄昏天星过海走一圈 → 回来。',
        },
        {
          day: 'D3',
          body: '一碗面或茶餐厅 → 大馆或香港公园乐茶轩坐下午 → 晚上可排镛记或干脆再回茶餐厅。',
        },
        { day: 'D4 离开', body: '不塞离岛。' },
      ],
    },
    fiveNights: {
      title: '5 晚（一侧 + 一次出口）',
      note: '前三晚同上。余下两天只加一件事：西贡，或一个离岛，或澳门过夜。不要西贡和澳门同一趟。烧鹅只去甘牌或镛记其中一家。',
      days: [],
    },
  },

  verifyTable: [
    {
      category: '签证 / 证件',
      what: '往来港澳通行证与赴港签注是否仍有效、停留资格、入境卡是否电子化',
      where: '中国内地签发机关；香港入境事务处；航司提示',
    },
    {
      category: '支付',
      what: '八达通旅游版 / 手机版规则；ATM 是否仍拒某卡组织',
      where: 'octopus.com.hk；发卡行出境说明',
      links: [{ label: 'octopus.com.hk', url: 'https://www.octopus.com.hk/' }],
    },
    {
      category: '上网',
      what: 'eSIM 频段、实名、机场取卡点',
      where: '运营商 / eSIM 商家；近 3 个月到过的人',
    },
    {
      category: '交通',
      what: '机场快线、港铁检修、离岛及港澳船期',
      where: 'MTR；天星；TurboJET 等船公司',
      links: [{ label: 'MTR', url: 'https://www.mtr.com.hk/' }],
    },
    {
      category: '季节',
      what: '台风、暴雨、极端高温是否砸在你的日期上',
      where: '香港天文台；渡轮网站公告',
    },
    {
      category: '餐厅',
      what: '仍否营业、休息日、只收现金、迁址（莲香已迁过一次）',
      where: '各店官网 / OpenRice；到附近再看门口',
    },
    {
      category: '安全与健康',
      what: '旅行预警、保险条款',
      where: '本国外交部门；保险公司',
    },
    {
      category: '法规',
      what: '烟酒药配额、无人机',
      where: '香港海关',
    },
  ] as VerifyRow[],

  relatedGuides: [
    '香港：住稳一侧的四日停法（待写）',
    '渡轮与离岛：当城市太密时的出口（待写）',
    '香港 → 澳门一日或过夜：怎么走、怎么不赶（待写）',
    '澳门短页（待写）→ /places/macau',
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
    '页面核实日期：2026-09-11',
    '餐厅近况主要来自 OpenRice、店方官网、Michelin Guide、Time Out Hong Kong、Vogue HK（2025–2026 仍在更新的条目）',
    '交通与八达通来自 MTR、Octopus 官网公开页',
    '不引用已过时的「必吃榜」当营业证据',
  ],
}

export function countRestaurants(): number {
  return hongKong.categories.reduce((n, c) => n + c.restaurants.length, 0)
}
