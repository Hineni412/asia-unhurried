import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { HongKong } from './pages/HongKong'
import { Penang } from './pages/Penang'
import { Malaysia } from './pages/Malaysia'

function PreserveSearchRedirect({ to }: { to: string }) {
  const { search, hash } = useLocation()
  return <Navigate to={{ pathname: to, search, hash }} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/hong-kong" element={<HongKong />} />
        <Route path="/hong-kong" element={<PreserveSearchRedirect to="/places/hong-kong" />} />
        <Route path="/places/malaysia" element={<Malaysia />} />
        <Route path="/places/malaysia/penang" element={<Penang />} />
        <Route path="/penang" element={<PreserveSearchRedirect to="/places/malaysia/penang" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
