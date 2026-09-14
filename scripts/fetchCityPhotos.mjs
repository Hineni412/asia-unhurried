// Fetch real photos for the 11 directory cities from Wikimedia Commons.
// - Slots are derived from source files: attraction ids, neighborhood image keys,
//   and a `hero-<slug>` slot per city.
// - For each slot we search Commons, pick the first suitably licensed bitmap
//   (CC BY / CC BY-SA / CC0 / Public domain), download a ~1200px thumbnail to
//   public/images/cities/, and regenerate src/content/cities/photoData.ts and
//   the managed CREDITS section in CREDITS.md.
// Usage:
//   node scripts/fetchCityPhotos.mjs            # fill missing slots only
//   node scripts/fetchCityPhotos.mjs --force    # re-fetch everything
//   node scripts/fetchCityPhotos.mjs --only tokyo,kyoto
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs'
import { join } from 'path'

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')
const OUT_DIR = join(ROOT, 'public/images/cities')
const EAT_DIR = join(ROOT, 'public/images/eat')
const PHOTO_DATA = join(ROOT, 'src/content/cities/photoData.ts')
const CREDITS = join(ROOT, 'CREDITS.md')
const API = 'https://commons.wikimedia.org/w/api.php'
const FORCE = process.argv.includes('--force')
const ONLY = (process.argv.find((a) => a.startsWith('--only')) ? process.argv[process.argv.indexOf('--only') + 1] : null)?.split(',') ?? null

const OK_LICENSE = /^(CC BY( |-SA)?( [0-9.]+)?|CC0|Public domain)/i

const CITY_NAME = {
  tokyo: 'Tokyo', kyoto: 'Kyoto', seoul: 'Seoul', taipei: 'Taipei', hanoi: 'Hanoi',
  'hoi-an': 'Hoi An', 'chiang-mai': 'Chiang Mai', bangkok: 'Bangkok',
  'kuala-lumpur': 'Kuala Lumpur', singapore: 'Singapore', macau: 'Macau',
  osaka: 'Osaka', fukuoka: 'Fukuoka', jeju: 'Jeju', busan: 'Busan',
  'hong-kong': 'Hong Kong', penang: 'Penang',
}

