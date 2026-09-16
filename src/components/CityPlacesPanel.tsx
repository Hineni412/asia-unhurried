import { Link } from 'react-router-dom'
import { NeighborhoodCards } from './NeighborhoodCards'
import type { DayTrip, Neighborhood, Restaurant } from '../content/hongKong'
import type { StayGuide } from '../content/stay'

type Props = {
  neighborhoods: Neighborhood[]
  restaurants: Restaurant[]
  dayTrips: DayTrip[]
  /** Caveat line shown under the 再远一点 heading. */
  dayTripNote: string
  /** 片区决策比较；未写的城市不渲染该栏目。 */
  stay?: StayGuide
}

/** places tab: attraction browser + neighborhood walks + optional day trips. */
export function CityPlacesPanel({ neighborhoods, restaurants, dayTrips, dayTripNote, stay }: Props) {
  return (
    <>
      <NeighborhoodCards neighborhoods={neighborhoods} restaurants={restaurants} stay={stay} />
      <details id="day-trips" className="mx-auto site-shell px-5 py-16 md:px-8 md:py-20">
        <summary className="flex cursor-pointer items-center justify-between gap-5">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">再远一点</h2>
          <span className="text-small text-accent">展开周边方向 ＋</span>
        </summary>
        <p className="mt-3 text-small text-ink-faint">{dayTripNote}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dayTrips.map((d) => (
            <article key={d.direction} className="overflow-hidden rounded-2xl bg-sand/35">
              {d.image ? (
                <figure>
                  <img
                    src={d.image.src}
                    alt={d.image.alt}
                    className="aspect-[16/10] w-full object-cover"
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                  {d.image.credit ? (
                    <figcaption className="px-5 pt-2 text-note text-ink-faint">
                      {d.image.credit}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
              <div className="px-5 py-6">
                <h3 className="font-serif text-lg text-ink">{d.direction}</h3>
                {d.link ? (
                  <Link
                    to={d.link.to}
                    className="mt-3 inline-block text-small text-accent underline underline-offset-4"
                  >
                    {d.link.label} →
                  </Link>
                ) : null}
                <p className="mt-2 text-small text-ink-faint">{d.how}</p>
                <p className="mt-3 text-body text-ink-muted">{d.worth}</p>
              </div>
            </article>
          ))}
        </div>
      </details>
    </>
  )
}
