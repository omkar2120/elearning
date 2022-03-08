const mongoose=require("mongoose")
const Session=mongoose.Schema({
      sessionname:{
          type:String,
          required:true
      },
      subject:{
          type:mongoose.Types.ObjectId,
          ref: "subjectSchema"          
        },
      teacher:{
        type:mongoose.Types.ObjectId,
        ref: "User"
      },
     date:{
         type:Date,
         required:true
     },
     time:{
       type: String,
       required:true
     }
})
module.exports= mongoose.model("session",Session)