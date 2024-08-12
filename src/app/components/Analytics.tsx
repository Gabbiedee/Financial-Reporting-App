import React from 'react'
import styles from "./Analytics.module.css"

type Finance = {
    title: string,
    Amount: string
}


type Props = {
    finances : Finance[]
}

const Analytics = ({finances} : Props) => {
  return (
    <div className={styles.analytics}>
       {finances.map((finance, index)=> <div key ={index} className={styles.totalCardLists}>
        <li className={styles.totalCardListItem}>{finance.title}</li>
        <li className={styles.totalCardListItem}>{finance.Amount}</li>
       </div> )}

        
    </div>
  )
}

export default Analytics