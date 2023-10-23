import mysql from "mysql2";

const dbConfig: mysql.ConnectionOptions = {
  host: "localhost",
  user: "root",
  password: "root123",
  database: "nodejs_week7",
};

const db: mysql.Connection = mysql.createConnection(dbConfig);

db.connect((err: mysql.MysqlError | null) => {
  if (err) {
    console.error(err, "failed to connect+++++++++++++++++++++++++++");
  } else {
    console.log("connected+++++++++++++++++++++++++++++++++++");
  }
});

export default db;
