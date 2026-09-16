/** 首页「值得停下来的地方」精选卡——一行一座城，数组顺序即显示顺序。 */
export type FeaturedCity = {
  slug: string
  nameZh: string
  nameEn: string
  region: string
  href: string
  tagline: string
  /** 「出发前准备」链接下的一句说明。 */
  prepareNote: string
}

export const FEATURED_CITIES: FeaturedCity[] = [
  {
    slug: 'hong-kong',
    nameZh: '香港',
    nameEn: 'Hong Kong',
    region: '东亚',
    href: '/places/hong-kong',
    tagline: '选一侧住稳，用步行和渡轮代替追景点。',
    prepareNote: '证件、上网、支付与机场接驳，逐步准备。',
  },
  {
    slug: 'tokyo',
    nameZh: '东京',
    nameEn: 'Tokyo',
    region: '东亚',
    href: '/places/japan/tokyo',
    tagline: '先按片区住稳，再让地铁连接其余。巨型城市不追「全部」，一天一个方向就够。',
    prepareNote: '护照、Visit Japan Web、上网与到酒店的路线。',
  },
  {
    slug: 'penang',
    nameZh: '槟城',
    nameEn: 'Penang',
    region: '东南亚',
    href: '/places/malaysia/penang',
    tagline: '住乔治市。吃，店屋巷，不要赶环岛。',
    prepareNote: '护照、入境登记、上网与到酒店的路线。',
  },
  {
    slug: 'chiang-mai',
    nameZh: '清迈',
    nameEn: 'Chiang Mai',
    region: '东南亚',
    href: '/places/thailand/chiang-mai',
    tagline: '古城围墙里的小店与寺庙。雨季留弹性，凉季适合久住。',
    prepareNote: '护照、TDAC 入境卡、上网与接机安排。',
  },
]
