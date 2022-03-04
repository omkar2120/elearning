const route=require("express").Router()
const {addProfile,adminSignIn,sendOtp,otpVerify} =require("../auth/auth")
route.post("/auth/admin/add",addProfile)
route.post("/auth/teacher/add",addProfile)
route.post("/auth/student/add",addProfile)
route.post("/auth/admin/signin",adminSignIn)
route.post("/auth/otp",sendOtp)
route.post("/auth/verify/otp/:verifyToken",otpVerify)
module.exports=route