import type { SourceLink } from './hongKong'

export type DirectoryTrail = { label: string; to?: string }

export type CityMeta = {
  region: string
  best: string
  airports: string
  stay: string
}

export type LiveCity = {
  slug: string
  nameZh: string
  nameEn: string
  tagline: string
  href: string
  status: 'live'
}

export type CityEntry = {
  slug: string
  nameZh: string
  nameEn: string
  pinyin: string
  region: string
  tagline: string
  href: string
  trail: DirectoryTrail[]
  meta: CityMeta
  officialLinks: SourceLink[]
  status: 'live' | 'writing'
}

export type DirectoryCity = LiveCity | CityEntry

export type DirectoryCountry = {
  slug: string
  nameZh: string
  nameEn: string
  region: string
  lede: string
  href: string
  cities: DirectoryCity[]
}

const T = (label: string, to?: string): DirectoryTrail => ({ label, to })

const tokyo: CityEntry = {
  slug: 'tokyo',
  nameZh: '东京',
  nameEn: 'Tokyo',
  pinyin: 'Dōngjīng',
  region: '东亚',
  tagline: '先按片区住稳，再让地铁连接其余。巨型城市不追「全部」，一天一个方向就够。',
  href: '/places/japan/tokyo',
  trail: [T('目的地', '/'), T('东亚'), T('日本', '/places/japan')],
  meta: { region: '东亚', best: '春秋为主', airports: 'HND / NRT', stay: '4–6 晚' },
  officialLinks: [
    { label: '东京官方旅游指南 Go Tokyo', url: 'https://www.gotokyo.org/' },
    { label: '羽田机场', url: 'https://tokyo-haneda.com/' },
    { label: '成田机场', url: 'https://www.narita-airport.jp/' },
  ],
  status: 'live',
}

const kyoto: CityEntry = {
  slug: 'kyoto',
  nameZh: '京都',
  nameEn: 'Kyoto',
  pinyin: 'Jīngdū',
  region: '东亚',
  tagline: '寺院与巷子都适合慢慢走。旺季人多时，早起比多排一个景点有用。',
  href: '/places/japan/kyoto',
  trail: [T('目的地', '/'), T('东亚'), T('日本', '/places/japan')],
  meta: { region: '东亚', best: '春秋 · 樱枫季留余量', airports: '最近 KIX（大阪）', stay: '3–4 晚' },
  officialLinks: [
    { label: '京都市官方旅游指南', url: 'https://kyoto.travel/' },
    { label: '关西机场', url: 'https://www.kansai-airport.or.jp/' },
  ],
  status: 'live',
}

const osaka: CityEntry = {
  slug: 'osaka',
  nameZh: '大阪',
  nameEn: 'Osaka',
  pinyin: 'Dàbǎn',
  region: '东亚',
  tagline: '梅田与难波两座市中心，中间用地铁连。吃比逛重要，按街区下馆子。',
  href: '/places/japan/osaka',
  trail: [T('目的地', '/'), T('东亚'), T('日本', '/places/japan')],
  meta: { region: '东亚', best: '春秋为主', airports: 'KIX（关西）/ ITM（伊丹）', stay: '2–4 晚' },
  officialLinks: [
    { label: '大阪观光局 Osaka Info', url: 'https://osaka-info.com/' },
    { label: '关西机场', url: 'https://www.kansai-airport.or.jp/' },
  ],
  status: 'live',
}

const fukuoka: CityEntry = {
  slug: 'fukuoka',
  nameZh: '福冈',
  nameEn: 'Fukuoka',
  pinyin: 'Fúgāng',
  region: '东亚',
  tagline: '机场离市区十分钟的城市。博多拉面之外，大濠公园与太宰府都值得半天。',
  href: '/places/japan/fukuoka',
  trail: [T('目的地', '/'), T('东亚'), T('日本', '/places/japan')],
  meta: { region: '东亚', best: '春秋 · 夏湿热', airports: 'FUK（博多方向）', stay: '2–3 晚' },
  officialLinks: [
    { label: '福冈市旅游信息 Yokanavi', url: 'https://yokanavi.com/' },
    { label: '福冈机场', url: 'https://www.fukuoka-airport.jp/' },
  ],
  status: 'live',
}

