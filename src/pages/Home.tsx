import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AsiaMap } from '../components/AsiaMap'

export function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Asia · 不含中国大陆</p>
            <h1 className="display-title-en text-ink">
              Asia,
              <br />
              unhurried.
            </h1>
            <p className="font-zh text-3xl text-ink md:text-4xl">亚洲不疾不徐</p>
            <p className="max-w-md font-serif text-lg leading-relaxed text-ink-muted md:text-[1.25rem]">
              签证、支付、上网、交通，以及值得停下来的城市。
            </p>
            <div className="pt-2">
              <Link to="/places/hong-kong" className="btn-primary">
                先看香港
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <AsiaMap />
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">Places</h2>
            <p className="text-sm text-ink-faint">值得停下来的地方</p>
          </div>

          <Link
            to="/places/hong-kong"
            className="group grid gap-6 rounded-2xl border border-border bg-card p-6 no-underline transition hover:border-sand-deep sm:grid-cols-[1fr_auto] sm:p-8"
          >
            <div>
              <p className="eyebrow">东亚 · Wave 1</p>
              <h3 className="mt-3 font-zh text-2xl text-ink md:text-3xl">
                香港
                <span className="ml-3 font-serif text-lg text-ink-faint md:text-xl">Hong Kong</span>
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
                选一侧住稳，用步行和渡轮代替追景点。
              </p>
            </div>
            <p className="self-end text-sm font-medium text-accent group-hover:underline group-hover:underline-offset-4">
              打开城市页 →
            </p>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
