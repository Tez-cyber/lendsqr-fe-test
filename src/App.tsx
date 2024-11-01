import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { LoginPage } from './pages/loginPage'

import './css/main.css'
import { Navbar } from './components/navbar'
import { DashboardPage } from './pages/dashboardPage'
import { Sidebar } from './components/sidebar'

// ==== Check if file is an auth file

function App() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div className="mainApp">
        <Sidebar />
        <Routes>
          <Route path="/" element={<LoginPage type='auth' />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
