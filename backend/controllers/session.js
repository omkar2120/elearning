const Subject = require("../models/subject.schema");
const user = require("../models/userSchema");

//create session
exports.createsession = async(req,res)=>{
    try{
      const {sessioname,subject,teacher,date} = req.body
       if(!sessioname || !subject || !teacher || !date){
           return res.status(400).json({message:"enter all the details"})
       }
       const sessions = new Session({
           Session:sessioname,
           subject:subject,
           teacher:teacher,
           date:date
       })
       const newsession = await sessions.save()
       if(newsession){
           return res.status(200).json({message:"session has been created"});
       }
    }
    catch(err){
     console.log(err)
     const split_Err = err.message.split(" ");
         if (split_Err[11] === "Session:")
            return res
               .status(404)
            .send(`the course (${split_Err[12]}) is already created!`);  
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