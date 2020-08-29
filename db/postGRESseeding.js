const fs = require('fs');
const faker = require('faker');

const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const seedRooms = (entries) => {
  let roomsData = `id`;
  for (let i = 0 ; i < entries; i++) {
    roomsData += `${i}`;
    roomsData += ` ${rooms[i%15]}`
    roomsData += `\n`
  }
  return new Promise((resolve, reject)=>{
    fs.writeFile(`rooms.csv`, roomsData, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    });
  });
};

seedRooms(50)
  .then(() => console.log('success with rooms'))
  .catch(() => console.log("error with rooms!!"))


const seedUsers = (entries) => {
  let usersData = `id, userName, usePic\n`;
  for (let i = 0 ; i < entries; i++) {
    usersData += `${i}`
    usersData += ` ${faker.name.firstName()}`
    usersData += ` ${faker.image.avatar()}`
    usersData += `\n`
  }
  return new Promise((resolve, reject)=>{
    fs.writeFile(`users.csv`, usersData, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    });
  });
};


seedUsers(50)
  .then(() => console.log('success with users'))
  .catch(() => console.log("error with users!!"))


const ratings = [1.5, 3.8, 3.9, 4.0]

const seedReviews = (entries) => {
  let reviewsData = `id, userID, review, roomID, cleanRating, accuracyRating, commnRating, locRating, checkInRating, valueRating, reviewDate\n`;
  for (let i = 0 ; i < entries; i++) {
    reviewsData += `${i}`;
    reviewsData += ` ${i}`
    reviewsData += ` ${faker.lorem.sentences()}`
    reviewsData += ` ${i}`
    reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
    reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
    reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
    reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
    reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
    reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
    reviewsData += ` ${faker.date.past()}`
    reviewsData += `\n`
  }

  return new Promise((resolve, reject)=>{
    fs.writeFile(`reviews.csv`, reviewsData, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
        // resolve((data) => {seedReviews(id), data});
      }
    });
  });
};

seedReviews(50)
  .then(() => console.log('success with reviews'))
  .catch(() => console.log("error with reviews!!"))



const seedResponses = (entries) => {
  let responsesData = `id, reviewID, review, responseDate\n`;
  for (let i = 0 ; i < entries; i++) {
    responsesData += `${i}`;
    responsesData += ` ${i}`
    responsesData += ` ${faker.lorem.sentences()}`
    responsesData += ` ${faker.date.past()}`
    responsesData += `\n`
  }

  return new Promise((resolve, reject)=>{
    fs.writeFile(`responses.csv`, responsesData, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
        // resolve((data) => {seedReviews(id), data});
      }
    });
  });
};

seedResponses(50)
  .then(() => console.log('success with responses'))
  .catch(() => console.log("error with responses!!"))