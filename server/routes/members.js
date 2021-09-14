const express = require("express");
const Router = express.Router();
var db = require('../config/connection');

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


module.exports = Router;