import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { LoginPage } from './pages/loginPage'

import './css/main.css'


function App() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
