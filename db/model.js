const db = require('./index.js');

const getUsers = (callback) =>{
  let searchQuery = 'SELECT * FROM users';
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

const getHouses = (callback) => {
  let searchQuery = "SELECT * FROM houses";
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getReviews = (callback) => {
  let searchQuery = "SELECT * FROM reviews";
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getComments = (callback) => {
  let searchQuery = "SELECT * FROM comments";
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};


module.exports = {
  getUsers, getHouses, getReviews, getComments
}