const express = require("express");
const Router = express.Router();
var db = require('../config/connection');

Router.post("/", (req, res) => {
  
    const age= req.body.age;
    const telephone= req.body.telephone;
    const address= req.body.address;
    const height= req.body.height;
    const weight= req.body.weight;


    db.query(
        "UPDATE member SET age=?,telephone=?,height=?,address=?,weight=? WHERE firstName='Rusiru' ",
        [age,telephone,address,height,weight],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("Updated Successfully!.");
            }
        }
    );
});


module.exports = Router;