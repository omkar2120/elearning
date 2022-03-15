const { createfeedback, getfeedback } = require("../controllers/feedback")

const router=require("express").Router()

//create feedback
router.post("/createfb",createfeedback);

//getfeedback
router.get("/getfb/:feedid",getfeedback);

//getallfeedback
router.get("/getfb",getfeedback);

module.exports=router