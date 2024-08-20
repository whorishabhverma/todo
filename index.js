const express = require("express");
const app = express();

//load confiq from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo api routes
app.use("/api/v1",todoRoutes);


//start server
app.listen(PORT,()=>{
    console.log(`server stared succesfully at ${PORT}`);
})

//connect to database
 const dbConnect = require("./config/database");
 dbConnect();

 //default route
 app.get("/",(req,res)=>{
    res.send(`<h1>this is Homepage baby</h1>`);
 })