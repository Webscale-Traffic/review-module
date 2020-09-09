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


app.get("/rooms/:roomID/reviews", (req, res) => {
  var roomID = req.params.roomID;
  //this should match the :roomID on line 24
  console.log(roomID, "room id from server");
  db.getReviews(roomID, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});


app.post('/rooms/:roomID/reviews', (req, res) => {
  var roomID = req.params.roomID;
  //this should match the :roomID on line 24
  // console.log(roomID, "room id from server");
  console.log(req.body, "req.body")
  db.postReviews(req.body, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      console.log("successful post")
      res.status(200).send(data);
    }
  });
});
