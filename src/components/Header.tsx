import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const { pathname } = useLocation()
  const onCity = pathname.includes('hong-kong')

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <Link to="/" className="group flex flex-col items-end leading-none text-ink no-underline">
          <span className="font-sans text-[10px] font-semibold tracking-[0.32em] text-ink-faint uppercase">
            Asia
          </span>
          <span className="mt-0.5 font-serif text-[1.35rem] tracking-[-0.01em]">Unhurried</span>
        </Link>
        <nav className="flex items-center gap-7 text-[14px] font-medium text-ink-muted">
          <Link
            to="/"
            className={`border-b-2 pb-0.5 transition-colors ${
              pathname === '/'
                ? 'border-ink text-ink'
                : 'border-transparent hover:border-border hover:text-ink'
            }`}
          >
            首页
          </Link>
          <Link
            to="/places/hong-kong"
            className={`border-b-2 pb-0.5 transition-colors ${
              onCity
                ? 'border-ink text-ink'
                : 'border-transparent hover:border-border hover:text-ink'
            }`}
          >
            香港
          </Link>
        </nav>
      </div>
    </header>
  )
}
