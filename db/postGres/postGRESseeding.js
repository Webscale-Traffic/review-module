const fs = require('fs');
const faker = require('faker');
const v8 = require('v8');
const moment = require('moment');

// const address = Array.from(Array(500), (_, i) => i + 100);
// address[i % address.length]

// const checkMemoryNative = () => {
//   console.log("Memory Usage: ", process.memoryUsage())
// }

// const printHeapStats = () => {
//   console.log('Heap Status', v8.getHeapSpaceStatistics())
// }

// const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const seedRooms = (writer, encoding, callback) => {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const data = `${id}\n`;
//     if (i === 0) {
//       writer.write(data, encoding, callback);
//     } else {
//       ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write()
// }

// const writeStreamRooms = fs.createWriteStream('./rooms.csv')
// const line1Rooms= 'id\n';
// writeStreamRooms.write(line1Rooms);
// seedRooms(writeStreamRooms, 'utf-8', ()=>{
//   writeStreamRooms.end();
//   console.log('written rooms!')
// })

// const potentialNames = ['Liza', 'Isobel', 'Gregoria', 'Cassandra', 'Everett', 'Monroe', 'Isadore', 'Ana', 'Kole', 'Pasquale'];
// const potentialAvatar = ['https://s3.amazonaws.com/uifaces/faces/twitter/alevizio/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/saarabpreet/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/marcomano_/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/commadelimited/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/jqiuss/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/wim1k/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/salvafc/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/naupintos/128.jpg']

// const seedUsers = (writer, encoding, callback) => {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const userName = potentialNames[faker.random.number({'min': 0, 'max': 9})];
//       const userPic =  potentialAvatar[faker.random.number({'min': 0, 'max': 9})];
//       const data = `${id}, ${userName}, ${userPic}\n`;
//     if (i === 0) {
//       writer.write(data, encoding, callback);
//     } else {
//       ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write()
// }

// const writeStreamUsers = fs.createWriteStream('./users.csv')
// const line1Users = `id, userName, usePic\n`;
// writeStreamUsers.write(line1Users);
// seedUsers(writeStreamUsers, 'utf-8', ()=>{
//   writeStreamUsers.end();
//   console.log('written users!')
// })


