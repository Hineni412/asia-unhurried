import type { CityContent } from './types'
import { EAT_CRITERIA, EAT_EXCLUDE, HELP_PHRASES, consularHotline, consularUse } from './shared'
import { cityImages } from './photoData'
import { CONTENT_CITIES } from '../directory'

const city = (slug: string) => {
  const c = CONTENT_CITIES.find((x) => x.slug === slug)
  if (!c) throw new Error(`missing directory city: ${slug}`)
  return c
}

const myTourism = { label: '马来西亚旅游局', url: 'https://www.malaysia.travel/' }
const mdac = { label: 'MDAC 入境卡', url: 'https://imigresen-online.imi.gov.my/mdac/main' }
const imi = { label: '马来西亚移民局', url: 'https://www.imi.gov.my/' }
const consular = { label: '中国领事服务网', url: 'https://cs.mfa.gov.cn/' }
const visitKL = { label: 'Visit KL（吉隆坡官方）', url: 'https://www.visitkl.gov.my/' }

export const kualaLumpur: CityContent = {
  city: city('kuala-lumpur'),
  checkedAt: '2026-09-14',
  meta: [
    { label: '最佳季节', value: '全年炎热多雨，5–7 月与 11–2 月雨势更明显；行程留弹性应对午后雷阵雨。' },
    { label: '机场', value: '吉隆坡国际（KUL，KLIA/KLIA2），KLIA Ekspres 快线到中央车站约 30 分钟。' },
    { label: '建议停留', value: '2–3 晚。城市适合作为进出马来西亚的枢纽，不把它当度假目的地硬撑。' },
    { label: '地区标签', value: '东南亚 · 马来西亚首都' },
    { label: '气质', value: '高楼、巴刹与多元族裔的日常混居' },
    { label: '核实日期', value: '2026-09-14' },
  ],
  essentials: [
    {
      title: '机场 → 市区',
      body: 'KLIA／KLIA2 到 KL Sentral 最快是 KLIA Ekspres（约 30 分钟）或 KLIA Transit（多停几站）；Grab 与出租车按路程，高峰进城可堵。行李多选轨道＋Grab 补最后一段。',
      action: { label: '查看抵达步骤', to: '?tab=practical#guide-arrival' },
      links: [{ label: '吉隆坡机场', url: 'https://www.malaysiaairports.com.my/' }],
    },
    {
      title: '建议住哪',
      body: '第一次来住 KL Sentral／中央车站附近（机场快线与各轨道线交汇）或武吉免登（Bukit Bintang，吃喝购物最集中）。全程一处，城市不值得为它换住处。',
      action: { label: '订房前逐项检查', to: '?tab=practical#guide-stay' },
    },
    {
      title: '建议晚数',
      body: '2 晚够看双子塔、独立广场与一晚阿罗街夜市；3 晚加黑风洞或老城区慢走。吉隆坡是进出马来西亚的枢纽，行程比槟城更紧凑合理。',
      action: { label: '展开每天安排', to: '?tab=itinerary#plan-three' },
    },
  ],
  overview: [
    '吉隆坡的骨架是轨道：LRT、MRT、Monorail 与 KL Sentral 枢纽串起全城。慢旅行的做法：住 KL Sentral 或武吉免登，每天一个方向。',
    '双子塔与 KLCC 公园是地标与拍照；独立广场、中央市场与老火车站是殖民建筑与市集；黑风洞是半天近郊。这些分开排，别塞同一天。',
    '这座城的多元在吃上：马来、华人、印度餐饮各有片区。茨厂街（唐人街）与小印度是同一片城市里的两种世界。',
    '别把吉隆坡当「东南亚版香港」——它更散、更湿热、更需要轨道当骨架。住对位置，一天一个方向。',
  ],
  gettingThere: {
    intro: [
      'KLIA／KLIA2 进城：KLIA Ekspres 直达 KL Sentral 约 30 分钟最快；KLIA Transit 多停几站便宜些；Grab 与出租车按路况，高峰进城可堵一小时。',
      '市内靠 LRT／MRT／Monorail 轨道网加步行与 Grab。KL Sentral 是换乘枢纽；Bukit Bintang 一带步行友好。',
      '去黑风洞：KTM 通勤铁路到 Batu Caves 站直达最方便；Grab 也行但回程高峰堵车。',
    ],
    links: [
      { label: 'KLIA Ekspres', url: 'https://www.kliaekspres.com/' },
      { label: 'RapidKL 轨道', url: 'https://myrapid.com.my/' },
    ],
    verifyReminders: [
      'KLIA Ekspres 与 Transit 的当前票价与间隔',
      'Touch n Go 卡在各轨道与商店的通用性',
      '黑风洞着装要求与开放时间',
      '茨厂街夜间步行的安全提示',
    ],
  },
  neighborhoods: [
    {
      id: 'kl-sentral',
      title: 'KL Sentral 与 Brickfields',
      suited: '要交通最顺、把 KL 当枢纽进出的人。',
      image: cityImages['kl-sentral'],
      body: 'KL Sentral 是机场快线与全城轨道交汇的枢纽；旁边 Brickfields（小印度）是花环、香料与印度食堂的街区。住这里，进城与出城都省。',
      visit: {
        duration: '这一带是住处与枢纽；Brickfields 留半天。',
        entry: 'KL Sentral 各线交汇。',
        walk: 'KL Sentral → Brickfields 主街与印度庙；傍晚去有夜市气。',
        return: '轨道回；Brickfields 巷内人杂，看紧随身物。',
        stay: '首选居住区；酒店密集，去机场与市区都最顺。',
        source: visitKL,
      },
    },
    {
      id: 'bukit-bintang',
      title: '武吉免登',
      suited: '要吃喝购物集中、晚上有地方走的人。',
      image: cityImages['kl-bukit-bintang'],
      body: 'Bukit Bintang 是商场与阿罗街（Jalan Alor）夜市的集中区；白天 Pavilion 一带逛，晚上阿罗街吃。商业化但方便。',
      visit: {
        duration: '半天到一天。',
        entry: 'Monorail Bukit Bintang 站或 MRT 同线。',
        walk: 'Pavilion → 阿罗街方向；晚上阿罗街人挤人。',
        return: '轨道或 Grab 回；夜市结束晚，留意末班。',
        stay: '想吃喝方便住这里；选离轨道近、不贴主街的。',
        source: visitKL,
      },
    },
    {
      id: 'merdeka-chinatown',
      title: '独立广场与茨厂街',
      suited: '想看殖民建筑与唐人街市集的人。',
      image: cityImages['kl-merdeka'],
      body: '独立广场、苏丹阿都沙末大厦与老火车站是殖民建筑带；茨厂街（Petaling Street）是唐人街市集与小贩。半天走完，上午去人少。',
      visit: {
        duration: '半天。',
        entry: 'LRT Masjid Jamek 或 MRT Pasar Seni 站。',
        walk: '独立广场 → 中央市场 → 茨厂街主街；市集会议价。',
        return: '就近轨道回；茨厂街下午热，上午走。',
        stay: '不建议住茨厂街深巷；住 KL Sentral 或武吉免登。',
        source: visitKL,
      },
    },
    {
      id: 'klcc',
      title: 'KLCC 与双子塔',
      suited: '想看地标、住得现代的人。',
      image: cityImages['kl-klcc'],
      body: '双子塔与 KLCC 公园是城市客厅；塔上观景收费（限流），公园与商场免费。黄昏看塔亮灯是最值的时段。',
      visit: {
        duration: '半天；黄昏最好。',
        entry: 'LRT KLCC 站。',
        walk: 'KLCC 公园绕湖 → 双子塔外观 → 商场内连通。',
        return: 'LRT 回；塔上观景先查当日票。',
        stay: '酒店偏高端；要性价比住武吉免登或 Sentral。',
        source: visitKL,
      },
    },
  ],
  stay: {
    checkedAt: '2026-09-14',
    intro:
      '吉隆坡的住宿决策是「枢纽还是商圈」：KL Sentral 进出城最顺，武吉免登吃喝在脚下；KLCC 是加价换景观，茨厂街只玩不住。',
    budgetNote:
      '以 ¥700–800/晚为上限：在吉隆坡很宽裕——中档酒店平日 ¥250–550 常见，这档预算能住到带泳池的高层公寓式酒店；KLCC 景观房除外。',
    anchors: [
      { title: '按到达方式选', body: 'KLIA Ekspres 终点是 KL Sentral，拖着箱子住枢纽最省；廉航航站楼进出同理。' },
      { title: '轨道三家不互通', body: 'LRT、MRT、Monorail 是不同系统，换乘要出闸走一段——住处贴一条常用线即可，别指望换乘顺。' },
      { title: '茨厂街只玩不住', body: '老城深巷环境杂，住 KL Sentral 或武吉免登，茨厂街白天去逛。' },
    ],
    areas: [
      {
        id: 'kl-sentral-stay',
        title: 'KL Sentral – Brickfields',
        suitsIf: '要进出城最顺、中转一晚或赶早机的人。',
        budgetFeel: '这档预算超配，连锁中档密集。',
        band: { low: 250, high: 590 },
        transit: 'Ekspres 到机场 28 分钟；LRT、KTM、单轨交汇。',
        food: 'Brickfields 的印度餐与站内食街；去茨厂街一站。',
        tradeoff: '枢纽感强、街区无个性；站内动线要认一次路。',
        neighborhoodIds: ['kl-sentral'],
      },
      {
        id: 'bukit-bintang-stay',
        title: '武吉免登',
        suitsIf: '想要吃喝与夜生活在脚下的人。',
        budgetFeel: '这档预算可住到中档；贴主街的楼夜里吵。',
        band: { low: 300, high: 590 },
        transit: '单轨＋MRT 武吉免登站；去 KL Sentral 约 15 分钟。',
        food: '阿罗街夜市、永兴城茶餐室、Lot 10 食阁步行内。',
        tradeoff: '周末夜里闹；选房离主街一两个路口。',
        neighborhoodIds: ['bukit-bintang'],
      },
      {
        id: 'chinatown-edge-stay',
        title: '茨厂街外缘（ Pasar Seni 一侧）',
        suitsIf: '想住老城氛围、又要轨道便利的折中。',
        budgetFeel: '这档预算在老城明显超配；便宜旅社多但要挑。',
        band: { low: 150, high: 370 },
        transit: 'LRT／MRT Pasar Seni 站；去 Sentral 一站。',
        food: '茨厂街与后巷茶室步行圈。',
        tradeoff: '深巷环境杂、老楼硬件参差；只选靠站一侧。',
        skipIf: '带家人或对环境敏感——住 Sentral。',
        neighborhoodIds: ['merdeka-chinatown'],
      },
      {
        id: 'klcc-stay',
        title: 'KLCC 与双子塔',
        suitsIf: '想要公园景观与高端酒店、预算上浮的人。',
        budgetFeel: '这档预算处于下限；塔景房普遍四位数。',
        band: { low: 420, high: 840 },
        transit: 'LRT KLCC 站；去 Sentral 约 20 分钟。',
        food: '商场食阁与酒店餐厅；地道小店少。',
        tradeoff: '吃住都偏商场化；去老城要换线。',
        neighborhoodIds: ['klcc'],
      },
    ],
  },
  dayTrips: [
    { direction: '马六甲', how: '巴士约两小时', worth: '古城与海峡清真寺，值得一天到一晚；比槟城轻松。' },
    { direction: '云顶高原', how: '巴士／缆车约一小时', worth: '山上赌场与乐园；不想去赌场就不必硬排。' },
    { direction: '怡保', how: 'ETS 火车约两小时', worth: '老矿城与芽菜鸡；半天到一天，比吉隆坡更松弛。' },
  ],
  dayTripNote: '马六甲最值得一天；云顶只对赌场乐园有兴趣才排；怡保更松弛。',
  eatIntro:
    '吉隆坡的吃是三族裔的混居：马来椰浆饭、华人小贩中心、印度扁担饭各占一片。找食阁（kopitiam／food court）是最顺的打开方式。',
  eatCriteria: EAT_CRITERIA,
  eatExclude: EAT_EXCLUDE,
  categories: [
    {
      id: 'nasi-lemak', title: 'Nasi lemak 与马来餐',
      intro: '椰浆饭是国民早餐：椰浆饭＋叁巴酱＋炸鸡／江鱼仔。早餐时段最新鲜，叁巴酱辣先小份试。',
      restaurants: [
        {
          id: 'village-park', name: 'Village Park Restaurant', nameEn: 'Village Park', neighborhood: 'Damansara Uptown',
          location: { address: '5 Jalan SS 21/37, Damansara Utama, PJ', connection: 'Grab 自市区约20–30分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Village+Park+Restaurant' } },
          order: ['Nasi lemak 炸鸡（招牌）', '加叁巴酱与江鱼仔'],
          whyLinger: '全马最有名的椰浆饭店之一——前总统也来排队。炸鸡椰浆饭是标准答案，值得专程去。',
          practical: '早餐到下午；饭点排长队翻台快。现金与卡以现场为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Village+Park+Restaurant' }],
          queueNote: '早餐与午餐高峰排长队；店大翻台快。',
        },
        {
          id: 'nasi-lemak-bumbung', name: 'Nasi Lemak Bumbung', nameEn: 'Nasi Lemak Bumbung PJ', neighborhood: 'Seapark（PJ）',
          location: { address: 'Jalan 21/11B, Sea Park, PJ（巷内摊位）', connection: 'Grab 自市区约20分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Nasi+Lemak+Bumbung+Seapark' } },
          order: ['Nasi lemak 加炸鸡或仁当'],
          whyLinger: '后巷里的传奇椰浆饭摊——傍晚才开，坐在巷子里吃。比 Village Park 更市井。',
          practical: '傍晚开摊；现金，按盘点。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Nasi+Lemak+Bumbung+Seapark' }],
        },
        {
          id: 'madam-kwans', name: "Madam Kwan's", nameEn: "Madam Kwan's", neighborhood: 'KLCC（Suria 商场内）',
          location: { address: 'Suria KLCC, Level 4, KL', areaId: 'klcc', connection: 'LRT KLCC 站商场内', source: { label: '官网', url: 'https://www.madamkwan.com.my/' } },
          order: ['Nasi lemak', '咖喱叻沙', 'Cendol 珍多冰'],
          whyLinger: '把马来菜做进商场的名店——看完双子塔不必跑远，在 KLCC 里就能吃到靠谱的椰浆饭。连锁但品质稳。',
          practical: '午晚餐高峰排队；多家分店。以官网为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '官网', url: 'https://www.madamkwan.com.my/' }],
        },
      ],
    },
    {
      id: 'hawker', title: '小贩与华人餐',
      intro: 'Kopitiam 与小贩中心是华人日常：云吞面、肉骨茶、粥品。阿罗街是游客版，茶室是本地版。',
      restaurants: [
        {
          id: 'hon-kee', name: '汉记靓粥', nameEn: 'Hon Kee Porridge', neighborhood: '茨厂街',
          location: { address: 'Jalan Hang Lekir（茨厂街口）, KL', areaId: 'merdeka-chinatown', connection: 'MRT Pasar Seni 站步行约5分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Hon+Kee+Porridge+Petaling' } },
          order: ['生鱼片粥或猪肉粥', '油条'],
          whyLinger: '茨厂街口的老粥档——生料滚粥配炸油条，唐人街早餐的定番。',
          practical: '早上到午后；现金。店外座位先到先得。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Hon+Kee+Porridge+Petaling' }],
        },
        {
          id: 'win-heng-seng', name: '永兴城茶餐室', nameEn: 'Restoran Win Heng Seng', neighborhood: 'Imbi／武吉免登',
          location: { address: '183 Jalan Imbi, KL', areaId: 'bukit-bintang', connection: '武吉免登步行约10分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=永兴城茶餐室' } },
          order: ['老鼠粉（瓦煲）', '云吞面或酿豆腐各摊点'],
          whyLinger: '武吉免登旁的老茶餐室——十几个摊位共用一个店面，瓦煲老鼠粉是最出名的一档。',
          practical: '早餐到午后各摊自收；占位后各摊点单送到位，现金。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=永兴城茶餐室' }],
        },
        {
          id: 'kim-lian-kee', name: '金莲记', nameEn: 'Kim Lian Kee', neighborhood: '茨厂街',
          location: { address: '49-51 Jalan Petaling（茨厂街口）, KL', areaId: 'merdeka-chinatown', connection: 'MRT Pasar Seni 站步行约5分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Kim+Lian+Kee+Petaling' } },
          order: ['福建面（黑酱油炒面）', '滑蛋河'],
          whyLinger: '1927 年起家的福建面老店——黑酱油猪油渣炒面是吉隆坡这一派的源头。茨厂街散步的正餐。',
          practical: '午晚餐；街角老店。现金与卡以现场为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Kim+Lian+Kee+Petaling' }],
        },
      ],
    },
    {
      id: 'mamak', title: '扁担饭与印度餐',
      intro: 'Nasi kandar（扁担饭）是穆斯林印度餐：饭配几种咖喱与配菜自助式点。Roti canai 是早餐好选项。',
      restaurants: [
        {
          id: 'line-clear', name: 'Line Clear Nasi Kandar', nameEn: 'Line Clear', neighborhood: 'Jalan Penang 巷内',
          location: { address: 'Jalan Penang 旁窄巷（近 Masjid Jamek 方向）', areaId: 'merdeka-chinatown', connection: 'LRT Masjid Jamek 或 Bank Negara 步行约10分钟', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Line+Clear+Nasi+Kandar' } },
          order: ['扁担饭自选咖喱配菜', 'Teh tarik 拉茶'],
          whyLinger: '巷子里的老牌扁担饭——窄巷两侧坐满人，咖喱混淋是正确吃法。最有市井气的一顿。',
          practical: '长时段营业（曾 24 小时，以现场为准）；现金，按配料计价。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Line+Clear+Nasi+Kandar' }],
        },
        {
          id: 'pelita', name: 'Nasi Kandar Pelita', nameEn: 'Pelita', neighborhood: '多家分店',
          location: { address: '各主要商圈均有门店', connection: '按住处附近搜 Pelita', source: { label: '官网', url: 'https://www.pelita.com.my/' } },
          order: ['扁担饭', 'Roti canai＋拉茶'],
          whyLinger: '扁担饭连锁的保底项——店面干净、营业时间长，深夜也接得上。',
          practical: '多家分店；以门店为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '官网', url: 'https://www.pelita.com.my/' }],
        },
      ],
    },
    {
      id: 'kopitiam', title: 'Kopitiam 与白咖啡',
      intro: '老式咖啡店卖白咖啡、烤面包、半熟蛋——本地人的早餐仪式。',
      restaurants: [
        {
          id: 'ho-kow', name: '何九海南茶店', nameEn: 'Ho Kow Hainam Kopitiam', neighborhood: '茨厂街后巷',
          location: { address: '1 Jalan Balai Polis（Lorong Panggung 口）, KL', areaId: 'merdeka-chinatown', connection: 'MRT Pasar Seni 站步行约5分钟', source: { label: '官网', url: 'https://www.hokowhainamkopitiam.com/' } },
          order: ['烤面包＋半熟蛋', '海南咖啡或奶茶'],
          whyLinger: '1928 年起家的海南茶店——翻新后的老铺，墙上是老照片。茨厂街散步的早餐锚点。',
          practical: '早上到午后；排队取号常见。以官网为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '官网', url: 'https://www.hokowhainamkopitiam.com/' }],
        },
        {
          id: 'yut-kee', name: '镒记茶室', nameEn: 'Yut Kee Restaurant', neighborhood: 'Jalan Kamunting',
          location: { address: '1 Jalan Kamunting, Chow Kit 方向', connection: 'Grab 或步行自 Medan Tuanku', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Yut+Kee+Restaurant' } },
          order: ['Roti babi（肉汁面包）', '海南鸡扒', 'kaya 烤面包'],
          whyLinger: '1928 年的海南茶室——店屋老招牌还在，Roti babi 是全城只在老店吃得到的东西。',
          practical: '早餐到午后；现金与卡以现场为准。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Yut+Kee+Restaurant' }],
        },
      ],
    },
    {
      id: 'foodcourt', title: '商场食阁',
      intro: '商场食阁干净有空调，热天与雨季的稳妥选择。',
      restaurants: [
        {
          id: 'lot10-hutong', name: 'Lot 10 胡同', nameEn: 'Lot 10 Hutong', neighborhood: '武吉免登',
          location: { address: 'Lot 10 商场地下, Bukit Bintang', areaId: 'bukit-bintang', connection: 'Monorail／MRT Bukit Bintang 步行可达', source: { label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Lot+10+Hutong' } },
          order: ['各老招牌摊任选（云吞面、肉骨茶、福建面）'],
          whyLinger: '把吉隆坡老字号摊集中进一个食阁——想一次吃到几家名店又不愿满城跑时的答案。',
          practical: '地下层；多数摊位现金与卡都收。',
          verifiedAt: '2026-09-14',
          sources: [{ label: '地图检索', url: 'https://www.google.com/maps/search/?api=1&query=Lot+10+Hutong' }],
        },
      ],
    },
  ],
  howToOrder: [
    'Kopitiam 点咖啡说 kopi（炼乳）、kopi-o（黑咖啡）、kopi-c（淡奶）。',
    '扁担饭排队拿盘，指着想吃的咖喱与配菜。',
    '小贩中心先占位再各摊点单送到位。',
    '穆斯林餐厅不卖酒；非清真餐厅才有点酒选项。',
  ],
  avoid: [
    '茨厂街假货与高价是常态，按兴趣买别当真货。',
    '景区门口拉客的餐厅与出租不进；Grab 比价。',
    '雨季午后雷阵雨常见，行程别把户外排在午后。',
  ],
  eatRhythm:
    '早餐 kopitiam 或 nasi lemak；午餐小贩中心或扁担饭；下午咖啡躲雷阵雨；晚上阿罗街或住处附近食阁。',
  allergies: [
    '叁巴酱含虾酱；椰浆普遍。',
    '花生常用在沙嗲酱与凉拌菜。',
    '清真餐厅不卖猪肉；非清真华人店多含猪油／料酒。',
  ],
  guide: {
    city: '吉隆坡',
    checkedAt: '2026-09-14',
    scope: '以轨道为主的首次吉隆坡行程；签证按本人证件另核官方要求',
    intro: '吉隆坡住轨道沿线、用轨道当骨架。以下按 2–3 晚写。',
    topics: [
      {
        id: 'documents', title: '证件与入境', summary: '免签但需 MDAC 入境卡；按护照核实资格。', stage: 'before',
        recommendation: '马来西亚对中国大陆护照有免签安排（天数以当前公告为准），但须提前在线填 MDAC 入境卡。其他护照按规定核对。免签资格与停留期以移民局当前公告为准。',
        steps: [
          { title: '先按护照核免签资格', body: '在移民局页面按国籍核对资格与可停留天数；需要签证的提前办。' },
          { title: '提前填 MDAC', body: '马来西亚数字入境卡在官方系统填写，生成确认；截图离线保存。官网免费，注意辨别仿冒。' },
          { title: '材料放一起', body: '返程订单、酒店信息、足额现金离线保存；入境可能抽查。' },
          { title: '入境核对停留期', body: '护照入境章标有须离境日期，核对与行程一致。' },
        ],
        done: '免签资格核实、MDAC 已填、订单离线可查。',
        fallback: '入境问题先联系移民局或使领馆；不要到机场再处理。',
        sources: [imi, mdac, consular],
      },
      {
        id: 'mobile', title: '上网与手机', summary: '落地 SIM 或 eSIM，Grab 与轨道靠网。', stage: 'before',
        recommendation: '马来西亚落地 SIM 便宜（Celcom、Maxis、Hotlink 等机场有柜台），或出发前 eSIM。Grab 与轨道查询都靠网，落地先联网。',
        steps: [
          { title: 'eSIM 或落地 SIM', body: 'eSIM 先查手机支持；落地 SIM 在机场柜台买游客套餐装好测好。' },
          { title: '装好 Grab 与翻译', body: '叫车查价用 Grab；翻译应用装马来语／英语包。' },
          { title: '留能收短信的号', body: '部分注册要短信；双卡留国内卡收短信、关数据漫游。' },
        ],
        done: '离 Wi-Fi 能开地图、Grab 能叫车。',
        fallback: '柜台人多先连机场 Wi-Fi，进城再办。',
        sources: [myTourism],
      },
      {
        id: 'payment', title: '支付与 Touch n Go', summary: '现金与卡并存，Touch n Go 管交通与部分店。', stage: 'before',
        recommendation: '大店与商场收卡普遍；小贩中心与市场多收现金。Touch n Go 卡刷轨道与部分便利店；Grab 绑卡。',
        steps: [
          { title: '备现金与卡', body: '机场 ATM 或市区换汇取马币；小贩摊与市场现金为主。' },
          { title: '拿 Touch n Go', body: '机场或车站买 TnG 卡充；刷 LRT／MRT／巴士与部分便利店。' },
          { title: '刷卡留意币种', body: '提示转人民币计价选 MYR；保存大额收据。' },
        ],
        done: '现金够两天、TnG 可用、Grab 绑卡成功。',
        fallback: '现金不够找银行 ATM；TnG 余额部分可退。',
        sources: [{ label: 'Touch n Go', url: 'https://www.touchngo.com.my/' }, myTourism],
      },
      {
        id: 'stay', title: '住宿与入住', summary: '住 KL Sentral 或武吉免登，查电梯与安保。', stage: 'before',
        recommendation: '第一次来住 KL Sentral（枢纽）或 Bukit Bintang（吃喝集中）。公寓式民宿多，订前看近期评价与电梯／安保。',
        steps: [
          { title: '按晚间动线选片区', body: '住处放在晚饭后能走回或一程轨道回的范围；深巷民宿看夜间照明。' },
          { title: '看硬条件评价', body: '电梯、隔音、空调、热水在评价里比星级真实；老公寓常没电梯。' },
          { title: '确认接机与晚到', body: '很多酒店约付费接机；晚到问清取钥匙或前台时间。' },
          { title: '保存地址英文马来文', body: '给司机看英文地址够用；备马来文更稳。' },
        ],
        done: '电梯、安保、晚到与接机方案已确认。',
        fallback: '到店不符先找平台协调；深夜先住下次日处理。',
        sources: [visitKL],
      },
      {
        id: 'arrival', title: 'KLIA → 酒店', summary: 'Ekspres 到 KL Sentral 最快，再按住处接轨道或 Grab。', stage: 'arrival',
        recommendation: '住 KL Sentral 附近：KLIA Ekspres 直达最顺。住武吉免登：Ekspres 到 Sentral 再换 MRT／Grab。行李多或深夜到，Grab 或机场出租。',
        steps: [
          { title: '先定轨道还是车', body: '住处在轨道沿线且行李少→Ekspres／Transit；否则 Grab 或出租。' },
          { title: 'Ekspres 与 Transit 分清', body: 'Ekspres 直达快、Transit 多停几站便宜；按住处选。' },
          { title: '到 Sentral 后换乘', body: 'KL Sentral 大，按标识找 MRT／LRT／Grab 上车点；别走出错口。' },
          { title: '深夜到达', body: 'Ekspres 有末班；深夜用 Grab 或机场出租柜台。' },
        ],
        done: '到酒店，知道回程坐哪条线。',
        fallback: '轨道停运改 Grab／出租；深夜直接车。',
        sources: [{ label: 'KLIA Ekspres', url: 'https://www.kliaekspres.com/' }, { label: 'Grab', url: 'https://www.grab.com/my/' }],
      },
      {
        id: 'transit', title: '市内交通', summary: 'LRT／MRT／Monorail 三家，TnG 通刷。', stage: 'during',
        recommendation: '轨道网覆盖主要片区但分属不同系统；Touch n Go 通刷多数。步行在 Bukit Bintang 可行，别处多靠轨道＋Grab。',
        steps: [
          { title: '分清线路系统', body: 'LRT、MRT、Monorail、KTM 是不同线网；换乘看标识，有的需出站。' },
          { title: 'Grab 补最后一段', body: '轨道站到住处或景点的深巷用 Grab；定位写准。' },
          { title: '去黑风洞坐 KTM', body: 'KTM 到 Batu Caves 站直达；回程高峰 Grab 堵车，火车更稳。' },
          { title: '午后雷阵雨', body: '下午常急雨；把室内（商场、馆）排在午后，户外排上午。' },
        ],
        done: '会用 TnG 坐轨道、会用 Grab、知道午后雷阵雨。',
        fallback: '轨道不熟先坐一段；Grab 叫不到换出租。',
        sources: [{ label: 'RapidKL', url: 'https://myrapid.com.my/' }, visitKL],
      },
    ],
    checklist: [
      { id: 'c-visa', text: '免签资格已核实；MDAC 已填', topic: '证件与入境' },
      { id: 'c-passport', text: '护照有效期覆盖行程；订单离线保存', topic: '证件与入境' },
      { id: 'c-net', text: 'SIM／eSIM 方案明确；Grab 已装', topic: '上网与手机' },
      { id: 'c-tng', text: 'Touch n Go 购买方式已确认；备现金', topic: '支付与 Touch n Go' },
      { id: 'c-stay', text: '电梯、安保、晚到方案已确认', topic: '住宿与入住' },
      { id: 'c-arrival', text: 'KLIA 到酒店方案与下车站已截图', topic: 'KLIA → 酒店' },
      { id: 'c-rain', text: '已知午后雷阵雨，室内项目排午后', topic: '市内交通' },
    ],
  },
  itinerary: {
    threeNights: {
      title: '3 晚：地标一天，老城一天',
      note: '住 KL Sentral 或武吉免登。每天一个方向，午后躲雨。',
      days: [
        { day: '第一天', body: '抵达入住，武吉免登或住处附近晚饭，阿罗街夜市。', time: '按落地安排', start: 'KLIA → 酒店', return: '住处附近', links: [{ label: '抵达步骤', href: '?tab=practical#guide-arrival' }] },
        { day: '第二天', body: '上午独立广场＋中央市场＋茨厂街 → 午后商场躲雨 → 黄昏 KLCC 看双子塔亮灯。', time: '上午老城、黄昏 KLCC', start: 'Masjid Jamek', return: 'KLCC／住处', links: [{ label: '独立广场与茨厂街', href: '?tab=places#area-merdeka-chinatown' }] },
        { day: '第三天', body: '上午黑风洞（KTM 直达）半天，午后返程。', time: '半天外出、午后收尾', start: 'KTM → Batu Caves', return: '酒店 → 机场', links: [{ label: '看点', href: '?tab=places' }] },
      ],
    },
    fiveNights: {
      title: '5 晚：加马六甲或慢走',
      note: '吉隆坡本身 3 晚够；5 晚加马六甲一天或放慢节奏。',
      days: [
        { day: '第一天', body: '抵达入住，阿罗街夜市。', time: '按落地安排', start: 'KLIA → 酒店', return: '住处附近', links: [{ label: '抵达步骤', href: '?tab=practical#guide-arrival' }] },
        { day: '第二天', body: '老城日：独立广场—中央市场—茨厂街；黄昏 KLCC。', time: '全天', start: '老城', return: 'KLCC／住处', links: [{ label: '老城', href: '?tab=places#area-merdeka-chinatown' }] },
        { day: '第三天', body: '黑风洞半天 + Brickfields 小印度；下午歇。', time: '两个半天', start: 'Batu Caves', return: 'Brickfields／住处', links: [{ label: 'KL Sentral 与 Brickfields', href: '?tab=places#area-kl-sentral' }] },
        { day: '第四天', body: '马六甲一日（古城与海峡清真寺）或留白。', time: '近郊一天', start: '早出发', return: '晚回 KL', links: [{ label: '看点', href: '?tab=places' }] },
        { day: '第五天', body: '住处附近慢走补买，返程。', time: '上午慢走、午后收尾', start: '住处附近', return: '酒店 → 机场', links: [{ label: '武吉免登', href: '?tab=places#area-bukit-bintang' }] },
      ],
    },
  },
  safety: {
    city: '吉隆坡',
    checkedAt: '2026-09-14',
    emergencyNote: '吉隆坡治安总体可，闹市区与夜市看紧随身物；午后雷阵雨与交通是日常变量。靠左行，过马路先看右。',
    contacts: [
      { name: '报警', number: '999', dial: '999', use: '盗窃、抢劫、交通事故', source: { label: '马来西亚皇家警察', url: 'https://www.rmp.gov.my/' }, urgent: true },
      { name: '急救', number: '999', dial: '999', use: '医疗急救与火警（统一号码）', source: myTourism, urgent: true },
      { name: '旅游咨询', number: '+60-3-8891 8000', dial: '+60388918000', use: '旅游局咨询', source: myTourism },
      { name: '领事保护', number: '+86-10-12308', dial: '+861012308', use: consularUse, source: consularHotline },
    ],
    phrases: HELP_PHRASES,
    preparation: [
      '免签资格与 MDAC 确认截图离线保存。',
      '马来西亚靠左行——过马路先看右。',
      '闹市与夜市看紧包，手机别朝街侧拿。',
      '境外医疗保险另存；午后雷阵雨备雨具。',
      '记住 999；Grab 行程可分享。',
      '宗教场所（清真寺、黑风洞）注意着装。',
    ],
    alerts: [
      { title: '午后雷阵雨', body: '几乎每天午后有急雨；把室内排午后，户外排上午，备雨具。', source: myTourism },
      { title: '交通与过马路', body: '靠左行；摩托穿行快，过马路先看右。Grab 与轨道比走路更稳。', source: myTourism },
      { title: '宗教场所着装', body: '清真寺与黑风洞要长裤／裙、遮肩；入口通常提供长袍。', source: myTourism },
      { title: '夜市与深巷', body: '阿罗街与茨厂街人多看好随身物；深巷夜间少走，回主路。', source: myTourism },
    ],
    scenarios: [
      { id: 'safety-documents', title: '护照丢了', steps: ['警局报失拿证明。', '联系中国驻马来西亚大使馆补办旅行证件。', '保留报失证明理赔。', '出境手续留足时间。'], sources: [consular, { label: '中国驻马来西亚大使馆', url: 'http://my.china-embassy.gov.cn/' }] },
      { id: 'safety-medical', title: '需要就医', steps: ['紧急拨 999。', '吉隆坡有多家国际医院；请酒店协助。', '保留收据走保险。'], sources: [myTourism] },
      { id: 'safety-theft', title: '被抢或被盗', steps: ['人身安全优先。', '拨 999 报警拿回执（理赔要用）。', '手机被抢远程锁定、改密码、挂失支付。', '银行卡被盗刷联系发卡行止付。'], sources: [myTourism] },
      { id: 'safety-fraud', title: '价格或出租车纠纷', steps: ['出租坚持打表或 Grab 比价。', '茨厂街购物议价留证；纠纷找旅游警察。', '刷卡异常联系发卡行。'], sources: [myTourism] },
      { id: 'safety-transport', title: '轨道坐错或叫不到车', steps: ['轨道换乘看标识，有的需出站重进。', 'Grab 叫不到换出租扬招；高峰留时间。', '手机没电找商场服务台或酒店前台。'], sources: [visitKL] },
    ],
  },
  relatedGuides: [
    '槟城城市页 → /places/malaysia/penang',
    '马来西亚国家页 → /places/malaysia',
    '新加坡城市页 → /places/singapore',
  ],
  sourcesNote: [
    '街区、看点与交通信息来自官方公开资料与通用旅行常识，核对日期见上。',
    '店单按「可核实」标准收录：每家店留核实日期与来源；营业与排队信息以现场和官网为准。',
    `官方入口：${city('kuala-lumpur').officialLinks.map((l) => l.label).join('、')}。`,
  ],
}
