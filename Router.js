const express = require('express');
const users = require("./users");

const Router = express();

Router.post("/login", function (request, response) {
    //   response.status(200).send("Hello World");
  
    const { username, password } = request.body;
    console.log(request.body);
  
    let user = users.filter((arrayelement) => arrayelement.username === username);
    if (user.length > 0) {
      if (user[0].password == password) { response.send({ message: "Login Success" }); } 
      else 
      { response.send({ message: "Username or Password Wrong" }); }
    } else 
    {  response.send({ message: "Login Failed" }); }
});


  Router.post("/signup", function (request, response) {
    var myUser = {
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      password: request.body.password,
      email: request.body.email,
     username: request.body.username,
    
    };
    console.log(myUser);
  
    response.status(300).send("Signup Successful");
})
  

module.exports = Router;