import type { EatCategory } from '../content/hongKong'
import { RestaurantCard } from './RestaurantCard'

type Props = { category: EatCategory }

export function CategorySection({ category }: Props) {
  return (
    <section id={category.id} className="food-category scroll-mt-40 border-t border-border py-9 first:border-t-0 md:py-10">
      <div className={`food-category-heading ${category.image ? '' : 'food-category-heading--text'}`}>
      {category.image ? (
        <figure className="food-category-picture">
          <img
            src={category.image.src}
            alt={category.image.alt}
            className="aspect-[4/3] w-full rounded-xl object-cover md:aspect-[3/2]"
            width={1200}
            height={500}
            loading="lazy"
          />
          {category.image.credit ? (
            <figcaption className="mt-2 text-note text-balance text-ink-faint">
              {category.image.credit}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
      <h3 className="food-category-title font-zh text-2xl text-ink md:text-3xl">{category.title}</h3>
      <p className="food-category-intro text-body text-ink-muted">
        {category.intro}
      </p>
      </div>
      <div className="mt-7 border-t border-border">
        {category.restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </section>
  )
}
