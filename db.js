const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "crud",
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = db;
