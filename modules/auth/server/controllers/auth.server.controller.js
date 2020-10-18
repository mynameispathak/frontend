const Student = require("../models/student.server.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Student
  const student = new Student({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });

  // Save Student in the database
  Student.create(student, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    else res.send(data);
  });
};
