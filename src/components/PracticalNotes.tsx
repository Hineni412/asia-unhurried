import { Link, useLocation } from 'react-router-dom'
import { Img } from './Img'
import { useEffect, useRef, useState } from 'react'
import type { GuideTopic, TravelGuide } from '../content/travelGuide'
import { Accordion } from './Accordion'
import { VerifyTable } from './VerifyTable'

const stages = [
  { id: 'before', label: '出发前', note: '证件、网络、钱和住处，先安排妥当。' },
  { id: 'arrival', label: '落地第一小时', note: '连上网，拿好行李，再去住处。' },
  { id: 'during', label: '在当地生活', note: '交通、吃饭与天气，按当天的需要查。' },
  { id: 'return', label: '离开前', note: '退房、返程和剩余套餐，再检查一次。' },
] as const

function TopicContent({ topic }: { topic: GuideTopic }) {
  const { pathname } = useLocation()
  return (
    <div className="space-y-7">
      <div className="border-l-2 border-accent pl-4">
        <p className="text-note font-medium text-accent">先选方案</p>
        <p className="mt-2 text-body text-ink">{topic.recommendation}</p>
      </div>
      {topic.choices && <dl className="grid gap-4 sm:grid-cols-2">{topic.choices.map((choice) => (
        <div key={choice.title} className="rounded-xl bg-sand/60 p-4">
          <dt className="text-small font-medium">{choice.title}</dt>
          <dd className="mt-2 text-small text-ink-muted">{choice.body}</dd>
        </div>
      ))}</dl>}
      <ol className="space-y-6">{topic.steps.map((step, index) => (
        <li key={step.title} className="flex gap-3.5">
          <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-sand-deep font-serif text-small">{index + 1}</span>
          <div className="min-w-0">
            <h4 className="font-sans text-body font-semibold leading-7">{step.title}</h4>
            <p className="mt-1 text-body text-ink-muted">{step.body}</p>
          </div>
        </li>
      ))}</ol>
      {topic.purchase && <div className="rounded-xl border border-sand-deep bg-card p-5">
        <p className="text-note text-ink-faint">购买与办理</p>
        <h4 className="mt-2 text-lg leading-snug">{topic.purchase.name}</h4>
        <p className="mt-3 text-small text-ink-muted">{topic.purchase.detail}</p>
        <a className="mt-4 inline-block text-small font-medium text-accent underline underline-offset-4" href={topic.purchase.url} target="_blank" rel="noreferrer">打开官方产品／办理页 ↗</a>
        {topic.purchase.taobaoQuery && <p className="mt-3 text-note text-ink-faint">想提前邮寄到家：<a href={`https://s.taobao.com/search?q=${encodeURIComponent(topic.purchase.taobaoQuery)}`} target="_blank" rel="noreferrer" className="underline underline-offset-4">淘宝搜索「{topic.purchase.taobaoQuery}」↗</a>。这是搜索入口，店铺与商品尚未核验；请按上面的规格逐项确认。</p>}
        <p className="mt-4 border-t border-border pt-4 text-small text-ink-muted"><span className="font-medium text-ink">给客服的话：</span>{topic.purchase.ask}</p>
      </div>}
      {topic.images?.map((picture) => <figure key={picture.src} className="overflow-hidden rounded-xl border border-border bg-card">
        <a href={picture.src} target="_blank" rel="noreferrer" aria-label={`放大图片：${picture.alt}`} className="block cursor-zoom-in">
          <Img src={picture.src} width={picture.width} height={picture.height} alt={picture.alt} loading="lazy" className="max-h-[30rem] w-full object-contain" />
        </a>
        <figcaption className="border-t border-border p-4 text-note text-ink-muted">{picture.caption} <span className="text-ink-faint">点击图片放大。截图：{picture.capturedAt} · </span><a href={picture.source.url} target="_blank" rel="noreferrer" className="underline underline-offset-4">{picture.source.label} ↗</a></figcaption>
      </figure>)}
      <dl className="space-y-3 rounded-xl bg-sand/50 p-5 text-small">
        <div><dt className="font-medium">做到这里就完成了</dt><dd className="mt-1 text-ink-muted">{topic.done}</dd></div>
        <div><dt className="font-medium">如果没办成</dt><dd className="mt-1 text-ink-muted">{topic.fallback}</dd></div>
      </dl>
      {topic.safety && <p className="text-small text-ink-muted">{topic.safety.text}{' '}<Link to={{ pathname, search: '?tab=safety', hash: `#${topic.safety.target}` }} className="text-accent underline underline-offset-4">查看安全与求助 →</Link></p>}
      <p className="flex flex-wrap gap-x-4 gap-y-2 text-note text-ink-faint"><span>核对依据</span>{topic.sources.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-accent">{s.label} ↗</a>)}</p>
    </div>
  )
}

export function PracticalNotes({ guide }: { guide: TravelGuide }) {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentTopic, setCurrentTopic] = useState(guide.topics[0].id)
  const pageRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const currentLabel = currentTopic === 'departure-checklist' ? '出发检查清单' : guide.topics.find(t => t.id === currentTopic)?.title

  useEffect(() => {
    const root = pageRef.current
    const header = document.querySelector('header')
    const tabs = document.getElementById('city-tabs')
    if (!root || !header || !tabs) return
    const measure = () => root.style.setProperty('--guide-chrome-height', `${header.getBoundingClientRect().height + tabs.getBoundingClientRect().height}px`)
    measure()
    const resize = new ResizeObserver(measure)
    resize.observe(header)
    resize.observe(tabs)
    return () => resize.disconnect()
  }, [])

  useEffect(() => {
    if (menuOpen) return
    let frame = 0
    const update = () => {
      frame = 0
      const root = pageRef.current
      if (!root) return
      const chrome = parseFloat(getComputedStyle(root).getPropertyValue('--guide-chrome-height')) || 128
      const readingLine = chrome + (window.innerWidth < 1024 ? 80 : 36)
      let active = guide.topics[0].id
      let latestTop = -Infinity
      for (const topic of guide.topics) {
        const detail = document.getElementById(`guide-${topic.id}`)
        const section = detail?.matches('[open]') ? detail : document.getElementById(`card-guide-${topic.id}`)
        const top = section?.getBoundingClientRect().top ?? Infinity
        if (top <= readingLine + 2 && top > latestTop + 1) {
          active = topic.id
          latestTop = top
        }
      }
      if ((document.getElementById('departure-checklist')?.getBoundingClientRect().top ?? Infinity) <= readingLine + 2) active = 'departure-checklist'
      setCurrentTopic(active)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const resize = new ResizeObserver(schedule)
    if (pageRef.current) resize.observe(pageRef.current)
    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [guide, menuOpen])

  function chooseTopic(target: string) {
    setMenuOpen(false)
    requestAnimationFrame(() => {
      const section = document.getElementById(target)
      const focusTarget = section?.querySelector<HTMLElement>('summary') ?? section
      if (focusTarget) {
        if (focusTarget.tagName !== 'SUMMARY') focusTarget.tabIndex = -1
        focusTarget.focus({ preventScroll: true })
      }
    })
  }

  return (
    <section ref={pageRef} id="practical" className="guide-page guide-with-directory mx-auto site-shell px-5 py-12 md:px-8 md:py-16">
      <p className="eyebrow">{guide.city} · Before you go</p>
      <h2 className="mt-4 text-3xl md:text-4xl">把日常安排好，再慢慢出发。</h2>
      <p className="mt-5 max-w-2xl text-body text-ink-muted">{guide.intro}</p>
      <p className="mt-3 text-note text-ink-faint">适用：{guide.scope} · 资料核对 {guide.checkedAt}。价格为核对时参考，出发前按文末清单复核。</p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-small">
        <Link to={{ pathname, search: '?tab=practical', hash: '#departure-checklist' }} className="font-medium text-accent underline underline-offset-4">已经准备好？做最后检查 ↓</Link>
        <Link to={{ pathname, search: '?tab=safety' }} className="text-ink-muted underline underline-offset-4">紧急电话与安全准备 →</Link>
      </div>
      <div className="guide-layout mt-10 border-t border-border pt-8">
        <nav aria-label="出行指南目录" className="guide-directory mb-7 lg:mb-0" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); menuButtonRef.current?.focus() } }}>
          <button ref={menuButtonRef} type="button" aria-expanded={menuOpen} aria-controls="guide-directory-items" onClick={() => setMenuOpen(!menuOpen)} className="flex min-h-13 w-full items-center justify-between gap-3 border-y border-border bg-paper py-3 text-left text-small lg:hidden">
            <span className="min-w-0 truncate">目录 · {currentLabel}</span><span className="shrink-0 text-accent">{menuOpen ? '收起 −' : '展开 ＋'}</span>
          </button>
          <div id="guide-directory-items" className={`guide-directory-items ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <p className="mb-4 hidden text-note text-ink-faint lg:block">按这次旅程的顺序</p>
          <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:block lg:space-y-6">{stages.map((stage, i) => <div key={stage.id}>
            <Link to={{ pathname, search: '?tab=practical', hash: `#stage-${stage.id}` }} onClick={() => chooseTopic(`stage-${stage.id}`)} className="text-small font-medium">{String(i + 1).padStart(2, '0')} · {stage.label}</Link>
            <ul className="mt-2 space-y-1">{guide.topics.filter((t) => t.stage === stage.id).map((t) => <li key={t.id}><Link to={{ pathname, search: '?tab=practical', hash: `#guide-${t.id}` }} aria-current={currentTopic === t.id ? 'location' : undefined} onClick={() => chooseTopic(`guide-${t.id}`)} className={`block border-l-2 py-1 pl-2 text-note leading-6 hover:text-accent ${currentTopic === t.id ? 'border-accent font-medium text-accent' : 'border-transparent text-ink-muted'}`}>{t.title}</Link></li>)}</ul>
          </div>)}</div>
          <Link to={{ pathname, search: '?tab=practical', hash: '#departure-checklist' }} aria-current={currentTopic === 'departure-checklist' ? 'location' : undefined} onClick={() => chooseTopic('departure-checklist')} className={`mt-5 block border-t border-border pt-4 text-note ${currentTopic === 'departure-checklist' ? 'font-medium text-accent' : 'text-ink-muted'}`}>最后检查清单</Link>
        </div></nav>
        <div className="min-w-0 space-y-12">
          {stages.map((stage, i) => <section key={stage.id} id={`stage-${stage.id}`} className="scroll-mt-36">
            <p className="eyebrow">{String(i + 1).padStart(2, '0')}</p><h3 className="mt-2 text-2xl">{stage.label}</h3>
            <p className="mb-6 mt-3 text-small text-ink-faint">{stage.note}</p>
            <Accordion variant="cards" items={guide.topics.filter((t) => t.stage === stage.id).map((topic) => ({ id: `guide-${topic.id}`, title: topic.title, description: topic.summary, note: topic.sources.length ? <>核对依据：{topic.sources.map((s) => s.label).join(' · ')}</> : undefined, children: <TopicContent topic={topic} /> }))} />
          </section>)}
          <VerifyTable items={guide.checklist} />
        </div>
      </div>
    </section>
  )
}
