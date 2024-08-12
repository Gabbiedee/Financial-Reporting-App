"use client";
import Navbar from "../components/utils/Navbar";
import Sidebar from "../components/utils/Sidebar";
import Mainform from "../components/utils/Mainform";
import DisplayReport from "../components/utils/DisplayReport";
import Form from "../components/utils/Form";
import Button from "../components/utils/Button";
import styles from "./page.module.css";
import style from "../components/utils/Button.module.css";
import { useState, useReducer } from "react";

type ReportData = {
    date: string;
    Goffering: number;
    Coffering: number;
    tithe: number;
    Soffering: number;
    Toffering: number;
    FFoffering: number;
    partnership: number;
  };

const initialState : ReportData = {
    date: "",
    Goffering: 0,
    Coffering: 0,
    tithe: 0,
    Soffering: 0,
    Toffering: 0,
    FFoffering: 0,
    partnership: 0,
  };
  
  const reducer = (state: ReportData, action: any) : ReportData => {
    switch (action.type) {
      case "SET_DATE":
        return { ...state, date: action.payload };
      case "SET_OFFERING":
        return { ...state, Goffering: action.payload };
      case "SET_CHILDREN":
        return { ...state, Coffering: action.payload };
      case "SET_TITHE":
        return { ...state, tithe: action.payload };
      case "SET_SEED":
        return { ...state, Soffering: action.payload };
      case "SET_THANKS":
        return { ...state, Toffering: action.payload };
      case "SET_FF":
        return { ...state, FFoffering: action.payload };
      case "SET_PARTNS":
        return { ...state, partnership: action.payload };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };
const page = () => {
  const [showForm, setshowForm] = useState(false);
  const [showMiniForm, setshowMiniForm] = useState(false);
  const [showMiniForm2, setshowMiniForm2] = useState(false);
  const [reportData, setReportData] = useState<ReportData | null>(null);


  

  const handleServiceReport = (e: any) => {
    e.preventDefault();

    setshowForm((prevState) => !prevState);
  };
  const handleTitheRecord = (e: any) => {
    e.preventDefault();

    setshowMiniForm((prevState) => !prevState);
  };
  const handlePartnerRecord = (e: any) => {
    e.preventDefault();

    setshowMiniForm2((prevState) => !prevState);
  };



  const [state, dispatch] = useReducer(reducer, initialState);

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setReportData(state)

    console.log(
      reportData
    );

    

    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <Navbar title="Hello!! Christ Embassy KBS Wuye Group" />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.hero}>
          <div className={styles.section1}>
            <div className={styles.sectionmain}>
            <div className={styles.records}>
              <h3>Enter Service Report</h3>
              <Button onClick={handleServiceReport} className={style.primary}>
                Add
              </Button>
            </div>
            {showForm ? <Mainform state={state} dispatch={dispatch} submitFormHandler={submitFormHandler} /> : ""}
            </div>
            <div className={styles.sectionmain}>
            <div className={styles.records}>
              <h3>Display Report</h3>
            </div>
            {showForm ? <DisplayReport SubmittedReport={reportData} /> : ""}
            </div>
            
          </div>
          <div className={styles.section2}>
            <div>
              <div className={styles.records}>
                <h3>Enter Tithe Record for the Day</h3>
                <Button onClick={handleTitheRecord} className={style.primary}>
                  Add
                </Button>
              </div>
              {showMiniForm ? <Form onClick ={submitFormHandler}/> : ""}
            </div>
            <div>
              <div className={styles.records}>
                <h3>Enter Partnership Record for the Day</h3>
                <Button onClick={handlePartnerRecord} className={style.primary}>
                  Add
                </Button>
              </div>
              {showMiniForm2 ? <Form onClick ={submitFormHandler} /> : ""}
            </div>
          </div>
        </div>
      </div>
      <Navbar title="A product of Ce Wuye Group" />
    </div>
  );
};

export default page;
