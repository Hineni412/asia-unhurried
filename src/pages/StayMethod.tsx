import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { hongKong } from '../content/hongKong'
import { penang } from '../content/penang'
import { CITY_CONTENT } from '../content/cities'
import type { StayGuide } from '../content/stay'

type CityStay = { nameZh: string; href: string; stay: StayGuide }

/** 已写好「住哪一带」比较的城市——随内容铺开自动增长。 */
const cityStays: CityStay[] = [
  { nameZh: hongKong.name, href: '/places/hong-kong', stay: hongKong.stay },
  { nameZh: penang.name, href: '/places/malaysia/penang', stay: penang.stay },
  ...Object.values(CITY_CONTENT).flatMap((c) =>
    c.stay ? [{ nameZh: c.city.nameZh, href: c.city.href, stay: c.stay }] : [],
  ),
]

const steps = [
  {
    title: '把上限写成总价',
    body: '「每晚 ¥800 封顶」指含税费的最终价，不是列表页起价。订房平台切到按总价排序再比较；起价常不含税与度假费。',
  },
  {
    title: '用晚饭圈定片区',
    body: '打开目的地的「吃」页，看想去的店集中在哪一带。晚上你是从饭馆走回酒店，不是从景点——晚饭圈就是住宿圈。',
  },
  {
    title: '画十分钟步行圈',
    body: '以片区的枢纽站为圆心画步行十分钟，拖行李按十五分钟。看坡度、电梯、过街与末班，不看「距地铁 X 米」的数字。',
  },
  {
    title: '再核对房型与规则',
    body: '平米数、床宽、有无对外窗、电梯是否到楼层、按房还是按人头计价、晚到怎么取钥匙——各城「住宿与入住」里有逐项检查。',
  },
]

const notes = [
  '便宜、枢纽、安静，通常只能占两样——先想清楚这趟的重心。',
  '旺季房价上浮时，先订可取消的占位，再慢慢比较。',
  '房间小是东亚城市的常态；同等预算，花在位置上比花在平米数上更值。',
  '评价只看近期住客写的硬条件：隔音、热水、电梯、楼下环境；星级与评分参考意义小。',
  '同一趟旅程尽量不换酒店：搬一次的隐性成本是半天。',
]

export function StayMethod() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto site-shell px-5 py-16 md:px-8 md:py-24">
          <p className="eyebrow">Method · 住</p>
          <h1 className="mt-3 font-zh text-4xl text-ink md:text-5xl">怎么选住处</h1>
          <p className="mt-6 max-w-2xl text-body leading-relaxed text-ink-muted">
            选住处费的脑细胞，大多花在每次重做同一个决策。把它拆成固定的四步，每座城市只填变量：上限、晚饭圈、步行圈、房型规则。
          </p>
        </section>

        <section className="mx-auto site-shell px-5 pb-16 md:px-8">
          <h2 className="font-zh text-3xl text-ink">四步，顺序别反</h2>
          <ol className="mt-8 grid list-none gap-6 p-0 md:grid-cols-2">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-note text-ink-faint">第{['一', '二', '三', '四'][i]}步</p>
                <h3 className="mt-2 font-zh text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 text-small leading-relaxed text-ink-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto site-shell px-5 pb-16 md:px-8">
          <h2 className="font-zh text-3xl text-ink">各城的预算语境</h2>
          <p className="mt-3 max-w-2xl text-small text-ink-muted">
            同一个上限，在不同城市买到的东西不一样。已写好片区比较的城市：
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {cityStays.map((c) => (
              <li key={c.href}>
                <Link
                  to={`${c.href}?tab=places#where-to-stay`}
                  className="group grid gap-2 py-5 sm:grid-cols-[10rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="font-zh text-2xl text-ink group-hover:text-accent">{c.nameZh}</span>
                  <span className="text-small leading-relaxed text-ink-muted">{c.stay.budgetNote}</span>
                  <span className="text-small whitespace-nowrap text-accent">片区比较 →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto site-shell px-5 pb-20 md:px-8">
          <h2 className="font-zh text-3xl text-ink">取舍备忘</h2>
          <ul className="mt-6 max-w-2xl list-none space-y-3 p-0 text-small leading-relaxed text-ink-muted">
            {notes.map((n) => (
              <li key={n}>· {n}</li>
            ))}
            <li>
              · 订房时的逐项核对在各城「出行指南 · 住宿与入住」；本页只管「选哪一带」。
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
