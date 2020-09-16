// const { MongoClient } = require("mongodb");
// const
// // Connection URI
// const uri =
//   "mongodb+srv://sample-hostname:27017/?poolSize=20&w=majority?compressors=zstd,snappy,zlib";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const mongoose = require('mongoose');

var options = {
        user: "root",
        pass: "root"
};

mongoose.connect('mongodb://root:root@54.193.19.108:27017/reviews',
        { useNewUrlParser: true, useUnifiedTopology: true, auth: { "authSource": "admin" },
    user: "root",
    pass: "root",
poolSize: process.env.MONGO_POOLSIZE || 1}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error with connection'));
db.once('open', () => {
  console.log('Connected to mongo database!');
});

// mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'error with connection'));
// db.once('open', () => {
//   console.log('Connected to mongo database!');
// });

// const roomsSchema = new mongoose.Schema({
//   id: Number
//   reviews: Array
// })

// const userSchema = new mongoose.Schema({})


const reviewsSchema = new mongoose.Schema({
  id: Number,
  userID: Number,
  userName: String,
  userPic: String,
  review: String,
  roomID: Number,
  //(require),
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

//keep notes on my issues on my journal

const Reviews = mongoose.model('Reviews', reviewsSchema, 'reviews');

module.exports = Reviews;