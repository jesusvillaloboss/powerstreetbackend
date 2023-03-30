const mongoose = require("mongoose");
require("dotenv").config()

const dbConect = async () => {
    const DB_URI = process.env.DB_URI;
   await  mongoose.connect(DB_URI,
        { useNewUrlParser: true },
        
   ).then(() => console.log("conexion exitosa"))
       .catch((error) => {
           console.log("error de conexion");
       })
}

module.exports= dbConect