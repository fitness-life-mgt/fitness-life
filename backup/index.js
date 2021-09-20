const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser =  require("cookie-parser");
const session =  require("express-session");



var db = require('./config/connection');
var ShopRoutes = require('./routes/shop')
var PaymentRoutes = require('./routes/payments')
var TrainersRoutes = require('./routes/trainers')
var MembersRoutes = require('./routes/members')
var signupRoutes = require('./routes/signup')
var loginRoutes = require('./routes/login')
//var logoutRoutes = require('./routes/logout')
var updateprofileRoutes = require('./routes/updateprofile')
var membershopRoutes = require('./routes/membershop')
var profileRoutes =require('./routes/profile')
var workoutsRoutes =require('./routes/workouts')



app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials: true
  }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(
  session({
    key:"memberemail",
    secret:"fitnesslife",
    saveUninitialized:false,
    cookie:{
      expires: 60*60*24,
    },
  })
);

app.use("/orders", ShopRoutes);
app.use("/payments", PaymentRoutes);
app.use("/trainers", TrainersRoutes);
app.use("/members", MembersRoutes);
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);
//app.use("/logout", logoutRoutes);
app.use("/updateprofile", updateprofileRoutes);
app.use("/membershop",membershopRoutes);
app.use("/profile",profileRoutes);
app.use("/workouts",workoutsRoutes);

app.listen(8001, () => {
  console.log("Yey, your server is running on port 8001");
});