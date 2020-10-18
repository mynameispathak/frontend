"use strict";

/**
 * Module dependencies.
 */
import chalk from "chalk";

import config from "../config";
import express from "./express";
import db from "./db";

var https = require("https"),
  fs = require("fs");

var cluster = require("cluster"),
  numCPUs = require("os").cpus().length;

module.exports.init = function init(callback) {
  var app = express.init();
  if (callback) callback(app);
};

module.exports.start = function start(callback) {
  var _this = this;

  _this.init(app => {
    if (cluster.isMaster) {
      console.log(`Master ${process.pid} is running`);
      for (let i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
      }

      cluster.on("exit", (worker, code, signal) => {
        console.log(
          chalk.yellow("[Cluster]"),
          "Worker has died.",
          worker.process.pid
        );
        console.log(
          chalk.yellow("[Cluster]"),
          "Death was suicide:",
          worker.exitedAfterDisconnect
        );
        if (!worker.exitedAfterDisconnect) {
          var worker = cluster.fork();
        }
      });
    } else {
      console.log(`Worker ${process.pid} started`);
      var appServer = app;
      if (config.secure.ssl) {
        var privateKey = fs.readFileSync(config.secure.privateKey, "utf8");
        var certificate = fs.readFileSync(config.secure.certificate, "utf8");
        var credentials = { key: privateKey, cert: certificate };
        appServer = https.createServer(credentials, app);
      }

      appServer.listen(config.port, () => {
        var server =
          (process.env.NODE_ENV === "secure" ? "https://" : "http://") +
          config.host +
          ":" +
          config.port;
        console.log("--");
        console.log(chalk.green(config.app.title));
        console.log();
        console.log(chalk.green("Environment:     " + process.env.NODE_ENV));
        console.log(chalk.green("Server:          " + server));
        console.log(chalk.green("Database:        " + config.db.HOST));
        console.log(chalk.green("App version:     " + config.meanjs.version));
        if (config.meanjs["meanjs-version"]) {
          console.log(
            chalk.green("MEAN.JS version: " + config.meanjs["meanjs-version"])
          );
        }
        console.log("--");

        if (callback) callback(app, config);
      });
    }
  });
};