const seoul: CityEntry = {
  slug: 'seoul',
  nameZh: '首尔',
  nameEn: 'Seoul',
  pinyin: 'Shǒuěr',
  region: '东亚',
  tagline: '宫殿、市场与山坡住宅区，挑两三个片区住稳，不赶半岛环线。',
  href: '/places/south-korea/seoul',
  trail: [T('目的地', '/'), T('东亚'), T('韩国', '/places/south-korea')],
  meta: { region: '东亚', best: '春秋 · 冬冷夏湿', airports: 'ICN', stay: '3–5 晚' },
  officialLinks: [
    { label: '首尔观光财团 Visit Seoul', url: 'https://www.visitseoul.net/' },
    { label: '仁川机场', url: 'https://www.airport.kr/' },
  ],
  status: 'live',
}

const jeju: CityEntry = {
  slug: 'jeju',
  nameZh: '济州岛',
  nameEn: 'Jeju',
  pinyin: 'Jìzhōudǎo',
  region: '东亚',
  tagline: '一个岛当一座城用：济州市住下，东岸、西归浦各留一天，汉拿山看天气。',
  href: '/places/south-korea/jeju',
  trail: [T('目的地', '/'), T('东亚'), T('韩国', '/places/south-korea')],
  meta: { region: '东亚', best: '春秋 · 冬风大', airports: 'CJU', stay: '3–4 晚' },
  officialLinks: [
    { label: '济州观光公社 Visit Jeju', url: 'https://www.visitjeju.net/' },
    { label: '济州国际机场', url: 'https://www.airport.co.kr/jeju/' },
  ],
  status: 'live',
}

const busan: CityEntry = {
  slug: 'busan',
  nameZh: '釜山',
  nameEn: 'Busan',
  pinyin: 'Fǔshān',
  region: '东亚',
  tagline: '港口城市：札嘎其市场与山坡村落在南边，海云台在东边。按海岸分段住。',
  href: '/places/south-korea/busan',
  trail: [T('目的地', '/'), T('东亚'), T('韩国', '/places/south-korea')],
  meta: { region: '东亚', best: '春秋 · 夏看海', airports: 'PUS（金海）', stay: '2–3 晚' },
  officialLinks: [
    { label: '釜山观光公社 Visit Busan', url: 'https://www.visitbusan.net/' },
    { label: '金海国际机场', url: 'https://www.airport.co.kr/gimhae/' },
  ],
  status: 'live',
}

const taipei: CityEntry = {
  slug: 'taipei',
  nameZh: '台北',
  nameEn: 'Taipei',
  pinyin: 'Táiběi',
  region: '东亚',
  tagline: '夜市、巷弄与近郊山线。不赶环岛，先把市区走熟。',
  href: '/places/taiwan/taipei',
  trail: [T('目的地', '/'), T('东亚'), T('台湾', '/places/taiwan')],
  meta: { region: '东亚', best: '秋冬干爽', airports: 'TPE（桃园）', stay: '3–4 晚' },
  officialLinks: [
    { label: '台北市旅游网', url: 'https://www.travel.taipei/' },
    { label: '桃园机场', url: 'https://www.taoyuan-airport.com/' },
  ],
  status: 'live',
}

