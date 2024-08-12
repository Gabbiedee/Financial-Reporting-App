import React from 'react'
import styles from "./Navbar.module.css"

type Props = {
    title: string
}

const Navbar = ({title} :Props) => {


  return (
    <div className={styles.nav}>
        <h2>{title}</h2>
    </div>
  )
}

export default Navbar