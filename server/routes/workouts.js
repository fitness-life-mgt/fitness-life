const express = require("express");
const Router = express.Router();
var db = require('../config/connection');


Router.post("/add", (req, res) => {
  const wName = req.body.wName;
  const wDesc = req.body.wDesc;
  const duration = req.body.duration;
  const uploadedFile = req.body.uploadedFile;

  db.query(
    "INSERT INTO workout (workoutName, description, duration, image) VALUES (?,?,?,?)",
    [wName, wDesc, duration, uploadedFile.filePath],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Added Successfully");
      }
    }
  );
});

Router.post("/update", (req, res) => {
  const pid = req.body.pid
  const pName = req.body.pName;
  const pDesc = req.body.pDesc;
  const pQuantity = req.body.pQuantity;
  const pPrice = req.body.pPrice;
  const uploadedFile = req.body.uploadedFile;

  db.query(
    "UPDATE product SET productName=?, price=?, quantity=?, description=?,imageUrl=? WHERE productId=?",
    [pName, pPrice, pQuantity, pDesc, uploadedFile.filePath, pid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Updated Successfully");
      }
    }
  );
});

Router.get("/get", (req, res) => {
  var queryParams = req.query;
  db.query("SELECT * FROM product WHERE productID = ?", [queryParams.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

Router.get("/getlist", (req, res) => {
  var queryParams = req.query;
  db.query("SELECT * FROM workout", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});


module.exports = Router;