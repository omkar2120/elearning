const { createsession } = require("../controllers/session");

const router = require("express").Router();


router.post("/",createsession)

module.exports=router