require('newrelic');
const express = require('express');
const app = express();
const port = 3003;
const db = require('../db/mongo/modelMongo.js');
const parser = require('body-parser');
const path = require('path');

app.use('/rooms/:roomID', express.static(path.join(__dirname, '../client/dist')));
// app.use('/rooms/:roomID', express.json());
app.use(parser.json());
// app.use(bodyParser.json())
// app.use(parser.urlencoded({
//   extended: true
// }));
// app.use(parser.urlencoded({extended: true}));

app.listen(port, () => console.log(`Listening At Port ${port}`));

//app.get("/loaderio-39c9b180d72ef9fdcf0b827c5a6c3c01", (req, res) => {
  //res.send("loaderio-39c9b180d72ef9fdcf0b827c5a6c3c01")
//});

app.get("/loaderio-edb2686c804db5c5764a06b6545aee07", (req, res) => {
  res.send("loaderio-edb2686c804db5c5764a06b6545aee07")
});

app.get("/rooms/:roomID/reviews", (req, res) => {
  var roomID = req.params.roomID;
  //this should match the :roomID on line 24
  db.getReviews(roomID, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

// app.post("/loaderio-edb2686c804db5c5764a06b6545aee07", (req, res) => {
//   res.send("loaderio-edb2686c804db5c5764a06b6545aee07")
// });

app.post('/rooms/:roomID/reviews', (req, res) => {
  var roomID = req.params.roomID;
  //this should match the :roomID on line 24
  // console.log(roomID, "room id from server");
  db.postReviews(req.body, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});
