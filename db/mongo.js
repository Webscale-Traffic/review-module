const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error with connection'));
db.once('open', () => {
  console.log('Connected to database!');
});

const reviewsSchema = new mongoose.Schema({
  id: Number,
  userID: Number,
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
  responseDate: Date
});

const Reviews = mongoose.model('Reviews', reviewsSchema, 'reviews');

module.exports = Reviews;