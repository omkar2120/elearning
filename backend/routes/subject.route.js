const route=require("express").Router()
const {addSubjects,addTopic,getSubjectByTopic,updateSubject,getSubjectsByCourseId} =require("../controllers/subject.controller")
route.post("/subject/add",addSubjects)
route.post("/topic/add/:subid",addTopic)
route.get("/subject/get/:sid",getSubjectByTopic)
route.get("/subject/get/all/:cid",getSubjectsByCourseId)
route.post("/subject/update/:sid",updateSubject)
module.exports=route