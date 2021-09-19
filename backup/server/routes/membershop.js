const express = require("express");
const Router = express.Router();
var db = require('../config/connection');

  
Router.get("/sportswears",(req,res)=>{
 // 1-sportswears 2-suppliemnts 3-equipments
  db.query(
    "SELECT * FROM product WHERE category = 1", 
    (err, result) => {
    if (err) {
    console.log(err);
    } 
    else {
    res.send(result);
    //console.log(result);
  }
  });
});

Router.get("/suppliments", (req, res) => {
  // 1-sportswears 2-suppliemnts 3-equipments

  db.query(
      "SELECT * FROM product WHERE category = 2", 
      (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
     // console.log(result);
    }
  });
});

Router.get("/equipments", (req, res) => {
  // 1-sportswears 2-suppliemnts 3-equipments

  db.query(
      "SELECT * FROM product WHERE category = 3", 
      (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      //console.log(result);
    }
  });
});


// Router.get("/popup",(req, res) => {
//   // 1-sportswears 2-suppliemnts 3-equipments
//   const proId =req.body.productID;
//   db.query(
//       "SELECT * FROM product WHERE productID = proId", 
//       (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//       //console.log(result);
//     }
//   });
// });



module.exports = Router;