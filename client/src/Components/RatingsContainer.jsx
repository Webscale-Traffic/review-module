import React from 'react';
import styles from '../Styles/RatingsContainer.css';
import RatingsBar from './RatingsBar.jsx'


const RatingsContainer = (props) => {
  //change each div to correspoding rating type
  // "cleanRating":3,"accRating":3,"commRating":3,"locationRating":5,"checkInRating":5,"valueRating":5}
  let avgRating = (typeOfRating) => {
    let total = 0;
    props.reviews.map((rating) => {
      total += rating[typeOfRating]
    })
    let average = (total / props.reviews.length).toFixed(1);
    return average;
  }

  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Cleanliness</span>

        <RatingsBar
          className={styles.barRating}
          rating={avgRating("cleanRating")}
        />

      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Accuracy</span>

        <RatingsBar
          className={styles.barRating}
          rating={avgRating("accuracyRating")}
        />

      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Communication</span>

        <RatingsBar
          className={styles.barRating}
          rating={avgRating("commnRating")}
        />

      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Location</span>

        <RatingsBar
          className={styles.barRating}
          rating={avgRating("locRating")}
        />

      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Check-in</span>

        <RatingsBar
          className={styles.barRating}
          rating={avgRating("checkInRating")}
        />

      </div>
      <div className={styles.ratings}>
        <span className={styles.typeRating}>Value</span>

        <RatingsBar
          className={styles.barRating}
          rating={avgRating("valueRating")}
        />

      </div>
    </div>
  );
}

export default RatingsContainer;