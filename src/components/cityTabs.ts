import { useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const CITY_TABS = [
  { id: 'overview', label: '总览' },
  { id: 'places', label: '邻里' },
  { id: 'eat', label: '吃' },
  { id: 'practical', label: '实用' },
  { id: 'itinerary', label: '行程' },
  { id: 'verify', label: '核验' },
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
  verify: 'verify',
  'getting-there': 'overview',
  'day-trips': 'places',
}

export function isCityTab(value: string | null | undefined): value is CityTabId {
  return Boolean(value && TAB_IDS.has(value))
}

export function parseCityTab(search: string, hash: string): CityTabId {
  const tabParam = new URLSearchParams(search).get('tab')
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
  const active = parseCityTab(location.search, location.hash)

  useLayoutEffect(() => {
    if (!fromHash) return
    const params = new URLSearchParams(location.search)
    if (params.get('tab') === fromHash && !hashId) return
    params.set('tab', fromHash)
    navigate(
      { pathname: location.pathname, search: `?${params.toString()}`, hash: '' },
      { replace: true },
    )
  }, [fromHash, hashId, location.pathname, location.search, navigate])

  return active
}
