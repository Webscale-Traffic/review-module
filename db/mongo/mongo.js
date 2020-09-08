const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error with connection'));
db.once('open', () => {
  console.log('Connected to database!');
});

// const roomsSchema = new mongoose.Schema({
//   id: Number
//   reviews: Array
// })

const reviewsSchema = new mongoose.Schema({
  id: Number,
  // userID: Number,
  userName: String,
  userPic: String,
  review: String,
  roomID: Number,
  cleanRating: Number,
  accuracyRating: Number,
  commnRating: Number,
  locRating: Number,
  checkInRating: Number,
  valueRating: Number,
  reviewDate: Date,
  ownerName: String,
  ownerResponse: String,
  responseDate: String
});

const Reviews = mongoose.model('Reviews', reviewsSchema, 'reviews');
// const review = new Reviews({userName: 'bob'})
// review.save()

module.exports = Reviews;