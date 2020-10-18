"use strict";

var defaultEnvConfig = require("./default");

module.exports = {
  db: {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "root",
    DB: "teacher_student"
  },

  port: process.env.PORT || 4040,
  host: process.env.HOST || "0.0.0.0",
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: "dev",
    options: {}
  },
  app: {
    title: defaultEnvConfig.app.title + " - Development Environment"
  },
  livereload: true,
  SECRETTOKEN: "Development",
  OTP: "3603",
  devMobileNumber: "7830265384",
  externalURL: {}
};
