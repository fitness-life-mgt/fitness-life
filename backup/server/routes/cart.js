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
                "SELECT wishlist.qty,product.productName,product.imageUrl,product.price,product.productID  FROM wishlist INNER JOIN product ON wishlist.productID = product.productID WHERE email=?",mememail,
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

//delete item
   Router.post("/deleteitem", (req, res) => {
  
    const proId= req.body.productID;

    db.query(
        "SELECT email FROM member WHERE firstName='Rusiru'",(eerr,remail)=>{ 
          if(eerr){
            console.log(eerr);
          }else{
            var mememail =remail[0].email;
            db.query(
                "DELETE FROM wishlist WHERE email=? AND productID=?",
                [mememail,proId],
                (err, result) => {
                if (err) {
                console.log(err);
                } 
                else {
                res.send("Item removed successfully!.");
               // console.log(result);
              }
              });
          }
        }
      );
});



module.exports = Router;