import React from "react";
import styles from "../Styles/ModalRatingsBar.css";

const ModalRatingsBar = (props) => {
  let middle = {
    marginTop: "10px",
    float: "left",
    width: "200px",
  };

  let barBackground = {
    width: "100px",
    backgroundColor: "#cccccc",
    textAlign: "center",
    color: "white",
  };

  let ratingBar = {
    width: `${(props.rating / 5) * 100}%`,
    height: "4px",
    backgroundColor: "black",
  };
  return (
    <div className={styles.ratings}>
      <div style={middle}>
        <div style={barBackground}>
          <div style={ratingBar}></div>
        </div>
      </div>
      <span className={styles.ratingNumber}>{props.rating}</span>
    </div>
  );
};

export default ModalRatingsBar;
