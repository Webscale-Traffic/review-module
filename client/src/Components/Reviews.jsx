import React from 'react';
import styles from '../Styles/Reviews.css';
import UserInfo from './UserInfo.jsx';

const Reviews = (props) => {

  // map trhough 6 data entries
  const sixEntries = () => {
   return props.reviews.filter((review, index) => (
      index < 6
    ));
  }

  return (
    <div className={styles.reviews}>
      {sixEntries().map((review, index) => (
        <UserInfo
          popUp={props.popUp}
          key={index}
          review={review}
          user={props.users[review.userId]}
          currentHouse={props.currentHouse}
        />
      ))}
    </div>
  )
}

export default Reviews;