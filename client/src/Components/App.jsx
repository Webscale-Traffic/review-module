import React from "react";
import axios from "axios";
import styles from "../Styles/App.css";
import Stars from "./Stars.jsx";
import RatingsContainer from "./RatingsContainer.jsx";
import Reviews from "./Reviews.jsx";
import PopUp from "./PopUp.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popUp: false,
      currentHouse: 0, // Devonte
      users: [],
      houses: [],
      reviews: [],
      comments: [],
    };
    this.getAllData = this.getAllData.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.rdm = this.rdm.bind(this);
    this.setPopUp = this.setPopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }

  rdm(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
  }

  getAllData() {
    axios
      .get("/reviews/users")
      .then((users) => this.setState({ users: users.data }));
    axios
      .get("/reviews/comments")
      .then((comments) => this.setState({ comments: comments.data }));
    axios
      .get("/reviews/houses")
      .then((houses) => this.setState({ houses: houses.data }));
    axios
      .get("/reviews")
      .then((reviews) => this.setState({ reviews: reviews.data }))
      .catch();
  }

  componentDidMount() {
    let roomId = window.location.pathname.split("/")[2];
    this.setState({ currentHouse: Number(roomId) });
    this.getAllData();
  }

  filterReviews() {
    let reviewsCopy = this.state.reviews.filter((review) => {
      if (review.houseId === this.state.currentHouse) {
        return review;
      }
    });
    return reviewsCopy;
  }

  setPopUp() {
    this.setState({ popUp: true });
  }

  closePopUp() {
    this.setState({ popUp: false });
  }

  render() {

    if (this.state.popUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return (
      <div className={styles.reviewSection}>
        <div className={styles.other}>
          <Stars
            popUp={this.state.pop}
            reviews={this.filterReviews()}
            currentHouse={this.state.currentHouse}
          />

          <RatingsContainer
            reviews={this.filterReviews()}
            currentHouse={this.state.currentHouse}
          />

          <Reviews
            popUp={this.state.popUp}
            users={this.state.users}
            reviews={this.filterReviews()}
            currentHouse={this.state.currentHouse}
          />

          <button onClick={this.setPopUp} className={styles.showButton}>
            Show all {this.filterReviews().length} reviews
          </button>

          {this.state.popUp ? (
            <React.Fragment>
              <div className={styles.background}>
                <PopUp
                  comments={this.state.comments}
                  className={styles.popUp}
                  users={this.state.users}
                  closePopUp={this.closePopUp}
                  show={this.state.popUp}
                  reviews={this.filterReviews()}
                  currentHouse={this.state.currentHouse}
                />
              </div>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
