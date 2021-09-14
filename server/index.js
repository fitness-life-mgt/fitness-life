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



app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
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

app.use(fileUpload());

app.use("/orders", ShopRoutes);
app.use("/payments", PaymentRoutes);
app.use("/trainers", TrainersRoutes);
app.use("/members", MembersRoutes);
app.use("/file", UploadRoutes);
app.use("/product", ProductRoutes);
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);


app.listen(8001, () => {
  console.log("Yey, your server is running on port 8001");
});
