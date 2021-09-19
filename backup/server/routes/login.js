const express = require("express");
const Router = express.Router();
var db = require('../config/connection');

const bycrypt=require('bcrypt');
const  saltRounds=10;
  
Router.get("/",(req,res)=>{
    if(req.session.member){
      res.send({loggedIn:true, member:req.session.member});
    }else{
      res.send({loggedIn:false});
    }
});



Router.post("/", (req, res) => {
    const email =req.body.email;
    const password =req.body.password;

    //check all fields are filled
    if(!email||!password){
        console.log("Please Enter all feilds");
         return  res.status(422).send('Please Enter password or Email!.');
    }

    db.query
    ("SELECT * FROM member WHERE email=?",email,(err, memberres) => {
        if(!memberres.length>0) {  

            console.log("Sign up Firstly!.");
            // not registered member           
           return  res.status(422).send('Signed Up firstly!.')
        } else {  
            //registered member           
            //password hashing
              
                       //check the password
                    db.query(
                      "SELECT * from member WHERE email=?",
                      email,
                      (err, result) => {
                        if (err) {
                          console.log("Error with the password checking",err);
                        } else {
                         //console.log(hash);                         
                        var storedhash =result[0].password;
                        // compare the hashed password
                        // console.log("hashed:",storedhash);
                        // console.log("passw:",password);
                        bycrypt.compare(password,storedhash).then(function(comparedresult) {
                         
                          if(comparedresult ==false){
                            //password is incorrect
                            console.log("error with the password");
                            return  res.status(422).send('Enter the correct Password!')
                          }else{

                            req.session.member =result;
                            res.send(result);
                            console.log(req.session.member);
                            
                            
                          }
                          
                      });
                        }
                      }
                    );
                
    
              }
              
            
    });
});



module.exports = Router;