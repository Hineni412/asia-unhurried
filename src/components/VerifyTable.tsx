import type { VerifyRow } from '../content/hongKong'

type Props = { rows: VerifyRow[] }

export function VerifyTable({ rows }: Props) {
  return (
    <section id="verify" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
      <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">出门前再核一次</h2>
      <p className="mt-3 text-sm text-ink-faint">政策与营业会变。以下只标该去哪查，不写死规则。</p>
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-[0.7rem] tracking-[0.16em] text-ink-faint uppercase">
              <th className="py-3 pr-4 font-semibold">类别</th>
              <th className="py-3 pr-4 font-semibold">核什么</th>
              <th className="py-3 font-semibold">去哪核</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.category} className="border-b border-border/70 align-top">
                <td className="py-4 pr-4 font-medium text-ink">{r.category}</td>
                <td className="py-4 pr-4 text-ink-muted">{r.what}</td>
                <td className="py-4 text-ink-muted">
                  <span>{r.where}</span>
                  {r.links?.map((l) => (
                    <span key={l.url}>
                      {' · '}
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border underline-offset-2 hover:text-accent"
                      >
                        {l.label}
                      </a>
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
