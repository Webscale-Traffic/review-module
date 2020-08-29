DROP DATABASE IF EXISTS reviews;
create database reviews;
\c reviews

CREATE TABLE if not exists rooms (
  id INT PRIMARY KEY
);

CREATE TABLE if not exists users (
  id SERIAL PRIMARY KEY,
  userName VARCHAR(30),
  userPic VARCHAR(50)
);

CREATE TABLE if not exists reviews (
  id SERIAL PRIMARY KEY,
  userID INT,
  review VARCHAR(500),
  roomID INT,
  cleanRating SMALLINT,
  accuracyRating SMALLINT,
  commnRating SMALLINT,
  locRating SMALLINT,
  checkInRating SMALLINT,
  valueRating SMALLINT,
  reviewDate DATE,
  FOREIGN KEY (roomID) REFERENCES rooms(id),
  FOREIGN KEY (userID) REFERENCES users(id)
);

CREATE TABLE if not exists responses (
  id SERIAL PRIMARY KEY,
  reviewID INT,
  review VARCHAR(500),
  responseDate DATE,
  FOREIGN KEY (reviewID) REFERENCES reviews(id)
)

