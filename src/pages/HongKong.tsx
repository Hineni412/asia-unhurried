import { CityPage } from '../components/CityPage'
import { CityHero } from '../components/CityHero'
import { NeighborhoodCards } from '../components/NeighborhoodCards'
import { EatCriteria } from '../components/EatCriteria'
import { CategorySection } from '../components/CategorySection'
import { PracticalNotes } from '../components/PracticalNotes'
import { Itinerary } from '../components/Itinerary'
import { VerifyTable } from '../components/VerifyTable'
import { countRestaurants, hongKong as hk } from '../content/hongKong'

export function HongKong() {
  const shopCount = countRestaurants()
  const overviewParas = hk.overview.slice(0, 4)

  return (
    <CityPage
      hero={
        <CityHero
          nameEn={hk.nameEn}
          nameZh={hk.name}
          pinyin="Xiānggǎng"
          breadcrumb="Places / 东亚"
          linger={hk.tagline}
          imageSrc="/images/hk-hero-harbour.png?v=5"
          imageAlt="手绘维多利亚港：渡轮、码头与天际线"
          meta={{
            region: '东亚',
            best: '秋–冬为主',
            airports: 'HKG',
            stay: '4–5 晚',
          }}
        />
      }
      panels={{
        overview: (
          <>
            <section className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
              <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">Essentials</h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                {hk.essentials.map((e) => (
                  <div key={e.title}>
                    <h3 className="font-serif text-lg text-ink">{e.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{e.body}</p>
                    {'links' in e &&
                      e.links?.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-sm text-accent underline underline-offset-4"
                        >
                          {l.label}
                        </a>
                      ))}
                  </div>
                ))}
              </div>
            </section>

            <section id="overview" className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
              <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">总览</h2>
              <div className="prose-narrow mt-10 space-y-5">
                {overviewParas.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[16px] leading-[1.75] text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            <section id="getting-there" className="mx-auto max-w-5xl px-5 pb-8 md:px-8">
              <details className="group border-y border-border">
                <summary className="flex items-center justify-between gap-4 py-5">
                  <span className="font-serif text-xl text-ink md:text-2xl">怎么到 / 怎么动</span>
                  <span className="text-sm text-ink-faint group-open:hidden">+</span>
                  <span className="hidden text-sm text-ink-faint group-open:inline">−</span>
                </summary>
                <div className="prose-narrow space-y-4 pb-8 text-[15px] leading-relaxed text-ink-muted">
                  {hk.gettingThere.intro.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                  {hk.gettingThere.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-accent underline underline-offset-4"
                    >
                      {l.label}
                    </a>
                  ))}
                  <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-ink-faint">
                    {hk.gettingThere.verifyReminders.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </section>

            <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
              <details className="group border-y border-border">
                <summary className="flex items-center justify-between py-5">
                  <span className="font-serif text-xl text-ink md:text-2xl">相关与来源</span>
                  <span className="text-sm text-ink-faint group-open:hidden">+</span>
                  <span className="hidden text-sm text-ink-faint group-open:inline">−</span>
                </summary>
                <div className="space-y-6 pb-8 text-sm text-ink-muted">
                  <ul className="space-y-2">
                    {hk.relatedGuides.map((g) => (
                      <li key={g} className="text-ink-faint">
                        {g}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs leading-relaxed text-ink-faint">
                    {hk.sourcesNote.map((n) => (
                      <p key={n} className="mt-1 first:mt-0">
                        {n}
                      </p>
                    ))}
                  </div>
                </div>
              </details>
            </section>
          </>
        ),
        places: (
          <>
            <NeighborhoodCards neighborhoods={hk.neighborhoods} />
            <section id="day-trips" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
              <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">慢半日</h2>
              <p className="mt-3 text-sm text-ink-faint">离岛和澳门受天气、船期影响；当天早上看公告。</p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {hk.dayTrips.map((d) => (
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
                          <figcaption className="px-5 pt-2 text-[10px] text-ink-faint">
                            {d.image.credit}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : null}
                    <div className="px-5 py-6">
                      <h3 className="font-serif text-lg text-ink">{d.direction}</h3>
                      <p className="mt-2 text-sm text-ink-faint">{d.how}</p>
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{d.worth}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        ),
        eat: (
          <section id="eat" className="border-y border-border bg-sand/20">
            <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
              <div className="max-w-2xl">
                <p className="eyebrow">Eat</p>
                <h2 className="mt-3 font-zh text-4xl text-ink md:text-5xl">吃</h2>
                <p className="mt-6 text-[16px] leading-relaxed text-ink-muted">{hk.eatIntro}</p>
                <p className="mt-4 text-xs text-ink-faint">{shopCount} 家到店 · 品类图示意，非到店实拍</p>
              </div>

              <EatCriteria criteria={hk.eatCriteria} exclude={hk.eatExclude} />

              <div className="mt-12 divide-y divide-border border-y border-border">
                <details className="group">
                  <summary className="flex items-center justify-between py-4 text-sm text-ink-muted hover:text-ink">
                    <span>怎么点 · 避雷 · 慢吃节奏 · 忌口</span>
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </summary>
                  <div className="grid gap-8 pb-8 sm:grid-cols-2">
                    <div>
                      <h3 className="font-serif text-lg text-ink">怎么点</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted">
                        {hk.howToOrder.map((x) => (
                          <li key={x.slice(0, 16)}>{x}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-ink">避雷</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted">
                        {hk.avoid.map((x) => (
                          <li key={x.slice(0, 16)}>{x}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="sm:col-span-2">
                      <h3 className="font-serif text-lg text-ink">慢吃节奏</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{hk.eatRhythm}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <h3 className="font-serif text-lg text-ink">忌口 / 过敏</h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {hk.allergies.map((x) => (
                          <li
                            key={x}
                            className="rounded-full border border-border bg-paper px-3 py-1 text-xs text-ink-muted"
                          >
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                {hk.categories.map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className="rounded-full border border-border bg-paper px-3.5 py-1.5 text-xs text-ink-muted transition hover:border-accent hover:text-ink"
                  >
                    {c.title}
                    <span className="ml-1.5 text-ink-faint">{c.restaurants.length}</span>
                  </a>
                ))}
              </div>

              <div className="mt-4">
                {hk.categories.map((c) => (
                  <CategorySection key={c.id} category={c} />
                ))}
              </div>
            </div>
          </section>
        ),
        practical: (
          <PracticalNotes
            blocks={hk.practical}
            links={hk.practicalLinks}
            localTransit={hk.localTransit}
          />
        ),
        itinerary: (
          <Itinerary threeNights={hk.itinerary.threeNights} fiveNights={hk.itinerary.fiveNights} />
        ),
        verify: <VerifyTable rows={hk.verifyTable} />,
      }}
    />
  )
}
