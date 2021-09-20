const express = require("express");
const Router = express.Router();
var db = require('../config/connection');

Router.post("/beginner", (req, res) => {
  
    db.query(
        "SELECT beginer FROM member WHERE firstName ='Rusiru'",
            (err,result)=>{
            if(err){
                console.log(err);
            }else{
                
                var enrollmentt =result[0].beginer;
                if(enrollmentt==1){
                    //already enrolled
                    console.log("You have already Enrolled!.");
                    return res.send("You have already Enrolled!.");
                }else if(enrollmentt==0){
                    db.query(
                        "UPDATE member SET beginer = 1 WHERE firstName ='Rusiru'",
                        (err2,result2)=>{
                            if(err2){
                                console.log(err); 
                            }else{
                                console.log("Successfully Enrolled!.");
                                return res.send("Successfully Enrolled!.");                               
                            }
                        });
                }
                
            }
        }
    );
});






module.exports = Router;