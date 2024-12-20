import { useState } from "react"
import { useLocation, Link } from "react-router-dom"

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)

    const handleNavToggle = () => {
        setOpenNav(prev => !prev)
        console.log(openNav)
    }
    const location = useLocation()
    const isLoginPage = location.pathname === "/"
    return isLoginPage ? null : (
        <nav className="nav">
            <div className="firstSection">
                <section className="">
                    <img src="/logo.svg" alt="lensqr logo" />
                </section>
                <section className="searchSection">
                    <input type="search" placeholder="Search for anything" />
                    <div className="searchiconWrapper">
                        <img src="/icons/search.png" alt="" />
                    </div>
                </section>

                {/* ================= Nav for Mobile screen */}
                <div className="navMobile">
                    <div className="navMobileContain">
                        <button onClick={handleNavToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    {
                        openNav &&
                        <div className="navMobile_items">
                            <section className="searchSectionMobile">
                                <input type="search" placeholder="Search for anything" />
                                <div className="searchiconWrapper">
                                    <img src="/icons/search.png" alt="" />
                                </div>
                            </section>

                            <section className="navMobile_items_profile">
                                <Link to="/">Docs</Link>
                                <img src="/icons/notification.png" alt="" />
                                <div className="profile">   
                                    <div className="profile-img">
                                        <img src="/profile.png" alt="profile.img" />
                                    </div>
                                    <p>Adeyemi</p>
                                    {/* <div>
                                        <img src="/icons/dropdown.png" alt="dropdown" />
                                    </div> */}
                                </div>
                            </section>
                        </div>
                    }
                </div>
            </div>
            <section className="secondSection">
                <Link to="/">Docs</Link>
                <img src="/icons/notification.png" alt="" />
                <div className="profile">
                    <div className="profile-img">
                        <img src="/profile.png" alt="profile.img" />
                    </div>
                    <p>Adeyemi</p>
                    <div>
                        <img src="/icons/dropdown.png" alt="dropdown" />
                    </div>
                </div>
            </section>
        </nav>
    )
}
