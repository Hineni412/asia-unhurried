// Check that every /images/... path referenced in src exists in public/,
// with exact case (Linux/Aliyun servers are case-sensitive).
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const srcDir = path.join(root, 'src')
const pubDir = path.join(root, 'public')

const files = []
function walk(d, out, filter) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f)
    const s = fs.statSync(p)
    if (s.isDirectory()) walk(p, out, filter)
    else if (!filter || filter(p)) out.push(p)
  }
}
walk(srcDir, files, (p) => /\.(ts|tsx|css)$/.test(p))

const refs = new Set()
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8')
  for (const m of c.matchAll(/['"`](\/images\/[^'"`)]+?)['"`]/g)) refs.add(m[1])
}

// map of lowercase relative path -> actual relative path for every public file
const actual = new Map()
const pubFiles = []
walk(pubDir, pubFiles)
for (const p of pubFiles) {
  const rel = path.relative(pubDir, p).split(path.sep).join('/')
  actual.set(rel.toLowerCase(), rel)
}

let bad = 0
for (const r of [...refs].sort()) {
  const want = r.slice(1) // strip leading /
  const found = actual.get(want.toLowerCase())
  if (!found) {
    console.log('MISSING', r)
    bad++
  } else if (found !== want) {
    console.log('CASE', r, '-> actual public/' + found)
    bad++
  }
}
console.log(`checked ${refs.size} refs, ${bad} problems`)
