"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = require("mysql2");
var dbConfig = {
    host: "localhost",
    user: "root",
    password: "root123",
    database: "nodejs_week7",
};
var db = mysql2_1.default.createConnection(dbConfig);
db.connect(function (err) {
    if (err) {
        console.error(err, "failed to connect+++++++++++++++++++++++++++");
    }
    else {
        console.log("connected+++++++++++++++++++++++++++++++++++");
    }
});
exports.default = db;
