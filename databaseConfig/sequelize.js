// sequelize.js

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("nodejs_week7", "root", "root123", {
  host: "localhost",
  dialect: "mysql", // Change this to match your database type (e.g., 'mysql', 'postgres', 'sqlite')
});

module.exports = { sequelize, DataTypes };
