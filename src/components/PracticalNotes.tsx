import type { PracticalBlock, SourceLink } from '../content/hongKong'
import { Accordion } from './Accordion'

type Props = {
  blocks: PracticalBlock[]
  links?: SourceLink[]
  localTransit: string[]
}

export function PracticalNotes({ blocks, links, localTransit }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
      <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">实用</h2>
      <p className="mt-3 text-sm text-ink-faint">市内交通与注意事项，按需展开。</p>

      <div className="mt-10">
        <Accordion
          items={[
            {
              id: 'transit',
              title: 'Getting around',
              children: (
                <ul className="prose-narrow space-y-3 text-[15px] leading-relaxed text-ink-muted">
                  {localTransit.map((t) => (
                    <li key={t.slice(0, 24)}>{t}</li>
                  ))}
                </ul>
              ),
            },
            {
              id: 'practical',
              title: 'Practical notes',
              children: (
                <div className="space-y-8">
                  {blocks.map((b) => (
                    <div key={b.id}>
                      <h3 className="font-serif text-lg text-ink">{b.title}</h3>
                      <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink-muted">
                        {b.items.map((item) => (
                          <li key={item.slice(0, 32)}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {links && links.length > 0 && (
                    <p className="text-xs text-ink-faint">
                      相关：
                      {links.map((l, i) => (
                        <span key={l.url}>
                          {i > 0 && ' · '}
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
                    </p>
                  )}
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  )
}
