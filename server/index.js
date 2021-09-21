const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fileUpload = require('express-fileupload');

const bodyParser = require("body-parser");
const cookieParser =  require("cookie-parser");
const session =  require("express-session");

var db = require('./config/connection');
var ShopRoutes = require('./routes/shop')
var PaymentRoutes = require('./routes/payments')
var TrainersRoutes = require('./routes/trainers')
var MembersRoutes = require('./routes/members')
var UploadRoutes = require('./routes/fileupload')
var ProductRoutes = require('./routes/products')
var signupRoutes = require('./routes/signup')
var loginRoutes = require('./routes/login')
var resetRoutes = require('./routes/reset')
var programRoutes = require('./routes/programs')
var workoutRoutes = require('./routes/workouts')

app.use(cors({
  origin:["https://fitness-life-dashboard.herokuapp.com"],
  methods:["GET","POST"],
  credentials:true
}));
app.use(express.json());
app.use(fileUpload());

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
app.use("/file", UploadRoutes);
app.use("/product", ProductRoutes);
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);
app.use("/reset", resetRoutes);
app.use("/programs", programRoutes);
app.use("/workouts", workoutRoutes);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Your server is running on port ${port}`);
});