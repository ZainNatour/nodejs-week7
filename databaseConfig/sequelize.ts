import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("nodejs_week7", "root", "root123", {
  host: "localhost",
  dialect: "mysql", // Change this to match your database type (e.g., 'mysql', 'postgres', 'sqlite')
});

export { sequelize, DataTypes };
