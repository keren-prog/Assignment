const express = require("express");
const Usermodel = require("./Usermodel");

const Router = express();

Router.post("/signup", async function (request, response) {
  const { firstname, lastname, email, username, password, cpassword } = request.body;

  try {
    let newUser = new Usermodel({
      firstname,
      lastname,
      email,
      username,
      password,
      cpassword,
    });

    console.log(newUser)

    responseData = await newUser.save();
  } catch (error) {
    response.status(400).send({ message: error });
  }

  response
    .status(200)
    .send({
      message: "you have successfully signed up. You can login now!!!",
      data: responseData,
    });
});

module.exports = Router;