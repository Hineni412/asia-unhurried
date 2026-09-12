import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function Malaysia() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
            <p className="text-[0.7rem] font-medium tracking-[0.18em] text-ink-faint">
              Places / 东南亚
            </p>
            <h1 className="display-title mt-3 font-zh text-accent">马来西亚</h1>
            <p className="mt-1.5 font-serif text-xl text-ink md:text-2xl">Malaysia</p>
            <p className="mt-6 max-w-xl font-serif text-[1.15rem] leading-[1.7] text-ink-muted md:text-[1.25rem]">
              先停槟城乔治市。吉隆坡另写，不把两城绑成必须同一趟。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <p className="eyebrow">Cities</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink md:text-4xl">城市</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            <li>
              <Link
                to="/places/malaysia/penang"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 no-underline transition hover:border-sand-deep sm:p-8"
              >
                <p className="eyebrow">东南亚 · Wave 1</p>
                <h3 className="mt-3 font-zh text-2xl text-ink">
                  槟城
                  <span className="ml-3 font-serif text-lg text-ink-faint">Penang</span>
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                  住乔治市。吃，店屋巷，不要赶环岛。
                </p>
                <p className="mt-6 text-sm font-medium text-accent group-hover:underline group-hover:underline-offset-4">
                  打开城市页 →
                </p>
              </Link>
            </li>
            <li>
              <div
                className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-sand/20 p-6 sm:p-8"
                aria-disabled="true"
              >
                <p className="eyebrow text-ink-faint">东南亚 · 待写</p>
                <h3 className="mt-3 font-zh text-2xl text-ink-muted">
                  吉隆坡
                  <span className="ml-3 font-serif text-lg text-ink-faint">Kuala Lumpur</span>
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-faint">
                  城市页尚未写。地图上仍是 soon，没有链接。
                </p>
                <p className="mt-6 text-sm text-ink-faint">待写</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
