DROP DATABASE IF EXISTS  FEC;
CREATE DATABASE FEC;
USE FEC;

CREATE TABLE houses (
  id INT NOT NULL AUTO_INCREMENT,
  houseName VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(255),
  userUrl VARCHAR(255),
  dateReviewed VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT,
  review TEXT,
  houseId INT,
  cleanRating TINYINT,
  accRating TINYINT,
  commRating TINYINT,
  locationRating TINYINT,
  checkInRating TINYINT,
  valueRating TINYINT,
  FOREIGN KEY (houseId) REFERENCES houses(id),
  FOREIGN KEY (userId) REFERENCES users(id),
  PRIMARY KEY (id)
);

CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT,
  reviewsId INT,
  comment VARCHAR(255),
  FOREIGN KEY (reviewsId) REFERENCES reviews(id),
  PRIMARY KEY(id)
);
