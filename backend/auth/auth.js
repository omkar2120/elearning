const auth = require("../models/userSchema");
const validator = require("validator");
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
exports.addProfile = async (req, res) => {
  try {
    const { fullname, email, mobile, password, role } = req.body;
    console.log(fullname, email, mobile, password, role);
    if (!fullname || !email || !mobile || !password || !role)
      return res.status(400).send("all field is required!");
    else if (!validator.isEmail(email))
      return res.status(400).send("invalid email!");
    else if (!validator.isMobilePhone(mobile, "en-IN"))
      return res.status(400).send("invalid mobile!");
    const user=new auth({fullname, email, mobile, password, role})
    console.log(user.role)
    if(user.role!="admin"&&user.role!="teacher"&&user.role!="student")
    return res.status(400).send("role is not valid!")
    const theUser=await user.save()
    res.status(200).send("User Created!")
  } catch (err) {
    const splitedErr = err.message.split(" ");
    if (splitedErr[11] == "email:" || splitedErr[11] == "mobile:")
      res.status(400).send("existing user with given email or mobile");
  }
};

exports.adminSignIn=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email||!password)
        res.status(400).send("fill the field!")
        else if(!validator.isEmail(email))
        return res.status(400).send("invalid email")
        const isValidUser=await auth.findOne({}).where({email})
        if(!isValidUser||isValidUser.role!="admin")
        return res.status(400).send("invalid details!")
        if(!await bcrypt.compare(password,isValidUser.password))
        return res.status(400).send("invalid details!")
        res.status(200).send({user:isValidUser})

    }
    catch(err){
        console.log(err)
        res.status(400).send("Something went wrong!")
    }
}

