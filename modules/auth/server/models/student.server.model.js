import sql from "../../../../config/lib/db";

// constructor
class Student {
  constructor(student) {
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.gender = student.gender;
    this.phone = student.phone;
    this.email = student.email;
    this.dob = student.dob;
    this.parent1 = student.parent1;
    this.parent2 = student.parent2;
    this.isSibling = student.isSibling;
    this.sibling = student.sibling;
  }
  static create(newStudent, result) {
    sql.query("INSERT INTO student SET ?", newStudent, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created Student: ", { id: res.insertId, ...newStudent });
      result(null, { id: res.insertId, ...newStudent });
    });
  }
  static findById(StudentId, result) {
    sql.query(`SELECT * FROM Student WHERE id = ${StudentId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found Student: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Student with the id
      result({ kind: "not_found" }, null);
    });
  }
  static getAll(result) {
    sql.query("SELECT * FROM Student", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Students: ", res);
      result(null, res);
    });
  }
  static updateById(id, Student, result) {
    sql.query(
      "UPDATE Students SET email = ?, name = ?, active = ? WHERE id = ?",
      [Student.email, Student.name, Student.active, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Student with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated Student: ", { id: id, ...Student });
        result(null, { id: id, ...Student });
      }
    );
  }
  static remove(id, result) {
    sql.query("DELETE FROM Student WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Student with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted Student with id: ", id);
      result(null, res);
    });
  }
  static removeAll(result) {
    sql.query("DELETE FROM Student", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log(`deleted ${res.affectedRows} Students`);
      result(null, res);
    });
  }
}

module.exports = Student;
