"use strict";

/**
 * Module dependencies.
 */

import config from "../config";
import express from "express";
import morgan from "morgan";
import logger from "./logger";
import bodyParser from "body-parser";
import favicon from "serve-favicon";
import compress from "compression";
import methodOverride from "method-override";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import flash from "connect-flash";
import consolidate from "consolidate";
import path from "path";
import timeout from "express-timeout-handler";

/**
 * Initialize local variables
 */
module.exports.initLocalVariables = function(app) {
  // Setting application local variables
  app.locals.title = config.app.title;
  app.locals.description = config.app.description;
  if (config.secure && config.secure.ssl === true) {
    app.locals.secure = config.secure.ssl;
  }
  app.locals.keywords = config.app.keywords;
  app.locals.livereload = config.livereload;
  app.locals.logo = config.logo;
  app.locals.favicon = config.favicon;

  // Passing the request url to environment locals
  app.use(function(req, res, next) {
    res.locals.host = req.protocol + "://" + req.hostname;
    res.locals.url = req.protocol + "://" + req.headers.host + req.originalUrl;
    next();
  });
};

/**
 * Initialize application middleware
 */
module.exports.initMiddleware = function(app) {
  // Showing stack errors
  app.set("showStackError", true);

  // Enable jsonp
  app.enable("jsonp callback");

  // Should be placed before express.static
  app.use(
    compress({
      filter: function(req, res) {
        return /json|text|javascript|css|font|svg/.test(
          res.getHeader("Content-Type")
        );
      },
      level: 9
    })
  );

  // Initialize favicon middleware
  app.use(favicon(app.locals.favicon));

  // Enable logger (morgan)
  if (process.env.NODE_ENV != "production") {
    app.use(morgan(logger.getFormat(), logger.getOptions()));
  }

  // Environment dependent middleware
  if (process.env.NODE_ENV === "development") {
    // Disable views cache
    app.set("view cache", false);
  } else if (process.env.NODE_ENV === "production") {
    app.locals.cache = "memory";
  }

  // Request body parsing middleware should be above methodOverride
  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: "50mb"
    })
  );

  app.use(
    bodyParser.json({
      limit: "50mb"
    })
  );

  app.use(express.static(path.resolve("uploads", "images")));
  app.use(express.static(path.resolve("uploads", "documents")));

  app.use(methodOverride());

  // Add the cookie parser and flash middleware
  app.use(cookieParser());
  app.use(flash());

  // added for increase response time by Shadab
  var options = {
    // Optional. This will be the default timeout for all endpoints.
    // If omitted there is no default timeout on endpoints
    timeout: 2 * 60 * 1000, // 2 m
    // Optional. This function will be called on a timeout and it MUST
    // terminate the request.
    // If omitted the module will end the request with a default 503 error.
    onTimeout: function(req, res) {
      res.status(503).json({ status: "Service unavailable. Please retry." });
    },
    // Optional. Define a function to be called if an attempt to send a response
    // happens after the timeout where:
    // - method: is the method that was called on the response object
    // - args: are the arguments passed to the method
    // - requestTime: is the duration of the request
    // timeout happened
    onDelayedResponse: function(req, method, args, requestTime) {
      console.log(`Attempted to call ${method} after timeout`);
    }
    // Optional. Provide a list of which methods should be disabled on the
    // response object when a timeout happens and an error has been sent. If
    // omitted, a default list of all methods that tries to send a response
    // will be disable on the response object
  };
  app.use(function(req, res, next) {
    if (
      req.url.toString().includes("/teacher") ||
      req.url.toString().includes("/student")
    ) {
      options.timeout = 15 * 60 * 1000; // 15 m
    }
    next();
  });
  app.use(timeout.handler(options));
};

/**
 * Configure view engine
 */
module.exports.initViewEngine = function(app) {
  // Set swig as the template engine
  app.engine("server.view.html", consolidate[config.templateEngine]);

  // Set views path and view engine
  app.set("view engine", "server.view.html");
  app.set("views", "./");
};

/**
 * Configure Helmet headers configuration
 */
module.exports.initHelmetHeaders = function(app) {
  // Use helmet to secure Express headers
  var SIX_MONTHS = 15778476000;
  // Allow from a specific host:

  app.use(helmet.frameguard());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.ieNoOpen());
  app.use(
    helmet.hsts({
      maxAge: SIX_MONTHS,
      includeSubDomains: true,
      force: true
    })
  );
  app.disable("x-powered-by");
};

/**
 * Configure the modules static routes
 */
module.exports.initModulesClientRoutes = function(app) {
  // Setting the app router and static folder
  app.use("/", express.static(path.resolve("./public")));
  app.use("/", express.static(path.resolve("./build")));
  app.use("/", express.static(path.resolve("./templates")));
  app.use("/frontend", express.static(path.resolve("frontend")));
};

/**
 * Configure error handling
 */
module.exports.initErrorRoutes = function(app) {
  app.use(function(err, req, res, next) {
    // If the error object doesn't exists
    if (!err) {
      return next();
    }

    // Log it
    console.error(err.stack);
    return res.status(500).send({
      error_code: "3",
      message: "Invalid Request Input."
    });
  });
};

/**
 * Configure the modules server routes
 */
module.exports.initModulesServerRoutes = function(app) {
  // Globbing routing files
  require(path.join(
    __dirname,
    "../../",
    "/modules/auth/server/routes/auth.server.route"
  ))(app);
};

module.exports.allowCrossOriginForAdmin = function(app) {
  // Add headers
  app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type,Origin,Accept,Authorization,x-access-token"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    res.setHeader("Connection", "close");

    // Pass to next layer of middleware
    next();
  });
};

/**
 * Initialize the Express application
 */
module.exports.init = function() {
  // Initialize express app
  var app = express();

  //allow cross origin access for admin
  this.allowCrossOriginForAdmin(app);

  // Initialize local variables
  this.initLocalVariables(app);

  // Initialize Express middleware
  this.initMiddleware(app);

  // Initialize Express view engine
  this.initViewEngine(app);

  // Initialize Helmet security headers
  this.initHelmetHeaders(app);

  // Initialize modules static client routes, before session!
  this.initModulesClientRoutes(app);

  // Initialize modules server routes
  this.initModulesServerRoutes(app);

  // Initialize error routes
  this.initErrorRoutes(app);

  return app;
};
