const express = require("express");
const path = require("path");
const booksRouter = require("./routes/books");
const { sequelize } = require("./models/books");
const db = require("./databaseConfig/connection");
// sequelize
//   .sync()
//   .then(() => {
//     console.log("Database & tables created!");
//   })
//   .catch((error) => {
//     console.error("Error creating database and tables:", error);
//   });

const app = express();
app.use(express.json());
// app.set("viee engine", "pug");
// app.set("views", path.join(__dirname, "templates"));

app.use("/books", booksRouter);
app.use("/", (req, res) => {
  res.send("root page, go the books path");
});

app.listen(3000, "localhost", () => {
  console.log("server is running");
});
