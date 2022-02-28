const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

exports.verifyadmin = async (req,res,next)=>{
    try{
        const verifytoken = req.headers.authorization;
          if(!verifytoken){
             res.status(401).json("token is required");
              }
          else{
          const data = await jwt.verify(verifytoken,process.env.SECRETKEY)
            const { id } = data
            console.log(data);
         const user = await User.findById(id) ;
         if(user){
             const { role } = user
            if(role == "admin"){
                next();
            }
            else{
                res.status(400).json("only admin can access it");
            }
         } 
       }
    }
    catch(err){
        res.status(400).json(err);
    }
}