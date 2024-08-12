"use client";
import styles from "./Mianform.module.css";
import style from "./Button.module.css";
import Button from "./Button";
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

  type MainformProps = {
    state: ReportData;
    dispatch: React.Dispatch<any>;
    submitFormHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  };

const Mainform = ({ state, dispatch, submitFormHandler}: MainformProps) => {
 
  
 
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles.offeringField}>
        <label>Enter Service Date</label>
        <input
          type="date"
          value={state.date}
          onChange={(e: any) =>
            dispatch({ type: "SET_DATE", payload: e.target.value })
          }
        />
      </div>
      <div className={styles.offeringField}>
        <label>Enter General Offering Amount</label>
        <input
          type="number"
          value={state.Goffering}
          onChange={(e: any) =>
            dispatch({ type: "SET_OFFERING", payload: Number(e.target.value) })
          }
        />
      </div>
      <div className={styles.offeringField}>
        <label>Enter Children Offering Amount</label>
        <input
          type="number"
          value={state.Coffering}
          onChange={(e: any) =>
            dispatch({ type: "SET_CHILDREN", payload: Number(e.target.value) })
          }
        />
      </div>
      <div className={styles.offeringField}>
        <label>Enter Tithe Amount</label>
        <input
          type="number"
          value={state.tithe}
          onChange={(e: any) =>
            dispatch({ type: "SET_TITHE", payload: Number(e.target.value) })
          }
        />
      </div>
      <div className={styles.offeringField}>
        <label>Enter Seed Offering Amount</label>
        <input
          type="number"
          value={state.Soffering}
          onChange={(e: any) =>
            dispatch({ type: "SET_SEED", payload: Number(e.target.value) })
          }
        />
      </div>
      <div className={styles.offeringField}>
        <label>Enter Thanksgiving Offering Amount</label>
        <input
          type="number"
          value={state.Toffering}
          onChange={(e: any) =>
            dispatch({ type: "SET_THANKS", payload: Number(e.target.value) })
          }
        />
      </div>
      <div className={styles.offeringField}>
        <label>Enter First Fruit Offering Amount</label>
        <input
          type="number"
          value={state.FFoffering}
          onChange={(e: any) =>
            dispatch({ type: "SET_FF", payload: Number(e.target.value) })
          }
        />
      </div>
      <div className={styles.offeringField}>
        <label>Enter Partnership Amount</label>
        <input
          type="number"
          value={state.partnership}
          onChange={(e: any) =>
            dispatch({ type: "SET_PARTNS", payload: Number(e.target.value) })
          }
        />
      </div>
      <Button className={style.secondary}>Submit</Button>
    </form>
  );
};

export default Mainform;
