const express = require("express");
const app = express();
const cors=require("cors")
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT||8000 ;
const authRoute=require("./routes/auth")
const courseRoute=require("./routes/course.route")
const userRoute=require("./routes/user");
const adminRoute=require("./routes/admin");
const sessionRoute=require("./routes/session");
const subjectRoute=require("./routes/subject.route")
const theMainRoute="/ursacaps/api"

require("./database/connect");

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(theMainRoute,authRoute)
app.use(theMainRoute,courseRoute)
app.use(theMainRoute,userRoute)
app.use(theMainRoute,adminRoute)
app.use(theMainRoute,sessionRoute)
app.use(theMainRoute,subjectRoute)

app.get("/",(req,res)=>{
    res.status(200).json("hello there!");
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})