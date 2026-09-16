// 一次性校准脚本：按 research/hotel-prices-*.md 的近一年数据，
// 1) 更新各城 stay.areas 的 band（中档双人间常见区间，¥/晚）；
// 2) 按新旧中位价比值等比缩放 stayMaps/<slug>.ts 里该片区的 heat 锚点 value。
import fs from 'node:fs'
import path from 'node:path'

const NEW = {
  // 东京（JPY→CNY ÷22）
  'ueno-asakusa-stay': [400, 820],
  'shinjuku-stay': [680, 1280],
  'nihonbashi-tokyostation': [550, 1350],
  'ikebukuro-stay': [550, 1000],
  // 京都（DMO 2025 实测 ADR + 区域指南）
  'kyoto-station-stay': [450, 950],
  'kawaramachi-gion-stay': [550, 1600],
  'okazaki-stay': [730, 1450],
  // 大阪（排除 2025 世博扰动）
  'namba-stay': [450, 910],
  'umeda-stay': [550, 1140],
  'shinsekai-tennoji-stay': [320, 640],
  // 福冈
  'hakata-station-stay': [410, 730],
  'tenjin-stay': [500, 910],
  'nakasu-stay': [450, 820],
  // 首尔（JLL Q1-2026 中档 ADR ₩128k ≈ ¥620）
  'jongno-stay': [390, 770],
  'myeongdong-euljiro-stay': [480, 870],
  'hongdae-stay': [340, 580],
  'itaewon-stay': [430, 770],
  // 济州
  'jeju-old-town-stay': [240, 430],
  'jeju-new-town-stay': [390, 670],
  'seongsan-stay': [290, 530],
  'seogwipo-stay': [390, 770],
  // 釜山（867 家酒店数据集）
  'nampo-stay': [290, 670],
  'seomyeon-stay': [340, 720],
  'haeundae-stay': [430, 1060],
  'gwangalli-stay': [390, 960],
  // 吉隆坡
  'kl-sentral-stay': [250, 590],
  'bukit-bintang-stay': [300, 590],
  'chinatown-edge-stay': [150, 370],
  'klcc-stay': [420, 840],
  // 新加坡（中档 S$150–280）
  'chinatown-stay': [950, 1270],
  'little-india-stay': [640, 1060],
  'marina-bay-stay': [1330, 2380],
  // 澳门（周中基线；周末 ×2–2.5 见文案）
  'historic-centre-stay': [350, 800],
  'outer-harbour-stay': [500, 1000],
  'cotai-stay': [700, 1300],
  // 台北
  'ximen-station-stay': [400, 880],
  'zhongshan-yongkang-stay': [530, 1540],
  'dadaocheng-stay': [330, 1080],
  // 清迈（Riverside 偏高端、Nimman 居中、Old City 最值）
  'old-city-stay': [250, 525],
  'riverside-night-stay': [525, 1050],
  'nimman-stay': [315, 630],
  // 曼谷（Siam 反而低于 Sukhumvit）
  'sukhumvit-stay': [450, 830],
  'siam-stay': [345, 690],
  'riverside-stay': [415, 1035],
  // 河内（法区只高 15–30%，不是两倍）
  'old-quarter-stay': [275, 485],
  'french-quarter-stay': [345, 620],
  'west-lake-stay': [415, 830],
  // 会安（古城外一圈便宜 25–35%）
  'old-town-stay': [310, 655],
  'old-town-outer-stay': [195, 410],
  'an-bang-stay': [395, 790],
  // 香港（HKTB/Colliers 2025）
  'sheung-wan-sai-ying-pun': [550, 1000],
  'central-admiralty': [900, 1600],
  'wan-chai-causeway': [650, 1250],
  'yau-ma-tei-jordan-stay': [450, 900],
  'tsim-sha-tsui': [650, 1200],
  // 槟城（tours-malaysia 分区带）
  'armenian-acheh-stay': [270, 540],
  'kimberley-cintra-stay': [200, 400],
  'gurney-north': [300, 555],
}

const contentDir = 'src/content'
const cityFiles = [
  'cities/japan.ts', 'cities/korea.ts', 'cities/malaysia.ts', 'cities/standalone.ts',
  'cities/taiwan.ts', 'cities/thailand.ts', 'cities/vietnam.ts', 'hongKong.ts', 'penang.ts',
]

// pass 1: 记录旧 band
const OLD = {}
for (const f of cityFiles) {
  const s = fs.readFileSync(path.join(contentDir, f), 'utf8')
  for (const id of Object.keys(NEW)) {
    const m = s.match(new RegExp(`id: '${id}'[\\s\\S]*?band: \\{ low: (\\d+), high: (\\d+) \\}`))
    if (m) OLD[id] = [+m[1], +m[2]]
  }
}
const missing = Object.keys(NEW).filter((id) => !OLD[id])
if (missing.length) console.log('MISSING band:', missing)

// pass 2: 写新 band
let bandCount = 0
for (const f of cityFiles) {
  const p = path.join(contentDir, f)
  let s = fs.readFileSync(p, 'utf8')
  for (const [id, [lo, hi]] of Object.entries(NEW)) {
    const re = new RegExp(`(id: '${id}'[\\s\\S]*?band: \\{ low: )\\d+(, high: )\\d+( \\})`)
    if (re.test(s)) { s = s.replace(re, `$1${lo}$2${hi}$3`); bandCount++ }
  }
  fs.writeFileSync(p, s)
}
console.log(`bands updated: ${bandCount}`)

// pass 3: 缩放 heat 锚点
const mapDir = path.join(contentDir, 'stayMaps')
let heatCount = 0
for (const f of fs.readdirSync(mapDir).filter((x) => x.endsWith('.ts'))) {
  const p = path.join(mapDir, f)
  let s = fs.readFileSync(p, 'utf8')
  s = s.replace(/(areaId: '([a-z0-9-]+)'[\s\S]*?heat: \[)([\s\S]*?)(\n\s*\])/g, (m, pre, id, body, close) => {
    const nb = NEW[id]
    const ob = OLD[id]
    if (!nb || !ob) return m
    const fct = (nb[0] + nb[1]) / (ob[0] + ob[1])
    if (Math.abs(fct - 1) < 0.02) return m
    heatCount++
    return pre + body.replace(/value: (\d+)/g, (mm, v) => `value: ${Math.round((+v * fct) / 10) * 10}`) + close
  })
  fs.writeFileSync(p, s)
}
console.log(`heat zones rescaled: ${heatCount}`)