// Search-query overrides where nameLocal alone is ambiguous.
const QUERY = {
  'senso-ji': 'Senso-ji Asakusa Tokyo', 'meiji-jingu': 'Meiji Jingu shrine torii',
  'shinjuku-gyoen': 'Shinjuku Gyoen garden', 'tokyo-national-museum': 'Tokyo National Museum Honkan',
  'tsukiji-outer-market': 'Tsukiji outer market', 'kinkaku-ji': 'Kinkaku-ji',
  'ginkaku-ji': 'Ginkaku-ji temple', 'kiyomizu-dera': 'Kiyomizu-dera',
  'fushimi-inari': 'Fushimi Inari torii', 'arashiyama-bamboo': 'Arashiyama bamboo grove',
  'nishiki-market': 'Nishiki market Kyoto', 'gyeongbokgung': 'Gyeongbokgung palace',
  'changdeokgung': 'Changdeokgung Injeongjeon', 'bukchon-hanok': 'Bukchon Hanok Village',
  'gwangjang-market': '광장시장 Gwangjang', 'n-seoul-tower': 'N Seoul Tower Namsan',
  'national-museum-korea': 'National Museum of Korea building Seoul',
  'longshan-temple': 'Longshan Temple Taipei', 'bopiliao': 'Bopiliao Taipei',
  'dihua-street': 'Dihua Street Taipei', 'national-palace-museum': 'National Palace Museum Taipei',
  'cks-memorial': 'Chiang Kai-shek Memorial Hall', xiangshan: 'Elephant Mountain Taipei',
  'hoan-kiem-lake': 'Hoan Kiem Lake Hanoi', 'temple-of-literature': 'Temple of Literature Hanoi',
  'hcm-mausoleum': 'Ho Chi Minh Mausoleum', 'st-joseph-cathedral': 'St Joseph Cathedral Hanoi',
  'old-quarter-hanoi': 'Dong Xuan market Hanoi', 'train-street': 'Hanoi train street',
  'japanese-bridge': 'Japanese Covered Bridge Hoi An', 'tan-ky-house': 'Tan Ky house Hoi An',
  'fujian-hall': 'Fujian Assembly Hall Hoi An', 'hoi-an-lantern': 'Hoi An lanterns night',
  'hoi-an-market': 'Hoi An central market', 'wat-phra-singh': 'Wat Phra Singh Chiang Mai',
  'wat-chedi-luang': 'Wat Chedi Luang', 'doi-suthep': 'Wat Phra That Doi Suthep',
  'wat-umong': 'Wat Umong Chiang Mai', 'sunday-walking-street': 'Chiang Mai Sunday walking street',
  'grand-palace': 'Grand Palace Bangkok', 'wat-pho': 'Wat Pho Bangkok',
  'wat-arun': 'Wat Arun', 'lumphini-park': 'Lumphini Park Bangkok',
  'chatuchak-market': 'Chatuchak market', 'jim-thompson-house': 'Jim Thompson House museum',
  'petronas-towers': 'Petronas Towers',
  'merdeka-square': 'Merdeka Square Kuala Lumpur', 'batu-caves': 'Batu Caves',
  'petaling-street': 'Petaling Street Kuala Lumpur', 'central-market-kl': 'Central Market Kuala Lumpur art deco',
  'masjid-negara': 'Masjid Negara Kuala Lumpur', 'gardens-by-the-bay': 'Gardens by the Bay supertree',
  'merlion-park': 'Merlion Park Singapore', 'buddha-tooth-relic': 'Buddha Tooth Relic Temple Singapore',
  'maxwell-food-centre': 'Maxwell Food Centre', 'national-museum-sg': 'National Museum of Singapore exterior',
  'sentosa': 'Sentosa island Singapore', 'ruins-st-paul': 'Ruins of St Paul Macau',
  'senado-square': 'Senado Square Macau', 'a-ma-temple': 'A-Ma Temple Macau',
  'macau-museum': 'Macau Museum Mount Fortress', 'coloane-village': 'Coloane village Macau',
  'venetian-macao': 'Venetian Macao',
  // osaka / fukuoka / jeju / busan attractions
  'osaka-castle': 'Osaka Castle', 'dotonbori': 'Dotonbori Osaka canal',
  'hozenji-yokocho': 'Hozenji Osaka', 'shinsekai-tsutenkaku': 'Tsutenkaku Shinsekai Osaka',
  shitennoji: 'Shitennoji temple Osaka', 'sumiyoshi-taisha': 'Sumiyoshi Taisha Osaka sorihashi bridge',
  'kuromon-market': 'Kuromon Ichiba', 'nakanoshima-park': 'Nakanoshima Osaka Central Public Hall',
  'osaka-museum-history': 'Osaka Museum of History building', 'namba-yasaka': 'Namba Yasaka Shrine lion head',
  'umeda-sky': 'Umeda Sky Building Osaka', 'dazaifu-tenmangu': 'Dazaifu Tenmangu shrine',
  'ohori-park': 'Ohori Park Fukuoka', 'kushida-shrine': 'Kushida Shrine Fukuoka',
  'kawabata-shotengai': 'Kawabata shopping street Fukuoka', 'nakasu-yatai': 'Nakasu yatai Fukuoka night',
  'fukuoka-tower': 'Fukuoka Tower', 'hakata-oldtown-temples': 'Tochoji Fukuoka',
  'sumiyoshi-jinja-fukuoka': 'Sumiyoshi Shrine Fukuoka city', 'itoshima-futamigaura': 'Sakurai Futamigaura Itoshima',
  'hakata-station': 'Hakata Station Fukuoka building', hallasan: 'Hallasan mountain Jeju',
  'seongsan-ilchulbong': 'Seongsan Ilchulbong Jeju', seopjikoji: 'Seopjikoji',
  'udo-island': 'Udo island Jeju beach', 'dongmun-market-jeju': 'Dongmun traditional market Jeju',
  'jeongbang-falls': 'Jeongbang Pokpo Jeju', 'seogwipo-market': 'Seogwipo market Jeju',
  'hamdeok-beach': 'Hamdeok beach Jeju', 'aewol-coast': '애월 Jeju Aewol',
  manjanggul: 'Manjanggul lava tube Jeju', 'jagalchi-market': 'Jagalchi fish market Busan',
  'gamcheon-village': 'Gamcheon Culture Village Busan', 'haeundae-beach': 'Haeundae beach Busan',
  'dongbaek-island': 'Dongbaekseom island Busan', 'blueline-park': 'Songjeong beach Busan',
  'haedong-yonggungsa': 'Haedong Yonggungsa temple Busan', beomeosa: 'Beomeosa temple Busan',
  'gwangalli-beach': 'Gwangalli beach Gwangan bridge night', 'bupyeong-market': 'Bupyeong market Busan',
  'yongdusan-park': 'Busan Tower Yongdusan park', taejongdae: 'Taejongdae Busan cliffs',
  // neighbourhoods + heroes
  'tokyo-shinjuku': 'Shinjuku Tokyo street', 'tokyo-ueno': 'Ueno Park Tokyo',
  'tokyo-asakusa': 'Asakusa Tokyo Kaminarimon', 'tokyo-nihonbashi': 'Nihonbashi Tokyo',
  'tokyo-kichijoji': 'Kichijoji Tokyo', 'kyoto-station': 'Kyoto Station building',
  'kyoto-higashiyama': 'Higashiyama Kyoto street', 'kyoto-arashiyama': 'Arashiyama Kyoto',
  'kyoto-kita': 'Kita-ku Kyoto', 'kyoto-okazaki': 'Okazaki Kyoto canal',
  'seoul-jongno': 'Jongno Seoul', 'seoul-myeongdong': 'Myeongdong Seoul',
  'seoul-hongdae': 'Hongdae Seoul', 'seoul-itaewon': 'Itaewon Seoul',
  'taipei-ximen': 'Ximending Taipei', 'taipei-dadaocheng': 'Dadaocheng Taipei',
  'taipei-zhongshan': 'Yongkang Street Taipei', 'taipei-songshan': 'Raohe Street Night Market',
  'hanoi-old-quarter': 'Hanoi old quarter', 'hanoi-french-quarter': 'Hanoi Opera House',
  'hanoi-ba-dinh': 'Ba Dinh Square Hanoi', 'hanoi-west-lake': 'West Lake Hanoi Tran Quoc',
  'hoian-old-town': 'Hoi An ancient town', 'hoian-ricefields': 'Hoi An rice fields',
  'hoian-an-bang': 'An Bang beach Hoi An', 'chiangmai-old-city': 'Chiang Mai old city moat',
  'chiangmai-nimman': 'Nimmanhaemin Chiang Mai', 'chiangmai-riverside': 'Ping river Chiang Mai',
  'chiangmai-doi-suthep': 'Doi Suthep Chiang Mai city view', 'bangkok-sukhumvit': 'Sukhumvit Bangkok',
  'bangkok-riverside': 'Chao Phraya river Bangkok', 'bangkok-chinatown': 'Yaowarat Bangkok',
  'bangkok-chatuchak': 'Chatuchak Bangkok', 'kl-sentral': 'KL Sentral',
  'kl-bukit-bintang': 'Bukit Bintang Kuala Lumpur', 'kl-merdeka': 'Sultan Abdul Samad Building Kuala Lumpur',
  'kl-klcc': 'KLCC park Kuala Lumpur', 'sg-chinatown': 'Chinatown Singapore shophouses',
  'sg-little-india': 'Little India Singapore', 'sg-kampong-glam': 'Sultan Mosque Singapore',
  'sg-marina-bay': 'Marina Bay Sands Singapore', 'mo-historic': 'Historic Centre of Macau',
  'mo-ma-gau': 'A-Ma Temple Macau incense', 'mo-cotai': 'Cotai Macau resorts',
  'mo-coloane': 'Coloane Macau', 'hero-tokyo': 'Tokyo skyline Shinjuku',
  'hero-kyoto': 'Kyoto Higashiyama Yasaka', 'hero-seoul': 'Seoul skyline',
  'hero-taipei': 'Taipei 101 skyline', 'hero-hanoi': 'Hanoi skyline',
  'hero-hoi-an': 'Hoi An ancient town river', 'hero-chiang-mai': 'Chiang Mai city Thailand',
  'hero-bangkok': 'Bangkok Wat Arun river', 'hero-kuala-lumpur': 'Kuala Lumpur skyline Petronas',
  'hero-singapore': 'Singapore Marina Bay skyline', 'hero-macau': 'Macau cityscape',
  'hero-osaka': 'Osaka skyline Umeda', 'hero-fukuoka': 'Fukuoka city skyline',
  'hero-jeju': 'Jeju island Seongsan Ilchulbong', 'hero-busan': 'Busan Gwangan bridge skyline',
  'osaka-namba': 'Dotonbori Osaka night', 'osaka-shinsekai': 'Shinsekai Osaka street',
  'osaka-umeda': 'Umeda Osaka buildings',
  'osaka-nakanoshima': 'Nakanoshima Osaka river', 'fukuoka-hakata': 'Hakata Fukuoka street',
  'fukuoka-tenjin': 'Tenjin Fukuoka', 'fukuoka-nakasu': 'Nakasu Fukuoka night',
  'fukuoka-ohori': 'Ohori Park Fukuoka lake', 'jeju-oldtown': 'Jeju city Dongmun market',
  'jeju-newtown': 'Jeju City street', 'jeju-seongsan': 'Seongsan Jeju coast',
  'jeju-seogwipo': 'Seogwipo Jeju harbor', 'busan-nampo': 'Jagalchi Busan Nampo',
  'busan-seomyeon': 'Seomyeon Busan street', 'busan-haeundae': 'Haeundae Busan skyline',
  'busan-gwangalli': 'Gwangalli Busan beach', 'busan-gamcheon': 'Gamcheon village Busan houses',
  'hero-hong-kong': 'Victoria Harbour Hong Kong Star Ferry',
  'hero-penang': 'George Town Penang shophouses street',
}

