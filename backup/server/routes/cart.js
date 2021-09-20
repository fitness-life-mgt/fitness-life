const express = require("express");
const Router = express.Router();
var db = require('../config/connection');


//view orders
Router.get("/ordersview",(req,res)=>{
   
    db.query(
        "SELECT email FROM member WHERE firstName='Rusiru'",(eerr,remail)=>{ 
          if(eerr){
            console.log(eerr);
          }else{
            var mememail =remail[0].email;
            db.query(
                "SELECT wishlist.qty,product.productName,product.imageUrl,product.price  FROM wishlist INNER JOIN product ON wishlist.productID = product.productID WHERE email=?",mememail,
                (err, result) => {
                if (err) {
                console.log(err);
                } 
                else {
                res.send(result);
               // console.log(result);
              }
              });
          }
        }
      );





   });

// get total price   
Router.get("/totprice",(req,res)=>{
   
    db.query(
        "SELECT email FROM member WHERE firstName='Rusiru'",(eerr,remail)=>{ 
          if(eerr){
            console.log(eerr);
          }else{
            var mememail =remail[0].email;
            db.query(
                "SELECT SUM(product.price) AS total FROM wishlist INNER JOIN product ON wishlist.productID = product.productID WHERE email=?",mememail,
                (err, result) => {
                if (err) {
                console.log(err);
                } 
                else {
                res.send(result);
               // console.log(result);
              }
              });
          }
        }
      );
   });






module.exports = Router;