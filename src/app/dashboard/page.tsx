import Navbar from "../components/utils/Navbar"
import Sidebar from "../components/utils/Sidebar"
import styles from "./page.module.css"
import Analytics from "../components/Analytics"

const Dashboard = () => {

  const finance = 
    [
      {
        title : "Total Offerings",
        Amount: "N100,000"
      },
      {
        title : "Total Tithe",
        Amount: "N100,000"
      },
      {
        title : "Total Partnership",
        Amount: "N1,000,000"
      },
      {
        title : "Remitted to Zone",
        Amount: "N1,000,000"
      }

]
    
  return (
    <div>
      <Navbar title="Hello!! Christ Embassy KBS Wuye Group"/>
      <div className={styles.main}>
      <Sidebar/>
      <div className={styles.hero}>
        <Analytics  finances={finance}/>
      </div>
      </div>
      <Navbar title="A product of Ce Wuye Group"/>
    </div>
  )
}

export default Dashboard