import type { EatCategory } from '../content/hongKong'
import { RestaurantCard } from './RestaurantCard'

type Props = { category: EatCategory }

export function CategorySection({ category }: Props) {
  return (
    <section id={category.id} className="scroll-mt-28 border-t border-border/60 py-14 first:border-t-0 md:py-16">
      {category.image ? (
        <figure className="mb-8">
          <img
            src={category.image.src}
            alt={category.image.alt}
            className="aspect-[21/9] w-full rounded-2xl object-cover md:aspect-[2.4/1]"
            width={1200}
            height={500}
            loading="lazy"
          />
          {category.image.credit ? (
            <figcaption className="mt-2 text-[11px] tracking-wide text-ink-faint">
              {category.image.credit}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
      <h3 className="font-zh text-2xl text-ink md:text-3xl">{category.title}</h3>
      <p className="prose-narrow mt-4 text-[15px] leading-relaxed text-ink-muted">
        {category.intro}
      </p>
      <div className="mt-6">
        {category.restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </section>
  )
}
