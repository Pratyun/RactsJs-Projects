import React from "react";
import styles from "./form.module.css";

const form = () => {
  const msg=()=>{
    console.log("Beauty calls me")
  }
  const Onclick = (event)=>{
    event.preventDefault();
    console.log(event);
  }
  return (
    <div className={`${styles.container}`}>
      <div className={styles.first}>
        <button className={styles.button} onClick={msg}>Message Us</button>
        <button className={styles.button}>Call US</button>
        <button className={styles.bigbutton}>Click to send Email</button>
        <div>
          <form className={styles.form} onClick={Onclick}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" />
            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" />
            <label htmlFor="Desc">Desc</label>
            <textarea name="Name" rows={6}/>
            <button onSubmit={Onclick} className={styles.submit_btn}>Submit</button>
          </form>
        </div>
      </div>
      <div>
        <img className={styles.image} src="public/Images/art.png" alt="" />
      </div>
    </div>
  );
};

export default form;
