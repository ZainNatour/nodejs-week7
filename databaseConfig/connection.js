const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "nodejs_week7",
});

db.connect((err) => {
  if (err) console.log(err, "failed to connect+++++++++++++++++++++++++++");
  console.log("connected+++++++++++++++++++++++++++++++++++");
});

module.exports = db;
