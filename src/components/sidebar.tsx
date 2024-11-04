import { Link, useLocation } from "react-router-dom"
import { ChevronRight, ChevronLeft } from "@mui/icons-material"
import { businesses, customers, settings } from "../utils/sidebarData"
import { useState } from "react"

export const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const location = useLocation()
    const isLoginPage = location.pathname === "/"
    return isLoginPage ? null : (
        <>
            <section className="sidebar">
                <div className="org_dropdown">
                    <img src="/icons/org.png" alt="" />
                    <p className="">Search Organisation</p>
                    <img src="/icons/org-drop.png" alt="" />
                </div>
                <div className="org_dashboard">
                    <img src="/icons/dashboard.png" alt="" />
                    <p className="">
                        <Link to="/">Dashboard</Link>
                    </p>
                </div>

                <div className="customerSection">
                    <p className="dash_head">customers</p>
                    {
                        customers.map(customer => (
                            <div className="dash_item" key={customer.name}>
                                <img src={customer.icon} alt={customer.name + "icon"} />
                                <p className="">
                                    <Link to="/">{customer.name}</Link>
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="businessSection">
                    <p className="dash_head">businesses</p>
                    {
                        businesses.map(bus => (
                            <div className="dash_item" key={bus.name}>
                                <img src={bus.icon} alt={bus.name + "icon"} />
                                <p className="">
                                    <Link to="/">{bus.name}</Link>
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="settingSection">
                    <p className="dash_head">settings</p>
                    {
                        settings.map(setting => (
                            <div className="dash_item" key={setting.name}>
                                <img src={setting.icon} alt={setting.name + "icon"} />
                                <p className="">
                                    <Link to="/">{setting.name}</Link>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* =========== Sidebar Mobile */}
            <div className="sidebar_mobile">
                {
                    openSidebar &&
                    <div className="sidebar_mobile_content">
                        <div className="org_dropdown">
                            <img src="/icons/org.png" alt="" />
                            <p className="">Search Organisation</p>
                            <img src="/icons/org-drop.png" alt="" />
                        </div>
                        <div className="org_dashboard">
                            <img src="/icons/dashboard.png" alt="" />
                            <p className="">
                                <Link to="/">Dashboard</Link>
                            </p>
                        </div>

                        <div className="customerSection">
                            <p className="dash_head">customers</p>
                            {
                                customers.map(customer => (
                                    <div className="dash_item" key={customer.name}>
                                        <img src={customer.icon} alt={customer.name + "icon"} />
                                        <p className="">
                                            <Link to="/">{customer.name}</Link>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="businessSection">
                            <p className="dash_head">businesses</p>
                            {
                                businesses.map(bus => (
                                    <div className="dash_item" key={bus.name}>
                                        <img src={bus.icon} alt={bus.name + "icon"} />
                                        <p className="">
                                            <Link to="/">{bus.name}</Link>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="settingSection">
                            <p className="dash_head">settings</p>
                            {
                                settings.map(setting => (
                                    <div className="dash_item" key={setting.name}>
                                        <img src={setting.icon} alt={setting.name + "icon"} />
                                        <p className="">
                                            <Link to="/">{setting.name}</Link>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
                <div className="sidebar_mobile_toggle">
                    <button onClick={() => setOpenSidebar((prev) => !prev)}>
                        {
                            openSidebar ?
                                <ChevronLeft /> : <ChevronRight />
                        }
                    </button>
                </div>
            </div>
        </>
    )
}
