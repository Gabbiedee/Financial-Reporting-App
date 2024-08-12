"use client";
import styles from "./Form.module.css";
import Button from "./Button";
import style from "./Button.module.css";

const Form = ({ onClick } :any) => {

    
  return (
   
    <div>
      <form className={styles.form} onClick={onClick}>
        <div className={styles.offeringField}>
          <select className={styles.options}>
            <option value="Pastor">Pastor</option>
            <option value="Bro">Bro</option>
            <option value="Sis">Sis</option>
            <option value="Bro & Sis">Bro & Sis</option>
          </select>
        </div>
        <div className={styles.offeringField}>
          <input type="text" placeholder="First Name" />
        </div>
        <div className={styles.offeringField}>
          <input type="text" placeholder="Surname" />
        </div>
        <div className={styles.offeringField}>
          <input type="number" placeholder="Amount" />
        </div>
        <Button className={style.secondary}>Submit</Button>
      </form>
    </div>
  );
};

export default Form;
