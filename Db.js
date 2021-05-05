const mongoose = require('mongoose');

const connectDB =async () => {
    
    try {
        const connect = await mongoose.connect(
            "mongodb+srv://admin:adm'n@cluster0.hihpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
            
        )
        console.log("DB is connected")
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = connectDB;