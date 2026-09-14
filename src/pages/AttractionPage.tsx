import { useLayoutEffect, useRef } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AttractionGallery } from '../components/AttractionGallery'
import { AttractionCard } from '../components/AttractionCard'
import { attractions, attractionCheckedAt, cityBase, photosFor, type Attraction } from '../content/attractions'
import { cityInfo } from '../content/cityRegistry'

const sections = [{id:'overview',label:'看什么'},{id:'booking',label:'预约与门票'},{id:'walk',label:'怎么逛'},{id:'arrival',label:'到达与入口'},{id:'tips',label:'参观须知'}] as const

export function AttractionPage({ city }: { city: string }) {
  const { attractionId } = useParams()
  const place = attractions.find(item => item.city === city && item.id === attractionId)
  if (!place) return <><Header /><main className="site-shell py-20"><h1 className="text-3xl">这里还没有景点介绍</h1><Link to={`${cityBase(city)}?tab=places`} className="mt-6 inline-block text-accent underline">返回街区与看点</Link></main><Footer /></>
  return <AttractionDetail key={place.id} place={place} />
}

function AttractionDetail({ place }: { place: Attraction }) {
  const location = useLocation()
  const [params, setParams] = useSearchParams()
  const sectionId = sections.find(section => section.id === params.get('section'))?.id ?? 'overview'
  const rootRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const photos = photosFor(place)
  const base = cityBase(place.city)
  const { nameZh: cityName, restaurants: cityRestaurants } = cityInfo(place.city)
  const restaurants = cityRestaurants.filter(restaurant => place.restaurantIds.includes(restaurant.id))
  const browseReturn = location.state?.browseReturn
  const back = browseReturn?.url?.startsWith(base + '?') ? browseReturn : { url: base + '?tab=places', scrollY: undefined }
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`

  function scrollToDetails(behavior: ScrollBehavior = 'instant') {
    const nav = navRef.current
    if (!nav?.parentElement) return
    // Measure the normal-flow parent: a sticky tab bar's own position changes while scrolling.
    const top = nav.parentElement.getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(nav).top)
    window.scrollTo({ top: Math.max(0, top), behavior })
  }

  useLayoutEffect(() => {
    const header = document.querySelector('header')
    if (!header || !rootRef.current) return
    const actions = rootRef.current.querySelector('.attraction-actions')
    const measure = () => {
      rootRef.current?.style.setProperty('--spot-header-height', `${header.getBoundingClientRect().height}px`)
      rootRef.current?.style.setProperty('--spot-actions-height', `${actions?.getBoundingClientRect().height ?? 0}px`)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(header)
    if(actions) observer.observe(actions)
    const oldTitle = document.title
    document.title = `${place.name} · ${cityName} · 亚洲不疾不徐`
    const frame = requestAnimationFrame(() => {
      if (new URLSearchParams(window.location.search).has('section')) scrollToDetails()
      else window.scrollTo({top:0,behavior:'instant'})
    })
    return () => { observer.disconnect(); cancelAnimationFrame(frame); document.title=oldTitle }
  }, [place.name, cityName])

  function chooseSection(id: string) {
    const next = new URLSearchParams(params)
    if(id === 'overview') next.delete('section'); else next.set('section',id)
    setParams(next, {preventScrollReset:true,state:location.state})
    requestAnimationFrame(() => scrollToDetails(matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'))
  }

  return <div ref={rootRef} className="attraction-page"><Header />
    <main className="site-shell pt-8 pb-16 md:pt-10 md:pb-24">
      <nav className="attraction-breadcrumb text-small text-ink-faint" aria-label="当前位置"><div><Link to={base}>{cityName}</Link><span>/</span><Link to={back.url} state={{restorePlacesY:back.scrollY}}>街区与看点</Link><span>/</span><span>{place.name}</span></div><Link to={back.url} state={{restorePlacesY:back.scrollY}} className="text-accent">← 返回列表</Link></nav>
      <div className="attraction-heading"><div><p className="text-small text-ink-faint">{place.area}</p><h1 className="mt-2 font-zh text-4xl md:text-5xl">{place.name}</h1><p className="mt-2 text-small text-ink-faint">{place.nameLocal}</p></div><p className="attraction-lede text-body text-ink-muted">{place.intro}</p></div>
      <AttractionGallery photos={photos} name={place.name} />
      <dl className="attraction-facts">{[['提前安排',place.booking.label],['门票参考',place.price],['通常开放',place.hours],['建议停留',place.duration+'，交通与排队另留']].map(([label,value])=><div key={label}><dt className="text-note text-ink-faint">{label}</dt><dd className="mt-2 text-small text-ink">{value}</dd></div>)}</dl>
      {place.notice && <p className="attraction-notice text-small">{place.notice.text} <a href={place.notice.source.url} target="_blank" rel="noreferrer" className="underline underline-offset-4">{place.notice.source.label} ↗</a></p>}
      <div className="attraction-reading-layout">
        <div className="min-w-0">
          <nav ref={navRef} className="attraction-detail-tabs" aria-label="景点介绍栏目"><div role="tablist">{sections.map(section=><button key={section.id} type="button" role="tab" id={`spot-tab-${section.id}`} aria-selected={sectionId===section.id} tabIndex={sectionId===section.id ? 0 : -1} onKeyDown={event=>{ const current=sections.findIndex(item=>item.id===section.id); const next=event.key==='ArrowRight' ? (current+1)%sections.length : event.key==='ArrowLeft' ? (current+sections.length-1)%sections.length : event.key==='Home' ? 0 : event.key==='End' ? sections.length-1 : -1; if(next>=0){event.preventDefault();chooseSection(sections[next].id);document.getElementById('spot-tab-'+sections[next].id)?.focus({preventScroll:true})} }} aria-controls="spot-detail-panel" onClick={()=>chooseSection(section.id)}>{section.label}</button>)}</div></nav>
          <section id="spot-detail-panel" role="tabpanel" aria-labelledby={`spot-tab-${sectionId}`} className="attraction-detail-content">
            {sectionId==='overview' && <div className="spot-highlights">{place.highlights.map(highlight=>{ const photo = photos[highlight.photo]; return <article key={highlight.title}>{photo ? <img src={photo.src} alt={photo.alt} width={600} height={400} loading="lazy" /> : null}<div><h2 className="font-zh text-2xl">{highlight.title}</h2><p className="mt-3 text-body text-ink-muted">{highlight.body}</p></div></article> })}</div>}
            {sectionId==='booking' && <><h2 className="font-zh text-2xl">先分清要看的项目</h2><p className="mt-4 text-body text-ink-muted">{place.booking.summary}</p><div className="spot-ticket-options">{place.booking.rows.map(row=><article key={row.item}><h3 className="text-lg">{row.item}</h3><p className="mt-2 text-small">{row.ticket}</p><p className="mt-2 text-small text-ink-muted">{row.reservation}</p></article>)}</div><h2 className="mt-9 font-zh text-2xl">一步一步安排</h2><ol className="spot-steps">{place.booking.steps.map((step,i)=><li key={step.title}><span className="spot-step-number">{i+1}</span><div><h3 className="text-lg">{step.title}</h3><p className="mt-2 text-body text-ink-muted">{step.body}</p></div></li>)}</ol><p className="mt-6 border-l-2 border-sand-deep pl-4 text-small text-ink-muted"><strong>没安排成时：</strong>{place.booking.fallback}</p></>}
            {sectionId==='walk' && <><h2 className="font-zh text-2xl">给这一次参观留一点余地</h2><p className="mt-3 text-note text-ink-faint">以下为本站建议路线与时间分配，不是实地计时。</p><ol className="spot-steps">{place.walk.map((step,i)=><li key={step.title}><span className="spot-step-number">{i+1}</span><div><h3 className="text-lg">{step.title}</h3><p className="mt-2 text-body text-ink-muted">{step.body}</p></div></li>)}</ol></>}
            {sectionId==='arrival' && <><h2 className="font-zh text-2xl">到达与游客入口</h2><div className="spot-address mt-5"><p className="text-lg">{place.nameLocal}</p><p className="mt-2 text-body">{place.address}</p><a href={mapUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-accent underline underline-offset-4">在地图中查找 →</a></div><div className="spot-info-list">{place.arrival.map(item=><article key={item.title}><h3 className="text-xl">{item.title}</h3><p className="mt-3 text-body text-ink-muted">{item.body}</p></article>)}</div></>}
            {sectionId==='tips' && <><h2 className="font-zh text-2xl">到场后更从容</h2><div className="spot-info-list">{place.tips.map(item=><article key={item.title}><h3 className="text-xl">{item.title}</h3><p className="mt-3 text-body text-ink-muted">{item.body}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-5 text-small text-accent"><Link to={`${base}?tab=practical`}>查看出行指南 →</Link><Link to={`${base}?tab=safety`}>安全与求助 →</Link></div></>}
            {sectionId==='booking' && place.bookingImage && <details className="mt-7 rounded-xl border border-border p-5"><summary className="text-small text-accent">查看官方购票入口截图 ＋</summary><figure className="mt-4"><a href={place.bookingImage.src} target="_blank" rel="noreferrer" aria-label="放大官方购票入口截图"><img src={place.bookingImage.src} alt={place.bookingImage.caption} loading="lazy" className="max-h-96 w-full object-contain" /></a><figcaption className="mt-4 text-note text-ink-muted">{place.bookingImage.caption} <span>截图 {attractionCheckedAt} · </span><a href={place.bookingImage.source.url} target="_blank" rel="noreferrer" className="underline">{place.bookingImage.source.label} ↗</a></figcaption></figure></details>}
            <p className="spot-sources text-note text-ink-faint">资料核对 {attractionCheckedAt} · 时间为当地时间，价格与开放安排出发前再核对。{place.sources.map(source=><a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="underline underline-offset-4">{source.label} ↗</a>)}</p>
          </section>
        </div>
        <aside className="attraction-actions" aria-label="参观安排"><div className="attraction-action-box"><strong className="attraction-action-title text-small">{place.name}</strong><p className={`reservation-label reservation-label--${place.booking.status}`}>{place.booking.label}</p><p className="mt-4 text-small text-ink-muted">{place.booking.summary}</p><a href={place.booking.link.url} target="_blank" rel="noreferrer" className="btn-primary mt-5 w-full text-small">{place.booking.status==='check' ? '官方参观与联系' : place.booking.status==='walk-in' ? '官方开放安排' : '官方预约与门票'} ↗</a><a href={mapUrl} target="_blank" rel="noreferrer" className="spot-map-button mt-3 text-small">地图与游客入口 ↗</a></div><div className="attraction-address-small"><p className="text-note text-ink-faint">给司机看的名称与地址</p><p className="mt-2 text-lg">{place.nameLocal}</p><p className="mt-2 text-small text-ink-muted">{place.address}</p><Link to={`${base}?tab=places${place.areaId?'#area-'+place.areaId:'#where-to-stay'}`} className="mt-4 inline-block text-small text-accent underline underline-offset-4">查看街区与住处 →</Link></div></aside>
      </div>
      {(restaurants.length>0 || place.related.length>0) && <section className="spot-related"><h2 className="font-zh text-3xl">把附近的一程接起来</h2><p className="mt-3 text-small text-ink-faint">按体力、营业与预约时段选择，不必每处都去。</p><div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">{restaurants.map(restaurant=><Link key={restaurant.id} to={`${base}?tab=eat#${restaurant.id}`} className="text-small text-accent underline underline-offset-4">吃什么 · {restaurant.name} →</Link>)}<Link to={`${base}?tab=itinerary`} className="text-small text-accent underline underline-offset-4">放进几天的行程里 →</Link></div><div className="attractions-grid mt-7">{attractions.filter(item=>place.related.includes(item.id)).slice(0,3).map(item=><AttractionCard key={item.id} place={item}/>)}</div></section>}
    </main><Footer />
  </div>
}
