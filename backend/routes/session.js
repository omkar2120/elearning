const { createsession, getsession, getsesbyquery } = require("../controllers/session");

const {isTeacher} =require("../middleware/index")
const router = require("express").Router();


router.post("/session",isTeacher,createsession);

router.get("/getsession",getsession)

router.get("/get/session",getsesbyquery)

router.get("/get/session/:id",getsesbyquery)


module.exports=router