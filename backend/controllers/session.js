const Subject = require("../models/subject.schema");
const user = require("../models/userSchema");
const Session = require("../models/session.schema")

//create session
exports.createsession = async(req,res)=>{
    try{
        const { sessionname, subject, topic, subtopic, date, time, isCostom } = req.body
        console.log(req.body)
        let theSession;
        if(isCostom)
       theSession=new Session({sessionname,subject,date,time,teacher:req._id})
       else
       theSession=new Session({subject,topic,subtopic,date,time,teacher:req._id})
       const newsession = await theSession.save() 
       if(!newsession)
       return res.status(400).send("Session Not Created!") 
       return res.status(200).send("Session  Created!") 
    }
    catch(err){
     console.log(err)
     return res.status(400).send("Session Not Created!") 
    }
}

//get all sessions
exports.getsession = async (req,res)=>{
     try{

         const datatoadd=[]
         const getses = await Session.find({})
         for(let i=0;i<=getses.length;i++){
             const {_id,Session,subject,teacher,date,time} = getses[i];
             const subjects = await Subject.find(subject)
             const subjectdetails = {
                  _id : subjects._id,
                  subjectname: subject.Name,
                  topic:subject.topic
             }
             const teachers =await user.find({role:"teacher",teacher})
             const teacherdetails = {
                 _id: teachers.id,
                 teacher_name:teachers.fullname
             } 
             let datatoenter = {
                 _id,
                 Session,
                 subject:subjectdetails,
                 teacher:teacherdetails,
                 date,
                 time
             }
             datatoenter.push(datatoadd);
             if(getses){
                 console.log(datatoenter)
                return res.status(200).json({session:datatoenter});
             }

         }
     }catch(err){
        console.log(err)
          return res.status(400).json("something went wrong")
         
     }

}


//get session according to the query
exports.getsesbyquery = async (req,res)=>{
    const datequery = req.query.date
    const subquery = req.query.subject;
    try{
        let sessions 

      if(datequery){
          sessions = await Session.find().sort({createdAT:-1}).limit(6);
      }
      else if(subquery){
        sessions = await Session.find({
            subject:{
                $in:[subquery]
            }
        })
    }
     else{
         sessions = await Session.findById(req.params.id)
     }
     return res.status(200).json(sessions);

    }catch(err){
        res.status(400).json(err)
        console.log(err);
    }
}