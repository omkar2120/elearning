const express = require("express");
const { createnotice, getnotice, updatenotice, delnot } = require("../controllers/notice");
const router = express.Router();


router.post("/createnotice",createnotice);

router.get("/getnotices",getnotice);

router.put("/updatenotice/:id",updatenotice)

router.delete("/deletenotice/:id",delnot)

module.exports=router