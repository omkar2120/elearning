const route=require("express").Router()
const {addProfile} =require("../auth/auth")
route.post("/auth/admin/add",addProfile)

module.exports=route