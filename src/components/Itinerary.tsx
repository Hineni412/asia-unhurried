type Day = { day: string; body: string }

type Block = {
  title: string
  note: string
  days: Day[]
}

type Props = {
  threeNights: Block
  fiveNights: Block
}

export function Itinerary({ threeNights, fiveNights }: Props) {
  return (
    <section id="itinerary" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
      <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">慢行程</h2>
      <p className="mt-3 text-sm text-ink-faint">示例节奏，按需展开。</p>

      <div className="mt-10 divide-y divide-border border-y border-border">
        <details className="group py-1">
          <summary className="flex items-center justify-between gap-4 py-5">
            <span className="font-serif text-xl text-ink md:text-2xl">{threeNights.title}</span>
            <span className="text-sm text-ink-faint group-open:hidden">+</span>
            <span className="hidden text-sm text-ink-faint group-open:inline">−</span>
          </summary>
          <div className="pb-8">
            <p className="text-[15px] text-ink-muted">{threeNights.note}</p>
            <ol className="mt-6 space-y-4">
              {threeNights.days.map((d) => (
                <li key={d.day} className="flex gap-4 text-[15px]">
                  <span className="w-14 shrink-0 font-medium text-accent">{d.day}</span>
                  <span className="text-ink-muted">{d.body}</span>
                </li>
              ))}
            </ol>
          </div>
        </details>

        <details className="group py-1">
          <summary className="flex items-center justify-between gap-4 py-5">
            <span className="font-serif text-xl text-ink md:text-2xl">{fiveNights.title}</span>
            <span className="text-sm text-ink-faint group-open:hidden">+</span>
            <span className="hidden text-sm text-ink-faint group-open:inline">−</span>
          </summary>
          <div className="pb-8">
            <p className="prose-narrow text-[15px] leading-relaxed text-ink-muted">
              {fiveNights.note}
            </p>
          </div>
        </details>
      </div>
    </section>
  )
}
