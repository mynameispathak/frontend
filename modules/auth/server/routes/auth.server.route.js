module.exports = app => {
  const auth = require("../controllers/auth.server.controller");

  // Create a new student
  app.post("/api/auth/signup", auth.create);
};
