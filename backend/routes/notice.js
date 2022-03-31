const express = require("express");
const { createnotice, getnotice, updatenotice, delnot } = require("../controllers/notice");
const { AdminAndTeacherMiddleware } = require("../middleware");
const router = express.Router();


router.post("/createnotice",AdminAndTeacherMiddleware,createnotice);

router.get("/getnotices",AdminAndTeacherMiddleware,getnotice);

router.put("/updatenotice/:id",updatenotice)

router.delete("/deletenotice/:id",delnot)

module.exports=router