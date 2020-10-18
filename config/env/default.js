"use strict";

module.exports = {
  secure: {
    ssl: false,
    privateKey: "",
    certificate: ""
  },
  app: {
    title: "Teacher-Student_Portal",
    description: "",
    keywords: ""
  },
  port: process.env.PORT || 4040,
  host: process.env.HOST || "0.0.0.0",
  templateEngine: "ejs",
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || "SESSIONSCRT",
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: "sessionId",
  sessionCollection: "sessions",
  // Lusca config
  csrf: {
    csrf: false,
    csp: false,
    xframe: "SAMEORIGIN",
    p3p: "ABCDEF",
    hsts: {
      maxAge: 31536000, // Forces HTTPS for one year
      includeSubDomains: true,
      preload: true
    },
    xssProtection: true
  },
  selectedDealer: {},
  logo: "public/logo.png",
  mailer: {
    from: process.env.MAILER_FROM || "",
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || "",
      auth: {
        user: process.env.MAILER_EMAIL_ID || "",
        pass: process.env.MAILER_PASSWORD || ""
      }
    },
    AWS_SES: {
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "",
        pass: ""
      }
    },
    enquiry: ""
  },
  favicon: "public/favicon.ico",
  externalURL: {}
};
