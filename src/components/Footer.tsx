import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <p className="font-serif text-xl text-ink">亚洲不疾不徐</p>
            <p className="mt-1 text-sm text-ink-faint">Asia Unhurried</p>
            <p className="prose-narrow mt-4 text-sm leading-relaxed text-ink-muted">
              慢慢走亚洲。范围不含中国大陆；含港澳台。
            </p>
          </div>
          <div className="text-sm text-ink-muted">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-ink-faint uppercase">
              Places
            </p>
            <Link to="/places/hong-kong" className="block text-ink hover:text-accent">
              香港 · Hong Kong
            </Link>
          </div>
        </div>
        <p className="mt-12 text-xs text-ink-faint">
          语气参考 China Unhurried · 内容独立
        </p>
      </div>
    </footer>
  )
}