// One photo per eat category. Keys follow `eat-<citySlug>-<categoryId>`;
// content wires them in via `foodImages[key]` (cities/index.ts attaches
// automatically for the directory cities; hongKong.ts/penang.ts reference
// the keys directly).
const FOOD = {
  // hong kong
  'eat-hong-kong-cha-chaan-teng': 'cha chaan teng milk tea Hong Kong',
  'eat-hong-kong-dim-sum': 'dim sum bamboo steamer Hong Kong',
  'eat-hong-kong-noodles': 'wonton noodles Hong Kong',
  'eat-hong-kong-roast': 'siu mei roast goose Hong Kong',
  'eat-hong-kong-dai-pai-dong': 'dai pai dong Hong Kong food',
  'eat-hong-kong-dessert': 'Hong Kong dessert shop sweet soup',
  'eat-hong-kong-cantonese': 'Cantonese food Hong Kong restaurant',
  'eat-hong-kong-vegetarian': 'Chinese Buddhist vegetarian food',
  // penang
  'eat-penang-char-kuey-teow': 'char kway teow Penang',
  'eat-penang-asam-laksa': 'Penang asam laksa',
  'eat-penang-hokkien-mee': 'Penang hokkien mee prawn noodle',
  'eat-penang-hawker-snacks': 'Penang hawker stall food',
  'eat-penang-nyonya-sitdown': 'Nyonya cuisine Penang',
  'eat-penang-nasi-kandar': 'nasi kandar Penang',
  'eat-penang-chendul': 'cendol Penang',
  'eat-penang-curry-mee': 'curry mee Penang',
  // tokyo
  'eat-tokyo-ramen': 'ramen bowl Japan',
  'eat-tokyo-sushi': 'sushi plate Japan',
  'eat-tokyo-teishoku': 'tonkatsu teishoku Japan',
  'eat-tokyo-izakaya': 'izakaya dishes Japan food',
  'eat-tokyo-tsukiji': 'Tsukiji outer market food',
  // kyoto
  'eat-kyoto-soba': 'soba noodles Japan bowl',
  'eat-kyoto-tofu': 'yudofu tofu Kyoto',
  'eat-kyoto-matcha': 'matcha wagashi green tea',
  'eat-kyoto-cafe': 'Kyoto cafe interior coffee',
  'eat-kyoto-nishiki': 'Nishiki market Kyoto food',
  // osaka
  'eat-osaka-konamono': 'okonomiyaki Osaka',
  'eat-osaka-udon': 'kitsune udon Osaka',
  'eat-osaka-market': 'Kuromon market Osaka seafood',
  'eat-osaka-cafe-sweets': 'Japanese pancake dessert cafe',
  // fukuoka
  'eat-fukuoka-ramen': 'Hakata ramen tonkotsu',
  'eat-fukuoka-regional': 'mentaiko Fukuoka food',
  'eat-fukuoka-yatai': 'yatai Fukuoka food stall',
  'eat-fukuoka-cafe': 'Fukuoka coffee shop cafe',
  // seoul
  'eat-seoul-market': 'Gwangjang Market Seoul',
  'eat-seoul-bbq': 'Korean barbecue samgyeopsal',
  'eat-seoul-soup': 'samgyetang ginseng chicken soup',
  'eat-seoul-cafe': 'Seoul cafe coffee',
  'eat-seoul-anju': 'Korean fried chicken chimaek',
  // jeju
  'eat-jeju-black-pork': 'Jeju black pork barbecue',
  'eat-jeju-seafood': 'Jeju seafood',
  'eat-jeju-market': 'Jeju traditional market',
  'eat-jeju-cafe': 'Jeju cafe coffee',
  // busan
  'eat-busan-gukbap': 'gukbap Korean pork soup rice',
  'eat-busan-seafood-market': 'Jagalchi market Busan fish',
  'eat-busan-night-market': 'Bupyeong Kkangtong market food',
  'eat-busan-cafe': 'Haeundae Busan cafe',
  // taipei
  'eat-taipei-breakfast': 'Taiwanese breakfast soy milk youtiao',
  'eat-taipei-beef-noodle': 'Taiwanese beef noodle soup',
  'eat-taipei-night-market': 'Taiwan night market food',
  'eat-taipei-dessert': 'Taiwanese shaved ice dessert',
  'eat-taipei-teahouse': 'Taiwanese tea teahouse',
  // hanoi
  'eat-hanoi-pho': 'pho bo Hanoi bowl',
  'eat-hanoi-buncha': 'bun cha Hanoi',
  'eat-hanoi-coffee': 'Vietnamese egg coffee Hanoi',
  'eat-hanoi-street-stall': 'banh mi Hanoi street',
  'eat-hanoi-bia-hoi': 'bia hoi Hanoi',
  // hoi an
  'eat-hoi-an-cao-lau': 'cao lau Hoi An noodle',
  'eat-hoi-an-white-rose': 'Hoi An white rose dumpling',
  'eat-hoi-an-banh-mi': 'Banh Mi Phuong Hoi An',
  'eat-hoi-an-riverside': 'Hoi An riverside restaurant',
  'eat-hoi-an-cafe-tea': 'Vietnamese coffee Hoi An',
  // chiang mai
  'eat-chiang-mai-khao-soi': 'khao soi Chiang Mai',
  'eat-chiang-mai-northern': 'Northern Thai cuisine sai ua',
  'eat-chiang-mai-night-market': 'Chiang Mai night market food',
  'eat-chiang-mai-cafe': 'coffee Chiang Mai cafe',
  'eat-chiang-mai-cooking': 'Thai cooking class Chiang Mai',
  // bangkok
  'eat-bangkok-street': 'Bangkok street food pad thai',
  'eat-bangkok-chinatown': 'Yaowarat street food Bangkok',
  'eat-bangkok-foodcourt': 'Bangkok food court food',
  'eat-bangkok-boat-noodle': 'boat noodle soup Thailand',
  'eat-bangkok-cafe': 'Bangkok cafe coffee',
  // kuala lumpur
  'eat-kuala-lumpur-nasi-lemak': 'nasi lemak Malaysia',
  'eat-kuala-lumpur-hawker': 'Malaysian hawker food Kuala Lumpur',
  'eat-kuala-lumpur-mamak': 'roti canai mamak Malaysia',
  'eat-kuala-lumpur-kopitiam': 'kopitiam white coffee Malaysia',
  'eat-kuala-lumpur-foodcourt': 'Kuala Lumpur food court',
  // singapore
  'eat-singapore-hawker': 'Singapore hawker centre food',
  'eat-singapore-chicken-rice': 'Hainanese chicken rice Singapore',
  'eat-singapore-laksa': 'Singapore laksa',
  'eat-singapore-bak-kut-teh': 'bak kut teh Singapore',
  'eat-singapore-kopitiam': 'kaya toast Singapore kopitiam',
  // macau
  'eat-macau-portuguese': 'Portuguese cuisine Macau restaurant',
  'eat-macau-egg-tart': 'Macau egg tart pastel de nata',
  'eat-macau-street-snack': 'Macau pork chop bun street food',
  'eat-macau-cha-chaan-teng': 'Macau cha chaan teng food',
}

