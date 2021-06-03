const express = require('express')  
const mongoose = require("mongoose")  
const cookieParser = require('cookie-parser')  
const passport = require('Passport')      
const User = require("./Models/User");
const Router = require('./Routes/User');
require('./Authentication/Passport')


const app = express()    

const port = 6000

app.use(express.json()) 
app.use(cookieParser())   
app.use(express.urlencoded({ extended: true })) 
app.use(passport.initialize())   
app.use(Router)

mongoose.connect(
    "mongodb+srv://admin:adm'n@cluster0.cvhh9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection
    .once("open", function () {
      console.log("Connected to Mongo");
    })
    .on("error", function (err) {
      console.log("Mongo Error", err);
    });

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})