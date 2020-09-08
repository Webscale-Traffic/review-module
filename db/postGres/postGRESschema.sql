DROP DATABASE IF EXISTS reviews;
create database reviews;
\c reviews

Drop table if exists rooms;
Drop table if exists users;
Drop table if exists reviews;
Drop table if exists responses;

CREATE TABLE if not exists rooms (
  id INT PRIMARY KEY
);

CREATE TABLE if not exists users (
  id SERIAL PRIMARY KEY,
  userName VARCHAR(30),
  userPic VARCHAR(100)
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
  ownerName VARCHAR(30) DEFAULT NULL,
  ownerResponse VARCHAR(500) DEFAULT NULL,
  responseDate VARCHAR(50) DEFAULT NULL
  -- FOREIGN KEY (roomID) REFERENCES rooms(id),
  -- FOREIGN KEY (userID) REFERENCES users(id)
);

-- CREATE TABLE if not exists responses (
--   id SERIAL PRIMARY KEY,
--   reviewID INT,
--   review VARCHAR(500),
--   responseDate DATE
--   -- FOREIGN KEY (reviewID) REFERENCES reviews(id)
-- );

\COPY rooms FROM '/Users/maureenlee/Desktop/HR/SDC/review-module/db/postGres/rooms.csv' DELIMITER ',' CSV HEADER;
\COPY users FROM '/Users/maureenlee/Desktop/HR/SDC/review-module/db/postGres/users.csv' DELIMITER ',' CSV HEADER;
\COPY reviews FROM '/Users/maureenlee/Desktop/HR/SDC/review-module/db/postGres/reviews6.csv' DELIMITER ',' CSV HEADER;
-- \COPY responses FROM '/Users/maureenlee/Desktop/HR/SDC/review-module/db/postGres/responses.csv' DELIMITER ',' CSV HEADER;


ALTER TABLE reviews ADD CONSTRAINT fk_userid FOREIGN KEY(userid) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE reviews ADD CONSTRAINT fk_roomid FOREIGN KEY(roomid) REFERENCES rooms(id) ON DELETE CASCADE;
-- ALTER TABLE responses ADD CONSTRAINT fk_reviewid FOREIGN KEY(reviewid) REFERENCES reviews(id) ON DELETE CASCADE;



CREATE INDEX roomIDindex ON reviews(roomID);
CREATE INDEX userIDindex ON reviews(userID);

-- COPY rooms(id)
-- FROM '/Users/maureenlee/Desktop/HR/SDC/review-module/db/postGres/rooms.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY users(id, username, userpic)
-- FROM '/Users/maureenlee/Desktop/HR/SDC/review-module/db/postGres/users.csv'
-- DELIMITER ','
-- CSV HEADER;

-- id SERIAL PRIMARY KEY,
--   userID INT,
--   review VARCHAR(500),
--   roomID INT,
--   cleanRating SMALLINT,
--   accuracyRating SMALLINT,
--   commnRating SMALLINT,
--   locRating SMALLINT,
--   checkInRating SMALLINT,
--   valueRating SMALLINT,
--   reviewDate DATE,

-- COPY reviews(id, userid, review, roomID, cleanRating, )
-- FROM '/Users/maureenlee/Desktop/HR/SDC/review-module/db/postGres/users.csv'
-- DELIMITER ','
-- CSV HEADER;
