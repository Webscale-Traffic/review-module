import React from "react";
import styles from "../Styles/ModalStars.css";

const ModalStars = (props) => {
  let total = 0;
  let numberOfReview = 0;
  const average = () => {
    props.reviews.map((review) => {
      total += review.cleanRating;
      total += review.accRating;
      total += review.commRating;
      total += review.locationRating;
      total += review.checkInRating;
      total += review.valueRating;
      numberOfReview += 1;
    });
  };

  average();

  return (
    <div className={styles.starComp}>

      <img
        className={styles.star}
        src="https://7528bnbimages.s3-us-west-1.amazonaws.com/bnbstar.png"
      />

      <span className={styles.reviewText}>
        {(total / 6 / numberOfReview).toFixed(2)} ({numberOfReview} reviews)
      </span>
    </div>
  );
};

export default ModalStars;
