const route=require("express").Router()
const {createCourse}=require("../controllers/course")
route.post("/create/course",createCourse)
module.exports=route