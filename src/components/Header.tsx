import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COUNTRIES, STANDALONE_CITIES, type DirectoryCountry } from '../content/directory'

const countryBySlug = (slug: string) => COUNTRIES.find((c) => c.slug === slug)!

const hongKong = { label: '香港', href: '/places/hong-kong', match: 'hong-kong' }
const standalone = (slug: string) => {
  const c = STANDALONE_CITIES.find((x) => x.slug === slug)!
  return { label: c.nameZh, href: c.href, match: c.slug }
}

type NavItem =
  | { kind: 'link'; label: string; href: string; match: string }
  | { kind: 'country'; country: DirectoryCountry }

// 东亚 → 东南亚；单城目的地直接成项，多城国家悬停/点按展开城市。
const NAV_ITEMS: NavItem[] = [
  { kind: 'link', label: '首页', href: '/', match: '/' },
  { kind: 'country', country: countryBySlug('japan') },
  { kind: 'country', country: countryBySlug('south-korea') },
  { kind: 'country', country: countryBySlug('taiwan') },
  { kind: 'link', ...hongKong },
  { kind: 'link', ...standalone('macau') },
  { kind: 'country', country: countryBySlug('vietnam') },
  { kind: 'country', country: countryBySlug('thailand') },
  { kind: 'country', country: countryBySlug('malaysia') },
  { kind: 'link', ...standalone('singapore') },
]

const linkBase = 'border-b-2 pb-0.5 transition-colors'
const linkIdle = 'border-transparent hover:border-border hover:text-ink'
const linkActive = 'border-ink text-ink'

export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const [prevPath, setPrevPath] = useState(pathname)
  if (prevPath !== pathname) {
    setPrevPath(pathname)
    setOpen(null)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (open === null && !menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setMenuOpen(false)
      }
    }
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null)
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open, menuOpen])

  const countryActive = (c: DirectoryCountry) =>
    pathname === c.href || c.cities.some((x) => pathname.startsWith(x.href))

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 site-shell items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <Link to="/" className="group flex flex-col items-end leading-none text-ink no-underline">
          <span className="font-sans text-[12px] font-semibold tracking-[0.32em] text-ink-faint uppercase">
            Asia
          </span>
          <span className="mt-0.5 font-serif text-[1.45rem] tracking-[-0.01em]">Unhurried</span>
        </Link>

        <nav ref={navRef} className="flex shrink-0 items-center gap-4 text-base font-medium text-ink-muted md:gap-6" aria-label="目的地导航">
          {NAV_ITEMS.map((item) =>
            item.kind === 'link' ? (
              <Link
                key={item.href}
                to={item.href}
                className={`hidden md:inline-block ${linkBase} ${
                  item.match === '/'
                    ? pathname === '/' ? linkActive : linkIdle
                    : pathname.includes(item.match) ? linkActive : linkIdle
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <div
                key={item.country.slug}
                className="relative hidden md:block"
                onMouseEnter={() => setOpen(item.country.slug)}
                onMouseLeave={() => setOpen((o) => (o === item.country.slug ? null : o))}
                onFocus={() => setOpen(item.country.slug)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpen((o) => (o === item.country.slug ? null : o))
                  }
                }}
              >
                <Link
                  to={item.country.href}
                  aria-expanded={open === item.country.slug}
                  aria-haspopup="true"
                  className={`${linkBase} inline-flex items-center gap-1 ${
                    countryActive(item.country) ? linkActive : linkIdle
                  }`}
                >
                  {item.country.nameZh}
                  <span aria-hidden="true" className={`text-[0.65em] transition-transform ${open === item.country.slug ? 'rotate-180' : ''}`}>▾</span>
                </Link>
                {open === item.country.slug && (
                  <div className="absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3">
                    <div className="rounded-xl border border-border bg-paper py-2 shadow-[0_14px_32px_rgba(43,36,28,0.10)]">
                      <Link
                        to={item.country.href}
                        className="block px-4 py-2 text-small font-medium text-ink hover:bg-sand/40 hover:text-accent"
                      >
                        {item.country.nameZh}
                        <span className="ml-1.5 font-serif text-ink-faint">{item.country.nameEn} →</span>
                      </Link>
                      <div className="mx-4 my-1 border-t border-border/70" />
                      {item.country.cities.map((city) => (
                        <Link
                          key={city.slug}
                          to={city.href}
                          className="block px-4 py-2 text-small text-ink-muted hover:bg-sand/40 hover:text-ink"
                        >
                          {city.nameZh}
                          <span className="ml-1.5 font-serif text-note text-ink-faint">{city.nameEn}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ),
          )}

          <button
            type="button"
            className={`${linkBase} inline-flex items-center gap-1 md:hidden ${menuOpen ? linkActive : linkIdle}`}
            aria-expanded={menuOpen}
            aria-haspopup="true"
            onClick={() => setMenuOpen((v) => !v)}
          >
            目的地
            <span aria-hidden="true" className={`text-[0.65em] transition-transform ${menuOpen ? 'rotate-180' : ''}`}>▾</span>
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-paper shadow-[0_18px_36px_rgba(43,36,28,0.12)] md:hidden">
          <div className="site-shell mx-auto grid max-h-[70svh] gap-5 overflow-y-auto px-5 py-6 sm:grid-cols-2">
            <Link to="/" className="text-base font-medium text-ink">首页</Link>
            {COUNTRIES.map((c) => (
              <div key={c.slug}>
                <Link to={c.href} className="text-base font-medium text-ink">
                  {c.nameZh}
                  <span className="ml-1.5 font-serif text-small text-ink-faint">{c.nameEn} →</span>
                </Link>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                  {c.cities.map((city) => (
                    <Link key={city.slug} to={city.href} className="text-small text-ink-muted underline underline-offset-4">
                      {city.nameZh}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="text-note text-ink-faint">单城目的地</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                <Link to="/places/hong-kong" className="text-small font-medium text-ink underline underline-offset-4">香港</Link>
                {STANDALONE_CITIES.map((c) => (
                  <Link key={c.slug} to={c.href} className="text-small font-medium text-ink underline underline-offset-4">
                    {c.nameZh}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
