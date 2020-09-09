import React from "react";
import axios from "axios";
import styles from "../Styles/App.css";
import Stars from "./Stars.jsx";
import RatingsContainer from "./RatingsContainer.jsx";
import Reviews from "./Reviews.jsx";
import PopUp from "./PopUp.jsx";
import moment from 'moment';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popUp: false,
      currentHouse: 5, // Devonte
      users: [],
      houses: [],
      reviews: [],
      comments: [],
    };
    this.getAllData = this.getAllData.bind(this);
    // this.filterReviews = this.filterReviews.bind(this);
    this.rdm = this.rdm.bind(this);
    this.setPopUp = this.setPopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }

  rdm(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
  }


  getAllData() {
    var roomID = window.location.pathname;
    var users = [];
    var houses = [];
    var reviews = [];
    var comments = [];
    console.log("roomID", roomID);
    var id = roomID.match(/(\d+)/)[0];
    var path = `/rooms/${id}/reviews`
    axios.get(path)
    .then((results) => {
      console.log(results);
      for (var i = 0; i < results.data.length; i++) {
        var usersObject = {};
        var housesObject = {};
        var reviewsObject = {};
        var commentsObject = {};
        usersObject['userName'] = results.data[i].userName,
        usersObject['userPic'] = results.data[i].userPic,
        usersObject['reviewDate'] = results.data[i].reviewDate,
        usersObject['userID'] = results.data[i].userID,
        housesObject['roomID'] = results.data[i].roomID,
        reviewsObject['review'] = results.data[i].review,
        reviewsObject['userName'] = results.data[i].userName,
        reviewsObject['userPic'] = results.data[i].userPic,
        reviewsObject['reviewDate'] = moment(results.data[i].reviewDate).format('MMMM YYYY'),
        reviewsObject['userID'] = results.data[i].userID,
        reviewsObject['roomID'] = results.data[i].roomID,
        reviewsObject['cleanRating'] = results.data[i].cleanRating,
        reviewsObject['accuracyRating'] = results.data[i].accuracyRating,
        reviewsObject['commnRating'] = results.data[i].commnRating,
        reviewsObject['locRating'] = results.data[i].locRating,
        reviewsObject['checkInRating'] = results.data[i].checkInRating,
        reviewsObject['valueRating'] = results.data[i].valueRating,
        commentsObject['ownerResponse'] = results.data[i].ownerResponse,
        commentsObject['ownerName'] = results.data[i].ownerName,
        commentsObject['responseDate'] = moment(results.data[i].responseDate).format('MMMM YYYY'),
        users.push(usersObject),
        houses.push(housesObject),
        reviews.push(reviewsObject),
        comments.push(commentsObject)
      }
      this.setState({
        users: users,
        houses: houses,
        reviews: reviews,
        comments: comments
      });
    })
    .catch((err) => {
      console.log('error in get request', err)
    })
  }
  //   axios
  //     .get("/rooms/roomreviews/")
  //     .then((users) => this.setState({ users: users.data }));
  //   axios
  //     .get("/reviews/comments")
  //     .then((comments) => this.setState({ comments: comments.data }));
  //   axios
  //     .get("/reviews/houses")
  //     .then((houses) => this.setState({ houses: houses.data }));
  //   axios
  //     .get("/reviews")
  //     .then((reviews) => this.setState({ reviews: reviews.data }))
  //     .catch();
  // }

  componentDidMount() {
    // let roomId = window.location.pathname.split("/")[2];
    // this.setState({ currentHouse: Number(roomId) });
    this.getAllData();
  }

  // filterReviews() {
  //   let reviewsCopy = this.state.reviews.filter((review) => {
  //     if (review.roomID === this.state.currentHouse) {
  //       return review;
  //     }
  //   });
  //   return reviewsCopy;
  // }

  setPopUp() {
    this.setState({ popUp: true });
  }

  closePopUp() {
    this.setState({ popUp: false });
  }

  render() {
    console.log(this.state.users);
    console.log(this.state.reviews);
    // console.log(reviewsCopy, 'reviews copy')

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
            // reviews={this.filterReviews()}
            reviews={this.state.reviews}
            currentHouse={this.state.currentHouse}
          />

          <RatingsContainer
             // reviews={this.filterReviews()}
             reviews={this.state.reviews}
            currentHouse={this.state.currentHouse}
          />

          <Reviews
            popUp={this.state.popUp}
            users={this.state.users}
             // reviews={this.filterReviews()}
            reviews={this.state.reviews}
            currentHouse={this.state.currentHouse}
          />

          <button onClick={this.setPopUp} className={styles.showButton}>
            Show all {this.state.reviews.length} reviews
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
                  reviews={this.state.reviews}
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
