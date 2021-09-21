const express = require("express");
const Router = express.Router();
var db = require('../config/connection');
const { encrypt } = require("../models/EncryptionHandler");
const bcrypt = require('bcrypt');


Router.get("/total", (req, res) => {
  db.query("SELECT t.trainerId, t.firstName, t.lastName, t.email, t.telephone, a.attendance FROM trainer t LEFT JOIN trainerattendance a ON t.trainerId = a.trainerID AND a.date = DATE(NOW()) GROUP BY t.trainerId", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

Router.get("/appointments", (req, res) => {
  db.query("SELECT t.trainerId, t.firstName, t.lastName, a.date, COUNT(*) AS 'count' FROM trainer t LEFT JOIN appointment a ON t.trainerId = a.trainerID WHERE a.date = DATE(NOW()) GROUP BY t.trainerId", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

Router.get("/attendance", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM trainerattendance a, trainer t WHERE a.attendance = 1 AND date = DATE(NOW()) AND t.trainerId = a.trainerId", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.post("/add", async(req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;
  const telephone = req.body.telephone;
  const password = req.body.password;
  const salary = req.body.salary;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.query("SELECT email FROM trainer WHERE trainer.email = ?", [email], (err, result) => {
        if (err) {
          console.log(err);
        } else if (result.length >= 1){
          console.log("Email already exists");
          res.send({
            message: 'Email Already Exists',
            type: 'danger',
         });
        } else {
          db.query(
            "INSERT INTO trainer (firstName, lastName, email, telephone, password, salary) VALUES (?,?,?,?,?,?)",
            [fName, lName, email, telephone, hashedPassword, salary],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send({
                  message: 'Trainer Added Successfully',
                  type: 'primary',
               });
              }
            }
          );
        }
    });
  
});

Router.get("/get", (req, res) => {
  var queryParams = req.query;
  console.log(queryParams);
  db.query("SELECT * FROM trainer WHERE trainerId = ?", [queryParams.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

Router.post("/update", (req, res) => {
  const tid = req.body.tid;
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;
  const salary = req.body.salary;

  console.log(salary);

  db.query(
    "UPDATE trainer SET firstName=?, lastName=?, email=?, salary=? WHERE trainerId=?",
    [fName, lName, email, salary, tid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Updated Successfully");
      }
    }
  );
});

Router.post("/delete", (req, res) => {
  const tid = req.body.tid;
  console.log(tid);

  db.query("SELECT appointment.trainerId FROM appointment WHERE appointment.trainerID = ? AND appointment.date > DATE(NOW()) AND approved = 1", [tid], (err, result) => {
        if (err) {
          console.log(err);
        } else if (result.length >= 1){
          console.log("Could not delete. Trainer already has upcoming appointments");
          res.send({
            message: 'Could not delete. Trainer already has upcoming appointments',
            type: 'danger',
         });
        } else {
          db.query(
            "DELETE FROM trainer WHERE trainerId=?", [tid], (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send({
                  message: 'Trainer Removed Successfully',
                  type: 'primary',
               });
              }
            }
          );
        }
    });
  
});

module.exports = Router;