import { useLayoutEffect, type ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { CityTabs } from './CityTabs'
import { CITY_TABS, useCityTab, useGuideAnchor, type CityTabId } from './cityNavigation'

type Props = {
  hero: ReactNode
  /** 没有内容的 tab（如未写「住」的城市）不显示标签、回退到总览。 */
  panels: Partial<Record<CityTabId, ReactNode>>
  /** 全页统一的核实日期，页脚上方常显；各栏目另有分项日期。 */
  checkedAt?: string
}

export function CityPage({ hero, panels, checkedAt }: Props) {
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
      {checkedAt ? (
        <p className="site-shell mx-auto w-full border-t border-border/70 px-5 py-5 text-note text-ink-faint md:px-8">
          本页核实于 {checkedAt} · 各栏目来源逐项附后 · 价格为核对时快照，出发前按检查清单再核
        </p>
      ) : null}
      <Footer />
    </div>
  )
}
