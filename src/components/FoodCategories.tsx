import { useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { EatCategory } from '../content/hongKong'
import { CategorySection } from './CategorySection'

export function FoodCategories({ categories }: { categories: EatCategory[] }) {
  const { pathname, search } = useLocation()
  const rootRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const [activeId, setActiveId] = useState(categories[0]?.id)
  const [visible, setVisible] = useState(false)
  const category = categories.find(item => item.id === activeId) ?? categories[0]

  useLayoutEffect(() => {
    const root = rootRef.current
    const nav = navRef.current
    const header = document.querySelector('header')
    const tabs = document.getElementById('city-tabs')
    if (!root || !nav || !header || !tabs) return
    let frame = 0
    const update = () => {
      frame = 0
      const stickyTop = parseFloat(getComputedStyle(tabs).top)
      const chrome = (Number.isFinite(stickyTop) ? stickyTop : header.getBoundingClientRect().height) + tabs.getBoundingClientRect().height
      const navHeight = nav.getBoundingClientRect().height
      root.style.setProperty('--food-chrome-height', `${chrome}px`)
      root.style.setProperty('--food-nav-height', `${navHeight}px`)
      let active = categories[0]?.id
      for (const item of categories) {
        const section = document.getElementById(item.id)
        if (section && section.getBoundingClientRect().top <= chrome + navHeight + 24) active = item.id
      }
      const firstPicture = root.querySelector('.food-category-picture') ?? root.querySelector('.food-category-heading')
      setVisible(Boolean(firstPicture && firstPicture.getBoundingClientRect().bottom <= chrome && root.getBoundingClientRect().bottom > chrome + navHeight))
      setActiveId(active)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    const observer = new ResizeObserver(schedule)
    for (const element of [root, nav, header, tabs]) observer.observe(element)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    update()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [categories])

  if (!category) return null
  return <div ref={rootRef} className="food-categories mt-4">
    <div className="food-floating-slot">
      <nav ref={navRef} className="food-floating-nav" aria-label="当前美食品类" aria-hidden={!visible} data-visible={visible}>
        <Link key={category.id} to={{ pathname, search, hash: `#${category.id}` }} tabIndex={visible ? 0 : -1} className="food-floating-content" title={`查看${category.title}的完整介绍`}>
          {category.image && <img src={category.image.src} alt={category.image.alt} width={96} height={64} className="food-floating-image" />}
          <span className="food-floating-copy">
            <span className="food-floating-title font-zh text-xl text-ink">{category.title}</span>
            <span className="food-floating-intro text-small text-ink-muted">{category.intro}</span>
          </span>
          <span className="food-floating-meta text-note text-ink-muted"><span>{category.restaurants.length} 家餐厅</span><span className="text-accent"><span className="hidden md:inline">查看介绍 </span>↑</span></span>
        </Link>
      </nav>
    </div>
    {categories.map(item => <CategorySection key={item.id} category={item} />)}
  </div>
}
