"use strict";

/**
 * Module dependencies.
 */
import config from "../config";
import chalk from "chalk";
import mysql from "mysql";

// Initialize Mysql
var connection = mysql.createPool({
  host: config.db.HOST,
  user: config.db.USER,
  password: config.db.PASSWORD,
  database: config.db.DB,
  debug: false
});
// Attempt to catch disconnects
connection.on("connection", function(connection) {
  console.log("DB Connection established");

  connection.on("error", function(err) {
    console.error(chalk.red(new Date(), "MySQL error", err.code));
  });
  connection.on("close", function(err) {
    console.error(chalk.red(new Date(), "MySQL close", err));
  });
});

module.exports = connection;
