const { getAllTeachers,updateuser, deleteuser, getuser, getusers } = require("../controllers/user");
const router = require("express").Router();

// get All Teachers
router.get("/get/all/teachers",getAllTeachers)
//update a user
router.put("/user/update/:id",updateuser);

//delete a user
router.delete("/user/delete/:id",deleteuser);

//get a user
router.get("/user/get/:id",getuser);

//get all users
router.get("/user/users",getusers);

module.exports=router;
