import type { Restaurant } from '../content/hongKong'

type Props = { restaurant: Restaurant }

export function RestaurantCard({ restaurant: r }: Props) {
  return (
    <article id={r.id} className="scroll-mt-28 border-b border-border py-8 last:border-0">
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h4 className="font-zh text-xl text-ink md:text-2xl">{r.name}</h4>
        {r.nameEn && <span className="text-sm text-ink-faint">{r.nameEn}</span>}
      </header>

      <p className="mt-2 text-sm text-ink-faint">{r.neighborhood}</p>

      {r.queueNote && (
        <p className="mt-3 text-sm text-queue">
          <span className="font-medium">排队 · </span>
          {r.queueNote}
        </p>
      )}

      <div className="mt-5">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">点什么</p>
        <ul className="mt-2 space-y-1 text-[15px] text-ink-muted">
          {r.order.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>

      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted">{r.whyLinger}</p>

      <details className="mt-5 group">
        <summary className="inline-flex items-center gap-2 text-sm text-ink-faint hover:text-ink">
          <span className="underline decoration-border underline-offset-4 group-open:text-ink">
            实用 / 核实
          </span>
          <span className="text-xs opacity-60 group-open:hidden">展开</span>
          <span className="hidden text-xs opacity-60 group-open:inline">收起</span>
        </summary>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted">
          <p>{r.practical}</p>
          <p className="text-xs text-ink-faint">
            {r.verifiedAt}
            <span className="mx-1.5">·</span>
            {r.sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 && <span className="mx-1">·</span>}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-2 hover:text-accent"
                >
                  {s.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </details>
    </article>
  )
}
