import React from "react";
import styles from "../Styles/ModalReviews.css";
import ModalUserInfo from "./ModalUserInfo.jsx";

const ModalReviews = (props) => {
  // map trhough 6 data entries

  // const sixEntries = () => {
  //   return props.reviews.filter((review, index) => index < 6);
  // };

  return (
    <div className={styles.reviews}>
      {props.reviews.map((review, index) => (
        <ModalUserInfo
          key={index}
          review={review}
          user={props.users[review.userId]}
          currentHouse={props.currentHouse}
        />
      ))}
    </div>
  );
};

export default ModalReviews;
