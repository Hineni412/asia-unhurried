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
import { cityImages } from '../content/cities/photoData'
import type { CityContent } from '../content/cities/types'

export function DirectoryCityPage({ content }: { content: CityContent }) {
  const { city } = content
  const spots = attractions.filter((a) => a.city === city.slug)
  const restaurants = content.categories.flatMap((c) => c.restaurants)
  const shopCount = restaurants.length
  const heroImage = cityImages[`hero-${city.slug}`]

  return (
    <CityPage
      checkedAt={content.checkedAt}
      hero={
        <CityHero
          nameEn={city.nameEn}
          nameZh={city.nameZh}
          pinyin={city.pinyin}
          trail={city.trail}
          linger={city.tagline}
          imageSrc={heroImage?.src}
          imageAlt={heroImage?.alt}
          meta={city.meta}
        />
      }
      panels={{
        overview: <CityOverview city={content} spots={spots} shopCount={shopCount} />,
        places: (
          <CityPlacesPanel
            neighborhoods={content.neighborhoods}
            restaurants={restaurants}
            dayTrips={content.dayTrips}
            dayTripNote={content.dayTripNote}
            stay={content.stay}
          />
        ),
        stay: content.stay ? (
          <CityStayPanel stay={content.stay} neighborhoods={content.neighborhoods} map={STAY_MAPS[city.slug]} />
        ) : undefined,
        eat: <CityEatPanel city={content} shopCount={shopCount} />,
        practical: <PracticalNotes guide={content.guide} />,
        itinerary: (
          <Itinerary
            threeNights={content.itinerary.threeNights}
            fiveNights={content.itinerary.fiveNights}
          />
        ),
        safety: <SafetyGuide guide={content.safety} />,
      }}
    />
  )
}
