const subject=require("../models/subject.schema")
exports.addSubjects=async(req,res)=>{
    let {Name,course,Semester}=req.body
    try{
        if(!Name,!course,!Semester)
        return res.status(400).send("all field is required!")
        const theSubject=new subject({Name,course,Semester})
        const createdSubject=await theSubject.save()
        console.log(createdSubject)
        if(createdSubject)
        return res.status(200).send("Subject Added!")

    }
    catch(err){
        console.log(err)
        return res.status(400).send(`The Subject ${Name.toUpperCase()} is already added`)
    }
}

exports.addTopic=async(req,res)=>{
    try{
        const {subid}=req.params
        let {Name,SubTopics}=req.body
        Name=Name.toUpperCase()
    
        if(!subid)
        return res.status(400).send("subject id is required")
        const isAlready=await subject.findById(subid).select({topics:{$elemMatch:{Name}}})
        console.log(isAlready)
        if(isAlready.topics.length>0)
        return res.status(400).send(`The Topic ${Name} is already added`)
        const theSub=await subject.findByIdAndUpdate(subid,{$push:{topics:{Name,SubTopics}}})
        if(theSub)
        return res.status(200).send("Topic Added Successfully")
    }
    catch(err){
        console.log(err)
        return res.status(400).send(`Something went Wrong`)
    }
}
