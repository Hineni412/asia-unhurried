import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const CITY_TABS = [
  { id: 'overview', label: '总览' },
  { id: 'practical', label: '出行指南' },
  { id: 'places', label: '街区与看点' },
  { id: 'eat', label: '吃' },
  { id: 'itinerary', label: '行程' },
  { id: 'safety', label: '安全与求助' },
] as const

export type CityTabId = (typeof CITY_TABS)[number]['id']

const TAB_IDS = new Set<string>(CITY_TABS.map((t) => t.id))

/** Legacy in-page hashes from the stacked city layout. */
const HASH_TO_TAB: Record<string, CityTabId> = {
  overview: 'overview',
  neighborhoods: 'places',
  places: 'places',
  eat: 'eat',
  practical: 'practical',
  itinerary: 'itinerary',
  verify: 'practical',
  safety: 'safety',
  'getting-there': 'overview',
  'day-trips': 'places',
}

export function isCityTab(value: string | null | undefined): value is CityTabId {
  return Boolean(value && TAB_IDS.has(value))
}

export function parseCityTab(search: string, hash: string): CityTabId {
  const tabParam = new URLSearchParams(search).get('tab')
  if (tabParam === 'verify') return 'practical'
  if (isCityTab(tabParam)) return tabParam
  const id = hash.replace(/^#/, '')
  return HASH_TO_TAB[id] ?? 'overview'
}

export function cityTabSearch(tab: CityTabId): string {
  return `?tab=${tab}`
}

export function useCityTab(): CityTabId {
  const location = useLocation()
  const navigate = useNavigate()
  const hashId = location.hash.replace(/^#/, '')
  const fromHash = HASH_TO_TAB[hashId]
  const legacyVerify = new URLSearchParams(location.search).get('tab') === 'verify' || hashId === 'verify'
  const active = parseCityTab(location.search, location.hash)

  useLayoutEffect(() => {
    if (!fromHash && !legacyVerify) return
    const params = new URLSearchParams(location.search)
    params.set('tab', legacyVerify ? 'practical' : fromHash)
    navigate(
      { pathname: location.pathname, search: `?${params.toString()}`, hash: legacyVerify ? '#departure-checklist' : '' },
      { replace: true },
    )
  }, [fromHash, legacyVerify, location.pathname, location.search, navigate])

  return active
}

/** Open a linked guide topic before scrolling; keep browser history usable. */
export function useGuideAnchor() {
  const { hash, key } = useLocation()
  useEffect(() => {
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    if (!target) return
    if (target instanceof HTMLDetailsElement) target.open = true
    let parent = target.parentElement
    while (parent) {
      if (parent instanceof HTMLDetailsElement) parent.open = true
      parent = parent.parentElement
    }
    const frame = requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }))
    return () => cancelAnimationFrame(frame)
  }, [hash, key])
}
