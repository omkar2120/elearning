const mongoose=require("mongoose")
const Session=mongoose.Schema({
      sessionname:{
          type:String
      },
      subject:{
          type:mongoose.Types.ObjectId,
          ref: "subjectSchema"          
        },
        topic:{
          type:String,
        },
        subtopic:{
          type:String,
        },

      teacher:{
        type:mongoose.Types.ObjectId,
        ref: "User"
      },
     date:{
         type:String,
         required:true
     },
     time:{
       type: String,
       required:true
     }
})
module.exports= mongoose.model("session",Session)