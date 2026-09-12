import type { MetaField } from '../content/hongKong'

type Props = { fields: MetaField[] }

export function MetaTable({ fields }: Props) {
  const short = fields.filter((f) =>
    ['最佳季节', '机场', '建议停留', '核实日期'].includes(f.label),
  )

  return (
    <section className="mx-auto max-w-5xl px-5 py-10 md:px-8">
      <ul className="flex flex-wrap gap-2.5">
        {short.map((f) => (
          <li
            key={f.label}
            className="rounded-full border border-border bg-sand/40 px-4 py-2 text-sm text-ink-muted"
          >
            <span className="mr-2 text-ink-faint">{f.label}</span>
            <span className="text-ink">{compactValue(f)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function compactValue(f: MetaField): string {
  if (f.label === '最佳季节') return '秋冬更干爽；夏湿热，留弹性'
  if (f.label === '建议停留') return '4–5 晚不赶；住稳一侧'
  return f.value
}
