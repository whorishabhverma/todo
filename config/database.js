// https://documenter.getpostman.com/view/24441701/2s93K1oz29
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
    })
    .then(()=>console.log("DB ka connection succesful"))
    .catch((error)=>{
        console.log("issues in db connection");
        console.error(error.message);
        process.exit(1);
    });
}
module.exports = dbConnect;