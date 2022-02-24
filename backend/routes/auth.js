const route=require("express").Router()
const {addProfile,adminSignIn} =require("../auth/auth")
route.post("/auth/admin/add",addProfile)
route.post("/auth/admin/signin",adminSignIn)
module.exports=route