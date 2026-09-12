import type { ReactNode } from 'react'

type HeroMeta = {
  region: string
  best: string
  airports: string
  stay: string
}

type Props = {
  nameEn: string
  nameZh: string
  pinyin: string
  breadcrumb?: string
  linger: string
  imageSrc: string
  imageAlt: string
  meta: HeroMeta
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconPlane({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 12 3.5 19.5l2.2-6.3L3.5 4.5 21 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4.5l3 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const metaItems: {
  key: keyof HeroMeta
  label: string
  Icon: (p: { className?: string }) => ReactNode
}[] = [
  { key: 'region', label: 'REGION', Icon: IconPin },
  { key: 'best', label: 'BEST', Icon: IconCalendar },
  { key: 'airports', label: 'AIRPORTS', Icon: IconPlane },
  { key: 'stay', label: 'STAY', Icon: IconClock },
]

export function CityHero({
  nameEn,
  nameZh,
  pinyin,
  breadcrumb = 'Places / 东亚',
  linger,
  imageSrc,
  imageAlt,
  meta,
}: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] md:gap-10 md:px-8 md:py-12 lg:max-w-7xl lg:gap-12 lg:py-14">
        <div className="flex flex-col justify-start pt-1 md:pt-2">
          <p className="text-[0.7rem] font-medium tracking-[0.18em] text-ink-faint">{breadcrumb}</p>

          <h1 className="display-title mt-3 font-zh text-accent">{nameZh}</h1>
          <p className="mt-1.5 font-serif text-xl text-ink md:text-2xl">{nameEn}</p>
          <p className="mt-1 text-sm tracking-wide text-ink-faint">{pinyin}</p>

          <p className="mt-5 max-w-xl font-serif text-[1.15rem] leading-[1.7] text-ink-muted md:text-[1.25rem] md:leading-[1.75]">
            {linger}
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 sm:gap-x-6">
            {metaItems.map(({ key, label, Icon }) => (
              <li key={key} className="min-w-0">
                <div className="flex items-center gap-1.5 text-ink-faint">
                  <Icon className="shrink-0 opacity-80" />
                  <span className="eyebrow !tracking-[0.2em]">{label}</span>
                </div>
                <p className="mt-1.5 text-sm font-medium leading-snug text-ink">{meta[key]}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-sand p-2 sm:p-2.5 md:rounded-[1.75rem] md:p-3">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[5/4] w-full rounded-xl object-cover md:rounded-2xl"
            width={900}
            height={720}
          />
        </div>
      </div>
    </section>
  )
}
