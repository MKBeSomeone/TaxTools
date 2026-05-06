import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import K1 from './pages/K1'
import W2 from './pages/W2'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/k1" element={<K1 />} />
        <Route path="/w2" element={<W2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
