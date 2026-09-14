import type { Attraction } from '../../attractions'
import { japanAttractions } from './japan'
import { koreaAttractions } from './korea'
import { taiwanAttractions } from './taiwan'
import { vietnamAttractions } from './vietnam'
import { thailandAttractions } from './thailand'
import { malaysiaAttractions } from './malaysia'
import { standaloneAttractions } from './standalone'

export const cityAttractions: Attraction[] = [
  ...japanAttractions,
  ...koreaAttractions,
  ...taiwanAttractions,
  ...vietnamAttractions,
  ...thailandAttractions,
  ...malaysiaAttractions,
  ...standaloneAttractions,
]
