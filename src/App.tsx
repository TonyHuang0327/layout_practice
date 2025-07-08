import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { SaaSHero } from './pages/SaaSHero'
import { CardProduct } from './pages/CardProduct'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/hero" element={<SaaSHero />} />
      <Route path='/card-product' element={<CardProduct />} />
    </Routes>
    </>
  )
}

export default App
