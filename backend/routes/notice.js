const express = require("express");
const { createnotice, getnotice, updatenotice, delnot } = require("../controllers/notice");
const { AdminAndTeacherMiddleware } = require("../middleware");
const router = express.Router();


router.post("/createnotice",AdminAndTeacherMiddleware,createnotice);

router.get("/getnotices",AdminAndTeacherMiddleware,getnotice);

router.put("/updatenotice/:id",AdminAndTeacherMiddleware,datenotice)

router.delete("/deletenotice/:id",AdminAndTeacherMiddleware,delnot)

module.exports=router