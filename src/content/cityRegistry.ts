import { hongKong } from './hongKong'
import { penang } from './penang'
import { CITY_CONTENT } from './cities'
import type { Restaurant } from './hongKong'

export type CityInfo = { nameZh: string; restaurants: Restaurant[] }

const registry: Record<string, CityInfo> = {
  'hong-kong': {
    nameZh: hongKong.name,
    restaurants: hongKong.categories.flatMap((c) => c.restaurants),
  },
  penang: {
    nameZh: penang.name,
    restaurants: penang.categories.flatMap((c) => c.restaurants),
  },
}

for (const [slug, content] of Object.entries(CITY_CONTENT)) {
  registry[slug] = {
    nameZh: content.city.nameZh,
    restaurants: content.categories.flatMap((c) => c.restaurants),
  }
}

/** Display name and restaurant list for an attraction's city slug. */
export function cityInfo(city: string): CityInfo {
  return registry[city] ?? { nameZh: city, restaurants: [] }
}
