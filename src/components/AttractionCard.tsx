import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Img } from './Img'
import { attractionPath, attractionTypes, photosFor, type Attraction } from '../content/attractions'

export function AttractionCard({ place }: { place: Attraction }) {
  const location = useLocation()
  const navigate = useNavigate()
  const photos = photosFor(place)
  const fromList = new URLSearchParams(location.search).get('tab') === 'places'
  return <article className="attraction-card" id={`spot-${place.id}`}>
    <Link to={attractionPath(place)} state={location.state} onClick={event => {
      if (fromList && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey && event.button === 0) {
        event.preventDefault()
        navigate(attractionPath(place), { state: { browseReturn: { url: location.pathname + location.search, scrollY: window.scrollY } } })
      }
    }} className="attraction-card-link">
      {photos[0] ? (
        <div className="attraction-card-photo"><Img src={photos[0].src} alt={photos[0].alt} width={900} height={600} loading="lazy" /><span className="attraction-photo-count">{photos.length} 张实拍</span></div>
      ) : (
        <div className="attraction-card-photo attraction-card-photo--empty" aria-hidden="true" />
      )}
      <div className="attraction-card-copy">
        <p className="text-note text-ink-faint">{attractionTypes.find(type => type.id === place.type)?.label} · {place.area}</p>
        <h3 className="mt-2 font-zh text-2xl">{place.name}</h3>
        <p className="mt-1 text-note text-ink-faint">{place.nameLocal}</p>
        <p className="attraction-card-intro mt-3 text-small text-ink-muted">{place.intro}</p>
        <div className="attraction-card-bottom"><span className={`reservation-label reservation-label--${place.booking.status}`}>{place.booking.label}</span><span className="text-note text-ink-faint">{place.duration}</span></div>
      </div>
    </Link>
  </article>
}
