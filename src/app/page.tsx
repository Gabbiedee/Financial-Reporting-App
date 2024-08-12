import styles from "./page.module.css"
import Button from "./components/utils/Button"
import style from "./components/utils/Button.module.css"
import Link from "next/link"
export default function Home() {
 
  return(
    <div className={styles.Main}>
      <h3>
        CE WUYE GROUP FINANCIAL REPORTING PORTAL
      </h3>
      <div className={styles.authDiv}>
      <Button className={style.primary}><Link href="/login">Sign In</Link></Button>
      <Button className={style.primary}><Link href="/login">Login</Link></Button>
      </div>
     
    </div>
  )
}
