const express = require('express');
const app = express();
const port = 3003;
const model = require('../db/model.js');
const parser = require('body-parser')
const path = require('path');

app.use('/rooms/:roomId', express.static(path.join(__dirname, '../client/dist')));
app.use(parser.urlencoded({extended: false}));

app.listen(port, () => console.log(`Listening At Port ${port}`))

app.get('/reviews/users', (req, res) => {
  model.getUsers((err, data) => {
    if (err) {
      res.status(400)
    } else {
      res.status(200).send(data);
    }
  });
});


app.get("/reviews/houses", (req, res) => {
  model.getHouses((err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/reviews", (req, res) => {
  model.getReviews((err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/reviews/comments", (req, res) => {
  model.getComments((err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});