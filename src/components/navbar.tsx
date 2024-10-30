import { useLocation } from "react-router-dom"

export const Navbar = () => {
    const location = useLocation()
    const isLoginPage = location.pathname === "/"
  return isLoginPage ? null : (
    <div className="">navbar</div>
  )
}
