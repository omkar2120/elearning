const mongoose=require("mongoose")
const Session=mongoose.Schema({
      sessionname:{
          type:String
      },
      subject:{
          type:mongoose.Types.ObjectId,
          ref: "subject"          
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
     fromdateandtime:{
         type:Date,
         required:true
     },
     todateandtime:{
         type:Date,
         required:true
     },
     isDone:{
       type:Boolean,
       default:false
     }
})
module.exports= mongoose.model("session",Session)