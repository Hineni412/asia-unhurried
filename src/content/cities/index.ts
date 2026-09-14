import type { CityContent } from './types'
import { foodImages } from './photoData'
import { tokyo, kyoto, osaka, fukuoka } from './japan'
import { seoul, jeju, busan } from './korea'
import { taipei } from './taiwan'
import { hanoi, hoiAn } from './vietnam'
import { chiangMai, bangkok } from './thailand'
import { kualaLumpur } from './malaysia'
import { singapore, macau } from './standalone'

// Attach a real photo to each eat category when the pipeline has one under
// `eat-<slug>-<categoryId>`; categories keep working image-less otherwise.
const withFoodImages = (slug: string, c: CityContent): CityContent => ({
  ...c,
  categories: c.categories.map((cat) =>
    cat.image ? cat : { ...cat, image: foodImages[`eat-${slug}-${cat.id}`] },
  ),
})

const raw: Record<string, CityContent> = {
  tokyo,
  kyoto,
  osaka,
  fukuoka,
  seoul,
  jeju,
  busan,
  taipei,
  hanoi,
  'hoi-an': hoiAn,
  'chiang-mai': chiangMai,
  bangkok,
  'kuala-lumpur': kualaLumpur,
  singapore,
  macau,
}

export const CITY_CONTENT: Record<string, CityContent> = Object.fromEntries(
  Object.entries(raw).map(([slug, c]) => [slug, withFoodImages(slug, c)]),
)
