const fs = require('fs');
const faker = require('faker');

const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const seedRooms = (entries) => {
  let dataString = '';
  for (let i = 0 ; i < entries; i++) {
    dataString += `${i}`;
    dataString += ` ${rooms[i%15]}`
    dataString += `\n`
  }
  return new Promise((resolve, reject)=>{
    fs.writeFile(`rooms.csv`, dataString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    });
  });
};

seedRooms(50)
  .then(() => console.log('success'))
  .catch(() => console.log("error!!"))


const seedRooms = (entries) => {
  let dataString = '';
  for (let i = 0 ; i < entries; i++) {
    dataString += `${i}`;
    dataString += ` ${rooms[i%15]}`
    dataString += `\n`
  }
  return new Promise((resolve, reject)=>{
    fs.writeFile(`rooms.csv`, dataString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    });
  });
};

seedRooms(50)
  .then(() => console.log('success'))
  .catch(() => console.log("error!!"))


let seedUsers = () => {
  const usersQuery = `INSERT INTO rooms (userName, userPic) VALUES (${faker.firstName}, `;
  db.query(roomsQuery, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('product images shown', results)
    }
  })
}