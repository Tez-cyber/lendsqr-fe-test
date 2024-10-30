import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { LoginPage } from './pages/loginPage'

import './css/main.css'
import { Navbar } from './components/navbar'

// ==== Check if file is an auth file
type authType = {
  type: string
}
function App(
  { type }: authType
) {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      {
        type === "auth" ? <Navbar /> : ""
      }
      <Routes>
        <Route path="/" element={<LoginPage type="auth" />} />
      </Routes>
    </>
  )
}

export default App
