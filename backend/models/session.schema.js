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
        ref: "USER"
      },
     date:{
         type:String,
         required:true
     },
     time:{
       type: String,
       required:true
     },
     isDone:{
       type:Boolean,
       default:false
     }
})
module.exports= mongoose.model("session",Session)