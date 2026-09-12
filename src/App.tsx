import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import HongKong from './pages/HongKong.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/hong-kong" element={<HongKong />} />
        <Route path="/hong-kong" element={<Navigate to="/places/hong-kong" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
