const fs = require('fs');
const faker = require('faker');
const v8 = require('v8');
const moment = require('moment');

// const checkMemoryNative = () => {
//   console.log("Memory Usage: ", process.memoryUsage())
// }

// const printHeapStats = () => {
//   console.log('Heap Status', v8.getHeapSpaceStatistics())
// }

const seedReviews = (writer, encoding, callback) => {
  // const reviewsValue = [1, 3, 7, 11, 17, 19, 35];
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
  const potentialNames = ['Liza', 'Isobel', 'Gregoria', 'Cassandra', 'Everett', 'Monroe', 'Isadore', 'Ana', 'Kole', 'Pasquale'];
  const potentialAvatar = ['https://s3.amazonaws.com/uifaces/faces/twitter/alevizio/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/saarabpreet/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/marcomano_/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/commadelimited/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/jqiuss/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/wim1k/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/salvafc/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/naupintos/128.jpg']
  const responsePotential = ['Liza', 'Isobel', 'Gregoria', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  // const responsePotential = [faker.name.firstName(), null, null, null, null, null, null, null, null, null, null];
  let i = 100000000;
  // let i = 1170;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const userID = faker.random.number({'min': 1, 'max': 10000000});
      const userName = potentialNames[faker.random.number({'min': 0, 'max': 9})];
      const userPic =  potentialAvatar[faker.random.number({'min': 0, 'max': 9})];
      const review = reviews[faker.random.number({'min': 0, 'max': 7})];
      const roomID = faker.random.number({'min': 1, 'max': 10000000});
      const cleanRating = faker.random.number({'min': 2, 'max': 5});
      const accuracyRating = faker.random.number({'min': 2, 'max': 5});
      const commnRating = faker.random.number({'min': 2, 'max': 5});
      const locRating = faker.random.number({'min': 2, 'max': 5});
      const checkInRating = faker.random.number({'min': 2, 'max': 5});
      const valueRating = faker.random.number({'min': 2, 'max': 5});
      const reviewDate = moment(faker.date.past()).format("YYYY-MM-DD");
      const ownerName = responsePotential[faker.random.number({'min': 0, 'max': 18})];
      const ownerResponse = (ownerName === null) ? null : reviews[faker.random.number({'min': 0, 'max': 7})];
      const responseDate = (ownerName === null) ? null : reviewDate;
      const reviewsData = `${id}, ${userID}, ${userName}, ${userPic}, ${review}, ${roomID}, ${cleanRating}, ${accuracyRating}, ${commnRating}, ${locRating}, ${checkInRating}, ${valueRating}, ${reviewDate}, ${ownerName}, ${ownerResponse}, ${responseDate}\n`;
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

const writeStreamReviews = fs.createWriteStream('./mongoReviewsAll2.csv')
const line1Reviews = `id, userID, userName, userPic, review, roomID, cleanRating, accuracyRating, commnRating, locRating, checkInRating, valueRating, reviewDate, ownerName, ownerResponse, responseDate\n`;
writeStreamReviews.write(line1Reviews);
seedReviews(writeStreamReviews, 'ascii', ()=>{
  writeStreamReviews.end();
  console.log('written reviews!')
})


// const seedRooms = (writer, encoding, callback) => {
//   const reviewsValue = [1, 3, 7, 11, 17, 19, 35];
//   const numberOfReviews = reviewsValue[faker.random.number({'min': 0, 'max': 6})];
//   const reviewText = [
//     'Voluptatem voluptas at. Rerum iure debitis voluptatibus odit rerum possimus voluptatem.',
//     'Labore velit qui ad et. Sed labore eligendi dolorum quasi.',
//     'Iure eius ratione illo quibusdam neque repellat molestias aspernatur maxime.',
//     'Ducimus eos dolor ipsum odio dolores sit dolorem in. Fugiat libero in non et veritatis aliquid beatae.',
//     'Mollitia quo facilis pariatur aliquid facere et expedita quia.',
//     'Tempora temporibus exercitationem quibusdam aut vel perspiciatis nulla earum facere. Sit rerum nesciunt inventore quo quia id aut molestias magnam.',
//     'Non dolorem et ab tenetur omnis voluptatum autem incidunt alias.',
//     'In culpa deserunt est provident repellat.'
//   ];
//   const potentialNames = ['Liza', 'Isobel', 'Gregoria', 'Cassandra', 'Everett', 'Monroe', 'Isadore', 'Ana', 'Kole', 'Pasquale'];
//   const potentialAvatar = ['https://s3.amazonaws.com/uifaces/faces/twitter/alevizio/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/saarabpreet/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/marcomano_/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/commadelimited/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/jqiuss/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/wim1k/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/salvafc/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/naupintos/128.jpg']
//   cconst responsePotential = ['Liza', 'Isobel', 'Gregoria', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
//   let i = 10;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const reviews = [];
//       for (let j = 0; j < numberOfReviews; j++) {
//         const userName = faker.name.firstName();
//         const userPic = faker.image.avatar();
//         const review = reviews[faker.random.number({'min': 0, 'max': 7})];
//         const roomID = faker.random.number({'min': 1, 'max': 10000000});
//         const cleanRating = faker.random.number({'min': 2, 'max': 5});
//         const accuracyRating = faker.random.number({'min': 2, 'max': 5});
//         const commnRating = faker.random.number({'min': 2, 'max': 5});
//         const locRating = faker.random.number({'min': 2, 'max': 5});
//         const checkInRating = faker.random.number({'min': 2, 'max': 5});
//         const valueRating = faker.random.number({'min': 2, 'max': 5});
//         const reviewDate = moment(faker.date.past()).format("YYYY-MM-DD");
//         // var reviewDate =  moment(faker.date.past()).format("YYYY-MM-DD");
//         const ownerName = responsePotential[faker.random.number({'min': 0, 'max': 10})];
//         const ownerResponse = (ownerName === null) ? null : reviews[faker.random.number({'min': 0, 'max': 7})];
//         const responseDate= (ownerName === null) ? null : reviewDate;
//         var newReview = {
//           // userID: userID,
//           userName: 1,
//           userPic: userPic,
//           review: reviews[faker.random.number({'min': 0, 'max': 7})],
//           // roomID = faker.random.number({'min': 1, 'max': 10000000});
//           cleanRating: cleanRating,
//           accuracyRating: accuracyRating,
//           commnRating: commnRating,
//           locRating: locRating,
//           checkInRating: checkInRating,
//           valueRating: valueRating,
//           reviewDate: reviewDate,
//           ownerName: ownerName,
//           ownerResponse: ownerResponse,
//           responseDate: responseDate
//         }
//         reviews.push(newReview);
//       }
//       const roomsData = `${id}, ${reviews}\n`;
//         // const roomsData = `${id}, ${userID}, ${userName}, ${userPic}, ${review}, ${roomID}, ${cleanRating}, ${accuracyRating}, ${commnRating}, ${locRating}, ${checkInRating}, ${valueRating}, ${reviewDate}, ${ownerName}, ${ownerResponse}, ${responseDate}\n`;

//       // const roomsData = `${id}, ${reviews}\n`;
//       // const userID = faker.random.number({'min': 1, 'max': 10000000});
//       // const userName = faker.name.firstName();
//       // const userPic = faker.image.avatar();
//       // const review = reviews[faker.random.number({'min': 0, 'max': 7})];
//       // const roomID = faker.random.number({'min': 1, 'max': 10000000});
//       // const cleanRating = faker.random.number({'min': 2, 'max': 5});
//       // const accuracyRating = faker.random.number({'min': 2, 'max': 5});
//       // const commnRating = faker.random.number({'min': 2, 'max': 5});
//       // const locRating = faker.random.number({'min': 2, 'max': 5});
//       // const checkInRating = faker.random.number({'min': 2, 'max': 5});
//       // const valueRating = faker.random.number({'min': 2, 'max': 5});
//       // const reviewDate = moment(faker.date.past()).format("YYYY-MM-DD");
//       // const ownerName = responsePotential[faker.random.number({'min': 0, 'max': 10})];
//       // const ownerResponse = (ownerName === null) ? null : reviews[faker.random.number({'min': 0, 'max': 7})];
//       // const responseDate = (ownerName === null) ? null : moment(reviewDate, "YYYY-MM-DD").add(5, 'days').format("YYYY-MM-DD");
//       // const reviewsData = `${id}, ${userID}, ${userName}, ${userPic}, ${review}, ${roomID}, ${cleanRating}, ${accuracyRating}, ${commnRating}, ${locRating}, ${checkInRating}, ${valueRating}, ${reviewDate}, ${ownerName}, ${ownerResponse}, ${responseDate}\n`;
//     if (i === 0) {
//       writer.write(roomsData, encoding, callback);
//     } else {
//       ok = writer.write(roomsData, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write()
// }

// const writeStreamRooms = fs.createWriteStream('./mongoRooms.csv')
// // const line1Rooms = `id, userID, userName, userPic, review, roomID, cleanRating, accuracyRating, commnRating, locRating, checkInRating, valueRating, reviewDate, ownerName, ownerResponse, responseDate\n`;
// const line1Rooms = `id, reviews\n`;
// writeStreamRooms.write(line1Rooms);
// seedRooms(writeStreamRooms, 'ascii', ()=>{
//   writeStreamRooms.end();
//   console.log('written rooms!')
// })


// const userID = faker.random.number({'min': 1, 'max': 10000000});
//           const userName = faker.name.firstName();
//           const userPic = faker.image.avatar();
//           const review = reviews[faker.random.number({'min': 0, 'max': 7})];
//           const roomID = faker.random.number({'min': 1, 'max': 10000000});
//           const cleanRating = faker.random.number({'min': 2, 'max': 5});
//           const accuracyRating = faker.random.number({'min': 2, 'max': 5});
//           const commnRating = faker.random.number({'min': 2, 'max': 5});
//           const locRating = faker.random.number({'min': 2, 'max': 5});
//           const checkInRating = faker.random.number({'min': 2, 'max': 5});
//           const valueRating = faker.random.number({'min': 2, 'max': 5});
//           const reviewDate = moment(faker.date.past()).format("YYYY-MM-DD");
//           const ownerName = responsePotential[faker.random.number({'min': 0, 'max': 10})];
//           const ownerResponse = (ownerName === null) ? null : reviews[faker.random.number({'min': 0, 'max': 7})];
//           const responseDate = (ownerName === null) ? null : moment(reviewDate, "YYYY-MM-DD").add(5, 'days').format("YYYY-MM-DD");