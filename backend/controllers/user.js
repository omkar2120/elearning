const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

//update user
exports.updateuser = async (req,res)=>{
         try{
                  if(req.body.password){
                      req.body.password = await bcrypt.hash(req.body.password,12);
                  }
            const updateduser = await User.findByIdAndUpdate(req.params.id,
                {$set:req.body,},
                { new: true });
             res.status(200).json(updateduser) 
        }
    catch(err){
        res.status(400).json(err);
    }

}

//delete a user
exports.deleteuser = async (req,res) =>{
        try{
          const deleteduser = await User.findByIdAndDelete(req.params.id)
          res.status(400).json("user has been deleted");
        }
        catch(err){
            res.status(400).json(err);
        }
    }

//get a user by id(done by teacher)
 exports.getuser = async (req,res) =>{
     try{
         const getuser = await User.findById(req.params.id);
         res.status(200).json({user:getuser})
     }
     catch(err){
         res.status(401).json(err);
     }
 }

//get all user
exports.getusers = async(req,res)=>{
    try{
      const users = await User.find();
      res.status(200).json({users:users});

    }catch(err){
        res.status(401).json(err);
    }
}

