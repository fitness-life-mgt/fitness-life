const express = require("express");
const Router = express.Router();
var db = require('../config/connection');

Router.get("/",(req,res)=>{
    // 1-sportswears 2-suppliemnts 3-equipments
     db.query(
       "SELECT * FROM member WHERE firstName ='Rusiru'", 
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

   
module.exports = Router;