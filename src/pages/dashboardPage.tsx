import { MaindashboardContent } from "../components/maindashboardContent"
import { Sidebar } from "../components/sidebar"


export const DashboardPage = () => {
  return (
    <section className="dashboard">
      {/* ================= Sidebar */}
      <Sidebar />
      {/* ================= Main content */}
      <main className="mainDashboard">
        <div>
          <p className="mainDashboard_title">users</p>
          <div className="mainDashboard_overallData">
            <div className="mainDashboard_overallData_card">
              <div className="mainDashboard_overallData_card_img">
                <img src="/icons/user-dash.png" style={{ background: "#fce8ff", padding: "10px", borderRadius: "100%" }} alt="" />
              </div>
              <p className="mainDashboard_overallData_card_title">users</p>
              <p className="mainDashboard_overallData_card_data">2,453</p>
            </div>
            <div className="mainDashboard_overallData_card">
              <div className="mainDashboard_overallData_card_img">
                <img src="/icons/active-dash.png" style={{ background: "#eee8ff", padding: "10px", borderRadius: "100%" }} alt="" />
              </div>
              <p className="mainDashboard_overallData_card_title">active users</p>
              <p className="mainDashboard_overallData_card_data">2,453</p>
            </div>
            <div className="mainDashboard_overallData_card">
              <div className="mainDashboard_overallData_card_img">
                <img src="/icons/loans-dash.png" style={{ background: "#feefec", padding: "10px", borderRadius: "100%" }} alt="" />
              </div>
              <p className="mainDashboard_overallData_card_title">users with loans</p>
              <p className="mainDashboard_overallData_card_data">12,453</p>
            </div>
            <div className="mainDashboard_overallData_card">
              <div className="mainDashboard_overallData_card_img">
                <img src="/icons/save-dash.png" style={{ background: "#ffebf0", padding: "10px", borderRadius: "100%" }} alt="" />
              </div>
              <p className="mainDashboard_overallData_card_title">users with savings</p>
              <p className="mainDashboard_overallData_card_data">102,453</p>
            </div>
          </div>
        </div>
        <MaindashboardContent />
      </main>
      {/* ========== */}
    </section>
  )
}
