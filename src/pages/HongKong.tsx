import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CityHero } from '../components/CityHero'
import { NeighborhoodCards } from '../components/NeighborhoodCards'
import { EatCriteria } from '../components/EatCriteria'
import { CategorySection } from '../components/CategorySection'
import { PracticalNotes } from '../components/PracticalNotes'
import { Itinerary } from '../components/Itinerary'
import { VerifyTable } from '../components/VerifyTable'
import { countRestaurants, hongKong as hk } from '../content/hongKong'

const toc = [
  { href: '#overview', label: '总览' },
  { href: '#neighborhoods', label: '邻里' },
  { href: '#eat', label: '吃' },
  { href: '#practical', label: '实用' },
  { href: '#itinerary', label: '行程' },
]

export function HongKong() {
  const shopCount = countRestaurants()
  const overviewParas = hk.overview.slice(0, 4)

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
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

      <nav className="sticky top-14 z-40 overflow-x-auto border-b border-border/70 bg-paper/90 backdrop-blur-md md:top-[4.5rem]">
        <div className="mx-auto flex max-w-5xl gap-1 px-5 py-2.5 text-sm whitespace-nowrap md:px-8">
          {toc.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className="rounded-full px-3.5 py-1.5 text-ink-muted transition hover:bg-sand hover:text-ink"
            >
              {t.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        {/* Essentials — compact row */}
        <section className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-serif text-2xl tracking-tight text-ink md:text-3xl">Essentials</h2>
          <p className="mt-2 text-sm text-ink-faint">落地先弄清这几件。</p>
          <ul className="mt-8 grid gap-8 sm:grid-cols-3">
            {hk.essentials.map((item) => (
              <li key={item.title}>
                <p className="eyebrow">{item.title}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="overview" className="mx-auto max-w-5xl scroll-mt-28 px-5 pb-16 md:px-8 md:pb-24">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">总览</h2>
          <div className="prose-narrow mt-8 space-y-5 text-[17px] leading-[1.75] text-ink-muted">
            {overviewParas.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-sm text-ink-faint">{hk.note}</p>
        </section>

        <NeighborhoodCards neighborhoods={hk.neighborhoods} />

        <section className="mx-auto max-w-5xl px-5 pb-16 md:px-8 md:pb-20">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">出城</h2>
          <p className="mt-3 text-sm text-ink-faint">城市太密时的出口；不必全去。</p>
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
                  <h3 className="font-zh text-lg text-ink">{d.direction}</h3>
                  <p className="mt-2 text-xs tracking-wide text-ink-faint">{d.how}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{d.worth}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="eat" className="mx-auto max-w-5xl scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">吃</h2>
          <p className="prose-narrow mt-4 text-[17px] leading-relaxed text-ink-muted">{hk.eatIntro}</p>
          <p className="mt-3 text-sm text-ink-faint">
            {shopCount} 家店 · 核实 {hk.verifiedAt}
          </p>
          <p className="prose-narrow mt-6 text-[15px] leading-relaxed text-ink-muted">{hk.eatRhythm}</p>
          <EatCriteria criteria={hk.eatCriteria} exclude={hk.eatExclude} />
          <div className="mt-4">
            {hk.categories.map((c) => (
              <CategorySection key={c.id} category={c} />
            ))}
          </div>
        </section>

        <div id="practical" className="scroll-mt-28">
          <PracticalNotes
            blocks={hk.practical}
            links={hk.practicalLinks}
            localTransit={hk.localTransit}
          />
        </div>

        <Itinerary threeNights={hk.itinerary.threeNights} fiveNights={hk.itinerary.fiveNights} />

        <VerifyTable rows={hk.verifyTable} />
      </main>
      <Footer />
    </div>
  )
}
