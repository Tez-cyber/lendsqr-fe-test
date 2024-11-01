import { Link, useLocation } from "react-router-dom"
import { businesses, customers, settings } from "../utils/sidebarData"

export const Sidebar = () => {
    const location = useLocation()
    const isLoginPage = location.pathname === "/"
    return isLoginPage ? null : (
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
                        <div className="dash_item">
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
                        <div className="dash_item">
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
                        <div className="dash_item">
                            <img src={setting.icon} alt={setting.name + "icon"} />
                            <p className="">
                                <Link to="/">{setting.name}</Link>
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
