const express = require("express");
const Router = express.Router();
var db = require('../config/connection');
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

Router.post("/", (req, res) => {

  const email = req.body.email;
  console.log(email);
  const randString = Math.random().toString(36);

  db.query("SELECT m.email FROM member m WHERE m.email = ?", [email], (err, result) => {

    if (err) {
      console.log(err);
    } else if (result.length >= 1) {

      db.query("INSERT INTO `password_resets` (`email`, `hash`) VALUES (?, ?);", [email, randString], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });

      console.log("Sending email");
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'slfitnesslife@gmail.com',
          pass: 'Fitness@5862625'
        }
      });
      
      var mailOptions = {
        from: 'Fitness Life',
        to: email,
        subject: 'Reset Your Password on Fitness Life',
        html: `<h1>Fitness Life</h1><p>Reset Your Password by clicking on the link below</p><a href="https://fitness-life-dashboard.herokuapp.com/misc/rpassword/${randString}">Reset Password</a>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.send({
            message: 'Reset link was sent to your email',
            type: 'primary',
         });
        }
      });
      
    } else {
      console.log("Email does not exist");
      res.send({
        message: 'Email does not exist. Please check your email again',
        type: 'danger',
     });
    }
  });

    
});

Router.post("/new-password", async (req, res) => {

  const password = req.body.password;
  const rid = req.body.rid;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query("SELECT email FROM password_resets WHERE hash = ?", [rid], (err, result) => {

    if (err) {
      console.log(err);
    } else if (result.length >= 1) {

      db.query("UPDATE administrator SET password = ? WHERE administrator.email = ?", [hashedPassword, result[0].email], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send({
            message: 'Password updated successfully',
            type: 'primary',
         });
        }
      });
    } else {
      console.log(result);
      res.send({
        message: 'Expired Link',
        type: 'danger',
     });
    }
  });

    
});


module.exports = Router;
