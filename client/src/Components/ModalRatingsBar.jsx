import React from "react";
import styles from "../Styles/ModalRatingsBar.css";

const ModalRatingsBar = (props) => {

  return (
    <div className={styles.ratings}>
      <div className={styles.middle}>
        <div className={styles.barBackground}>
          <div className={styles.ratingBar}></div>
        </div>
      </div>
      <span className={styles.ratingNumber}>{props.rating}</span>
    </div>
  );
};

export default ModalRatingsBar;
