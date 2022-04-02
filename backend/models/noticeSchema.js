const mongoose = require("mongoose");
const User = require("./userSchema");

const noticeSchema = new mongoose.Schema({
      userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
      },
      notice:{
          type:String,
          required:true
      },
      date:{
          type:String,
          required:true
      }
    })

    module.exports= mongoose.model("notice",noticeSchema);