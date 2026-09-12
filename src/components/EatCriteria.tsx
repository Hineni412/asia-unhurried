type Criterion = { title: string; body: string }

type Props = {
  criteria: Criterion[]
  exclude: string
}

export function EatCriteria({ criteria, exclude }: Props) {
  return (
    <div className="mt-10">
      <p className="text-xs font-semibold tracking-[0.2em] text-ink-faint uppercase">
        入选标准
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {criteria.map((c) => (
          <li
            key={c.title}
            title={c.body}
            className="rounded-full border border-border bg-paper px-3.5 py-1.5 text-sm text-ink-muted"
          >
            {c.title}
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-2xl text-xs leading-relaxed text-ink-faint">{exclude}</p>
    </div>
  )
}
