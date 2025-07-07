import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { SaaSHero } from './pages/SaaSHero'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/hero" element={<SaaSHero />} />
    </Routes>
    </>
  )
}

export default App
