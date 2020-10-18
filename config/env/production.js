"use strict";

var defaultEnvConfig = require("./default");

module.exports = {
  secure: {
    ssl: true,
    privateKey: "",
    certificate: ""
  },
  mode: "production",
  db: {},

  port: process.env.PORT || 4040,
  host: process.env.HOST || "0.0.0.0",
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: "dev",
    options: {}
  },
  app: {
    title: defaultEnvConfig.app.title + " - Prodction Environment"
  },
  livereload: true,
  SECRETTOKEN: "PRODUCTIONTOKENSEC",
  externalURL: {}
};
