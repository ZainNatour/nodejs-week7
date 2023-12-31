import { sequelize, DataTypes } from "../databaseConfig/sequelize";

const Book = sequelize.define("book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  genre: {
    type: DataTypes.STRING,
  },
});

export { sequelize, DataTypes, Book };