const hanoi: CityEntry = {
  slug: 'hanoi',
  nameZh: '河内',
  nameEn: 'Hanoi',
  pinyin: 'Hénèi',
  region: '东南亚',
  tagline: '老城的摩托车流里，挑一条湖或一片旧街区反复走，不走南北一线。',
  href: '/places/vietnam/hanoi',
  trail: [T('目的地', '/'), T('东南亚'), T('越南', '/places/vietnam')],
  meta: { region: '东南亚', best: '10–12 月干爽', airports: 'HAN（内排）', stay: '3–4 晚' },
  officialLinks: [{ label: '越南国家旅游局', url: 'https://vietnam.travel/' }],
  status: 'live',
}

const hoiAn: CityEntry = {
  slug: 'hoi-an',
  nameZh: '会安',
  nameEn: 'Hoi An',
  pinyin: 'Huìān',
  region: '东南亚',
  tagline: '古镇清晨与夜晚是两个样子。住下来，白天再去海边或稻田。',
  href: '/places/vietnam/hoi-an',
  trail: [T('目的地', '/'), T('东南亚'), T('越南', '/places/vietnam')],
  meta: { region: '东南亚', best: '旱季更稳 · 秋留意积水', airports: 'DAD（岘港）+ 接驳', stay: '2–3 晚' },
  officialLinks: [{ label: '越南国家旅游局', url: 'https://vietnam.travel/' }],
  status: 'live',
}

const chiangMai: CityEntry = {
  slug: 'chiang-mai',
  nameZh: '清迈',
  nameEn: 'Chiang Mai',
  pinyin: 'Qīngmài',
  region: '东南亚',
  tagline: '古城围墙里的小店与寺庙。雨季留弹性，凉季适合久住。',
  href: '/places/thailand/chiang-mai',
  trail: [T('目的地', '/'), T('东南亚'), T('泰国', '/places/thailand')],
  meta: { region: '东南亚', best: '11–2 月凉季', airports: 'CNX', stay: '3–5 晚' },
  officialLinks: [
    { label: '泰国国家旅游局', url: 'https://www.tourismthailand.org/' },
    { label: '清迈机场', url: 'https://chiangmai.airportthai.co.th/' },
  ],
  status: 'live',
}

const bangkok: CityEntry = {
  slug: 'bangkok',
  nameZh: '曼谷',
  nameEn: 'Bangkok',
  pinyin: 'Màngǔ',
  region: '东南亚',
  tagline: '运河、市场与商场空调之间切换。热的时候少排露天点，不写跳岛清单。',
  href: '/places/thailand/bangkok',
  trail: [T('目的地', '/'), T('东南亚'), T('泰国', '/places/thailand')],
  meta: { region: '东南亚', best: '11–2 月', airports: 'BKK / DMK', stay: '3–4 晚' },
  officialLinks: [
    { label: '泰国国家旅游局', url: 'https://www.tourismthailand.org/' },
    { label: '素万那普机场', url: 'https://suvarnabhumi.airportthai.co.th/' },
  ],
  status: 'live',
}

const kualaLumpur: CityEntry = {
  slug: 'kuala-lumpur',
  nameZh: '吉隆坡',
  nameEn: 'Kuala Lumpur',
  pinyin: 'Jílóngpō',
  region: '东南亚',
  tagline: '与槟城不同节奏的首都：巴刹、清真寺与高楼。另写，不与槟城绑同一趟。',
  href: '/places/malaysia/kuala-lumpur',
  trail: [T('目的地', '/'), T('东南亚'), T('马来西亚', '/places/malaysia')],
  meta: { region: '东南亚', best: '全年 · 雨季留弹性', airports: 'KUL', stay: '2–3 晚' },
  officialLinks: [
    { label: '马来西亚旅游局', url: 'https://www.malaysia.travel/' },
    { label: '吉隆坡机场', url: 'https://www.malaysiaairports.com.my/' },
  ],
  status: 'live',
}

