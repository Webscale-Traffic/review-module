import React from "react";
import styles from "../Styles/ModalRatingsContainer.css";
import ModalRatingsBar from "./ModalRatingsBar.jsx";

const ModalRatingsContainer = (props) => {
  let avgRating = (typeOfRating) => {
    let total = 0;
    props.reviews.map((rating) => {
      total += rating[typeOfRating];
    });
    let average = (total / props.reviews.length).toFixed(1);
    return average;
  };

  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Cleanliness</span>
        <ModalRatingsBar
          className={styles.barRating}
          rating={avgRating("cleanRating")}
        />
      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Accuracy</span>
        <ModalRatingsBar
          className={styles.barRating}
          rating={avgRating("accuracyRating")}
        />
      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Communication</span>
        <ModalRatingsBar
          className={styles.barRating}
          rating={avgRating("commnRating")}
        />
      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Location</span>
        <ModalRatingsBar
          className={styles.barRating}
          rating={avgRating("locRating")}
        />
      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Check-in</span>
        <ModalRatingsBar
          className={styles.barRating}
          rating={avgRating("checkInRating")}
        />
      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Value</span>
        <ModalRatingsBar
          className={styles.barRating}
          rating={avgRating("valueRating")}
        />
      </div>
    </div>
  );
};

export default ModalRatingsContainer;
