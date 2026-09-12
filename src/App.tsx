import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { HongKong } from './pages/HongKong'
import { Penang } from './pages/Penang'
import { Malaysia } from './pages/Malaysia'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/hong-kong" element={<HongKong />} />
        <Route path="/hong-kong" element={<Navigate to="/places/hong-kong" replace />} />
        <Route path="/places/malaysia" element={<Malaysia />} />
        <Route path="/places/malaysia/penang" element={<Penang />} />
        <Route path="/penang" element={<Navigate to="/places/malaysia/penang" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
