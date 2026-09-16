import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { HongKong } from './pages/HongKong'
import { Penang } from './pages/Penang'
import { CountryPage } from './pages/CountryPage'
import { DirectoryCityPage } from './pages/DirectoryCityPage'
import { AttractionPage } from './pages/AttractionPage'
import { StayMethod } from './pages/StayMethod'
import { COUNTRIES, CONTENT_CITIES } from './content/directory'
import { CITY_CONTENT } from './content/cities'

function PreserveSearchRedirect({ to }: { to: string }) {
  const { search, hash } = useLocation()
  return <Navigate to={{ pathname: to, search, hash }} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stay" element={<StayMethod />} />
        <Route path="/places/hong-kong" element={<HongKong />} />
        <Route path="/places/hong-kong/attractions/:attractionId" element={<AttractionPage city="hong-kong" />} />
        <Route path="/hong-kong" element={<PreserveSearchRedirect to="/places/hong-kong" />} />
        <Route path="/places/malaysia/penang" element={<Penang />} />
        <Route path="/places/malaysia/penang/attractions/:attractionId" element={<AttractionPage city="penang" />} />
        <Route path="/penang" element={<PreserveSearchRedirect to="/places/malaysia/penang" />} />
        {COUNTRIES.map((c) => (
          <Route key={c.slug} path={c.href} element={<CountryPage country={c} />} />
        ))}
        {CONTENT_CITIES.map((c) => {
          const content = CITY_CONTENT[c.slug]
          return content ? (
            <Route key={c.slug} path={c.href} element={<DirectoryCityPage content={content} />} />
          ) : null
        })}
        {CONTENT_CITIES.map((c) => (
          <Route
            key={`${c.slug}-attractions`}
            path={`${c.href}/attractions/:attractionId`}
            element={<AttractionPage city={c.slug} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