const macau: CityEntry = {
  slug: 'macau',
  nameZh: '澳门',
  nameEn: 'Macau',
  pinyin: 'Àomén',
  region: '东亚',
  tagline: '历史城区一天走得完。从香港联游，过夜更不赶。',
  href: '/places/macau',
  trail: [T('目的地', '/'), T('东亚')],
  meta: { region: '东亚', best: '秋冬', airports: 'MFM · 多经香港', stay: '1–2 晚联游' },
  officialLinks: [
    { label: '澳门特别行政区政府旅游局', url: 'https://www.macaotourism.gov.mo/zh-hans/' },
  ],
  status: 'live',
}

const singapore: CityEntry = {
  slug: 'singapore',
  nameZh: '新加坡',
  nameEn: 'Singapore',
  pinyin: 'Xīnjiāpō',
  region: '东南亚',
  tagline: '小贩中心、组屋区与海滨步道。地方小，更要按片区慢慢走。',
  href: '/places/singapore',
  trail: [T('目的地', '/'), T('东南亚')],
  meta: { region: '东南亚', best: '全年 · 午后阵雨', airports: 'SIN（樟宜）', stay: '3–4 晚' },
  officialLinks: [
    { label: '新加坡旅游局', url: 'https://www.visitsingapore.com/' },
    { label: '樟宜机场', url: 'https://www.changiairport.com/' },
  ],
  status: 'live',
}

const penang: LiveCity = {
  slug: 'penang',
  nameZh: '槟城',
  nameEn: 'Penang',
  tagline: '住乔治市。吃，店屋巷，不要赶环岛。',
  href: '/places/malaysia/penang',
  status: 'live',
}

export const COUNTRIES: DirectoryCountry[] = [
  {
    slug: 'japan',
    nameZh: '日本',
    nameEn: 'Japan',
    region: '东亚',
    lede: '东京、京都、大阪、福冈：各按片区住稳，不追「全国打卡」。',
    href: '/places/japan',
    cities: [tokyo, kyoto, osaka, fukuoka],
  },
  {
    slug: 'south-korea',
    nameZh: '韩国',
    nameEn: 'South Korea',
    region: '东亚',
    lede: '首尔、釜山、济州岛：三种完全不同的节奏，不绑成同一趟。',
    href: '/places/south-korea',
    cities: [seoul, busan, jeju],
  },
  {
    slug: 'taiwan',
    nameZh: '台湾',
    nameEn: 'Taiwan',
    region: '东亚',
    lede: '先写台北。台中、高雄另写，不承诺环岛行程。',
    href: '/places/taiwan',
    cities: [taipei],
  },
  {
    slug: 'vietnam',
    nameZh: '越南',
    nameEn: 'Vietnam',
    region: '东南亚',
    lede: '先写河内与会安。胡志明市另写，不把南北绑成一线。',
    href: '/places/vietnam',
    cities: [hanoi, hoiAn],
  },
  {
    slug: 'thailand',
    nameZh: '泰国',
    nameEn: 'Thailand',
    region: '东南亚',
    lede: '先写清迈与曼谷。海岛另写，不写跳岛清单。',
    href: '/places/thailand',
    cities: [chiangMai, bangkok],
  },
  {
    slug: 'malaysia',
    nameZh: '马来西亚',
    nameEn: 'Malaysia',
    region: '东南亚',
    lede: '先停槟城乔治市。吉隆坡另写，不把两城绑成必须同一趟。',
    href: '/places/malaysia',
    cities: [penang, kualaLumpur],
  },
]

/** Cities without a country page — linked directly. */
export const STANDALONE_CITIES: CityEntry[] = [macau, singapore]

/** All cities with a full content page (`CITY_CONTENT` / dedicated component). */
export const CONTENT_CITIES: CityEntry[] = [
  ...COUNTRIES.flatMap((c) => c.cities.filter((x): x is CityEntry => 'trail' in x)),
  ...STANDALONE_CITIES,
]

/** Directory entries still being written (placeholder pages). */
export const WRITING_CITIES: CityEntry[] = CONTENT_CITIES.filter((c) => c.status === 'writing')
