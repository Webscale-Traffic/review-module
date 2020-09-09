/* eslint-disable no-console */
// const mysql = require("mysql");
const host = "172.17.0.2"; //localhost
const psql = require("psql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "reviews",
});

connection.connect((err) => {
  if (err) {
    console.log("err");
  } else {
    console.log(`Mysql is running on ${host}`);
  }
});

module.exports = connection;
