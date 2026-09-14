import { Link, useLocation } from 'react-router-dom'
import type { SafetyGuideData } from '../content/travelGuide'
import { Accordion } from './Accordion'

export function SafetyGuide({ guide }: { guide: SafetyGuideData }) {
  const { pathname } = useLocation()
  return <section className="guide-page mx-auto site-shell px-5 py-12 md:px-8 md:py-16">
    <p className="eyebrow">{guide.city} · Safety & help</p>
    <h2 className="mt-4 text-3xl md:text-4xl">安心出门，遇事知道找谁。</h2>
    <p className="mt-4 max-w-3xl text-body text-ink-muted">{guide.emergencyNote}</p>
    <p className="mt-2 text-note text-ink-faint">联系方式与资料核对：{guide.checkedAt} · 下方电话可点击拨打，建议出发前保存此页截图。</p>
    <section id="safety-contacts" className="mt-8 scroll-mt-36 rounded-2xl border border-accent/30 bg-card p-5 md:p-7">
      <h3 className="text-xl">现在需要帮助</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">{guide.contacts.map((c) => <div key={c.dial} className="border-t border-border pt-4">
        <p className="text-small font-medium">{c.name}</p>
        <a href={`tel:${c.dial}`} className={`mt-2 inline-block break-all font-sans text-2xl font-semibold ${c.urgent ? 'text-accent' : 'text-ink'}`} aria-label={`拨打${c.name} ${c.number}`}>{c.number}</a>
        <p className="mt-2 text-body text-ink-muted">{c.use}</p>
        <a href={c.source.url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-note text-ink-faint underline underline-offset-4">{c.source.label} ↗</a>
      </div>)}</div>
      <div className="mt-6 border-t border-border pt-5">
        <p className="text-small font-medium">可以直接给工作人员看</p>
        {guide.phrases.map((p) => <div key={p.en} className="mt-4"><p className="text-small text-ink-muted">{p.zh}</p><p lang="en" className="mt-1 text-base leading-7">{p.en}</p></div>)}
        <p className="mt-4 text-note text-ink-faint">说清所在位置、最近地标、伤者人数和可回拨号码。纯流量卡不等于可拨打普通电话；拨不通时，立即请酒店、机场或身旁工作人员代拨。</p>
      </div>
    </section>
    <nav aria-label="遇事处理目录" className="mt-8 flex flex-wrap gap-2">{guide.scenarios.map((s) => <Link key={s.id} to={{ pathname, search: '?tab=safety', hash: `#${s.id}` }} className="rounded-full border border-border px-3 py-2 text-note text-ink-muted hover:border-accent">{s.title} ↓</Link>)}</nav>
    <section id="safety-preparation" className="mt-12 scroll-mt-36">
      <p className="eyebrow">Before you go</p><h3 className="mt-3 text-2xl">出发前，和同行的人一起看</h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">{guide.preparation.map((p, i) => <li key={p} className="flex gap-3 text-body text-ink-muted"><span className="text-accent">{String(i + 1).padStart(2, '0')}</span><span>{p}</span></li>)}</ul>
    </section>
    <section className="mt-12">
      <p className="eyebrow">Know the place</p><h3 className="mt-3 text-2xl">在{guide.city}，重点留意这些</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">{guide.alerts.map((a) => <article key={a.title} className="rounded-xl bg-sand/60 p-5"><h4 className="text-lg leading-snug">{a.title}</h4><p className="mt-3 text-body text-ink-muted">{a.body}</p><a href={a.source.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-note text-ink-faint underline underline-offset-4">{a.source.label} ↗</a></article>)}</div>
    </section>
    <section className="mt-12"><p className="eyebrow">If something happens</p><h3 className="mb-6 mt-3 text-2xl">按发生的事情，找到下一步</h3>
      <Accordion items={guide.scenarios.map((s) => ({ id: s.id, title: s.title, children: <><ol className="list-decimal space-y-4 pl-5 text-body text-ink-muted">{s.steps.map((step) => <li key={step}>{step}</li>)}</ol><p className="mt-5 flex flex-wrap gap-4 text-note text-ink-faint">{s.sources.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="underline underline-offset-4">{l.label} ↗</a>)}</p></> }))} />
    </section>
    <Link to={{ pathname, search: '?tab=practical', hash: '#departure-checklist' }} className="mt-10 inline-block text-small text-accent underline underline-offset-4">回到出发检查清单 →</Link>
  </section>
}
