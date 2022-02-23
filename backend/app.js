const express = require("express");
const app = express();
const cors=require("cors")
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT||8000 ;
const authRoute=require("./routes/auth")
const theMainRoute="/ursacaps/api"

require("./database/connect");

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(theMainRoute,authRoute)


app.get("/",(req,res)=>{
    res.status(200).json("hello there!");
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})