const express = require("express");
const router = express.Router();
const autosControllers = require("../controllers/autosControllers.js");

router.get("/",autosControllers.index);
router.get("/:marca",autosControllers.id);
router.get("/:marca/:dato",autosControllers.dato);


module.exports=router;