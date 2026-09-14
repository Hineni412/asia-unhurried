import { Fragment, useState, type CSSProperties, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Item = {
  id: string
  title: string
  description?: string
  children: ReactNode
  defaultOpen?: boolean
}

type Props = {
  items: Item[]
  variant?: 'list' | 'cards'
}

function CardMark({ id }: { id: string }) {
  const topic = id.replace('guide-', '')
  const paths: Record<string, ReactNode> = {
    documents: <><rect x="7" y="3" width="26" height="34" rx="3" /><circle cx="20" cy="16" r="7" /><path d="M13 16h14M20 9c-4 4-4 10 0 14M20 9c4 4 4 10 0 14M14 29h12" /></>,
    mobile: <><path d="M12 3h13l7 7v27H8V7a4 4 0 0 1 4-4Z" /><rect x="13" y="17" width="14" height="13" rx="2" /><path d="M20 17v13M13 23h14" /></>,
    payment: <><rect x="2" y="7" width="36" height="26" rx="4" /><rect x="8" y="14" width="10" height="8" rx="2" /><path d="M13 14v8M8 18h10M8 27h7m5 0h4m5 0h3M28 13q4 4 0 8m4-10q6 6 0 12" /></>,
    stay: <><rect x="5" y="7" width="30" height="27" rx="4" /><circle cx="16" cy="19" r="4" /><path d="M20 19h10m-4 0v4M10 29h9" /></>,
    packing: <><rect x="8" y="10" width="24" height="25" rx="4" /><path d="M15 10V5h10v5M15 16v13m10-13v13M13 35v3m14-3v3" /></>,
    arrival: <><path d="m5 7 11 10 15-6 3 3-11 10 5 7-3 2-8-6-8 3-2-3 6-5-10-12ZM5 37h30" /></>,
    transit: <><rect x="8" y="3" width="24" height="29" rx="6" /><path d="M8 20h24M20 9v11M13 36l4-4m10 4-4-4M14 26h1m10 0h1" /><path d="M13 9h14" /></>,
    daily: <><path d="M4 10h25v20H12l-8 6ZM12 4h24v20h-7M10 17h12m-12 6h8" /></>,
    weather: <><path d="M4 20a16 16 0 0 1 32 0ZM20 20v12a4 4 0 0 1-8 0M20 2v3M12 20c0-9 4-15 8-15s8 6 8 15" /></>,
    departure: <><path d="M5 7h20v28H5ZM14 20h23m-7-7 7 7-7 7M10 29h1" /></>,
  }
  return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[topic]}</svg>
}

export function Accordion({ items, variant = 'list' }: Props) {
  const { pathname, search } = useLocation()
  const [openId, setOpenId] = useState<string | null>(null)
  if (variant === 'cards') return <div className="guide-topic-grid">
    {items.map((item, index) => <Fragment key={item.id}>
      <Link
        id={`card-${item.id}`}
        to={{ pathname, search, hash: `#${item.id}` }}
        aria-expanded={openId === item.id}
        aria-controls={item.id}
        className={`guide-topic-card guide-topic-card--${item.id.replace('guide-', '')}`}
        style={{ order: index * 2 }}
      >
        <span className="guide-topic-card-mark"><CardMark id={item.id} /></span>
        <span className="guide-topic-card-title font-serif text-xl text-ink">{item.title}</span>
        <span className="guide-topic-card-description text-small text-ink-muted">{item.description}</span>
        <span className="guide-topic-card-footer text-note"><span>{openId === item.id ? '继续阅读' : '查看准备步骤'}</span><span aria-hidden="true">↗</span></span>
      </Link>
      <details
        id={item.id}
        name="practical-guide-topic"
        className="guide-topic-detail group"
        style={{ '--detail-order': index * 2 + 1, '--detail-pair-order': Math.floor(index / 2) * 4 + 3, '--detail-triple-order': Math.floor(index / 3) * 6 + 5 } as CSSProperties}
        onToggle={event => {
          const detail = event.currentTarget
          setOpenId(previous => detail.open ? item.id : previous === item.id ? null : previous)
          if (!detail.open && detail.contains(document.activeElement)) {
            const card = document.getElementById(`card-${item.id}`)
            card?.focus({ preventScroll: true })
            card?.scrollIntoView({ block: 'nearest' })
          }
        }}
      >
        <summary className="flex items-center justify-between gap-4 py-5 text-left">
          <span className="font-serif text-2xl text-ink">{item.title}</span>
          <span className="shrink-0 text-note text-accent">收起 −</span>
        </summary>
        <div className="pb-8 pt-2">{item.children}</div>
      </details>
    </Fragment>)}
  </div>
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.id} id={item.id} className="group scroll-mt-36" open={item.defaultOpen}>
          <summary className="flex items-center justify-between gap-4 py-5 text-left">
            <span><span className="block font-serif text-xl text-ink md:text-2xl">{item.title}</span>{item.description && <span className="mt-2 block text-small text-ink-faint">{item.description}</span>}</span>
            <span className="shrink-0 text-small text-ink-faint group-open:hidden">+</span>
            <span className="hidden shrink-0 text-small text-ink-faint group-open:inline">−</span>
          </summary>
          <div className="pb-8 pt-1">{item.children}</div>
        </details>
      ))}
    </div>
  )
}
