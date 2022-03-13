const route=require("express").Router()
const {addSubjects,addTopic} =require("../controllers/subject.controller")
route.post("/subject/add",addSubjects)
route.post("/topic/add/:subid",addTopic)
module.exports=route