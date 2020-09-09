const db = require('../index.js');
const Reviews = require('./mongo.js');

const getReviews = (roomID, callback) => {
  console.log(roomID, "data from mongo mondel")
  Reviews.find(({ roomID: roomID }), (err, docs) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, docs);
    }
  })
}

const postReviews = (data, callback) => {
  console.log(data, "data from mongo model")
  Reviews.create(data, (err, docs) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      console.log("post success");
      callback(null, docs);
    }
  })
}
    // id: req.body.id,
    // userID: req.body.userID,
    // userName: req.body.userName,
    // userPic: req.body.userPic,
    // review: req.body.review,
    // roomID: req.body.roomID,
    // cleanRating: req.body.cleanRating,
    // accuracyRating: req.body.accuracyRating,
    // commnRating: req.body.commnRating,
    // locRating: req.body.locRating,
    // checkInRating: req.body.checkInRating,
    // valueRating: req.body.valueRating,
    // reviewDate: req.body.reviewDate,
    // ownerName: dreq.body.ownerName,
    // ownerResponse: req.body.ownerResponse,
    // responseDate: req.body.responseDate
  // }), (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //     callback(err, null);
  //   } else {
  //     callback(null, docs);
  //   }
  // })
  // let searchQuery = 'db.reviews FROM users';
  // db.query(searchQuery, (err, data) => {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     callback(null, data);
  //   }
  // });
// }

// const getHouses = (callback) => {
//   let searchQuery = "SELECT * FROM houses";
//   db.query(searchQuery, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// };

// const getReviews = (callback) => {
//   let searchQuery = "SELECT * FROM reviews";
//   db.query(searchQuery, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// };

// const getComments = (callback) => {
//   let searchQuery = "SELECT * FROM comments";
//   db.query(searchQuery, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// };


module.exports = {
  getReviews, postReviews
  // , getHouses, getReviews, getComments
}