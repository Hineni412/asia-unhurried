import type { Neighborhood } from '../content/hongKong'

type Props = { neighborhoods: Neighborhood[] }

function shortBody(body: string): string {
  const parts = body.split(/[。！？]/).filter(Boolean)
  if (parts.length <= 2) return body
  return parts.slice(0, 2).join('。') + '。'
}

export function NeighborhoodCards({ neighborhoods }: Props) {
  return (
    <section id="neighborhoods" className="mx-auto max-w-5xl scroll-mt-28 px-5 py-16 md:px-8 md:py-24">
      <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">Neighborhoods</h2>
      <p className="mt-3 text-sm text-ink-faint">选两三个圈层反复走即可。</p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {neighborhoods.map((n) => (
          <article
            key={n.id}
            className="overflow-hidden rounded-2xl bg-sand/35"
          >
            {n.image ? (
              <figure>
                <img
                  src={n.image.src}
                  alt={n.image.alt}
                  className="aspect-[16/10] w-full object-cover"
                  width={800}
                  height={500}
                  loading="lazy"
                />
                {n.image.credit ? (
                  <figcaption className="px-6 pt-2 text-[10px] text-ink-faint sm:px-8">
                    {n.image.credit}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
            <div className="px-6 py-7 sm:px-8 sm:py-9">
              <h3 className="font-zh text-xl text-ink">{n.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{shortBody(n.body)}</p>
              <p className="mt-5 text-xs text-ink-faint">{n.suited}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
