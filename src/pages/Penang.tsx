import { CityPage } from '../components/CityPage'
import { CityHero } from '../components/CityHero'
import { CityOverview } from '../components/CityOverview'
import { CityPlacesPanel } from '../components/CityPlacesPanel'
import { CityEatPanel } from '../components/CityEatPanel'
import { PracticalNotes } from '../components/PracticalNotes'
import { Itinerary } from '../components/Itinerary'
import { SafetyGuide } from '../components/SafetyGuide'
import { attractions } from '../content/attractions'
import { penangGuide, penangSafety } from '../content/penangGuide'
import { countRestaurants, penang as pg } from '../content/penang'
import { cityImages } from '../content/cities/photoData'

const pgSpots = attractions.filter((a) => a.city === 'penang')

export function Penang() {
  const shopCount = countRestaurants()

  return (
    <CityPage
      hero={
        <CityHero
          nameEn={pg.nameEn}
          nameZh={pg.name}
          pinyin="Bīnchéng · George Town"
          trail={[
            { label: '目的地', to: '/' },
            { label: '东南亚' },
            { label: '马来西亚', to: '/places/malaysia' },
          ]}
          linger={pg.tagline}
          imageSrc={cityImages['hero-penang']?.src}
          imageAlt={cityImages['hero-penang']?.alt ?? '乔治市：店屋街与骑楼'}
          meta={{
            region: '东南亚',
            best: '全年湿热 · 雨季留弹性',
            airports: 'PEN',
            stay: '3–5 晚',
          }}
        />
      }
      panels={{
        overview: <CityOverview city={pg} spots={pgSpots} shopCount={shopCount} />,
        places: (
          <CityPlacesPanel
            neighborhoods={pg.neighborhoods}
            restaurants={pg.categories.flatMap((c) => c.restaurants)}
            dayTrips={pg.dayTrips}
            dayTripNote="升旗山看天气和官网；巴士班次当天早上看。一趟只加一件，不要环岛打卡。"
          />
        ),
        eat: <CityEatPanel city={pg} shopCount={shopCount} />,
        practical: (
          <PracticalNotes guide={penangGuide} />
        ),
        itinerary: (
          <Itinerary threeNights={pg.itinerary.threeNights} fiveNights={pg.itinerary.fiveNights} />
        ),
        safety: <SafetyGuide guide={penangSafety} />,
      }}
    />
  )
}
