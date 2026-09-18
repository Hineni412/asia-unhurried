import { CityPage } from '../components/CityPage'
import { CityHero } from '../components/CityHero'
import { CityOverview } from '../components/CityOverview'
import { CityPlacesPanel } from '../components/CityPlacesPanel'
import { CityEatPanel } from '../components/CityEatPanel'
import { CityStayPanel } from '../components/CityStayPanel'
import { STAY_MAPS } from '../content/stayMap'
import { PracticalNotes } from '../components/PracticalNotes'
import { Itinerary } from '../components/Itinerary'
import { SafetyGuide } from '../components/SafetyGuide'
import { attractions } from '../content/attractions'
import { hongKongGuide, hongKongSafety } from '../content/hongKongGuide'
import { countRestaurants, hongKong as hk } from '../content/hongKong'
import { cityImages } from '../content/cities/photoData'

const hkSpots = attractions.filter((a) => a.city === 'hong-kong')

export function HongKong() {
  const shopCount = countRestaurants()

  return (
    <CityPage
      checkedAt={hk.verifiedAt}
      hero={
        <CityHero
          nameEn={hk.nameEn}
          nameZh={hk.name}
          pinyin="Xiānggǎng"
          trail={[
            { label: '目的地', to: '/' },
            { label: '东亚' },
          ]}
          linger={hk.tagline}
          imageSrc={cityImages['hero-hong-kong']?.src}
          imageAlt={cityImages['hero-hong-kong']?.alt ?? '维多利亚港：渡轮、码头与天际线'}
          meta={{
            region: '东亚',
            best: '秋–冬为主',
            airports: 'HKG',
            stay: '4–5 晚',
          }}
        />
      }
      panels={{
        overview: <CityOverview city={hk} spots={hkSpots} shopCount={shopCount} />,
        places: (
          <CityPlacesPanel
            neighborhoods={hk.neighborhoods}
            restaurants={hk.categories.flatMap((c) => c.restaurants)}
            dayTrips={hk.dayTrips}
            dayTripNote="离岛和澳门受天气、船期影响；当天早上看公告。"
            stay={hk.stay}
          />
        ),
        stay: (
          <CityStayPanel stay={hk.stay} neighborhoods={hk.neighborhoods} map={STAY_MAPS['hong-kong']} />
        ),
        eat: <CityEatPanel city={hk} shopCount={shopCount} />,
        practical: (
          <PracticalNotes guide={hongKongGuide} />
        ),
        itinerary: (
          <Itinerary threeNights={hk.itinerary.threeNights} fiveNights={hk.itinerary.fiveNights} />
        ),
        safety: <SafetyGuide guide={hongKongSafety} />,
      }}
    />
  )
}
