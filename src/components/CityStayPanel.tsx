import { Link } from 'react-router-dom'
import type { Neighborhood } from '../content/hongKong'
import type { StayGuide } from '../content/stay'
import type { StayMapData } from '../content/stayMap'
import { StayCompare } from './StayCompare'
import { StayMap } from './StayMap'

type Props = { stay: StayGuide; neighborhoods: Neighborhood[]; map?: StayMapData }

/** 「住」tab：有地图时是单屏交互页（控制条＋地图占满一屏，无纵向滚动）；无地图回退文字比较。 */
export function CityStayPanel({ stay, neighborhoods, map }: Props) {
  return (
    <section className={map ? 'site-shell stay-screen' : 'site-shell py-12 md:py-16'}>
      <div className="places-intro">
        <div>
          <h2 className="font-zh text-3xl md:text-4xl">住哪一带</h2>
          {!map && (
            <p className="mt-4 max-w-3xl text-body text-ink-muted">这座城的片区示意图还在绘制中；先用下面的文字比较。</p>
          )}
        </div>
        <nav aria-label="住栏目" className="places-section-links">
          <Link to="/stay">选房方法 →</Link>
          <Link to="?tab=practical#guide-stay">订房前检查 →</Link>
        </nav>
      </div>
      {map ? (
        <StayMap map={map} stay={stay} neighborhoods={neighborhoods} />
      ) : (
        <StayCompare stay={stay} neighborhoods={neighborhoods} />
      )}
    </section>
  )
}
