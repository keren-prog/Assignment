const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UsermodelSchema = new Schema({

    fullname: String,
    email: String,
    username: String,
    password: String,
    cpassowrd: String,
    
})

const Usermodel = mongoose.model('Usermodel', UsermodelSchema)

module.exports = Usermodel;