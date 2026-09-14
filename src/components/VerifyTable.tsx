import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { TravelGuide } from '../content/travelGuide'

export function VerifyTable({ items }: { items: TravelGuide['checklist'] }) {
  const [checked, setChecked] = useState<string[]>([])
  const { pathname } = useLocation()
  return <section id="departure-checklist" className="scroll-mt-36 border-t border-sand-deep pt-9">
    <p className="eyebrow">One last look</p><h3 className="mt-3 text-2xl">出门前，再核一次</h3>
    <p className="mt-3 text-small text-ink-muted">逐项确认；拿不准的地方，回到对应步骤。勾选仅用于本次检查，离开此分页或刷新后重置。</p>
    <p className="mt-4 text-small font-medium text-accent" role="status">已确认 {checked.length} / {items.length} 项</p>
    <ul className="mt-4 divide-y divide-border">{items.map((item) => <li key={item.id} className="flex items-start gap-3 py-4">
      <label className="flex flex-1 cursor-pointer items-start gap-3 text-small"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-accent" checked={checked.includes(item.id)} onChange={(e) => setChecked(e.target.checked ? [...checked, item.id] : checked.filter((id) => id !== item.id))} /><span className={checked.includes(item.id) ? 'text-ink-faint line-through' : 'text-ink-muted'}>{item.text}</span></label>
      <Link to={{ pathname, search: item.topic.startsWith('safety-') ? '?tab=safety' : '?tab=practical', hash: `#${item.topic.startsWith('safety-') ? item.topic : `guide-${item.topic}`}` }} className="shrink-0 pt-0.5 text-note text-accent underline underline-offset-4" aria-label={`查看步骤：${item.text}`}>查看</Link>
    </li>)}</ul>
  </section>
}