// Per-attraction Commons source pages to never pick (wrong subject / off-topic).
const SKIP = {
  'gwangjang-market': [
    'https://commons.wikimedia.org/wiki/File:Dongdaemun_Shopping_Complex,_Seoul_4.jpg',
    'https://commons.wikimedia.org/wiki/File:Dongdaemun_Shopping_Complex,_Seoul_2.jpg',
  ],
  'national-museum-sg': [
    'https://commons.wikimedia.org/wiki/File:Revere_Bell_(1843),_Singapore_History_Gallery,_National_Museum_of_Singapore_(132749).jpg',
    'https://commons.wikimedia.org/wiki/File:Police_turret_bell,_National_Museum_of_Singapore_(134116).jpg',
    'https://commons.wikimedia.org/wiki/File:Ning_Yeung_Wui_Kuan_bell,_National_Museum_of_Singapore_(132851).jpg',
  ],
  'macau-museum': [
    'https://commons.wikimedia.org/wiki/File:Macao_Science_and_Culture_Centre,_Lisbon.JPG',
  ],
  'venetian-macao': [
    'https://commons.wikimedia.org/wiki/File:Macau_Venetian_Macao_McDonalds_Shop_a.jpg',
  ],
  'osaka-museum-history': [
    'https://commons.wikimedia.org/wiki/File:%E9%AB%98%E4%BA%95%E7%94%B0%E6%A8%AA%E7%A9%B4_%E7%AC%AC3%E6%94%AF%E7%BE%A45%E5%8F%B7_%E7%BE%A8%E9%81%93%E5%B7%A6%E5%A3%81%E7%B7%9A%E5%88%BB%E5%A3%81%E7%94%BB.JPG',
    'https://commons.wikimedia.org/wiki/File:Yabu_Meizan_-_Bowl_with_a_Multitude_of_Women_-_Walters_492280.jpg',
  ],
  'kuromon-market': [
    'https://commons.wikimedia.org/wiki/File:Kuromon_Ichiba_Market_at_Lalaport_Kadoma2.jpg',
    'https://commons.wikimedia.org/wiki/File:Kuromon_Ichiba_Market_at_LaLaport_Kadoma4.jpg',
    'https://commons.wikimedia.org/wiki/File:Kuromon_Ichiba_Market_at_Lalaport_Kadoma3.jpg',
    'https://commons.wikimedia.org/wiki/File:Kuromon_Ichiba_Market_at_Lalaport_Kadoma1.jpg',
    'https://commons.wikimedia.org/wiki/File:Kuromon_Ichiba_Market_Paper_Lantern_at_LaLaport_Kadoma.jpg',
    'https://commons.wikimedia.org/wiki/File:Takoyaki_Wanaka_at_LaLaport_Kadoma_Kuromon_Ichiba_Market.jpg',
  ],
  'itoshima-futamigaura': [
    'https://commons.wikimedia.org/wiki/File:Ise.-Sanctuaire_plage_de_Futamigaura.jpg',
  ],
  'eat-hong-kong-cantonese': [
    'https://commons.wikimedia.org/wiki/File:Frog_legs_in_Poznan.jpg',
    'https://commons.wikimedia.org/wiki/File:HK_TM_%E5%B1%AF%E9%96%80%E9%86%AB%E9%99%A2_Tuen_Mun_Hospital_dinner_canteen_restaurant_July_2016_shop_food_%E8%B1%89%E6%B2%B9%E7%9A%87%E7%82%92%E9%BA%B5_Cantonese_Soy_Sauce_Pan-fried_Noodles_DSC.jpg',
  ],
  'eat-seoul-market': [
    'https://commons.wikimedia.org/wiki/File:Dongdaemun_Shopping_Complex,_Seoul_4.jpg',
    'https://commons.wikimedia.org/wiki/File:Dongdaemun_Shopping_Complex,_Seoul_2.jpg',
  ],
  'eat-tokyo-izakaya': [
    'https://commons.wikimedia.org/wiki/File:2_Chome_Kitazawa,_Setagaya-ku,_T%C5%8Dky%C5%8D-to_155-0031,_Japan_-_panoramio_(288).jpg',
  ],
  'eat-kyoto-cafe': [
    'https://commons.wikimedia.org/wiki/File:Tomonoura05s2000.jpg',
  ],
  'eat-hoi-an-banh-mi': [
    'https://commons.wikimedia.org/wiki/File:Honeymoon_Part_1_Hoi_An,_Vietnam_(16126266008).jpg',
    'https://commons.wikimedia.org/wiki/File:Sliced_pork_belly_for_banh_mi,_Vietnamese_sandwiches.jpg',
  ],
}

