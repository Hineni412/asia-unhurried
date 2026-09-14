import { useLayoutEffect } from 'react'
import { Link, useLocation, useNavigationType, useSearchParams } from 'react-router-dom'
import type { Neighborhood, Restaurant } from '../content/hongKong'
import { attractions, attractionTypes, cityBase } from '../content/attractions'
import { attractionPhotos } from '../content/attractionPhotos'
import { shortNames } from '../content/neighborhoodNames'
import { AttractionCard } from './AttractionCard'

type Props = { neighborhoods: Neighborhood[]; restaurants: Restaurant[] }
const readingPositions = new Map<string, number>()

export function NeighborhoodCards({ neighborhoods, restaurants }: Props) {
  const location = useLocation()
  const navigationType = useNavigationType()
  const [params, setParams] = useSearchParams()
  const places = attractions.filter(place => cityBase(place.city) === location.pathname)
  const type = params.get('type') ?? 'all'
  const area = params.get('area') ?? 'all'
  const filtered = places.filter(place => (type === 'all' || place.type === type) && (area === 'all' || place.area === area))

  useLayoutEffect(() => {
    const previous = location.state?.restorePlacesY ?? (navigationType === 'POP' ? readingPositions.get(location.key) : undefined)
    const frame = previous === undefined ? 0 : requestAnimationFrame(() => window.scrollTo({ top: previous, behavior: 'instant' }))
    const remember = () => readingPositions.set(location.key, window.scrollY)
    window.addEventListener('scroll', remember, { passive:true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', remember) }
  }, [location.key, location.state, navigationType])

  function filter(key: string, value: string) {
    const next = new URLSearchParams(params)
    if (value === 'all') next.delete(key); else next.set(key, value)
    setParams(next, { replace: true, preventScrollReset: true, state: null })
  }

  return <section id="neighborhoods" className="site-shell places-page py-12 md:py-16">
    <div className="places-intro"><div><h2 className="font-zh text-3xl md:text-4xl">街区与看点</h2><p className="mt-4 max-w-3xl text-body text-ink-muted">先挑一个想去的地方，再把散步、吃饭和住处安排在同一带。</p></div><nav aria-label="街区与看点栏目" className="places-section-links"><a href="#find-attractions">找看点 ↓</a><a href="#where-to-stay">住哪一带 ↓</a></nav></div>
    <section id="find-attractions" className="scroll-mt-40">
      <div className="attraction-filters">
        <div className="attraction-type-filters" role="group" aria-label="按看点类型筛选">{attractionTypes.filter(item => item.id === 'all' || places.some(place => place.type === item.id)).map(item => <button key={item.id} type="button" aria-pressed={type === item.id} onClick={() => filter('type',item.id)}>{item.label}</button>)}</div>
        <label className="attraction-area-filter text-small">区域 <select aria-label="按区域筛选" value={area} onChange={event => filter('area',event.target.value)}><option value="all">全部区域</option>{[...new Set(places.map(place => place.area))].map(name => <option key={name}>{name}</option>)}</select></label>
      </div>
      <p className="mb-5 text-note text-ink-faint" role="status">{filtered.length} 个看点 · 建议时长不含往返交通与排队</p>
      <div className="attractions-grid">{filtered.map(place => <AttractionCard key={place.id} place={place} />)}</div>
      {!filtered.length && <div className="filter-empty"><p className="text-body">这个区域暂时没有所选类型的看点。</p><button onClick={() => { const next=new URLSearchParams(params); next.delete('area');next.delete('type');setParams(next,{replace:true,preventScrollReset:true}) }} className="mt-4 text-accent underline underline-offset-4">查看全部看点</button></div>}
    </section>
    <section id="where-to-stay" className="stay-areas scroll-mt-40">
      <div className="places-intro"><div><h2 className="font-zh text-3xl">住哪一带，怎么散步</h2><p className="mt-3 max-w-3xl text-small text-ink-muted">全程住稳一处。先比较区域，再展开感兴趣的那条路线。</p></div><Link to="?tab=practical#guide-stay" className="text-small text-accent underline underline-offset-4">订房前检查 →</Link></div>
      <div className="stay-area-list">{neighborhoods.map(n => {
        const picture = n.id === 'armenian-acheh' ? { ...n.image, src:attractionPhotos['armenian-street'][0].src, alt:attractionPhotos['armenian-street'][0].alt } : n.image
        return <details key={n.id} id={`area-${n.id}`} name="neighborhood-walk" className="stay-area scroll-mt-40">
          <summary>{picture?.src ? <img src={picture.src} alt={picture.alt ?? ''} width={280} height={180} loading="lazy" /> : null}<span className="stay-area-summary"><span className="block font-zh text-2xl text-ink">{shortNames[n.id] ?? n.title}</span><span className="mt-2 block text-small text-ink-muted">{n.suited}</span><span className="mt-3 block text-note text-ink-faint">{n.visit?.stay}</span></span><span className="stay-area-toggle text-small text-accent"><span className="stay-show">看散步路线 ＋</span><span className="stay-hide">收起路线 −</span></span></summary>
          <div className="stay-area-detail"><p className="text-body text-ink-muted">{n.body}</p>{n.visit && <dl className="mt-6 grid gap-6 text-small sm:grid-cols-2">{([['住在这一带',n.visit.stay],['建议时长',n.visit.duration],['从哪进入',n.visit.entry],['怎么走',n.visit.walk],['如何返回',n.visit.return]] as const).map(([label,value])=><div key={label}><dt className="font-semibold">{label}</dt><dd className="mt-2 text-body text-ink-muted">{value}</dd></div>)}</dl>}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">{places.filter(place=>place.areaId===n.id).map(place=><Link key={place.id} to={`${location.pathname}/attractions/${place.id}`} className="text-small text-accent underline underline-offset-4">参观 {place.name} →</Link>)}{restaurants.filter(r=>r.location?.areaId===n.id).map(r=><Link key={r.id} to={`?tab=eat#${r.id}`} className="text-small text-accent underline underline-offset-4">{r.name} →</Link>)}</div>
            <p className="mt-6 text-note text-ink-faint">{n.visit && <a href={n.visit.source.url} target="_blank" rel="noreferrer" className="underline underline-offset-4">路线依据：{n.visit.source.label}</a>} · 图片：{picture?.credit ?? 'Wikimedia Commons'}</p>
          </div>
        </details>
      })}</div>
    </section>
  </section>
}
