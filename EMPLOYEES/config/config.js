const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://adityasasane:aditya2003@cluster0.e6ubaav.mongodb.net/employees?retryWrites=true&w=majority",{useNewUrlParser:true });

var conn = mongoose.connection;

conn.on("connected",()=>{
   console.log("Database Connection : Connected to database sucessfully!");
});

conn.on("disconnected",()=>{
  console.log("Database Conection : Can't Connect to database");
});

module.exports = mongoose;