const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT ;

require("./database/connect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get("/",(req,res)=>{
    res.status(200).json("hello there!");
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})