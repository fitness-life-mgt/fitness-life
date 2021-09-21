const mysql = require("mysql");

const db = mysql.createConnection({
    user: "root",
    host: "34.71.114.88",
    password: "123123",
    database: "fitness_life",
  });

  module.exports = db;