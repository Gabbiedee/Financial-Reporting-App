import styles from "./Sidebar.module.css";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <ul>
            <Link href="/dashboard"><li>Church Dashboard</li></Link>
            <Link href="/service"><li>Service Report</li></Link>
            <Link href=""><li>Tither's Records</li></Link>
            <Link href=""><li>Partnership Record</li></Link>
            <Link href=""><li>Older Reports</li></Link>
            <Link href=""><li>Settings</li></Link>
        </ul>
    </div>
  )
}

export default Sidebar