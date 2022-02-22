const mongoose = require("mongoose");

const User = new mongoose.Schema({
  
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["teacher","admin"],
        default:"student"
    }
},{timestamps:true});

User.pre("save",async function(next){                   // to  bcrpty the password
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
})

module.exports=mongoose.model("USER",User);