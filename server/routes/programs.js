const express = require("express");
const Router = express.Router();
var db = require('../config/connection');


Router.post("/add", (req, res) => {
  const pName = req.body.pName;
  const pDesc = req.body.pDesc;
  const uploadedFile = req.body.uploadedFile;

  db.query(
    "INSERT INTO program (programName, description, imageUrl) VALUES (?,?,?)",
    [pName, pDesc, uploadedFile.filePath],
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
  const uploadedFile = req.body.uploadedFile;

  db.query(
    "UPDATE program SET programName=?, description=?,imageUrl=? WHERE programId=?",
    [pName, pDesc, uploadedFile.filePath, pid],
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
  db.query("SELECT * FROM program WHERE programID = ?", [queryParams.id], (err, result) => {
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
  db.query("SELECT * FROM program", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});


module.exports = Router;