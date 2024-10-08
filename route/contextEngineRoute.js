const express = require("express");
const { getAllContextEngine, getContextEngine, addContextEngine, editContextEngine } = require("../controller/contextEngineController");
const router = express.Router();

router.get("/todo/get", getAllContextEngine);

router.get("/todo/:id", getContextEngine);




// About page route.
router.post("/todo", addContextEngine);

router.put("/todo/:id", editContextEngine);

module.exports = router;
