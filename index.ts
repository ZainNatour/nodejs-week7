import * as express from "express";
import { Request, Response } from "express";
import path from "path";
import booksRouter from "./routes/books";
import { sequelize } from "./models/books";
import db from "./databaseConfig/connection";

const app = express();

app.use(express.json());

app.use("/books", booksRouter);
app.use("/", (req: Request, res: Response) => {
  res.send("root page, go to the books path");
});

app.listen(3000, "localhost", () => {
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
