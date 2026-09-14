import { Link } from 'react-router-dom'
import { COUNTRIES, STANDALONE_CITIES } from '../content/directory'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto site-shell px-5 py-16 md:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <p className="font-serif text-xl text-ink">亚洲不疾不徐</p>
            <p className="mt-1 text-small text-ink-faint">Asia Unhurried</p>
            <p className="prose-narrow mt-4 text-small leading-relaxed text-ink-muted">
              慢慢走亚洲。范围不含中国大陆；含港澳台。
            </p>
          </div>
          <div className="text-small text-ink-muted">
            <p className="mb-3 text-note font-semibold tracking-[0.2em] text-ink-faint">
              目的地
            </p>
            <Link to="/places/hong-kong" className="block text-ink hover:text-accent">
              香港 · Hong Kong
            </Link>
            <Link to="/places/malaysia/penang" className="mt-2 block text-ink hover:text-accent">
              槟城 · Penang
            </Link>
            {COUNTRIES.map((c) => (
              <Link
                key={c.slug}
                to={c.href}
                className="mt-2 block text-ink-muted hover:text-accent"
              >
                {c.nameZh} · {c.nameEn}
              </Link>
            ))}
            {STANDALONE_CITIES.map((c) => (
              <Link
                key={c.slug}
                to={c.href}
                className="mt-2 block text-ink-muted hover:text-accent"
              >
                {c.nameZh} · {c.nameEn}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-12 text-note text-ink-faint">
          语气参考 China Unhurried · 内容独立
        </p>
      </div>
    </footer>
  )
}
