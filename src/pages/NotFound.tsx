import { Link, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { COUNTRIES, STANDALONE_CITIES } from '../content/directory'

export function NotFound() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto site-shell px-5 py-16 md:px-8 md:py-24">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 font-zh text-4xl text-ink md:text-5xl">这一页不存在</h1>
          <p className="mt-5 max-w-2xl text-body leading-relaxed text-ink-muted">
            <span className="font-serif text-ink">{pathname}</span> 没有对应页面——可能链接已改版或拼写有误。从下面的目的地继续：
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link to="/" className="btn-primary">
              回首页
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/stay" className="text-small font-medium text-ink-muted underline underline-offset-4 hover:underline">
              怎么选住处 →
            </Link>
          </div>
        </section>

        <section className="mx-auto site-shell px-5 pb-20 md:px-8">
          <h2 className="font-zh text-2xl text-ink">全部目的地</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-2xl border border-border bg-card p-5">
              <Link to="/places/hong-kong" className="font-zh text-xl text-ink hover:text-accent">
                香港<span className="ml-2 font-serif text-base text-ink-faint">Hong Kong</span>
              </Link>
              <Link to="/places/malaysia/penang" className="mt-3 block font-zh text-xl text-ink hover:text-accent">
                槟城<span className="ml-2 font-serif text-base text-ink-faint">Penang</span>
              </Link>
            </li>
            {COUNTRIES.map((c) => (
              <li key={c.slug} className="rounded-2xl border border-border bg-card p-5">
                <Link to={c.href} className="font-zh text-xl text-ink hover:text-accent">
                  {c.nameZh}
                  <span className="ml-2 font-serif text-base text-ink-faint">{c.nameEn}</span>
                </Link>
                <p className="mt-3 flex flex-wrap gap-2">
                  {c.cities.map((city) => (
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
            ))}
            {STANDALONE_CITIES.map((c) => (
              <li key={c.slug} className="rounded-2xl border border-border bg-card p-5">
                <Link to={c.href} className="font-zh text-xl text-ink hover:text-accent">
                  {c.nameZh}
                  <span className="ml-2 font-serif text-base text-ink-faint">{c.nameEn}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
