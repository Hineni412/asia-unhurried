import { EatCriteria } from './EatCriteria'
import { FoodCategories } from './FoodCategories'
import type { EatCategory } from '../content/hongKong'

type EatCity = {
  eatIntro: string
  eatCriteria: { title: string; body: string }[]
  eatExclude: string
  howToOrder: string[]
  avoid: string[]
  eatRhythm: string
  allergies: string[]
  categories: EatCategory[]
}

type Props = { city: EatCity; shopCount: number }

/** eat tab: intro, criteria, ordering notes, category chips and shop lists. */
export function CityEatPanel({ city, shopCount }: Props) {
  return (
    <section id="eat" className="border-y border-border bg-sand/20">
      <div className="mx-auto site-shell px-5 py-10 md:px-8 md:py-14">
        <div className="max-w-2xl">
          <p className="eyebrow">Eat</p>
          <h2 className="mt-3 font-zh text-4xl text-ink md:text-5xl">吃</h2>
          <p className="mt-4 text-body text-ink-muted">{city.eatIntro}</p>
          <p className="mt-4 text-note text-ink-faint">
            {shopCount} 家到店 · 品类图示意，非到店实拍
          </p>
        </div>

        <EatCriteria criteria={city.eatCriteria} exclude={city.eatExclude} />

        <div className="mt-6 divide-y divide-border border-y border-border">
          <details className="group">
            <summary className="flex items-center justify-between py-4 text-small text-ink-muted hover:text-ink">
              <span>怎么点 · 避雷 · 慢吃节奏 · 忌口</span>
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </summary>
            <div className="grid gap-8 pb-8 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-lg text-ink">怎么点</h3>
                <ul className="mt-3 space-y-2 text-small leading-relaxed text-ink-muted">
                  {city.howToOrder.map((x) => (
                    <li key={x.slice(0, 16)}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg text-ink">避雷</h3>
                <ul className="mt-3 space-y-2 text-small leading-relaxed text-ink-muted">
                  {city.avoid.map((x) => (
                    <li key={x.slice(0, 16)}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2">
                <h3 className="font-serif text-lg text-ink">慢吃节奏</h3>
                <p className="mt-3 text-small leading-relaxed text-ink-muted">{city.eatRhythm}</p>
              </div>
              <div className="sm:col-span-2">
                <h3 className="font-serif text-lg text-ink">忌口 / 过敏</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {city.allergies.map((x) => (
                    <li
                      key={x}
                      className="rounded-full border border-border bg-paper px-3 py-1 text-note text-ink-muted"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {city.categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-border bg-paper px-3.5 py-1.5 text-note text-ink-muted transition hover:border-accent hover:text-ink"
            >
              {c.title}
              <span className="ml-1.5 text-ink-faint">{c.restaurants.length}</span>
            </a>
          ))}
        </div>

        <FoodCategories categories={city.categories} />
      </div>
    </section>
  )
}
