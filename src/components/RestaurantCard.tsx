import type { Restaurant } from '../content/hongKong'
import { Link } from 'react-router-dom'

type Props = { restaurant: Restaurant }

export function RestaurantCard({ restaurant: r }: Props) {
  return (
    <article id={r.id} className="restaurant-entry scroll-mt-40 grid gap-5 border-b border-border py-7 last:border-0 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.65fr)] md:gap-9 md:py-8">
      <div className="min-w-0">
        <h4 className="font-zh text-2xl leading-snug text-ink">{r.name}</h4>
        {r.nameEn && <p className="mt-2 text-small text-ink-muted">{r.nameEn}</p>}
        <p className="mt-3 text-small text-ink-muted">{r.location?.address ?? r.neighborhood}</p>
        {r.location && <div className="mt-3 space-y-2 text-small text-ink-muted">
          <p>{r.location.connection}</p>
          <div className="flex flex-wrap gap-x-4">
            <a className="inline-flex min-h-11 items-center text-accent underline underline-offset-4" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${r.name} ${r.location.address}`)}`} target="_blank" rel="noopener noreferrer">地图查找此店 ↗</a>
            {r.location.areaId && <Link className="inline-flex min-h-11 items-center text-accent underline underline-offset-4" to={`?tab=places#area-${r.location.areaId}`}>搭配邻里散步 →</Link>}
            {!r.location.areaId && <Link className="inline-flex min-h-11 items-center text-accent underline underline-offset-4" to="?tab=practical#guide-transit">单独安排交通 →</Link>}
          </div>
        </div>}
        {r.queueNote && (
          <p className="mt-3 text-small text-queue">
            <span className="font-medium">排队 · </span>{r.queueNote}
          </p>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-small font-semibold text-accent">点什么</p>
        <ul className="mt-2 space-y-1 text-body text-ink-muted">
          {r.order.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      <p className="mt-3 text-body text-ink-muted">{r.whyLinger}</p>

      <details className="mt-4 group">
        <summary className="inline-flex min-h-11 items-center gap-2 text-small text-ink-muted hover:text-ink">
          <span className="underline decoration-border underline-offset-4 group-open:text-ink">
            到店须知与来源
          </span>
          <span aria-hidden="true" className="group-open:hidden">＋</span>
          <span aria-hidden="true" className="hidden group-open:inline">−</span>
        </summary>
        <div className="mt-2 space-y-3 text-small text-ink-muted">
          <p>{r.practical}</p>
          {r.location && <p className="text-note text-ink-faint">地址核对：2026-09-12 · <a href={r.location.source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{r.location.source.label}</a>。地图按店名与地址搜索，请核对门牌和分店；此日期不代表营业时间已重新确认。</p>}
          <p className="text-note text-ink-faint">
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
      </div>
    </article>
  )
}
