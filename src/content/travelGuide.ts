import type { SourceLink } from './hongKong'

export type GuideStep = { title: string; body: string }
export type GuideImage = { src: string; width: number; height: number; alt: string; caption: string; source: SourceLink; capturedAt: string }
export type GuideTopic = {
  id: string
  title: string
  summary: string
  stage: 'before' | 'arrival' | 'during' | 'return'
  recommendation: string
  choices?: { title: string; body: string }[]
  steps: GuideStep[]
  done: string
  fallback: string
  sources: SourceLink[]
  images?: GuideImage[]
  purchase?: { name: string; detail: string; url: string; taobaoQuery?: string; ask: string }
  safety?: { text: string; target: string }
}
export type TravelGuide = {
  city: string
  scope: string
  checkedAt: string
  intro: string
  topics: GuideTopic[]
  checklist: { id: string; text: string; topic: string }[]
}
export type SafetyGuideData = {
  city: string
  checkedAt: string
  emergencyNote: string
  contacts: { name: string; number: string; dial: string; use: string; source: SourceLink; urgent?: boolean }[]
  phrases: { zh: string; en: string }[]
  preparation: string[]
  alerts: { title: string; body: string; source: SourceLink }[]
  scenarios: { id: string; title: string; steps: string[]; sources: SourceLink[] }[]
}
