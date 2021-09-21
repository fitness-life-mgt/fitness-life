const express = require("express");
const Router = express.Router();
var db = require('../config/connection');

const bycrypt=require('bcrypt');
const  saltRounds=10;

Router.post("/create", (req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    //current date
    let tdate = new Date();
  
    // check all feilds are filled
    if(!fName||!lName||!email||!password||!cpassword){
        console.log("Please Enter all feilds");
        return res.status(400).json({msg:"Please Confim your password"});
                
    }
    // check passwords are equal
    if(password!==cpassword){
      console.log("Check Password Again!");
      return res.status(400).json({msg:"Please Confim your password!."});
    }

    //check exixting user
    db.query(
      "SELECT * FROM member WHERE email=?",email,(err,member)=>{
        if(member.length>0){
          console.log("You are already exist in the System!.");
        }else{
          bycrypt.hash(password,saltRounds,(err,hash)=>{

            if(err){
              console.log("Problem with Password hashing!.");
            }else{    
              

               //insertion to the db
                db.query(
                  "INSERT INTO member (email, password, firstName, lastName,createdAt) VALUES (?,?,?,?,?)",
                  [email, hash, fName, lName,tdate],
                  (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                      res.send("Registered Successfully. Log in to continue");
                      return res.redirect('/Login');
                      
                    }
                  }
                );
            }

          })        
          
        }
      }
    )   
  });


module.exports = Router;

