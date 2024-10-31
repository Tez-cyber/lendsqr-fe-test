import { Sidebar } from "../components/sidebar"


export const DashboardPage = () => {
  return (
    <section className="dashboard">
      {/* ================= Sidebar */}
      <Sidebar />
      {/* ================= Main content */}
      <main className="mainDashboard">
        mainDashboard
      </main>
    </section>
  )
}
