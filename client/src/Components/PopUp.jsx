import React from 'react';
import styles from '../Styles/PopUp.css';
import ModalStars from './ModalStars.jsx';
import ModalRatingsContainer from './ModalRatingsContainer.jsx';
import ModalReviews from './ModalReviews.jsx';

const PopUp = (props) => {

  return (
    <div className={styles.modal}>

      <img
        className={styles.button}
        onClick={props.closePopUp}
        src="https://7528bnbimages.s3-us-west-1.amazonaws.com/x.jpg"
      />

      <ModalStars
        reviews={props.reviews}
        currentHouse={props.currentHouse}
      />

      <ModalRatingsContainer
        reviews={props.reviews}
        currentHouse={props.currentHouse}
      />

      <ModalReviews
        comments={props.comments}
        users={props.users}
        reviews={props.reviews}
        currentHouse={props.currentHouse}
      />

    </div>
  );
}

export default PopUp;