const seedReviews = (writer, encoding, callback) => {
  let reviewsValue = [1, 3, 7, 11, 17, 19, 35];
  const reviews = [
    'Voluptatem voluptas at. Rerum iure debitis voluptatibus odit rerum possimus voluptatem.',
    'Labore velit qui ad et. Sed labore eligendi dolorum quasi.',
    'Iure eius ratione illo quibusdam neque repellat molestias aspernatur maxime.',
    'Ducimus eos dolor ipsum odio dolores sit dolorem in. Fugiat libero in non et veritatis aliquid beatae.',
    'Mollitia quo facilis pariatur aliquid facere et expedita quia.',
    'Tempora temporibus exercitationem quibusdam aut vel perspiciatis nulla earum facere. Sit rerum nesciunt inventore quo quia id aut molestias magnam.',
    'Non dolorem et ab tenetur omnis voluptatum autem incidunt alias.',
    'In culpa deserunt est provident repellat.'
  ];
  const responsePotential = ['Liza', 'Isobel', 'Gregoria', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  let i = 100000000;
  // let userID =
  let id = 0;
  // let roomIDNumber = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      let numberOfReviews = reviewsValue[faker.random.number({'min': 0, 'max': 6})];
      let roomIDNumber = faker.random.number({'min': 1, 'max': 10000000})
      for (let j = 0; j < numberOfReviews; j++) {
        id += 1;
        // i%100000000
        const userID = faker.random.number({'min': 1, 'max': 10000000});
        const review = reviews[faker.random.number({'min': 0, 'max': 7})];
        const roomID = faker.random.number({'min': 1, 'max': 10000000});
        const cleanRating = faker.random.number({'min': 2, 'max': 5});
        const accuracyRating = faker.random.number({'min': 2, 'max': 5});
        const commnRating = faker.random.number({'min': 2, 'max': 5});
        const locRating = faker.random.number({'min': 2, 'max': 5});
        const checkInRating = faker.random.number({'min': 2, 'max': 5});
        const valueRating = faker.random.number({'min': 2, 'max': 5});
        const reviewDate = moment(faker.date.past()).format("YYYY-MM-DD");
        // var reviewDate =  moment(faker.date.past()).format("YYYY-MM-DD");
        const ownerName = responsePotential[faker.random.number({'min': 0, 'max': 18})];
        const ownerResponse = (ownerName === null) ? null : reviews[faker.random.number({'min': 0, 'max': 7})];
        const responseDate= (ownerName === null) ? null : reviewDate;
        var reviewsData = `${id}, ${userID}, ${review}, ${roomID}, ${cleanRating}, ${accuracyRating}, ${commnRating}, ${locRating}, ${checkInRating}, ${valueRating}, ${reviewDate}, ${ownerName}, ${ownerResponse}, ${responseDate}\n`;
      }
      // const reviewsData = `${id}, ${userID}, ${review}, ${roomID}, ${cleanRating}, ${accuracyRating}, ${commnRating}, ${locRating}, ${checkInRating}, ${valueRating}, ${reviewDate}, ${ownerName}, ${ownerResponse}, ${responseDate}\n`;
      // const reviewsData = `${id}, ${userID}, ${review}, ${roomID}, ${cleanRating}, ${accuracyRating}, ${commnRating}, ${locRating}, ${checkInRating}, ${valueRating}, ${reviewDate}, ${ownerName}, ${ownerResponse}, ${responseDate}\n`;
        // reviewsData += `${id += 1},`
        // reviewsData += ` ${faker.random.number({'min': 1, 'max': 10000000})},`
        // // i%10000000 + 1},`
        // reviewsData += ` ${reviews[faker.random.number({'min': 0, 'max': 7})]},`
        // reviewsData += ` ${roomIDNumber},`
        // // reviewsData += ` ${faker.random.number({'min': 1, 'max': 10000000})}`
        // reviewsData += ` ${faker.random.number({'min': 2, 'max': 5})},`
        // reviewsData += ` ${faker.random.number({'min': 2, 'max': 5})},`
        // reviewsData += ` ${faker.random.number({'min': 2, 'max': 5})},`
        // reviewsData += ` ${faker.random.number({'min': 2, 'max': 5})},`
        // reviewsData += ` ${faker.random.number({'min': 2, 'max': 5})},`
        // reviewsData += ` ${faker.random.number({'min': 2, 'max': 5})},`
        // reviewsData += ` ${moment(faker.date.past()).format("YYYY-MM")}`
        // reviewsData += `\n`
    if (i === 0) {
      writer.write(reviewsData, encoding, callback);
    } else {
      ok = writer.write(reviewsData, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}

const writeStreamReviews = fs.createWriteStream('./reviews6.csv')
const line1Reviews = `id, userID, review, roomID, cleanRating, accuracyRating, commnRating, locRating, checkInRating, valueRating, reviewDate, ownerName, ownerResponse, responseDate\n`;
writeStreamReviews.write(line1Reviews);
seedReviews(writeStreamReviews, 'ascii', ()=>{
  writeStreamReviews.end();
  console.log('written reviews!')
})

// const seedResponses = (writer, encoding, callback) => {
//   let i = 10000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const reviewID = faker.random.number({'min': 1, 'max': 10000000})
//       const review = faker.lorem.sentences()
//       const responseDate = moment(reviewDate, "YYYY-MM-DD").add(5, 'days').format("YYYY-MM-DD");
//       const data = `${id}, ${reviewID}, ${review}, ${responseDate}\n`;
//     if (i === 0) {
//       writer.write(data, encoding, callback);
//     } else {
//       ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write()
// }

// const writeStreamResponses = fs.createWriteStream('./responses.csv')
// const line1Responses = `id, reviewID, review, responseDate\n`;
// writeStreamResponses.write(line1Responses);
// seedResponses(writeStreamResponses, 'utf-8', ()=>{
//   writeStreamResponses.end();
//   console.log('written responses!')
// })


// writeTenMillionUsers(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });



// write()
// }
//     }
//   }
//   let roomsData = `id`;
//   for (let i = 1 ; i < entries; i++) {
//     roomsData += `${rooms[i%15]}`
//     roomsData += `\n`
//   }
//   return new Promise((resolve, reject)=>{
//     fs.writeFile(`rooms.csv`, roomsData, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data)
//       }
//     });
//   });
// };

// seedRooms(10000000)
//   .then(() => console.log('success with rooms'))
//   .catch(() => console.log("error with rooms!!"))




// const seedUsers = (entries) => {
//   let usersData = `id, userName, usePic\n`;
//   for (let i = 1 ; i < entries; i++) {
//     usersData += `${i}`
//     usersData += ` ${faker.name.firstName()}`
//     usersData += ` ${faker.image.avatar()}`
//     usersData += `\n`
//   }
//   return new Promise((resolve, reject)=>{
//     fs.writeFile(`users.csv`, usersData, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data)
//       }
//     });
//   });
// };


// seedUsers(1000000)
//   .then(() => console.log('success with users'))
//   .catch(() => console.log("error with users!!"))


// // const ratings = [1.5, 3.8, 3.9, 4.0]

// const seedReviews = (entries) => {
//   let reviewsData = `id, userID, review, roomID, cleanRating, accuracyRating, commnRating, locRating, checkInRating, valueRating, reviewDate\n`;
//   for (let i = 1 ; i < entries; i++) {
//     reviewsData += `${i}`;
//     reviewsData += ` ${faker.random.number({'min': 1, 'max': 10000000})}`
//     reviewsData += ` ${faker.lorem.sentences()}`
//     reviewsData += ` ${faker.random.number({'min': 1, 'max': 10000000})}`
//     reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
//     reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
//     reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
//     reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
//     reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
//     reviewsData += ` ${faker.random.number({'min': 2, 'max': 6})}`
//     reviewsData += ` ${faker.date.past()}`
//     reviewsData += `\n`
//   }

//   return new Promise((resolve, reject)=>{
//     fs.writeFile(`reviews.csv`, reviewsData, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//         // resolve((data) => {seedReviews(id), data});
//       }
//     });
//   });
// };

// seedReviews(30000000)
//   .then(() => console.log('success with reviews'))
//   .catch(() => console.log("error with reviews!!"))



// const seedResponses = (entries) => {
//   let responsesData = `id, reviewID, review, responseDate\n`;
//   for (let i = 1 ; i < entries; i++) {
//     responsesData += `${i}`;
//     responsesData += ` ${faker.random.number({'min': 1, 'max': 10000000})}`
//     responsesData += ` ${faker.lorem.sentences()}`
//     responsesData += ` ${faker.date.past()}`
//     responsesData += `\n`
//   }

//   return new Promise((resolve, reject)=>{
//     fs.writeFile(`responses.csv`, responsesData, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//         // resolve((data) => {seedReviews(id), data});
//       }
//     });
//   });
// };

// seedResponses(1000)
//   .then(() => console.log('success with responses'))
//   .catch(() => console.log("error with responses!!"))