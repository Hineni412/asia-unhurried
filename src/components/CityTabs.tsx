import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { CITY_TABS, cityTabSearch, type CityTabId } from './cityNavigation'

type Props = { active: CityTabId }

export function CityTabs({ active }: Props) {
  const { pathname } = useLocation()
  const listRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const list = listRef.current
    const selected = document.getElementById(`city-tab-${active}`)
    if (!list || !selected) return
    const bounds = list.getBoundingClientRect()
    const tabBounds = selected.getBoundingClientRect()
    if (tabBounds.right > bounds.right - 16) list.scrollLeft += tabBounds.right - bounds.right + 16
    else if (tabBounds.left < bounds.left + 16) list.scrollLeft -= bounds.left - tabBounds.left + 16
  }, [active])

  return (
    <nav
      id="city-tabs"
      aria-label="城市章节"
      className="sticky top-14 z-40 border-b border-border/70 bg-paper/90 backdrop-blur-md md:top-[4.5rem]"
    >
      <div
        ref={listRef}
        role="tablist"
        aria-orientation="horizontal"
        className="mx-auto flex site-shell gap-1 overflow-x-auto px-5 py-2.5 text-base whitespace-nowrap md:px-8"
      >
        {CITY_TABS.map((t) => {
          const selected = active === t.id
          return (
            <Link
              key={t.id}
              id={`city-tab-${t.id}`}
              role="tab"
              to={{ pathname, search: cityTabSearch(t.id) }}
              preventScrollReset
              aria-selected={selected}
              aria-controls="city-panel"
              className={`rounded-full px-3.5 py-1.5 transition ${
                selected
                  ? 'bg-sand text-ink'
                  : 'text-ink-muted hover:bg-sand hover:text-ink'
              }`}
            >
              {t.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
