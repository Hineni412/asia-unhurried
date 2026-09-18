import { Link } from 'react-router-dom'
import { Img } from './Img'
import type {
  EatCategory,
  Essential,
  MetaField,
  Neighborhood,
  SourceLink,
} from '../content/hongKong'
import type { Attraction } from '../content/attractions'
import { shortNames } from '../content/neighborhoodNames'
import { AttractionCard } from './AttractionCard'

type ItineraryBlock = {
  title: string
  note: string
  days: { day: string }[]
}

type CityContent = {
  essentials: Essential[]
  overview: string[]
  meta: MetaField[]
  gettingThere: {
    intro: string[]
    links: SourceLink[]
    verifyReminders: string[]
  }
  neighborhoods: Neighborhood[]
  categories: EatCategory[]
  itinerary: { threeNights: ItineraryBlock; fiveNights: ItineraryBlock }
  eatIntro: string
  relatedGuides: string[]
  sourcesNote: string[]
}

type Props = {
  city: CityContent
  spots: Attraction[]
  shopCount: number
}

function PreviewHeader({ title, to, linkLabel }: { title: string; to: string; linkLabel: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h3 className="font-zh text-2xl text-ink md:text-3xl">{title}</h3>
      <Link to={to} className="text-small text-accent underline underline-offset-4">
        {linkLabel} →
      </Link>
    </div>
  )
}

export function CityOverview({ city, spots, shopCount }: Props) {
  return (
    <>
      <section className="mx-auto site-shell px-5 py-12 md:px-8 md:py-16">
        <p className="eyebrow">Essentials</p>
        <h2 className="mt-3 font-zh text-3xl tracking-tight text-ink md:text-4xl">先安排三件事</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {city.essentials.map((e) => (
            <div key={e.title}>
              <h3 className="font-serif text-lg text-ink">{e.title}</h3>
              <p className="mt-3 text-body text-ink-muted">{e.body}</p>
              <div className="flex flex-wrap gap-x-5">
                {e.action && (
                  <Link
                    to={e.action.to}
                    className="inline-flex min-h-11 items-center text-small text-accent underline underline-offset-4"
                  >
                    {e.action.label} →
                  </Link>
                )}
                {e.links?.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-small text-accent underline underline-offset-4"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="overview" className="mx-auto site-shell px-5 py-12 md:px-8 md:py-16">
        <h2 className="font-zh text-3xl tracking-tight text-ink md:text-4xl">总览</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,44rem)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-5">
            {city.overview.map((p) => (
              <p key={p.slice(0, 24)} className="text-body text-ink-muted">
                {p}
              </p>
            ))}
          </div>
          <aside className="self-start rounded-2xl border border-border bg-card p-6">
            <dl className="divide-y divide-border/70">
              {city.meta.map((f) => (
                <div key={f.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-note text-ink-faint">{f.label}</dt>
                  <dd className="mt-1 text-small leading-relaxed text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto site-shell border-t border-border/70 px-5 py-12 md:px-8 md:py-16">
        <PreviewHeader title="看点速览" to="?tab=places" linkLabel="全部看点与街区" />
        <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-x-7 xl:grid-cols-4">
          {spots.map((place) => (
            <AttractionCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      <section className="mx-auto site-shell px-5 py-12 md:px-8 md:py-16">
        <PreviewHeader
          title="住哪一带"
          to="?tab=places#where-to-stay"
          linkLabel="比较街区与散步"
        />
        <div className="mt-6 divide-y divide-border border-y border-border">
          {city.neighborhoods.map((n) => (
            <Link
              key={n.id}
              to={`?tab=places#area-${n.id}`}
              className="group grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-4 py-4 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:gap-6"
            >
              <span className="block h-16 w-20 overflow-hidden rounded-lg bg-sand sm:h-[4.5rem] sm:w-28">
                {n.image && (
                  <Img
                    src={n.image.src}
                    alt={n.image.alt}
                    width={280}
                    height={180}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                )}
              </span>
              <span className="min-w-0">
                <span className="block font-zh text-xl text-ink group-hover:text-accent">
                  {shortNames[n.id] ?? n.title}
                </span>
                <span className="mt-1 block text-small leading-snug text-ink-muted">
                  {n.suited}
                </span>
              </span>
              <span className="hidden text-small whitespace-nowrap text-accent sm:block">
                散步路线 →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto site-shell px-5 py-12 md:px-8 md:py-16">
        <PreviewHeader
          title="吃"
          to="?tab=eat"
          linkLabel={`全部 ${shopCount} 家到店`}
        />
        <p className="mt-4 max-w-2xl text-small text-ink-muted">{city.eatIntro}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {city.categories.map((c) => (
            <Link
              key={c.id}
              to={`?tab=eat#${c.id}`}
              className="rounded-full border border-border bg-paper px-3.5 py-1.5 text-note text-ink-muted transition hover:border-accent hover:text-ink"
            >
              {c.title}
              <span className="ml-1.5 text-ink-faint">{c.restaurants.length}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto site-shell px-5 py-12 md:px-8 md:py-16">
        <PreviewHeader title="行程" to="?tab=itinerary" linkLabel="展开每天安排" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {(
            [
              [city.itinerary.threeNights, '#plan-three'],
              [city.itinerary.fiveNights, '#plan-five'],
            ] as const
          ).map(([block, anchor]) => (
            <Link
              key={anchor}
              to={`?tab=itinerary${anchor}`}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-sand-deep"
            >
              <p className="font-zh text-xl text-ink group-hover:text-accent">{block.title}</p>
              <p className="mt-2 text-small leading-relaxed text-ink-muted">{block.note}</p>
              <p className="mt-4 text-note text-ink-faint">共 {block.days.length} 天 →</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="getting-there" className="mx-auto site-shell px-5 py-12 md:px-8 md:py-16">
        <h3 className="font-zh text-2xl text-ink md:text-3xl">怎么到 / 怎么动</h3>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,44rem)_minmax(0,20rem)] lg:gap-14">
          <div className="space-y-4 text-body text-ink-muted">
            {city.gettingThere.intro.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
              <Link
                to="?tab=practical#guide-arrival"
                className="text-small font-medium text-accent underline underline-offset-4"
              >
                从机场到酒店，查看完整步骤 →
              </Link>
              {city.gettingThere.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-small text-accent underline underline-offset-4 sm:min-h-0"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
          <aside className="self-start rounded-2xl bg-sand/35 p-6">
            <p className="text-small font-semibold text-ink">出发前再核对</p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-small leading-relaxed text-ink-muted">
              {city.gettingThere.verifyReminders.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto site-shell px-5 pt-4 pb-14 md:px-8">
        <details className="group border-y border-border" open>
          <summary className="flex items-center justify-between py-5">
            <span className="font-serif text-xl text-ink md:text-2xl">相关与来源</span>
            <span className="text-small text-ink-faint group-open:hidden">+</span>
            <span className="hidden text-small text-ink-faint group-open:inline">−</span>
          </summary>
          <div className="space-y-6 pb-8 text-small text-ink-muted">
            <ul className="space-y-2">
              {city.relatedGuides.map((g) => (
                <li key={g} className="text-ink-faint">
                  {g}
                </li>
              ))}
            </ul>
            <div className="text-note leading-relaxed text-ink-faint">
              {city.sourcesNote.map((n) => (
                <p key={n} className="mt-1 first:mt-0">
                  {n}
                </p>
              ))}
            </div>
          </div>
        </details>
      </section>
    </>
  )
}
