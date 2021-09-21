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

Router.post("/addtocart", (req, res) => {
  
  const ProId= req.body.productID;
  let Odate = new Date();
  
  db.query(
    "SELECT email FROM member WHERE firstName='Rusiru'",(eerr,remail)=>{
      if(eerr){
        console.log(eerr);
      }else{
        
          db.query(
            "SELECT * FROM wishlist WHERE productID=?",ProId,(err1,result1)=>{
              if(err1){
                console.log(err1);
              }else{ 
                          
                if(result1.length>0){

                  res.send("Item has been already added to the cart!.")                  
                
                }else{
                  var Oemail =remail[0].email;
                    db.query(
                      "INSERT INTO wishlist(orderDate,productID,email,qty) VALUES(?,?,?,?) ",
                      [Odate,ProId,Oemail,1],
                      (err,result)=>{
                          if(err){
                              console.log(err);
                          }else{
                              res.send("Added to the Cart!.");
                          }
                      }
                  );
                }
              }
            }
          );

      }
    }
  );



  
});



module.exports = Router;