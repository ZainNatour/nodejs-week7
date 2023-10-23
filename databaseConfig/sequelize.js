"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypes = exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
Object.defineProperty(exports, "DataTypes", { enumerable: true, get: function () { return sequelize_1.DataTypes; } });
var sequelize = new sequelize_1.Sequelize("nodejs_week7", "root", "root123", {
    host: "localhost",
    dialect: "mysql", // Change this to match your database type (e.g., 'mysql', 'postgres', 'sqlite')
});
exports.sequelize = sequelize;
