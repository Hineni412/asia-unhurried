import { Link, useLocation } from 'react-router-dom'
import { CITY_TABS, cityTabSearch, type CityTabId } from './cityTabs'

type Props = { active: CityTabId }

export function CityTabs({ active }: Props) {
  const { pathname } = useLocation()

  return (
    <nav
      id="city-tabs"
      aria-label="城市章节"
      className="sticky top-14 z-40 border-b border-border/70 bg-paper/90 backdrop-blur-md md:top-[4.5rem]"
    >
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-5 py-2.5 text-sm whitespace-nowrap md:px-8"
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
