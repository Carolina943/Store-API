const mongoose = require('mongoose')

const connectDB = () =>{
    return mongoose
    .connect("mongodb+srv://Akami:1Cielo23@nodeexpressprojects.gydioqp.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("DB Connection Successfull!"))
    .catch((error) =>{
        console.log(error)
    })
}

module.exports = connectDB;