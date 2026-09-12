import { useLayoutEffect, type ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { CityTabs } from './CityTabs'
import { useCityTab, type CityTabId } from './cityTabs'

type Props = {
  hero: ReactNode
  panels: Record<CityTabId, ReactNode>
}

export function CityPage({ hero, panels }: Props) {
  const tab = useCityTab()

  useLayoutEffect(() => {
    const nav = document.getElementById('city-tabs')
    if (!nav) return
    const headerH = document.querySelector('header')?.getBoundingClientRect().height ?? 56
    const target = Math.max(0, nav.getBoundingClientRect().top + window.scrollY - headerH)
    if (window.scrollY > target + 24) {
      window.scrollTo({ top: target, behavior: 'auto' })
    }
  }, [tab])

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      {hero}
      <CityTabs active={tab} />
      <main
        id="city-panel"
        role="tabpanel"
        aria-labelledby={`city-tab-${tab}`}
        className="flex-1"
      >
        {panels[tab]}
      </main>
      <Footer />
    </div>
  )
}
