import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AsiaMap } from '../components/AsiaMap'
import { COUNTRIES, STANDALONE_CITIES } from '../content/directory'
import { CITY_CONTENT } from '../content/cities'
import { FEATURED_CITIES } from '../content/featured'

type DirectoryEntry =
  | { kind: 'country'; country: (typeof COUNTRIES)[number] }
  | { kind: 'city'; city: (typeof STANDALONE_CITIES)[number] }

const directoryEntries: DirectoryEntry[] = [
  ...COUNTRIES.map((c) => ({ kind: 'country' as const, country: c })),
  ...STANDALONE_CITIES.map((city) => ({ kind: 'city' as const, city })),
].sort((a, b) => {
  const order = (r: string) => (r === '东亚' ? 0 : 1)
  const ra = a.kind === 'country' ? a.country.region : a.city.region
  const rb = b.kind === 'country' ? b.country.region : b.city.region
  return order(ra) - order(rb)
})

export function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto grid site-shell items-center gap-12 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Asia · 不含中国大陆</p>
            <h1 className="display-title-en text-ink">
              Asia,
              <br />
              unhurried.
            </h1>
            <p className="font-zh text-3xl text-ink md:text-4xl">亚洲不疾不徐</p>
            <p className="max-w-md font-serif text-lg leading-relaxed text-ink-muted md:text-[1.375rem]">
              签证、支付、上网、交通，以及值得停下来的城市。
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <a href="#places" className="btn-primary">
                全部目的地
                <span aria-hidden="true">↓</span>
              </a>
              {FEATURED_CITIES.slice(0, 2).map((c, i) => (
                <Link
                  key={c.slug}
                  to={c.href}
                  className={`text-small font-medium underline-offset-4 hover:underline ${
                    i === 0 ? 'text-accent' : 'text-ink-muted'
                  }`}
                >
                  {i === 0 ? `先看${c.nameZh}` : c.nameZh} →
                </Link>
              ))}
              <Link
                to="/stay"
                className="text-small font-medium text-ink-muted underline-offset-4 hover:underline"
              >
                怎么选住处 →
              </Link>
            </div>
          </div>
          <AsiaMap />
        </section>

        <section id="places" className="mx-auto scroll-mt-20 site-shell px-5 pb-24 md:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">Places</p>
              <h2 className="mt-2 font-zh text-3xl tracking-tight text-ink md:text-4xl">
                值得停下来的地方
              </h2>
            </div>
            <p className="text-small text-ink-faint">{Object.keys(CITY_CONTENT).length + 2} 个城市已上线</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURED_CITIES.map((c) => (
              <article
                key={c.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 no-underline transition hover:border-sand-deep sm:p-8"
              >
                <p className="eyebrow">{c.region}</p>
                <h3 className="mt-3 font-zh text-2xl text-ink md:text-3xl">
                  <Link to={c.href} className="hover:text-accent">{c.nameZh}</Link>
                  <span className="ml-3 font-serif text-lg text-ink-faint md:text-xl">{c.nameEn}</span>
                </h3>
                <p className="mt-4 max-w-md text-body text-ink-muted">{c.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-small">
                  <Link
                    to={`${c.href}?tab=practical#guide-documents`}
                    className="font-medium text-accent underline underline-offset-4"
                  >
                    {c.nameZh}出发前准备 →
                  </Link>
                  <Link to={c.href} className="text-ink-muted underline underline-offset-4">
                    了解这座城 →
                  </Link>
                </div>
                <p className="mt-3 text-note text-ink-faint">{c.prepareNote}</p>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-zh text-2xl text-ink">全部目的地</h3>
              <p className="text-note text-ink-faint">与精选同一标准：店单、街区散步、行程与安全齐备</p>
            </div>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {directoryEntries.map((entry) =>
                entry.kind === 'country' ? (
                  <li
                    key={entry.country.slug}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <p className="text-note text-ink-faint">{entry.country.region}</p>
                    <Link
                      to={entry.country.href}
                      className="mt-2 block font-zh text-xl text-ink hover:text-accent"
                    >
                      {entry.country.nameZh}
                      <span className="ml-2 font-serif text-base text-ink-faint">
                        {entry.country.nameEn}
                      </span>
                    </Link>
                    <p className="mt-3 flex flex-wrap gap-2">
                      {entry.country.cities.map((city) => (
                        <Link
                          key={city.slug}
                          to={city.href}
                          className="rounded-full border border-border px-3 py-1 text-small text-ink-muted transition hover:border-sand-deep hover:text-ink"
                        >
                          {city.nameZh}
                        </Link>
                      ))}
                    </p>
                  </li>
                ) : (
                  <li
                    key={entry.city.slug}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <p className="text-note text-ink-faint">{entry.city.region}</p>
                    <Link
                      to={entry.city.href}
                      className="mt-2 block font-zh text-xl text-ink hover:text-accent"
                    >
                      {entry.city.nameZh}
                      <span className="ml-2 font-serif text-base text-ink-faint">
                        {entry.city.nameEn}
                      </span>
                    </Link>
                    <p className="mt-2 text-small text-ink-muted">{entry.city.tagline}</p>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
