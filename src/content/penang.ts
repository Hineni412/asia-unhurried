/** Penang / George Town city page content.
 * Clone of the Hong Kong content pattern. Do not invent shops, visa days, prices, or ratings.
 */

import type {
  DayTrip,
  EatCategory,
  MetaField,
  Neighborhood,
  PracticalBlock,
  VerifyRow,
} from './hongKong'

export const penang = {
  slug: 'penang',
  name: '槟城',
  nameEn: 'Penang',
  tagline:
    '住乔治市。把几天留给炒粿条、叻沙和店屋巷，不要赶着环岛、海滩和山顶各打一次卡。升旗山、极乐寺、浮罗山背，一趟只加一件。',
  note: '本页写马来西亚槟城岛的乔治市（George Town）。吉隆坡另页待写，不把两城绑成同一趟必须串联。',
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
    { label: '核实日期', value: '2026-09-12' },
  ] as MetaField[],

  essentials: [
    {
      title: '机场 → 市区',
      body: 'PEN 在峇六拜（Bayan Lepas）一侧。myPenang 公开页写机场距市中心约 20km。Rapid Penang 有线路连机场与乔治市一带（常见提到 401E、102），班次与票价出行前核 myRapid，不把某次报价当恒定。也可叫车。落地先解决怎么进城，不要在到达层做复杂换乘决定。',
      links: [
        { label: 'Rapid Penang', url: 'https://myrapid.com.my/bus-train/rapid-penang/rapid-pg-bus/' },
      ],
    },
    {
      title: '建议住哪',
      body: '住乔治市 UNESCO 店屋区，能走到 Armenian / Acheh、小贩巷和姓氏桥。Komtar 方便转巴士，不一定适合当整段住宿。Batu Ferringhi 是海滩度假带，不适合当这页的慢待基地。',
    },
    {
      title: '建议晚数',
      body: '3–5 晚。3 晚只够乔治市吃饭和走路；想加升旗山或亚依淡或浮罗山背，从余下两天里只挑一件。',
    },
  ],

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
      title: '店屋核心（Armenian / Acheh 一带）',
      image: {
        src: '/images/places/pg-armenian.jpg',
        alt: '乔治市 Armenian Street 店屋街',
        credit: 'Wikimedia Commons',
      },
      body: '遗产区最容易被写成打卡清单的几条街。店屋、壁画、咖啡店密度高。早上比较能走路，中午晒、周末更挤。当作住宿走廊和散步区，不要当成必须拍完的景点表。Auntie Gaik Lean 在 Bishop Street，从这一带步行可达。',
      suited: '第一段住宿；把「到了槟城」落成可以重复的几条巷。',
    },
    {
      id: 'kimberley-cintra',
      title: '小贩巷（Kimberley / Cintra 一带）',
      image: {
        src: '/images/places/pg-kimberley.jpg',
        alt: '乔治市 Kimberley Street 小贩档',
        credit: 'Wikimedia Commons',
      },
      body: 'Lebuh Kimberley、Cintra Street 一带是夜里仍有烟火气的小贩街，不是精致餐厅区。档口开停快，本页不在这里点名某一摊——走到现做再停。白天这一带相对安静，适合当作傍晚的出口，而不是中午的主轴。',
      suited: '住店屋区的人傍晚走路吃饭；不当主景点。',
    },
    {
      id: 'clan-jetties',
      title: '姓氏桥（以姓周桥为入口）',
      image: {
        src: '/images/places/pg-jetty.jpg',
        alt: '乔治市姓周桥入口',
        credit: 'Wikimedia Commons',
      },
      body: '木栈桥上的水上聚落，姓周桥最常作为步行入口。仍有人住，不是布景。走一截、看看海，不要把人家门口当摄影棚。热天很晒，半小时到一小时足够；从遗产区步行或短程巴士可到。',
      suited: '遗产区散步的海边尽头；不必单独换酒店。',
    },
    {
      id: 'kapitan-keling',
      title: '清真寺街一带（Kapitan Keling）',
      image: {
        src: '/images/places/pg-kapitan.jpg',
        alt: '乔治市 Jalan Masjid Kapitan Keling',
        credit: 'Wikimedia Commons',
      },
      body: 'Jalan Masjid Kapitan Keling 串起清真寺、印度庙和教堂，是乔治市宗教建筑并置的那条轴。中午热、周末游客多。适合当作走去 Lebuh Carnarvon（Teksen）或 Penang Road 一带吃饭的走廊，不必当成巡礼。',
      suited: '穿遗产区去吃饭的步行轴；不当主住宿。',
    },
  ] as Neighborhood[],

  dayTrips: [
    {
      direction: '升旗山',
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
      image: {
        src: '/images/eat/ill-ckt.png',
        alt: '炒粿条手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '扁米粉下锅，虾、芽菜、辣椒，讲锅气。乔治市可以只认真吃一盘。两家都在指南里：一家在槟城路咖啡店里，一家是半日营业的名档、队列长。',
      restaurants: [
        {
          id: 'jin-kor',
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
      image: {
        src: '/images/eat/ill-laksa.png',
        alt: '亚参叻沙手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '酸辣鱼汤米粉是槟城的白天那一碗。Penang Road Famous Laksa 从槟城路迁到 Lebuh Keng Kwee，指南仍收录，并写值得排队。',
      restaurants: [
        {
          id: 'penang-road-laksa',
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
      image: {
        src: '/images/eat/ill-hokkien.png',
        alt: '槟城福建面手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '槟城福建面是虾汤，黄面拌米粉，不是半岛常见的黑酱炒面。傍晚才出摊的档口，适合当作走路的终点。',
      restaurants: [
        {
          id: '888-hokkien',
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
      image: {
        src: '/images/eat/ill-hawker.png',
        alt: '街头小食手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '炒粿角是潮州来的煎米糕，配芽菜、蛋、酱。这不是一顿正餐，是上午的一盘。Sister Yao’s 指南写三姐妹继承父亲 1963 年起的摊。',
      restaurants: [
        {
          id: 'sister-yao',
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
      image: {
        src: '/images/eat/ill-nyonya.png',
        alt: '娘惹菜手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '留一顿给桌子和空调。Auntie Gaik Lean 是指南里的娘惹菜；Teksen 是 Carnarvon 街上从 1965 年开到现在的粤菜馆。两家都不是小吃档。同一周选一种坐店节奏即可。',
      restaurants: [
        {
          id: 'auntie-gaik-lean',
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
      image: {
        src: '/images/eat/ill-nasikandar.png',
        alt: '扁担饭手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '印度穆斯林的米饭配咖喱和菜。本页所用的米其林公开页未收录 Line Clear。列入是因为它是乔治市还在用的巷子食堂，不是因为奖牌。',
      restaurants: [
        {
          id: 'line-clear',
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
      image: {
        src: '/images/eat/ill-cendol.png',
        alt: '煎蕊手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '走热了再吃冰。Penang Road Famous TeoChew Chendul 从 1936 年的路边摊长成连锁；要吃「那条巷」的，去 Lebuh Keng Kwee 原档，不要专程跑去商场分店。',
      restaurants: [
        {
          id: 'teochew-chendul',
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
      image: {
        src: '/images/eat/ill-laksa.png',
        alt: '咖喱面手绘',
        credit: '手绘 · 基于真实食物',
      },
      intro:
        '椰浆辣椒汤面是另一碗，不在乔治市步行圈。只在你已经要去极乐寺或亚依淡时顺路；不要专程当景点。',
      restaurants: [
        {
          id: 'air-itam-sister',
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

  localTransit: [
    '乔治市遗产区以步行为主。热、晒、阵雨：上午和傍晚走，中午进店或回酒店。',
    'Rapid Penang 覆盖岛上更远的点。机场方向常见线路包括 401E、102，以 myRapid 当时公布为准。小贩和部分巴士仍可能要现金；Touch ’n Go 在交通和零售常见，规则以 touchngo.com.my 为准。',
    'CAT 免费巴士在乔治市内转一圈，适合行李不多、只想少走一段晒路的时候。班次、首末班、周日是否跳站核 myPenang CAT 页。',
    '叫车用 Grab 等。短距离在店屋区宁可走。不在此写车资。',
    '升旗山缆车以 penanghill.gov.my 为准；官网写每日开放时段，维修和天气会停。那天改在城里吃饭。',
  ],

  practical: [
    {
      id: 'docs',
      title: '证件与入境',
      items: [
        '外国旅客入境马来西亚，常见要先在官网填 Malaysia Digital Arrival Card（MDAC）。只使用移民局域名：imigresen-online.imi.gov.my 与 imi.gov.my。不要用收费代填站。',
        '谁要填、谁豁免、停留资格、签证种类，以移民局当时公布为准。本页不写免签天数、费用或「一定能过」。',
        '护照有效期、空白页、回程票等航司和边境要求各自核，不在此抄成清单。',
      ],
    },
    {
      id: 'payment',
      title: '支付',
      items: [
        '林吉特现金在小贩档口仍然有用。不要假设每摊都能刷卡。',
        'Touch ’n Go 卡 / 电子钱包在巴士、便利店、部分零售常见，产品种类和充值规则以 touchngo.com.my 为准，不把某年促销抄进行程。',
        'Visa / Mastercard 在酒店和较大餐馆常见。街边档口不要赌。',
        'DCC：ATM 和部分刷卡机不要选「以人民币结算」的动态货币转换。',
      ],
    },
    {
      id: 'online',
      title: '上网',
      items: [
        '短途可靠漫游或落地 eSIM / 预付卡。机场有柜枱，品牌常换，出行前自己比覆盖，不在此写死套餐。离线下载乔治市地图和一两家店地址。',
      ],
    },
    {
      id: 'language',
      title: '语言',
      items: [
        '马来语是官方语言。乔治市餐饮区英语常用；华语、闽南话在华人档口常见，不保证每一摊都能用普通话点完。扁担饭指菜比讲复杂句子有效。',
      ],
    },
    {
      id: 'weather',
      title: '天气与走路',
      items: [
        '全年湿热，阵雨来得快。伞比第四件外套有用。店屋区人行道不宽，鞋底要能走湿砖。极端雷雨时改室内，不要坚持升旗山。',
      ],
    },
    {
      id: 'kl',
      title: '吉隆坡',
      items: [
        '吉隆坡城市页待写：/places/malaysia。本页不把 KL 写成槟城的必接一站。若你的机票经 KL，把它当转机或另一趟，不要从乔治市的 3–5 晚里硬挤。',
      ],
    },
  ] as PracticalBlock[],

  practicalLinks: [
    {
      label: 'MDAC 官方登记',
      url: 'https://imigresen-online.imi.gov.my/mdac/main',
    },
    {
      label: '马来西亚移民局',
      url: 'https://www.imi.gov.my/',
    },
    {
      label: 'Touch ’n Go',
      url: 'https://www.touchngo.com.my/',
    },
    {
      label: 'Penang Hill',
      url: 'https://www.penanghill.gov.my/',
    },
  ],

  itinerary: {
    threeNights: {
      title: '3 晚（只住乔治市）',
      note: '住 UNESCO 店屋区。不安排环岛，不住海滩。',
      days: [
        { day: 'D1', body: '落地、进城、晚饭近住处。不安排景点。' },
        {
          day: 'D2',
          body: '上午一盘炒粿条或一碗叻沙 → 同一片店屋巷重复走 → 姓氏桥走一截 → 晚上福建面或坐店。',
        },
        {
          day: 'D3',
          body: '上午小食或扁担饭 → 清真寺街一带走路 → 煎蕊当终点。不塞升旗山。',
        },
        { day: 'D4 离开', body: '不塞浮罗山背。' },
      ],
    },
    fiveNights: {
      title: '5 晚（乔治市 + 一件出口）',
      note: '前三晚同上。余下两天只加一件事：升旗山，或极乐寺 / 亚依淡（可顺路咖喱面），或浮罗山背。不要三件同一趟。坐店只去 Auntie 或 Teksen 其中一家。炒粿条只认真排一家。',
      days: [],
    },
  },

  verifyTable: [
    {
      category: '签证 / 入境',
      what: 'MDAC 是否仍要填、你是否豁免、签证与停留资格',
      where: 'imigresen-online.imi.gov.my；imi.gov.my',
      links: [
        { label: 'MDAC', url: 'https://imigresen-online.imi.gov.my/mdac/main' },
        { label: 'imi.gov.my', url: 'https://www.imi.gov.my/' },
      ],
    },
    {
      category: '支付',
      what: 'Touch ’n Go 产品规则；小贩是否仍以现金为主',
      where: 'touchngo.com.my；到档口看',
      links: [{ label: 'Touch ’n Go', url: 'https://www.touchngo.com.my/' }],
    },
    {
      category: '上网',
      what: 'eSIM / 预付卡覆盖、机场取卡点',
      where: '运营商；近 3 个月到过的人',
    },
    {
      category: '交通',
      what: '机场巴士线路、CAT 是否仍免费、升旗山缆车',
      where: 'myRapid；myPenang；penanghill.gov.my',
      links: [
        {
          label: 'Rapid Penang',
          url: 'https://myrapid.com.my/bus-train/rapid-penang/rapid-pg-bus/',
        },
        { label: 'Penang Hill', url: 'https://www.penanghill.gov.my/' },
      ],
    },
    {
      category: '季节',
      what: '暴雨、极端高温是否砸在你的日期上',
      where: '马来西亚气象部门；出行当年预报',
    },
    {
      category: '餐厅',
      what: '仍否营业、休息日、卖完即止、迁址',
      where: '各店 Michelin 指南页 / 官网；到附近再看门口',
    },
    {
      category: '安全与健康',
      what: '旅行预警、保险条款',
      where: '本国外交部门；保险公司',
    },
    {
      category: '法规',
      what: '现金申报、烟酒药配额',
      where: '马来西亚海关；MDAC 页上的申报提示',
    },
  ] as VerifyRow[],

  relatedGuides: [
    '马来西亚国家页（槟城已上线，吉隆坡待写）→ /places/malaysia',
    '槟城：只住乔治市的五日停法（待写）',
    '升旗山缆车：当天如何核班次（待写）',
    '吉隆坡短页（待写）',
  ],

  startHere: [
    { label: '签证与入境 · 马来西亚', href: '/start/visas', status: '待写；先读移民局与 MDAC' },
    { label: '支付 · 马来西亚', href: '/start/paying', status: '待写' },
    { label: '上网 · 马来西亚', href: '/start/online', status: '待写' },
    { label: '交通 · 槟城', href: '/start/transport', status: '待写；先读 Rapid Penang' },
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
