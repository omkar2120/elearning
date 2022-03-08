const { createsession, getsession, getsesbyquery } = require("../controllers/session");

const router = require("express").Router();


router.post("/session",createsession);

router.get("/getsession",getsession)

router.get("/get/session",getsesbyquery)

router.get("/get/session/:id",getsesbyquery)


module.exports=router