"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var books_1 = require("./routes/books"); // Ensure proper import
var app = express();
app.use(express.json());
app.use("/books", books_1.default);
app.use("/", function (req, res) {
    res.send("root page, go to the books path");
});
app.listen(3000, "localhost", function () {
    console.log("Server is running");
});
// sequelize
//   .sync()
//   .then(() => {
//     console.log("Database & tables created!");
//   })
//   .catch((error) => {
//     console.error("Error creating database and tables:", error);
//   });
