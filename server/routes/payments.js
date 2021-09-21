const express = require("express");
const Router = express.Router();
var db = require('../config/connection');


Router.get("/payroll", (req, res) => {
  db.query("SELECT p.trainerId, t.firstName, t.lastName, p.salary, p.overtime, p.hours FROM payroll p, trainer t WHERE p.trainerId = t.trainerId", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

Router.get("/shop", (req, res) => {
  db.query("SELECT p.trainerId, t.firstName, t.lastName, p.salary, p.overtime, p.hours FROM payroll p, trainer t WHERE p.trainerId = t.trainerId", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

Router.get("/gym", (req, res) => {
  db.query("SELECT p.trainerId, t.firstName, t.lastName, p.salary, p.overtime, p.hours FROM payroll p, trainer t WHERE p.trainerId = t.trainerId", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});


module.exports = Router;