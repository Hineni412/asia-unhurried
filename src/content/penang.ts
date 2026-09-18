/** Penang / George Town city page content.
 * Clone of the Hong Kong content pattern. Do not invent shops, visa days, prices, or ratings.
 */

import { foodImages } from './cities/photoData'
import type {
  DayTrip,
  EatCategory,
  Essential,
  MetaField,
  Neighborhood,
} from './hongKong'
import type { StayGuide } from './stay'

export const penang = {
  slug: 'penang',
  name: '槟城',
  nameEn: 'Penang',
  tagline:
    '住乔治市。把几天留给炒粿条、叻沙和店屋巷，不要赶着环岛、海滩和山顶各打一次卡。升旗山、极乐寺、浮罗山背，一趟只加一件。',
  note: '本页写马来西亚槟城岛的乔治市（George Town）。吉隆坡另有城市页，不把两城绑成同一趟必须串联。',
  verifiedAt: '2026-09-12',
  meta: [
    {
      label: '最佳季节',
      value: '全年湿热，阵雨说来就来。雨季走路留弹性，具体月份以出行当年气象为准。',
    },
    { label: '机场', value: '槟城国际机场（PEN）' },
    {
      label: '建议停留',
      value: '3–5 晚。3 晚只住乔治市 UNESCO 店屋区；5 晚只加一件出口，不要三件同一趟。',
    },
    {
      label: '地区标签',
      value: '东南亚 · 马来西亚 · Wave 1',
    },
    { label: '气质', value: '乔治市店屋巷、小贩档、姓氏桥；不住海滩度假区' },
  ] as MetaField[],

  essentials: [
    {
      title: '机场 → 市区',
      body: 'PEN 在峇六拜（Bayan Lepas）一侧。初次抵达、带行李或晚到，可比较 Grab 与酒店接送；公交先核对具体站点、方向和服务时间。“出行指南”内有到乔治市酒店的完整步骤和官方接车指引。',
      action: { label: '查看抵达步骤', to: '?tab=practical#guide-arrival' },
      links: [
        { label: 'Rapid Penang', url: 'https://myrapid.com.my/bus-train/rapid-penang/rapid-pg-bus/' },
      ],
    },
    {
      title: '建议住哪',
      body: '第一次来以老城步行为主，可先比较 Armenian / Acheh 周边与 Kimberley / Cintra 一带。前者方便走店屋巷，后者方便觅食；都要核对夜间噪声、楼梯和实际接车点。海滩住宿意味着往返老城另排交通。',
      action: { label: '订房前逐项检查', to: '?tab=practical#guide-stay' },
    },
    {
      title: '建议晚数',
      body: '3 晚把店屋、姓氏桥和宗教街分两天，中午留休息；5 晚加亚依淡一天，再留一天重走老城。示例不换酒店、不环岛，行程页有完整四天或六天安排。',
      action: { label: '展开每天安排', to: '?tab=itinerary#plan-three' },
    },
  ] as Essential[],

  overview: [
    '槟城岛默认会被写成「环岛清单」：海滩、山顶、寺庙、壁画，一天一个点。不疾不徐的做法是反过来——住进乔治市，把同一条店屋巷走熟，把早餐和一碗面变成重复的事。',
    '乔治市是 UNESCO 世界遗产城区，不是主题公园。Armenian Street、Acheh Street 一带的店屋、壁画和咖啡店会把你推向拍照；真正能停下来的是巷子里的档口、有座位的旧餐馆，以及下午还能再走一遍的遮阴人行道。',
    '吃是这页的主轴。炒粿条、亚参叻沙、福建面、扁担饭、煎蕊，各认真去一家就够。名档会排队，尤其暹罗路炒粿条——排就排，排完走开，不要把队列当成当天的行程。',
    '岛的其余部分是出口，不是作业。升旗山换空气，极乐寺和亚依淡是同一方向的半日，浮罗山背是西岛的另一半日。三件不要塞进同一趟。',
  ],

  gettingThere: {
    intro: [
      '多数人飞 PEN。myPenang 交通页写槟城国际机场距市中心约 20km；没有轨道交通进城，是公路。Rapid Penang 巴士从机场方向可到 Komtar / 码头一带，再步行或转 CAT 进遗产区。行李多或晚到，叫车更省事——不在此写车资。',
      '市内以步行为主。乔治市核心可走；热、晒、阵雨是常态，上午和傍晚比正午好走。Rapid Penang 补遗产区走不到的点（亚依淡、升旗山下站、浮罗山背）。CAT（Central Area Transit）是乔治市范围内的免费接驳，班次与路线以 myPenang / Rapid Penang 为准。',
      '跨海到半岛（ Butterworth ）有渡轮，本页不把「去对岸」写成必做。叫车用 Grab 等本地网约，短距离在遗产区宁可走。',
    ],
    links: [
      { label: 'Rapid Penang', url: 'https://myrapid.com.my/bus-train/rapid-penang/rapid-pg-bus/' },
      {
        label: 'myPenang · 交通',
        url: 'https://www.mypenang.gov.my/about-penang/transportation/?lg=en',
      },
      {
        label: 'myPenang · CAT',
        url: 'https://mypenang.gov.my/culture-heritage/heritage-zones/free-cat-bus/?lg=en',
      },
    ],
    verifyReminders: [
      '机场巴士线路编号、首末班与是否仍停 Komtar / Weld Quay',
      'CAT 是否仍免费、首末班与周日是否跳站',
      '升旗山缆车是否因维修或天气停驶',
      'MDAC 是否仍要在入境前填、你的护照是否在豁免之列',
    ],
  },

  neighborhoods: [
    {
      id: 'armenian-acheh',
      visit: {
        "duration": "1.5–2 小时；参观与吃饭另加。",
        "entry": "从 Lebuh Armenian 与 Lebuh Pantai 一带进入，叫车时用明确路口或店名。",
        "walk": "Armenian → Acheh 周边巷道；热时进店休息，不为壁画绕远路。",
        "return": "回酒店按具体地址导航；想接姓氏桥，另按海边路线走，不在正午硬串。",
        "stay": "适合第一次住乔治市、愿意步行的人；店屋住宿要问楼梯、隔音和接车位置。",
        "source": {
          "label": "槟城旅游局街道地图（2026）",
          "url": "https://mypenang.gov.my/uploads/downloads/PTF-ENG2026-1-.pdf"
        }
      },
      title: '店屋核心（Armenian / Acheh 一带）',
      image: {
        src: '/images/places/pg-armenian.jpg',
        alt: '乔治市 Armenian Street 店屋街',
        credit: 'Wikimedia Commons',
      },
      body: "挑几条店屋巷慢走，比追逐所有壁画轻松。Teksen 在西侧 Carnarvon 街，可按订位或用餐时间安排。",
      suited: "第一次来乔治市，喜欢店屋、街道和走走停停的人。",
    },
    {
      id: 'kimberley-cintra',
      visit: {
        "duration": "1–2 小时；晚餐与排队另留。",
        "entry": "从 Lebuh Kimberley 与 Cintra Street 路口一带进入。",
        "walk": "Kimberley → Cintra；若去叻沙或煎蕊，再向西到 Penang Road / Keng Kwee，不把白天小吃和晚餐强排同一时段。",
        "return": "吃完回酒店按地址走；累了在可停车的主路店铺旁确认叫车点。",
        "stay": "适合想步行吃饭的人；住巷口前问清夜间噪声，客房别只看离摊位近。",
        "source": {
          "label": "槟城旅游局街道地图（2026）",
          "url": "https://mypenang.gov.my/uploads/downloads/PTF-ENG2026-1-.pdf"
        }
      },
      title: '小贩巷（Kimberley / Cintra 一带）',
      image: {
        src: '/images/places/pg-kimberley.jpg',
        alt: '乔治市 Kimberley Street 小贩档',
        credit: 'Wikimedia Commons',
      },
      body: "这条线既能搭配晚餐，也能向西接白天小吃。先查选中店家的营业时段，再决定先吃还是先走。",
      suited: "想以小吃和晚餐为主，能按档口时段调整安排的人。",
    },
    {
      id: 'clan-jetties',
      visit: {
        "duration": "30–60 分钟；天气热可缩短。",
        "entry": "地图搜索 Chew Jetty，从 Pengkalan Weld 一侧进入。",
        "walk": "从姓周桥公共入口走一段再原路返回；不进入住户私人区域。",
        "return": "回 Pengkalan Weld 主路后导航酒店或确认叫车点，车辆不能驶入木栈桥。",
        "stay": "适合店屋散步后的海边一段；不必为参观而搬到栈桥附近住。",
        "source": {
          "label": "槟城旅游局街道地图（2026）",
          "url": "https://mypenang.gov.my/uploads/downloads/PTF-ENG2026-1-.pdf"
        }
      },
      title: '姓氏桥（以姓周桥为入口）',
      image: {
        src: '/images/places/pg-jetty.jpg',
        alt: '乔治市姓周桥入口',
        credit: 'Wikimedia Commons',
      },
      body: "以姓周桥为入口，走一截、看看海就可以。这里仍有人生活，尊重现场开放提示与住户空间。",
      suited: "想在老城散步后看看海、只留一小段户外时间的人。",
    },
    {
      id: 'kapitan-keling',
      visit: {
        "duration": "1–1.5 小时；入内参观另留。",
        "entry": "从 Jalan Masjid Kapitan Keling 与 Lebuh Light 北端一带进入。",
        "walk": "沿主街向南看宗教建筑；Bishop Street 用餐要另转入支街。是否入内按现场开放和着装要求决定。",
        "return": "结束后按酒店地址步行或叫车；不必再绕回北端。",
        "stay": "适合喜欢街道与建筑的人；可从核心区酒店过来，无需单独换住处。",
        "source": {
          "label": "槟城旅游局街道地图（2026）",
          "url": "https://mypenang.gov.my/uploads/downloads/PTF-ENG2026-1-.pdf"
        }
      },
      title: '清真寺街一带（Kapitan Keling）',
      image: {
        src: '/images/places/pg-kapitan.jpg',
        alt: '乔治市 Jalan Masjid Kapitan Keling',
        credit: 'Wikimedia Commons',
      },
      body: "沿一条街读乔治市不同宗教留下的建筑。以街道散步为主，入内参观按现场安排，不把每座建筑都列成必进点。",
      suited: "对不同宗教建筑和城市历史感兴趣的人。",
    },
  ] as Neighborhood[],

  stay: {
    checkedAt: '2026-09-14',
    intro:
      '槟城的答案几乎总是「住乔治市老城」。Batu Ferringhi 是海滩度假区，住那里意味着每天进城另排交通——那是另一趟旅行。老城住宿多是修复店屋：氛围足，但楼梯、隔音、接车点都要逐间核对。',
    budgetNote:
      '以 ¥700–800/晚为上限：在乔治市算充裕档，能住进修复店屋精品酒店或带泳池的馆。春节、屠妖节前后与学校假期上浮；老城房量少，看中的先订可取消。',
    anchors: [
      { title: '住老城步行圈内', body: '以 Armenian／Acheh 或 Kimberley／Cintra 为圆心：吃的基本靠走，午后能回酒店躲热。' },
      { title: '店屋酒店核对三件事', body: '楼梯（很多无电梯）、临街噪声、车能否到门口接——巷子深处 Grab 常要走到路口。' },
      { title: '别两头占', body: '「白天海滩、晚上老城」的结果是每天都在路上；这趟为店屋和吃来，就住老城。' },
    ],
    areas: [
      {
        id: 'armenian-acheh-stay',
        title: '店屋核心（Armenian / Acheh）',
        suitsIf: '第一次来乔治市、想把店屋巷和宗祠放在门口的人。',
        budgetFeel: '充裕档：修复店屋改的精品酒店集中在这带。',
        band: { low: 270, high: 540 },
        transit: '老城步行圈；Grab 送到巷口。',
        food: '本页多数店步行可达，茶室与巷口档口密。',
        tradeoff: '店屋隔音一般、常无电梯；夜里巷子安静得早。',
        walk: '老城步行圈核心，店屋巷全靠走；Grab 多数送到巷口。',
        noise: '夜里巷子安静得早；临街店屋隔音一般。',
        slope: '平地；修复店屋常无电梯、上下靠楼梯。',
        neighborhoodIds: ['armenian-acheh', 'kapitan-keling'],
      },
      {
        id: 'kimberley-cintra-stay',
        title: '小贩巷（Kimberley / Cintra）',
        suitsIf: '把吃放第一位、晚上想步行解决的人。',
        budgetFeel: '同为充裕档，老店屋改的小酒店与民宿集中。',
        band: { low: 200, high: 400 },
        transit: '老城步行圈；近 Komtar 方向，机场巴士衔接方便。',
        food: '汕头街夜市与巷口茶室最密，晚餐不用叫车。',
        tradeoff: '临街房间噪声明显——看评价里关于夜市的描述。',
        walk: '老城步行圈，夜市就在门口。',
        noise: '临街房间夜市噪声明显，选内巷或背街房。',
        slope: '平地；老店屋多楼梯、少有电梯。',
        neighborhoodIds: ['kimberley-cintra'],
      },
      {
        id: 'gurney-north',
        title: 'Gurney / 北海岸方向',
        suitsIf: '想要泳池、商场与新房，老城只作白天目的地的人。',
        budgetFeel: '同预算房间更大更新，国际连锁选择多。',
        band: { low: 300, high: 555 },
        transit: '进老城靠 Grab／巴士，单程留 15–25 分钟。',
        food: '商场与美食中心为主，不是巷子档口。',
        tradeoff: '与老城氛围断开，早晚都要进出城。',
        walk: '进老城靠 Grab／巴士单程 15–25 分钟，不适合步行进城。',
        noise: '高层酒店较安静，商场与主干道一段车流多。',
        slope: '平地；新楼有电梯。',
        skipIf: '这趟是为店屋巷和小贩来的话，别选。',
      },
    ],
  } satisfies StayGuide,

  dayTrips: [
    {
      direction: '升旗山',
      link: { label: '看实拍、缆车票与上山步骤', to: '/places/malaysia/penang/attractions/penang-hill' },
      image: {
        src: '/images/daytrips/pg-hill.jpg',
        alt: '从升旗山看乔治市',
        credit: 'Wikimedia Commons',
      },
      how: '到山下再坐缆车。官网与班次：penanghill.gov.my',
      worth: '换空气、看城。雨和云会挡住视野。门票与是否停驶当天早上看官网，不要和极乐寺、浮罗山背同一天赶。',
    },
    {
      direction: '极乐寺 / 亚依淡',
      image: {
        src: '/images/daytrips/pg-kekloksi.jpg',
        alt: '亚依淡极乐寺',
        credit: 'Wikimedia Commons',
      },
      how: '巴士往 Air Itam；与升旗山下站同一方向，但不要默认能一天轻松做完两件。',
      worth: '值得半日。若去，可顺路看亚依淡市场的咖喱面档——不要专程当景点。',
    },
    {
      direction: '浮罗山背',
      image: {
        src: '/images/daytrips/pg-balik.jpg',
        alt: '浮罗山背市集',
        credit: 'Wikimedia Commons',
      },
      how: '往岛西，巴士耗时；不是乔治市步行圈。',
      worth: '只在你真想看西岛乡镇时占半天到一天。回来会累。不要和升旗山同一趟。',
    },
  ] as DayTrip[],

  eatIntro:
    '槟城的慢吃是：固定一种早餐或一碗面，正餐只认真安排一次坐店或一家名档。不要一天排三家米其林小贩。',

  eatCriteria: [
    { title: '慢待契合', body: '能说明乔治市怎么吃；名档若列入，会写明排队。' },
    { title: '品类代表性', body: '炒粿条、叻沙、福建面、扁担饭、煎蕊等能对上品类，而不是孤立店名。' },
    { title: '可核实', body: '米其林指南页、店方官网或近年仍在更新的食记；不确定仍营业则不用。' },
    { title: '邻里可走', body: '优先能挂到乔治市步行圈；亚依淡只作为出口顺路。' },
    { title: '点单可执行', body: '每店只给 1–3 个具体「点什么」。' },
    { title: '场景诚实', body: '游客队、只卖半天、指南未收录，如实写。' },
    { title: '多样性', body: '品类铺开；同品类一般 1–2 家。' },
    { title: '不编造', body: '不写评分、人均、神器说法；每店留核实日期与来源。' },
  ],

  eatExclude:
    '排除：只在旧游记里出现、近况不清楚的档口；商场里的「槟城风味」连锁当体验（煎蕊去 Lebuh Keng Kwee 原档，不推荐专程去分店）。海滩酒店自助餐不在此列。',

  howToOrder: [
    '炒粿条：看档口怎么问。米其林写 Penang Road Famous Jin Kor 可加鸭蛋和额外辣椒酱；暹罗路只卖炒粿条一种，按辣度说清楚即可。',
    '亚参叻沙：汤底酸辣，配料通常已盛好；指南写 Penang Road Famous Laksa 用 lai fun，胃口大可再点一盘炒粿条（以店内所供为准）。',
    '福建面：槟城的福建面是虾汤米面，不是吉隆坡那种炒面。888 指南建议可加炖排骨或烧肉。',
    '扁担饭：指着柜子里的菜和咖喱，米饭加几样。马来话 / 英语 / 指菜都常见。这是清真餐，不要带着非清真的预期去改菜单。',
    '娘惹坐店：Auntie Gaik Lean 指南点名 pie tee、gulai tumis、nasi ulam。这是正餐，不是小吃打卡。',
    '煎蕊：冰、椰浆、椰糖、绿豆粉条。原档在 Lebuh Keng Kwee，与叻沙同巷，不要两家连着排到没走路。',
  ],

  avoid: [
    '为「全网第一炒粿条」去暹罗路排掉半天，回来只剩赶路。指南自己写队列以游客和年轻客为主。',
    '把 Batu Ferringhi 当住宿，每天进城吃饭。那是另一趟旅行。',
    '一天内升旗山 + 极乐寺 + 浮罗山背。地图上看近，路上不是。',
    '只去壁画墙、不进档口。巷子是用来吃饭和重复走的。',
    '用付费第三方站填「马来西亚入境卡」。MDAC 只走移民局官网。',
  ],

  eatRhythm:
    '固定一碗面或一盘炒粿条当早午餐，下午走店屋，晚上只认真坐一顿（Auntie 或 Teksen）或去一家福建面。煎蕊放在走路之后。不要一天排三家排队档。便利店和普通茶餐室能救急，不当体验。',

  allergies: [
    '炒粿条常见虾、血蚶、猪肉肠、鸭蛋。',
    '亚参叻沙汤底有鱼（指南写 sardine broth），酸辣，配料含海鲜。',
    '福建面虾汤，可加猪肉类；椰浆出现在咖喱面。',
    '扁担饭咖喱常见花生、椰浆、辣椒；交叉污染难免。',
    '煎蕊含椰浆、椰糖；娘惹饼（pie tee）和马来菜常见虾酱（belacan）。',
  ],

  categories: [
    {
      id: 'char-kuey-teow',
      title: '炒粿条',
      image: foodImages['eat-penang-char-kuey-teow'],
      intro:
        '扁米粉下锅，虾、芽菜、辣椒，讲锅气。乔治市可以只认真吃一盘。两家都在指南里：一家在槟城路咖啡店里，一家是半日营业的名档、队列长。',
      restaurants: [
        {
          id: 'jin-kor',
        location: {
          "address": "Joo Hooi Cafe, 475 Jalan Penang, George Town, Penang, Malaysia",
          "areaId": "kimberley-cintra",
          "connection": "在小贩巷西侧的 Penang Road 一带，认准咖啡店内档口。",
          "source": {
            "label": "Waze 店址",
            "url": "https://www.waze.com/live-map/directions/my/pulau-pinang/george-town/penang-road-famous-jin-kor-char-kuey-teow-%E6%AA%B3%E6%A6%94%E5%BE%8B%E9%A9%B0%E5%90%8D%E4%BB%81%E5%93%A5%E7%82%92%E7%B2%BF%E6%A2%9D?to=place.ChIJ4V-V8JbDSjARKFrOJnFPIUE"
          }
        },
          name: 'Penang Road Famous Jin Kor Char Kuey Teow',
          nameEn: 'Joo Hooi Cafe 档口',
          neighborhood: 'Joo Hooi Cafe, 475 Jalan Penang, George Town',
          order: ['炒粿条（指南写可加鸭蛋和额外辣椒酱）', '一盘够一餐，不要再连排另一家炒粿条'],
          whyLinger:
            '指南写这档大约四十年，现炒，虾、血蚶、猪肉肠、芽菜，讲锅气。它挂在槟城路一间咖啡店里，比暹罗路更容易当成「走路时吃到的一盘」，而不是一次远征。',
          practical:
            '米其林指南页列每日约 09:30–17:00；电话 +60 14-903 3561。支付与休息日以到店为准。与同路的扁担饭、同巷的叻沙不要排成一条任务清单。',
          verifiedAt: '2026-09-12',
          sources: [
            {
              label: 'Michelin Guide',
              url: 'https://guide.michelin.com/en/penang/george-town/restaurant/penang-road-famous-jin-kor-char-kuey-teow',
            },
          ],
        },
        {
          id: 'siam-road',
        location: {
          "address": "82 Jalan Siam, George Town, Penang, Malaysia",
          "connection": "在遗产区以西；与仁哥不是同一条小巷，专程去时另留交通和排队时间。",
          "source": {
            "label": "槟城旅游局美食地图（2024）",
            "url": "https://mypenang.gov.my/uploads/downloads/SFA_Penang-Street-Food_V04Sep24-EN.pdf"
          }
        },
          name: 'Siam Road Char Koay Teow',
          nameEn: '暹罗路炒粿条',
          neighborhood: '82 Jalan Siam, George Town',
          order: ['炒粿条（只此一种；辣度按档口问法说清楚）'],
          whyLinger:
            '炭锅、只卖炒粿条。指南写小店半日营业，长队——以游客和年轻客为主。列入是因为品类标本仍在指南页上，不是因为值得把下午交给队列。排完快走。',
          practical:
            '指南列周一、周日休息；周二至周六 12:00–18:00。卖完或提早收档以到店为准。不要和 Jin Kor 同一天连排。',
          verifiedAt: '2026-09-12',
          queueNote: '长队以游客为主。排完快走，不要当下午的主轴。',
          sources: [
            {
              label: 'Michelin Guide',
              url: 'https://guide.michelin.com/en/pulau-pinang/my-george-town/restaurant/siam-road-char-koay-teow',
            },
          ],
        },
      ],
    },
    {
      id: 'asam-laksa',
      title: '亚参叻沙',
      image: foodImages['eat-penang-asam-laksa'],
      intro:
        '酸辣鱼汤米粉是槟城的白天那一碗。Penang Road Famous Laksa 从槟城路迁到 Lebuh Keng Kwee，指南仍收录，并写值得排队。',
      restaurants: [
        {
          id: 'penang-road-laksa',
        location: {
          "address": "5 Lebuh Keng Kwee, George Town, Penang, Malaysia",
          "areaId": "kimberley-cintra",
          "connection": "在 Penang Road 旁的 Keng Kwee 街，和煎蕊可放在同一段。",
          "source": {
            "label": "槟城旅游局美食地图（2024）",
            "url": "https://mypenang.gov.my/uploads/downloads/SFA_Penang-Street-Food_V04Sep24-EN.pdf"
          }
        },
          name: 'Penang Road Famous Laksa',
          nameEn: '槟城路亚参叻沙（Keng Kwee）',
          neighborhood: '5 Lebuh Keng Kwee, George Town',
          order: ['亚参叻沙', '指南写胃口大可再点鸭蛋炒粿条，以店内所供为准'],
          whyLinger:
            '指南写 lai fun 配沙丁鱼汤底，配料多。米其林「Behind the Bib」文写 2015 年 12 月迁到此址，排队在开门前就开始。这是一碗要坐下来喝完的汤，不是边走边拍。',
          practical:
            '指南列周三休息；其余日约 09:00–17:30。电话 +60 16-446 0543。指南标 Worth Queueing For。与隔几号的煎蕊原档同巷——两家都去可以，不要连着排到中午过完。',
          verifiedAt: '2026-09-12',
          queueNote: '指南写值得排队；开门前就有人。',
          sources: [
            {
              label: 'Michelin Guide',
              url: 'https://guide.michelin.com/en/penang/george-town/restaurant/penang-road-famous-laksa',
            },
            {
              label: 'Michelin · Behind the Bib',
              url: 'https://guide.michelin.com/my/en/article/dining-out/behind-the-bib-penang-road-famous-laksa',
            },
          ],
        },
      ],
    },
    {
      id: 'hokkien-mee',
      title: '福建面',
      image: foodImages['eat-penang-hokkien-mee'],
      intro:
        '槟城福建面是虾汤，黄面拌米粉，不是半岛常见的黑酱炒面。傍晚才出摊的档口，适合当作走路的终点。',
      restaurants: [
        {
          id: '888-hokkien',
        location: {
          "address": "67-A Lebuh Presgrave, George Town, Penang, Malaysia",
          "connection": "在 Komtar 以南的 Presgrave 街，超出遗产区核心散步线。",
          "source": {
            "label": "米其林店址",
            "url": "https://guide.michelin.com/en/pulau-pinang/my-george-town/restaurant/888-hokkien-mee-lebuh-presgrave"
          }
        },
          name: '888 Hokkien Mee',
          nameEn: 'Lebuh Presgrave',
          neighborhood: '67-A Lebuh Presgrave, George Town',
          order: ['福建面', '指南建议可加炖排骨或烧肉'],
          whyLinger:
            '指南写小店做了三十年，虾汤颜色深、鲜。米其林人物文写创办人 Goh Poh Kim，1991 年起，下午三点开门，周四休；傍晚会排到人行道。这是晚饭那一碗，不是早餐。',
          practical:
            '指南列周四休息；其余日约 15:00–21:30。人物文写顾客两点四五就开始等。支付以到店为准，现金稳妥。',
          verifiedAt: '2026-09-12',
          queueNote: '傍晚常见人行道排队。把它当晚饭，不要当下午茶。',
          sources: [
            {
              label: 'Michelin Guide',
              url: 'https://guide.michelin.com/en/pulau-pinang/my-george-town/restaurant/888-hokkien-mee-lebuh-presgrave',
            },
            {
              label: 'Michelin · A Day in the Life',
              url: 'https://guide.michelin.com/my/en/article/dining-out/a-day-in-the-life-with-penang-s-888-hokkien-mee',
            },
          ],
        },
      ],
    },
    {
      id: 'hawker-snacks',
      title: '街头小食（炒粿角）',
      image: foodImages['eat-penang-hawker-snacks'],
      intro:
        '炒粿角是潮州来的煎米糕，配芽菜、蛋、酱。这不是一顿正餐，是上午的一盘。Sister Yao’s 指南写三姐妹继承父亲 1963 年起的摊。',
      restaurants: [
        {
          id: 'sister-yao',
        location: {
          "address": "96 Lorong Macalister, George Town, Penang, Malaysia",
          "connection": "在 Lorong Macalister，需从店屋核心区另走一程，别与 Macalister Road 混淆。",
          "source": {
            "label": "米其林店址",
            "url": "https://guide.michelin.com/my/en/pulau-pinang/my-george-town/restaurant/sister-yao-s-char-koay-kak"
          }
        },
          name: "Sister Yao's Char Koay Kak",
          nameEn: '姚氏姐妹炒粿角',
          neighborhood: '96 Lorong Macalister, George Town',
          order: ['炒粿角（指南写可加辣酱）'],
          whyLinger:
            '米糕煎出锅气，酱和芽菜是配。营业到中午，周三周四休息。来这里是为品类，不是为坐一下午。吃完继续走路。',
          practical:
            '指南列周三、周四休息；其余日约 07:00–12:00。电话 +60 16-420 6438。上午去，不要当晚饭。',
          verifiedAt: '2026-09-12',
          sources: [
            {
              label: 'Michelin Guide',
              url: 'https://guide.michelin.com/en/penang/george-town/restaurant/sister-yao-s-char-koay-kak',
            },
          ],
        },
      ],
    },
    {
      id: 'nyonya-sitdown',
      title: '娘惹 / 坐得住的店',
      image: foodImages['eat-penang-nyonya-sitdown'],
      intro:
        '留一顿给桌子和空调。Auntie Gaik Lean 是指南里的娘惹菜；Teksen 是 Carnarvon 街上从 1965 年开到现在的粤菜馆。两家都不是小吃档。同一周选一种坐店节奏即可。',
      restaurants: [
        {
          id: 'auntie-gaik-lean',
        location: {
          "address": "1 Lebuh Bishop, George Town, Penang, Malaysia",
          "areaId": "kapitan-keling",
          "connection": "在宗教街轴线北侧的 Bishop Street，需从主街转入，不在 Armenian Street。",
          "source": {
            "label": "槟城旅游局娘惹地图",
            "url": "https://www.mypenang.gov.my/uploads/downloads/Baba-Nyonya-ENG_V01.pdf"
          }
        },
          name: "Auntie Gaik Lean's Old School Eatery",
          nameEn: 'Bishop Street',
          neighborhood: '1 Lebuh Bishop, George Town',
          order: ['pie tee', 'gulai tumis', 'nasi ulam（均以指南点名、当日餐牌为准）'],
          whyLinger:
            '橱窗里的旧物和六十年代配乐，是指南自己写的场景。Beh Gaik Lean 的娘惹菜从家里的方子来。这是正餐：预订、坐完、走路回去，不要夹在两家小贩队列中间。',
          practical:
            '指南列周一、周二休息；周三至周日 12:00–14:30、18:00–21:30。电话 +60 17-434 4398；指南写向店家直接订位。美国站条目写 One Star：High quality cooking——星级以出行当天指南页为准，不把旧年颁奖稿抄死。有空调。正餐价位，不当小吃预算（具体价格不在此抄）。',
          verifiedAt: '2026-09-12',
          sources: [
            {
              label: 'Michelin Guide',
              url: 'https://guide.michelin.com/en/penang/george-town/restaurant/auntie-gaik-lean-s-old-school-eatery',
            },
            {
              label: 'Michelin · 人物稿',
              url: 'https://guide.michelin.com/my/en/article/people/auntie-gaik-leans-old-school-eatery-penang-malaysia-michelin-guide',
            },
          ],
        },
        {
          id: 'teksen',
        location: {
          "address": "18 & 20 Lebuh Carnarvon, George Town, Penang, Malaysia",
          "areaId": "armenian-acheh",
          "connection": "在店屋核心西侧的 Carnarvon 街，先安排用餐，再走 Armenian / Acheh。",
          "source": {
            "label": "米其林店址",
            "url": "https://guide.michelin.com/ph/en/pulau-pinang/my-george-town/restaurant/teksen"
          }
        },
          name: 'Teksen',
          nameEn: '德成',
          neighborhood: '18 & 20 Lebuh Carnarvon, George Town',
          order: ['家常豆腐配江鱼仔（指南点名）', '问当日炖汤'],
          whyLinger:
            '指南写 1965 年起，红桌布、对联，粤菜加本地做法。能坐、能点汤和豆腐，比小贩档适合当晚上那一顿。指南标 Worth Queueing For、适合团体。',
          practical:
            '指南列周二休息；其余日 11:30–14:00、17:30–20:00。电话 +60 12-981 5117。高峰会等。支付以到店为准。不要和 Auntie 同一晚两家正餐。',
          verifiedAt: '2026-09-12',
          queueNote: '指南标值得排队；晚饭时段更明显。',
          sources: [
            {
              label: 'Michelin Guide',
              url: 'https://guide.michelin.com/en/penang/george-town/restaurant/teksen',
            },
          ],
        },
      ],
    },
    {
      id: 'nasi-kandar',
      title: '扁担饭',
      image: foodImages['eat-penang-nasi-kandar'],
      intro:
        '印度穆斯林的米饭配咖喱和菜。本页所用的米其林公开页未收录 Line Clear。列入是因为它是乔治市还在用的巷子食堂，不是因为奖牌。',
      restaurants: [
        {
          id: 'line-clear',
        location: {
          "address": "Beside 161 & 177 Penang Road, George Town, Penang, Malaysia",
          "areaId": "kimberley-cintra",
          "connection": "在 Penang Road 旁巷口，位于小贩巷散步范围北侧；看店名再入巷。",
          "source": {
            "label": "Foodcrush 店址",
            "url": "https://foodcrush.com.my/penang/profile/restoran-nasi-kandar-line-clear"
          }
        },
          name: 'Restoran Nasi Kandar Line Clear',
          nameEn: 'Penang Road 巷子',
          neighborhood: '巷子 beside 161 & 177 Penang Road, George Town（对开一带有酒店，认巷口）',
          order: ['米饭 + 两三种咖喱或菜（指着柜子点）', '想简单就咖喱鸡或鱼，以当日所供为准'],
          whyLinger:
            '有顶的巷子、长桌、共用座位。这是槟城路还在营业的扁担饭，不是遗产区橱窗。Foodcrush 仍列此址；2025 年仍有食记写在这里吃晚饭。体验是快、挤、咖喱多，不是慢待茶室。',
          practical:
            '米其林指南未收录。各源营业时间冲突：有的写 24 小时，2025 年食记写已不是通宵、约早上到午夜，foodpanda 等平台又是另一套——到巷口看是否开门，不把任何一组时间抄死。电话常见记录为 +60 4-261 4440。清真。连锁在其他城市有分号，本页只写乔治市这条巷。',
          verifiedAt: '2026-09-12',
          sources: [
            {
              label: 'Foodcrush 商户页',
              url: 'https://foodcrush.com.my/penang/profile/restoran-nasi-kandar-line-clear',
            },
            {
              label: '食记，2025-02',
              url: 'http://froggybitsoflife.blogspot.com/2025/02/nasi-kandar-wsquid-fish-egg-and-fried.html',
            },
          ],
        },
      ],
    },
    {
      id: 'chendul',
      title: '煎蕊',
      image: foodImages['eat-penang-chendul'],
      intro:
        '走热了再吃冰。Penang Road Famous TeoChew Chendul 从 1936 年的路边摊长成连锁；要吃「那条巷」的，去 Lebuh Keng Kwee 原档，不要专程跑去商场分店。',
      restaurants: [
        {
          id: 'teochew-chendul',
        location: {
          "address": "27 & 29 Lebuh Keng Kwee, George Town, Penang, Malaysia",
          "areaId": "kimberley-cintra",
          "connection": "本链接选 Keng Kwee 老街店，不是商场分店。",
          "source": {
            "label": "商家分店官网",
            "url": "https://chendul.my/locate-us/"
          }
        },
          name: 'Penang Road Famous TeoChew Chendul',
          nameEn: '槟城路潮州煎蕊（原档）',
          neighborhood: '27 & 29 Lebuh Keng Kwee, George Town（官网 Locate Us）',
          order: ['煎蕊（椰浆、椰糖、绿豆粉条）'],
          whyLinger:
            '官网写创始人 Tan Teik Fuang 1936 年在槟城路卖煎蕊，1984 年用现在这个店名。原档仍在 Keng Kwee 巷，和叻沙同街。连锁分店能吃到类似的一碗，但本页要的是这条巷的节奏。',
          practical:
            '官网 Locate Us 列原档每日 09:00–18:30。品牌已有多处分店，认门牌 27 & 29。与叻沙同巷，错开高峰。支付以到店为准。',
          verifiedAt: '2026-09-12',
          sources: [
            { label: '官网', url: 'https://chendul.my/' },
            { label: '官网 · Our Story', url: 'https://chendul.my/our-story/' },
            { label: '官网 · Locate Us', url: 'https://chendul.my/locate-us/' },
          ],
        },
      ],
    },
    {
      id: 'curry-mee',
      title: '咖喱面（亚依淡，顺路）',
      image: foodImages['eat-penang-curry-mee'],
      intro:
        '椰浆辣椒汤面是另一碗，不在乔治市步行圈。只在你已经要去极乐寺或亚依淡时顺路；不要专程当景点。',
      restaurants: [
        {
          id: 'air-itam-sister',
        location: {
          "address": "612-T Jalan Air Itam, Pekan Ayer Itam, Penang, Malaysia",
          "connection": "在亚依淡，离乔治市核心区较远；只搭配亚依淡那一天，不作为老城步行早餐。",
          "source": {
            "label": "FunNow 店址",
            "url": "https://www.myfunnow.com/en/branches/3045274534148"
          }
        },
          name: 'Air Itam Sister Curry Mee',
          nameEn: '亚依淡姐妹咖喱面',
          neighborhood: '612 T, Jalan Air Itam Pekan Ayer Itam, George Town（亚依淡市场）',
          order: ['咖喱面（指南写豆腐泡与鲜鱿）'],
          whyLinger:
            '指南写市场里的炭火咖喱面，汤是香料、辣椒膏和椰浆。这是亚依淡日常的一碗早餐面，不是乔治市遗产区的打卡。去寺庙的那天早上去，不去就留在城里吃叻沙。',
          practical:
            '指南列周二休息；平日约 06:30–11:30，周六周日约 06:30–12:00。卖完即止。从乔治市需巴士或叫车，不要把它排进遗产区步行午餐。',
          verifiedAt: '2026-09-12',
          sources: [
            {
              label: 'Michelin Guide',
              url: 'https://guide.michelin.com/en/pulau-pinang/my-george-town/restaurant/air-itam-sister-curry-mee',
            },
          ],
        },
      ],
    },
  ] as EatCategory[],

  itinerary: {
  "threeNights": {
    "title": "3 晚 · 乔治市住稳，分两天走老城",
    "note": "适合第一次来、以步行和吃饭为主的人。住店屋核心周边，全程一家酒店；午间休息，餐厅按营业与食量择一。",
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
        "day": "D2 店屋与海边",
        "body": "上午 Armenian / Acheh 店屋巷 → 午间吃饭休息 → 较凉快时去姓周桥。",
        "time": "店屋 1.5–2 小时、桥上 30–60 分钟，中间留休息。",
        "start": "Lebuh Armenian 与 Lebuh Pantai 一带；按酒店位置步行或叫车。",
        "return": "从姓周桥回 Pengkalan Weld 主路再回酒店，车辆不驶上栈桥。",
        "links": [
          {
            "label": "店屋核心路线",
            "href": "?tab=places#area-armenian-acheh"
          },
          { "label": "附近可选：邱公司", "href": "/places/malaysia/penang/attractions/khoo-kongsi" },
          {
            "label": "姓氏桥入口与返回",
            "href": "?tab=places#area-clan-jetties"
          },
          { "label": "姓周桥实拍与参观", "href": "/places/malaysia/penang/attractions/chew-jetty" },
          {
            "label": "Teksen 到店资料",
            "href": "?tab=eat#teksen"
          }
        ]
      },
      {
        "day": "D3 宗教街与小吃",
        "body": "上午走 Kapitan Keling；午间休息。按营业时间安排 Keng Kwee 叻沙或煎蕊，傍晚可选小贩巷。",
        "time": "宗教街 1–1.5 小时，小吃与巷道另留 1–2 小时；正午不硬走跨区。",
        "start": "主街北端 Lebuh Light 一带，先查酒店到起点的路线。",
        "return": "在 Penang Road 一带结束，步行或叫车回酒店。",
        "links": [
          {
            "label": "宗教街路线",
            "href": "?tab=places#area-kapitan-keling"
          },
          { "label": "附近可选：侨生博物馆", "href": "/places/malaysia/penang/attractions/pinang-peranakan-mansion" },
          {
            "label": "小贩巷与 Penang Road",
            "href": "?tab=places#area-kimberley-cintra"
          },
          {
            "label": "Keng Kwee 煎蕊店",
            "href": "?tab=eat#teochew-chendul"
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
    "title": "5 晚 · 乔治市，加一天亚依淡",
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
        "day": "D2 店屋与海边",
        "body": "上午 Armenian / Acheh 店屋巷 → 午间吃饭休息 → 较凉快时去姓周桥。",
        "time": "店屋 1.5–2 小时、桥上 30–60 分钟，中间留休息。",
        "start": "Lebuh Armenian 与 Lebuh Pantai 一带；按酒店位置步行或叫车。",
        "return": "从姓周桥回 Pengkalan Weld 主路再回酒店，车辆不驶上栈桥。",
        "links": [
          {
            "label": "店屋核心路线",
            "href": "?tab=places#area-armenian-acheh"
          },
          { "label": "附近可选：邱公司", "href": "/places/malaysia/penang/attractions/khoo-kongsi" },
          {
            "label": "姓氏桥入口与返回",
            "href": "?tab=places#area-clan-jetties"
          },
          { "label": "姓周桥实拍与参观", "href": "/places/malaysia/penang/attractions/chew-jetty" },
          {
            "label": "Teksen 到店资料",
            "href": "?tab=eat#teksen"
          }
        ]
      },
      {
        "day": "D3 宗教街与小吃",
        "body": "上午走 Kapitan Keling；午间休息。按营业时间安排 Keng Kwee 叻沙或煎蕊，傍晚可选小贩巷。",
        "time": "宗教街 1–1.5 小时，小吃与巷道另留 1–2 小时；正午不硬走跨区。",
        "start": "主街北端 Lebuh Light 一带，先查酒店到起点的路线。",
        "return": "在 Penang Road 一带结束，步行或叫车回酒店。",
        "links": [
          {
            "label": "宗教街路线",
            "href": "?tab=places#area-kapitan-keling"
          },
          { "label": "附近可选：侨生博物馆", "href": "/places/malaysia/penang/attractions/pinang-peranakan-mansion" },
          {
            "label": "小贩巷与 Penang Road",
            "href": "?tab=places#area-kimberley-cintra"
          },
          {
            "label": "Keng Kwee 煎蕊店",
            "href": "?tab=eat#teochew-chendul"
          }
        ]
      },
      {
        "day": "D4 亚依淡",
        "body": "先确认咖喱面当天营业再去亚依淡；吃完在这一带慢走。参观极乐寺按现场开放另作安排。",
        "time": "给亚依淡留半天，交通和排队另算；不承诺下车就能吃到。",
        "start": "酒店叫车或查好公交到亚依淡，出发前保存店址和回程接车点。",
        "return": "在可停车的主路确认接车点回乔治市；公交先核末班及方向。",
        "links": [
          {
            "label": "亚依淡姐妹咖喱面",
            "href": "?tab=eat#air-itam-sister"
          },
          {
            "label": "公交与 Grab 步骤",
            "href": "?tab=practical#guide-transit"
          }
        ]
      },
      {
        "day": "D5 重走巷道",
        "body": "上午回喜欢的店屋巷，午间休息；晚餐从 Teksen 和 Auntie Gaik Lean 中择一家，提前确认营业和订位。",
        "time": "街道留 1–2 小时，坐店晚餐另留；其余不排景点。",
        "start": "酒店附近开始，不为再吃一家往返跨城。",
        "return": "饭后回酒店，确认次日离境和接车安排。",
        "links": [
          {
            "label": "店屋核心",
            "href": "?tab=places#area-armenian-acheh"
          },
          {
            "label": "Teksen",
            "href": "?tab=eat#teksen"
          },
          {
            "label": "Auntie Gaik Lean",
            "href": "?tab=eat#auntie-gaik-lean"
          }
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
    '马来西亚国家页（槟城、吉隆坡已上线）→ /places/malaysia',
    '槟城：只住乔治市的五日停法（待写）',
    '升旗山缆车：当天如何核班次（待写）',
    '吉隆坡城市页 → /places/malaysia/kuala-lumpur',
  ],

  sourcesNote: [
    '页面核实日期：2026-09-12',
    '餐厅近况主要来自 Michelin Guide 公开页（2026-09 仍能打开的条目）、chendul.my、Foodcrush 与 2025 年仍在更新的食记',
    '交通与 CAT 来自 myRapid、myPenang 公开页；机场距离来自 myPenang 交通页「约 20km」的表述',
    '入境只指向 MDAC 与 imi.gov.my，不引用第三方代填站',
    '不把米其林 $ 符号、旧票价、旧免签天数抄进正文',
  ],
}

export function countRestaurants(): number {
  return penang.categories.reduce((n, c) => n + c.restaurants.length, 0)
}
