const express = require("express");
const Router = express.Router();
var db = require('../config/connection');
const bcrypt = require('bcrypt');

Router.get("/new", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM `member` WHERE createdAt >= DATE(NOW()) - INTERVAL 7 DAY", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/physical/new", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM `member` WHERE createdAt >= DATE(NOW()) - INTERVAL 7 DAY AND memberType = 1", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/online/total", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM `member` WHERE memberType = 0", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/physical/total", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM `member` WHERE memberType = 1", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/physical/all", (req, res) => {
    db.query("SELECT email, firstName, lastName, telephone FROM `member` WHERE memberType = 1", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/total", (req, res) => {
    db.query("SELECT COUNT(*) AS 'count' FROM member", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/newGraph", (req, res) => {
    db.query("SELECT (DATE(NOW()) - INTERVAL `day` DAY) AS `DayDate`, COUNT(email) AS 'count' FROM (SELECT 0 AS `day` UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6) AS `week` LEFT JOIN `member` ON DATE(`createdAt`) = (DATE(NOW()) - INTERVAL `day` DAY) GROUP BY `DayDate` ORDER BY `DayDate` ASC", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/graphPhysical", (req, res) => {
    db.query("SELECT (DATE(NOW()) - INTERVAL `day` DAY) AS `DayDate`, COUNT(email) AS 'count' FROM (SELECT 0 AS `day` UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10 UNION SELECT 11 UNION SELECT 12 UNION SELECT 13 UNION SELECT 14) AS `week` LEFT JOIN `member` ON DATE(`createdAt`) = (DATE(NOW()) - INTERVAL `day` DAY) AND memberType = 1 GROUP BY `DayDate` ORDER BY `DayDate` ASC", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.get("/graphOnline", (req, res) => {
    db.query("SELECT (DATE(NOW()) - INTERVAL `day` DAY) AS `DayDate`, COUNT(email) AS 'count' FROM (SELECT 0 AS `day` UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10 UNION SELECT 11 UNION SELECT 12 UNION SELECT 13 UNION SELECT 14) AS `week` LEFT JOIN `member` ON DATE(`createdAt`) = (DATE(NOW()) - INTERVAL `day` DAY) AND memberType = 0 GROUP BY `DayDate` ORDER BY `DayDate` ASC", (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.post("/create", (req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const password = req.body.password;
  
    db.query(
      "INSERT INTO member (email, password, firstName, lastName) VALUES (?,?,?,?)",
      [email, password, fName, lName],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Registered Successfully. Log in to continue");
        }
      }
    );
});

Router.get("/get", (req, res) => {
    var queryParams = req.query;
    console.log(queryParams);
    db.query("SELECT * FROM member WHERE email = ?", [queryParams.id], (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send(result);
        console.log(result);
        }
    });
});

Router.post("/update", (req, res) => {
    const mid = req.body.mid;
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const telephone = req.body.telephone;
    const address = req.body.address;
    const type = req.body.type;
    const height = req.body.height;
    const weight = req.body.weight;
    const age = req.body.age;
  
    db.query(
      "UPDATE member SET firstName=?, lastName=?, email=?, telephone=?, address=?, memberType=?, height=?, weight=?, age=? WHERE email=?",
      [fName, lName, email, telephone, address, type, height, weight, age, mid],
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
    const mid = req.body.tid;
  
    db.query("SELECT appointment.email FROM appointment WHERE appointment.email = ? AND appointment.date > DATE(NOW()) AND approved = 1", [mid], (err, result) => {
          if (err) {
            console.log(err);
          } else if (result.length >= 1){
            console.log("Could not delete. Member already has upcoming appointments");
            res.send({
              message: 'Could not delete. Member already has upcoming appointments',
              type: 'danger',
           });
          } else {
            db.query(
              "DELETE FROM member WHERE email=?", [mid], (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send({
                    message: 'Member Removed Successfully',
                    type: 'primary',
                 });
                }
              }
            );
          }
      });
    
  });

Router.post("/add", async(req, res) => {
    const email = req.body.email;
    const fName = req.body.fName;
    const lName = req.body.lName;
    const telephone = req.body.telephone;
    const address = req.body.address;
    const password = req.body.password;
    const type = 1;
    const height = req.body.height;
    const weight = req.body.weight;
    const age = req.body.age;

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query("SELECT email FROM member WHERE member.email = ?", [email], (err, result) => {
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
                "INSERT INTO member (firstName, lastName, email, telephone, password, address, memberType, height, weight, age) VALUES (?,?,?,?,?,?,?,?,?,?)",
                [fName, lName, email, telephone, hashedPassword, address, type, height, weight, age],
                (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send({
                    message: 'Member Added Successfully',
                    type: 'primary',
                    });
                }
                }
            );
            }
        });

});

module.exports = Router;