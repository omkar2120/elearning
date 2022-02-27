const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Otp = new mongoose.Schema(
    {
        user:{
            type: ObjectId,
            ref: "User"
        },
        otp:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            expires:36000,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("Otp",Otp);