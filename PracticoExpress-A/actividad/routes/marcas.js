const express = require("express");
const router = express.Router();
const marcasControllers = require("../controllers/marcasControllers.js");

router.get("/",marcasControllers.index);
router.get("/:marca",marcasControllers.id);

module.exports=router;