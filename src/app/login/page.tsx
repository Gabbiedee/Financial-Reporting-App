"use client";
import { IoEyeSharp } from "react-icons/io5";
import styles from "./page.module.css";
import Button from "../components/utils/Button";
import style from "../components/utils/Button.module.css"
import { useState } from "react";
import Link from "next/link";



const page = () => {

  const [showPassword, setshowPassword] = useState(false)
  const [churchName, setchurchName] = useState("")
  const [password, setpassword] = useState("")

  const togglePassword = ()=>{
    setshowPassword(prevState => !prevState)
  }

  const submitChurchName = (e : any)=>{
    setchurchName(e.target.value)
  }
  const submitPassword = (e : any)=>{
    setpassword(e.target.value)
  }


  const submitLogindetails =(e :any)=>{
    e.preventDefault();

    const newlogin = {
      churchName,
      password

    }

    console.log(newlogin)

    setchurchName("")
    setpassword("")


  

  }


  return (
    <div className={styles.loginPage}>
      <form className={styles.loginForm} onSubmit={submitLogindetails}>
        <h3>Welcome Back</h3>
        <div className={styles.wrapper}>
        <input className={styles.inputField} type="text" placeholder="Enter Church Name"  value={churchName} onChange={submitChurchName} />
        </div>
        <div className={styles.wrapper}>
        <input className={styles.inputField} type={showPassword ? "text" : "password"} placeholder="Enter Password"  value={password} onChange={submitPassword}/>
        <div className={styles.icon} onClick={togglePassword}><IoEyeSharp  /></div>
        </div>
        
        <Button className={style.primary}><Link href="/dashboard">Submit</Link></Button>
      </form>
    </div>
  );
};

export default page;
