import { Link } from 'react-router-dom'
type Day = { day: string; body: string; time: string; start: string; return: string; links: { label: string; href: string }[] }
type Block = { title: string; note: string; days: Day[] }
type Props = { threeNights: Block; fiveNights: Block }
export function Itinerary({ threeNights, fiveNights }: Props) {
  return <section id="itinerary" className="mx-auto site-shell px-5 py-16 md:px-8 md:py-20">
    <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">慢行程</h2>
    <p className="mt-3 text-small text-ink-faint">先选晚数，再按街区安排吃饭。时长是本站建议的游览预算，不含交通和排队；路线依据见所链接的邻里及出行指南。</p>
    <div className="mt-10 divide-y divide-border border-y border-border">
      {[threeNights, fiveNights].map((block, i) => <details id={i === 0 ? 'plan-three' : 'plan-five'} key={block.title} className="group scroll-mt-40 py-1" open={i === 0}>
        <summary className="flex items-center justify-between gap-4 py-5"><span className="font-serif text-xl text-ink md:text-2xl">{block.title}</span><span aria-hidden="true" className="text-small text-ink-faint group-open:hidden">+</span><span aria-hidden="true" className="hidden text-small text-ink-faint group-open:inline">−</span></summary>
        <div className="pb-8"><p className="text-body text-ink-muted">{block.note}</p><ol className="mt-6 divide-y divide-border">
          {block.days.map((d, j) => <li id={`${i === 0 ? 'three' : 'five'}-day-${j + 1}`} key={d.day} className="scroll-mt-40 grid gap-3 py-6 md:grid-cols-[6rem_1fr] md:gap-6"><h3 className="font-zh text-xl text-accent">{d.day}</h3><div>
            <p className="text-body text-ink">{d.body}</p>
            <dl className="mt-4 grid gap-3 text-small text-ink-muted sm:grid-cols-2"><div className="sm:col-span-2"><dt className="font-semibold">时间安排</dt><dd className="mt-1 text-body">{d.time}</dd></div><div><dt className="font-semibold">从哪开始</dt><dd className="mt-1 text-body">{d.start}</dd></div><div><dt className="font-semibold">怎样结束</dt><dd className="mt-1 text-body">{d.return}</dd></div></dl>
            <div className="mt-3 flex flex-wrap gap-x-5">{d.links.map(l => <Link key={l.href} to={l.href} className="inline-flex min-h-11 items-center text-small text-accent underline underline-offset-4">{l.label} →</Link>)}</div>
          </div></li>)}
        </ol></div>
      </details>)}
    </div>
  </section>
}
