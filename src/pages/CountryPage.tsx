import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import type { DirectoryCountry } from '../content/directory'

export function CountryPage({ country }: { country: DirectoryCountry }) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto site-shell px-5 py-14 md:px-8 md:py-20">
            <p className="text-note font-medium tracking-[0.18em] text-ink-faint">
              <Link to="/" className="underline-offset-4 hover:text-ink hover:underline">
                目的地
              </Link>
              {' / '}
              {country.region}
            </p>
            <h1 className="display-title mt-3 font-zh text-accent">{country.nameZh}</h1>
            <p className="mt-1.5 font-serif text-xl text-ink md:text-2xl">{country.nameEn}</p>
            <p className="mt-5 max-w-xl font-serif text-[1.25rem] leading-[1.7] text-ink-muted md:text-[1.375rem] md:leading-[1.75]">
              {country.lede}
            </p>
          </div>
        </section>

        <section className="mx-auto site-shell px-5 py-16 md:px-8 md:py-20">
          <p className="eyebrow">Cities</p>
          <h2 className="mt-3 font-zh text-3xl md:text-4xl">城市</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {country.cities.map((city) => {
              const live = city.status === 'live'
              return (
                <li key={city.slug}>
                  <Link
                    to={city.href}
                    className={`group block rounded-2xl border p-6 transition-[border-color,box-shadow] hover:border-accent hover:shadow-[0_14px_32px_rgba(43,36,28,0.08)] md:p-7 ${
                      live ? 'border-border bg-card' : 'border-dashed border-border bg-sand/20'
                    }`}
                  >
                    <p className="text-note text-ink-faint">
                      {country.region} · {live ? '已上线' : '待写'}
                    </p>
                    <h3 className="mt-2 font-zh text-2xl text-ink group-hover:text-accent">
                      {city.nameZh}
                      <span className="ml-2 font-serif text-base text-ink-faint">{city.nameEn}</span>
                    </h3>
                    <p className="mt-4 text-body text-ink-muted">{city.tagline}</p>
                    <p className="mt-6 text-small font-medium text-accent">
                      {live ? '打开城市页 →' : '待写 · 查看写作规划 →'}
                    </p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}
