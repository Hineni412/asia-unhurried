import { Link, useLocation } from 'react-router-dom'
import type { Neighborhood } from '../content/hongKong'
import type { StayGuide } from '../content/stay'
import { shortNames } from '../content/neighborhoodNames'

type Props = { stay: StayGuide; neighborhoods: Neighborhood[] }

/** 「住哪一带」的片区决策比较：预算感受、交通锚点、吃饭半径与取舍，不用展开即可横向比。 */
export function StayCompare({ stay, neighborhoods }: Props) {
  const location = useLocation()
  const byId = new Map(neighborhoods.map((n) => [n.id, n]))
  return (
    <div className="mt-10">
      <p className="max-w-3xl text-body text-ink-muted">{stay.intro}</p>
      <p className="mt-6 max-w-3xl border-l-2 border-accent bg-accent-soft/50 px-5 py-4 text-small leading-relaxed text-ink">
        {stay.budgetNote}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {stay.anchors.map((a) => (
          <div key={a.title}>
            <h3 className="font-serif text-lg text-ink">{a.title}</h3>
            <p className="mt-2 text-small leading-relaxed text-ink-muted">{a.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 divide-y divide-border border-y border-border">
        {stay.areas.map((a) => (
          <article
            key={a.id}
            id={`stay-area-${a.id}`}
            className="grid scroll-mt-40 gap-5 py-7 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-10"
          >
            <div>
              <h3 className="font-zh text-2xl text-ink">{a.title}</h3>
              <p className="mt-2 text-small leading-relaxed text-ink-muted">{a.suitsIf}</p>
              {a.skipIf ? (
                <p className="mt-2 text-note leading-relaxed text-ink-faint">别选：{a.skipIf}</p>
              ) : null}
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {a.neighborhoodIds?.map((id) => {
                  const n = byId.get(id)
                  return n ? (
                    <Link
                      key={id}
                      to={{ pathname: location.pathname, search: '?tab=places', hash: `#area-${id}` }}
                      className="text-small text-accent underline underline-offset-4"
                    >
                      散步：{shortNames[id] ?? n.title} →
                    </Link>
                  ) : null
                })}
                {a.sources?.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-small text-ink-muted underline underline-offset-4"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
            <dl className="grid content-start gap-5 sm:grid-cols-2">
              {(
                [
                  ['预算感受', a.budgetFeel, a.band ? `常见约 ¥${a.band.low}–${a.band.high}/晚 · ` : ''],
                  ['交通锚点', a.transit, ''],
                  ['吃饭半径', a.food, ''],
                  ['要接受的', a.tradeoff, ''],
                ] as const
              ).map(([label, value, prefix]) => (
                <div key={label}>
                  <dt className="text-note text-ink-faint">{label}</dt>
                  <dd className="mt-1.5 text-small leading-relaxed text-ink-muted">
                    {prefix ? <span className="text-ink">{prefix}</span> : null}
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-4 text-note text-ink-faint">
        核实日期 {stay.checkedAt}；常见区间为片区中档双人间参考，以订房平台实时价为准。不定具体酒店：按片区名与价格上限筛选，再按「出行指南 · 住宿与入住」逐项核对。
      </p>
    </div>
  )
}
