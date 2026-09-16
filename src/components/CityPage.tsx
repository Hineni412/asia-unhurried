import { useLayoutEffect, type ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { CityTabs } from './CityTabs'
import { CITY_TABS, useCityTab, useGuideAnchor, type CityTabId } from './cityNavigation'

type Props = {
  hero: ReactNode
  /** 没有内容的 tab（如未写「住」的城市）不显示标签、回退到总览。 */
  panels: Partial<Record<CityTabId, ReactNode>>
}

export function CityPage({ hero, panels }: Props) {
  const tab = useCityTab()
  useGuideAnchor()
  const active = panels[tab] ? tab : 'overview'
  const tabs = CITY_TABS.filter((t) => panels[t.id] !== undefined)

  useLayoutEffect(() => {
    const nav = document.getElementById('city-tabs')
    if (!nav) return
    const headerH = document.querySelector('header')?.getBoundingClientRect().height ?? 56
    const target = Math.max(0, nav.getBoundingClientRect().top + window.scrollY - headerH)
    if (window.scrollY > target + 24) {
      window.scrollTo({ top: target, behavior: 'auto' })
    }
  }, [active])

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      {hero}
      <CityTabs active={active} tabs={tabs} />
      <main
        id="city-panel"
        role="tabpanel"
        aria-labelledby={`city-tab-${active}`}
        className="flex-1"
      >
        {panels[active] ?? panels.overview}
      </main>
      <Footer />
    </div>
  )
}
