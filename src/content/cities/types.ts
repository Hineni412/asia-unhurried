import type {
  DayTrip,
  EatCategory,
  Essential,
  MetaField,
  Neighborhood,
  SourceLink,
} from '../hongKong'
import type { SafetyGuideData, TravelGuide } from '../travelGuide'
import type { CityEntry } from '../directory'
import type { StayGuide } from '../stay'

export type ItineraryDay = {
  day: string
  body: string
  time: string
  start: string
  return: string
  links: { label: string; href: string }[]
}

export type ItineraryBlock = {
  title: string
  note: string
  days: ItineraryDay[]
}

/**
 * Complete city content — same shape as the hongKong/penang objects plus
 * directory entry, guide and safety data. Do not invent shops, prices, or
 * ratings: restaurants and tickets carry verifiedAt + sources, and volatile
 * details point back to official pages.
 */
export type CityContent = {
  city: CityEntry
  checkedAt: string
  meta: MetaField[]
  essentials: Essential[]
  overview: string[]
  gettingThere: {
    intro: string[]
    links: SourceLink[]
    verifyReminders: string[]
  }
  neighborhoods: Neighborhood[]
  /** 住哪一带的片区决策比较；未写的城市不渲染该栏目。 */
  stay?: StayGuide
  dayTrips: DayTrip[]
  /** Caveat line under the 再远一点 day-trips heading. */
  dayTripNote: string
  eatIntro: string
  eatCriteria: { title: string; body: string }[]
  eatExclude: string
  categories: EatCategory[]
  howToOrder: string[]
  avoid: string[]
  eatRhythm: string
  allergies: string[]
  guide: TravelGuide
  itinerary: { threeNights: ItineraryBlock; fiveNights: ItineraryBlock }
  safety: SafetyGuideData
  relatedGuides: string[]
  sourcesNote: string[]
}
