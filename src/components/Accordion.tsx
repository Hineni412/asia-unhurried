import type { ReactNode } from 'react'

type Item = {
  id: string
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

type Props = {
  items: Item[]
}

export function Accordion({ items }: Props) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.id} id={item.id} className="group scroll-mt-28" open={item.defaultOpen}>
          <summary className="flex items-center justify-between gap-4 py-5 text-left">
            <span className="font-serif text-xl text-ink md:text-2xl">{item.title}</span>
            <span className="shrink-0 text-sm text-ink-faint group-open:hidden">+</span>
            <span className="hidden shrink-0 text-sm text-ink-faint group-open:inline">−</span>
          </summary>
          <div className="pb-8 pt-1">{item.children}</div>
        </details>
      ))}
    </div>
  )
}
