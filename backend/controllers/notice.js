const Notice = require("../models/noticeSchema");
const User = require("../models/userSchema")

exports.createnotice = async (req,res)=>{
    try{
    const {userId,notice,date} = req.body
    if(!userId){
        return res.status(400).json("user id is required")
    }
    const newnot =  new Notice({
        userId:userId,
        notice:notice,
        date:date
    })
    const notices = await newnot.save();
    if(!notices){
        return res.status(400).json("notice not created")
    }
    res.status(200).json("notice is created");
    console.log(notices)
}
 catch(err){
     console.log(err)
     res.status(400).json("something went wrong")
 }   
}


exports.getnotice = async (req,res)=>{
    try{
    const getnot = await Notice.find({})
    const dataToSend=[]
    if(getnot){
        for(let i=0;i<=getnot.length;i++){
            // console.log(getnot[i])
            if(getnot[i]){
            let user = await User.findById({_id:getnot[i].userId});
            // console.log(user)
            if(user){
             let datatoadd = {}
             datatoadd._id=getnot[i].id
             datatoadd.fullname=user.fullname
             datatoadd.email=user.email
             datatoadd.notice=getnot[i].notice
             datatoadd.date=getnot[i].date
             dataToSend.push(datatoadd)
            }
        }
        }
    }
    res.status(200).json(dataToSend)
}catch(err){
    console.log(err)
    res.status(400).json("something to went wrong")
}
  
}


exports.updatenotice = async (req,res)=>{
    try{
      const notid = req.params.id
      console.log(notid)

       const updatednotice = await Notice.findByIdAndUpdate(notid,
           { $set: req.body },
            { new: true }
         )
         console.log(updatednotice)
       if(updatednotice){
           return res.status(200).json("Notice updated");
       } 
    }catch(err){
       console.log(err)
        return res.status(400).json("Notice not updated")
        
    }
}

exports.delnot = async (req,res)=>{
    try{
       const notid = req.params.id
       if(notid){
           const deletenotice = await Notice.findByIdAndDelete(notid)
            if(deletenotice){
                res.status(200).json("notice deleted");
            }
       }
    }catch(err){
        console.log(err)
        return  res.status(400).json("something went wrong");
    }
}