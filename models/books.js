"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.DataTypes = exports.sequelize = void 0;
var sequelize_1 = require("../databaseConfig/sequelize");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return sequelize_1.sequelize; } });
Object.defineProperty(exports, "DataTypes", { enumerable: true, get: function () { return sequelize_1.DataTypes; } });
var Book = sequelize_1.sequelize.define("book", {
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    publicationYear: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.Book = Book;