function collectSlots() {
  const cityDir = join(ROOT, 'src/content/cities')
  const attDir = join(cityDir, 'attractions')
  const slots = { attractions: [], images: new Map() }

  for (const f of readdirSync(attDir).filter((x) => x.endsWith('.ts') && x !== 'index.ts')) {
    const src = readFileSync(join(attDir, f), 'utf8')
    for (const m of src.matchAll(/id: '([a-z0-9-]+)',\s*city: '([a-z0-9-]+)',\s*name: '([^']+)',\s*nameLocal: '([^']+)'/g)) {
      slots.attractions.push({ id: m[1], city: m[2], name: m[3], nameLocal: m[4] })
    }
  }
  for (const f of readdirSync(cityDir).filter((x) => x.endsWith('.ts') && !['types.ts', 'shared.ts', 'index.ts', 'photoData.ts'].includes(x))) {
    const src = readFileSync(join(cityDir, f), 'utf8')
    for (const m of src.matchAll(/cityImages\['([a-z0-9-]+)'\]/g)) {
      if (!slots.images.has(m[1])) slots.images.set(m[1], m[1])
    }
  }
  for (const slug of Object.keys(CITY_NAME)) slots.images.set(`hero-${slug}`, `hero-${slug}`)
  return slots
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function commonsSearch(query, limit = 12) {
  const url = `${API}?action=query&format=json&origin=*&generator=search&gsrsearch=${encodeURIComponent(query + ' filetype:bitmap')}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1400`
  let res
  for (let attempt = 0; attempt < 4; attempt++) {
    res = await fetch(url, { headers: { 'User-Agent': 'asia-unhurried/1.0 (photo fetch)' } })
    if (res.status !== 429) break
    const wait = Number(res.headers.get('retry-after') ?? 0) * 1000 || 5000 * (attempt + 1)
    await sleep(wait)
  }
  if (!res.ok) throw new Error(`commons api ${res.status}`)
  const data = await res.json()
  const pages = Object.values(data.query?.pages ?? {})
  pages.sort((a, b) => (a.index ?? 99) - (b.index ?? 99))
  return pages
}

function pickImages(pages, n, skip = new Set()) {
  const hits = []
  for (const p of pages) {
    if (hits.length >= n) break
    const ii = p.imageinfo?.[0]
    if (!ii?.thumburl || (ii.width ?? 0) < 900) continue
    const meta = ii.extmetadata ?? {}
    const lic = (meta.LicenseShortName?.value ?? '').replace(/<[^>]+>/g, '').trim()
    if (!OK_LICENSE.test(lic)) continue
    if (skip.has(ii.descriptionurl) || hits.some((h) => h.sourcePage === ii.descriptionurl)) continue
    const artist = (meta.Artist?.value ?? 'Wikimedia Commons').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    const licUrl = meta.LicenseUrl?.value ?? 'https://commons.wikimedia.org/'
    hits.push({ thumb: ii.thumburl, sourcePage: ii.descriptionurl, author: artist, license: lic, licenseUrl: licUrl, title: p.title })
  }
  return hits
}

const pickImage = (pages, skip) => pickImages(pages, 1, skip)[0] ?? null

async function download(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': 'asia-unhurried/1.0 (photo fetch)' } })
  if (!res.ok) throw new Error(`download ${res.status} ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  writeFileSync(dest, buf)
  return buf.length
}

const esc = (s) => s.replace(/\s+/g, ' ').replace(/\\/g, '\\\\').replace(/'/g, "\\'")

async function main() {
  mkdirSync(OUT_DIR, { recursive: true })
  const slots = collectSlots()
  const credits = []
  const images = {}
  const attractionPhotos = {}

  const imageSlots = [...slots.images.keys()].filter((k) => !ONLY || ONLY.some((o) => k.includes(o)))
  for (const key of imageSlots) {
    const file = `${key}.jpg`
    const dest = join(OUT_DIR, file)
    if (!FORCE && existsSync(dest)) {
      credits.push({ key, file, reuse: true })
      continue
    }
    const query = QUERY[key] ?? key.replace(/-/g, ' ')
    try {
      const hit = pickImage(await commonsSearch(query))
      if (!hit) { console.log(`NO IMAGE ${key} (${query})`); continue }
      const bytes = await download(hit.thumb, dest)
      images[key] = { src: `/images/cities/${file}`, alt: hit.title.replace(/^File:/, '').replace(/\.\w+$/, ''), credit: `${hit.author} · ${hit.license}`, author: hit.author, license: hit.license, source: hit.sourcePage }
      credits.push({ key, file, ...hit })
      console.log(`OK ${key} <- ${hit.title} (${Math.round(bytes / 1024)}kB, ${hit.license})`)
    } catch (e) {
      console.log(`FAIL ${key}: ${e.message}`)
    }
    await sleep(1200)
  }

  // Parse previously generated photoData so existing files keep their entries.
  const existing = existsSync(PHOTO_DATA) ? readFileSync(PHOTO_DATA, 'utf8') : ''
  const prevAtt = new Map()
  for (const m of existing.matchAll(/  '([a-z0-9-]+)': \[\n([\s\S]*?)\n  \]/g)) {
    const photos = [...m[2].matchAll(/\{ src: '([^']+)', alt: '((?:[^'\\]|\\.)*)', caption: '((?:[^'\\]|\\.)*)', author: '((?:[^'\\]|\\.)*)', license: '((?:[^'\\]|\\.)*)', licenseUrl: '((?:[^'\\]|\\.)*)', source: '((?:[^'\\]|\\.)*)' \}/g)]
      .map((p) => ({ src: p[1], alt: p[2].replace(/\\'/g, "'"), caption: p[3].replace(/\\'/g, "'"), author: p[4].replace(/\\'/g, "'"), license: p[5].replace(/\\'/g, "'"), licenseUrl: p[6].replace(/\\'/g, "'"), source: p[7].replace(/\\'/g, "'") }))
      .filter((p) => existsSync(join(ROOT, 'public', p.src)))
    if (photos.length > 0) prevAtt.set(m[1], photos)
  }

  const TARGET_ATT = 4
  const attSlots = slots.attractions.filter((a) => !ONLY || ONLY.some((o) => a.city.includes(o) || a.id.includes(o)))
  for (const a of attSlots) {
    const prev = FORCE ? [] : (prevAtt.get(a.id) ?? [])
    if (prev.length >= TARGET_ATT) {
      attractionPhotos[a.id] = prev
      prev.forEach((p) => credits.push({ key: a.id, file: p.src.split('/').pop(), reuse: true }))
      continue
    }
    const query = QUERY[a.id] ?? `${a.nameLocal} ${CITY_NAME[a.city] ?? a.city}`
    try {
      const skip = new Set([...(SKIP[a.id] ?? []), ...prev.map((p) => p.source)])
      const hits = pickImages(await commonsSearch(query, 24), TARGET_ATT - prev.length, skip)
      const photos = [...prev]
      let nextIdx = 1 + Math.max(0, ...photos.map((p) => Number(p.src.match(/-(\d+)\.\w+$/)?.[1] ?? 0)))
      for (const hit of hits) {
        const file = `${a.id}-${nextIdx++}.jpg`
        try {
          const bytes = await download(hit.thumb, join(OUT_DIR, file))
          const alt = hit.title.replace(/^File:/, '').replace(/\.\w+$/, '')
          photos.push({ src: `/images/cities/${file}`, alt, caption: a.name, author: hit.author, license: hit.license, licenseUrl: hit.licenseUrl, source: hit.sourcePage })
          credits.push({ key: a.id, file, ...hit })
          console.log(`OK ${file} <- ${hit.title} (${Math.round(bytes / 1024)}kB, ${hit.license})`)
        } catch (e) {
          console.log(`SKIP ${file}: ${e.message}`)
        }
        await sleep(300)
      }
      if (photos.length > 0) {
        attractionPhotos[a.id] = photos
        prev.forEach((p) => credits.push({ key: a.id, file: p.src.split('/').pop(), reuse: true }))
        const keep = new Set(photos.map((p) => p.src.split('/').pop()))
        for (const f of readdirSync(OUT_DIR).filter((f) => f.startsWith(`${a.id}-`))) {
          if (!keep.has(f)) unlinkSync(join(OUT_DIR, f))
        }
        if (photos.length < TARGET_ATT) console.log(`PARTIAL ${a.id}: ${photos.length}/${TARGET_ATT} (${query})`)
      } else {
        console.log(`NO IMAGE ${a.id} (${query})`)
      }
    } catch (e) {
      console.log(`FAIL ${a.id}: ${e.message}`)
    }
    await sleep(1200)
  }
  const prevImages = Object.fromEntries([...existing.matchAll(/'([a-z0-9-]+)': \{ src: '([^']+)', alt: '((?:[^'\\]|\\.)*)', credit: '((?:[^'\\]|\\.)*)'(?:, author: '((?:[^'\\]|\\.)*)', license: '((?:[^'\\]|\\.)*)', source: '((?:[^'\\]|\\.)*)')? \}/g)]
    .map((m) => [m[1], { src: m[2], alt: m[3].replace(/\\'/g, "'"), credit: m[4].replace(/\\'/g, "'"), ...(m[5] ? { author: m[5].replace(/\\'/g, "'"), license: m[6].replace(/\\'/g, "'"), source: m[7].replace(/\\'/g, "'") } : {}) }]))
  for (const key of Object.keys(prevImages)) if (!images[key] && existsSync(join(OUT_DIR, `${key}.jpg`))) images[key] = prevImages[key]

  // Food-category photos: one per category, keyed `eat-<city>-<categoryId>`,
  // stored under public/images/eat/ and exported as `foodImages`.
  mkdirSync(EAT_DIR, { recursive: true })
  const prevFoodBlock = existing.match(/export const foodImages: Record<string, CityImage> = \{\n([\s\S]*?)\n\}/)?.[1] ?? ''
  const prevFood = Object.fromEntries([...prevFoodBlock.matchAll(/'([a-z0-9-]+)': \{ src: '([^']+)', alt: '((?:[^'\\]|\\.)*)', credit: '((?:[^'\\]|\\.)*)'(?:, author: '((?:[^'\\]|\\.)*)', license: '((?:[^'\\]|\\.)*)', source: '((?:[^'\\]|\\.)*)')? \}/g)]
    .map((m) => [m[1], { src: m[2], alt: m[3].replace(/\\'/g, "'"), credit: m[4].replace(/\\'/g, "'"), ...(m[5] ? { author: m[5].replace(/\\'/g, "'"), license: m[6].replace(/\\'/g, "'"), source: m[7].replace(/\\'/g, "'") } : {}) }]))
  const food = {}
  const foodSlots = Object.keys(FOOD).filter((k) => !ONLY || ONLY.some((o) => k.includes(o)))
  for (const key of foodSlots) {
    const file = `${key}.jpg`
    const dest = join(EAT_DIR, file)
    if (!FORCE && existsSync(dest)) {
      food[key] = prevFood[key] ?? { src: `/images/eat/${file}`, alt: key, credit: '' }
      credits.push({ key, file, reuse: true })
      continue
    }
    const query = FOOD[key]
    try {
      const hit = pickImage(await commonsSearch(query), new Set(SKIP[key] ?? []))
      if (!hit) { console.log(`NO IMAGE ${key} (${query})`); continue }
      const bytes = await download(hit.thumb, dest)
      food[key] = { src: `/images/eat/${file}`, alt: hit.title.replace(/^File:/, '').replace(/\.\w+$/, ''), credit: `${hit.author} · ${hit.license}`, author: hit.author, license: hit.license, source: hit.sourcePage }
      credits.push({ key, file, ...hit })
      console.log(`OK ${file} <- ${hit.title} (${Math.round(bytes / 1024)}kB, ${hit.license})`)
    } catch (e) {
      console.log(`FAIL ${key}: ${e.message}`)
    }
    await sleep(1200)
  }
  for (const key of Object.keys(prevFood)) if (!food[key] && existsSync(join(EAT_DIR, `${key}.jpg`))) food[key] = prevFood[key]

  // Backfill author/license/source for city images carried over from before the
  // multi-photo run: resolve the Commons File page from the stored alt title.
  const needMeta = Object.entries(images).filter(([, v]) => !v.source)
  if (needMeta.length > 0) {
    const EXTS = ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG', 'webp']
    const allTitles = []
    for (const [, img] of needMeta) {
      for (const ext of EXTS) allTitles.push(`File:${img.alt}.${ext}`)
    }
    const found = new Set()
    for (let i = 0; i < allTitles.length; i += 40) {
      const batch = allTitles.slice(i, i + 40)
      const url = `${API}?action=query&format=json&origin=*&titles=${encodeURIComponent(batch.join('|'))}&prop=imageinfo&iiprop=url|extmetadata`
      try {
        const res = await fetch(url, { headers: { 'User-Agent': 'asia-unhurried/1.0 (photo fetch)' } })
        const data = await res.json()
        for (const p of Object.values(data.query?.pages ?? {})) {
          if (p.missing !== undefined || !p.imageinfo?.[0]) continue
          const norm = (s) => s.replace(/^File:/, '').replace(/\.\w+$/, '').replace(/_/g, ' ').toLowerCase()
          const realKey = needMeta.find(([k, v]) => !found.has(k) && norm(v.alt) === norm(p.title))?.[0]
          if (!realKey) continue
          const meta = p.imageinfo[0].extmetadata ?? {}
          images[realKey].author = (meta.Artist?.value ?? 'Wikimedia Commons').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
          images[realKey].license = (meta.LicenseShortName?.value ?? '').replace(/<[^>]+>/g, '').trim() || 'see source'
          images[realKey].source = p.imageinfo[0].descriptionurl
          found.add(realKey)
        }
      } catch (e) {
        console.log(`META FAIL batch ${i}: ${e.message}`)
      }
      await sleep(1200)
    }
    for (const [key] of needMeta.filter(([k]) => !found.has(k))) console.log(`META MISS ${key}`)
  }

  const imageEntries = Object.entries(images)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `  '${k}': { src: '${v.src}', alt: '${esc(v.alt)}', credit: '${esc(v.credit)}'${v.source ? `, author: '${esc(v.author)}', license: '${esc(v.license)}', source: '${esc(v.source)}'` : ''} },`)
    .join('\n')

  const foodEntries = Object.entries(food)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `  '${k}': { src: '${v.src}', alt: '${esc(v.alt)}', credit: '${esc(v.credit)}'${v.source ? `, author: '${esc(v.author)}', license: '${esc(v.license)}', source: '${esc(v.source)}'` : ''} },`)
    .join('\n')

  // Attractions not processed this run keep their previously generated entries.
  for (const [id, photos] of prevAtt) {
    if (!attractionPhotos[id]) attractionPhotos[id] = photos
  }

  const attEntries = Object.entries(attractionPhotos)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, photos]) => `  '${k}': [\n${photos.map((p) => `    { src: '${p.src}', alt: '${esc(p.alt)}', caption: '${esc(p.caption)}', author: '${esc(p.author)}', license: '${esc(p.license)}', licenseUrl: '${esc(p.licenseUrl)}', source: '${esc(p.source)}' },`).join('\n')}\n  ],`)
    .join('\n')

  writeFileSync(PHOTO_DATA, `// Generated by scripts/fetchCityPhotos.mjs — do not edit by hand.
// Photos downloaded from Wikimedia Commons with verified licences; see CREDITS.md.
import type { AttractionPhoto } from '../attractions'

export const cityAttractionPhotos: Record<string, AttractionPhoto[]> = {
${attEntries}
}

export type CityImage = { src: string; alt: string; credit: string; author?: string; license?: string; source?: string }
export const cityImages: Record<string, CityImage> = {
${imageEntries}
}

export const foodImages: Record<string, CityImage> = {
${foodEntries}
}
`)

  // Refresh managed CREDITS section deterministically from the generated data.
  const rows = []
  for (const img of Object.values(images)) {
    const file = img.src.split('/').pop()
    rows.push(`| \`cities/${file}\` | ${img.alt} | [Wikimedia Commons](<${img.source ?? ''}>) | ${img.author ?? '—'} | ${img.license ?? '—'} |`)
  }
  for (const img of Object.values(food)) {
    const file = img.src.split('/').pop()
    rows.push(`| \`eat/${file}\` | ${img.alt} | [Wikimedia Commons](<${img.source ?? ''}>) | ${img.author ?? '—'} | ${img.license ?? '—'} |`)
  }
  for (const photos of Object.values(attractionPhotos)) {
    for (const p of photos) {
      const file = p.src.split('/').pop()
      rows.push(`| \`cities/${file}\` | ${p.alt} | [Wikimedia Commons](<${p.source}>) | ${p.author} | ${p.license} |`)
    }
  }
  rows.sort()
  let md = readFileSync(CREDITS, 'utf8')
  const section = `\n## 写作城市图片（\`public/images/\`）\n\n| File | Subject | Source | Author | Licence |\n| --- | --- | --- | --- | --- |\n${rows.join('\n')}\n`
  md = md.replace(/\n## 写作城市图片[^\n]*[\s\S]*?(?=\n## |\s*$)/, '\n')
  writeFileSync(CREDITS, md.trimEnd() + '\n' + section)

  console.log(`\nDone: ${Object.keys(images).length} city images, ${Object.keys(food).length} food images, ${Object.keys(attractionPhotos).length} attraction photos, ${credits.filter((c) => !c.reuse).length} new downloads.`)
}

main().catch((e) => { console.error(e); process.exit(1) })
