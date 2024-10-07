const express = require("express");
const { getAllContextEngine, getContextEngine, addContextEngine, editContextEngine } = require("../controller/contextEngineController");
const router = express.Router();

// Home page route.
router.get("/getAll", getAllContextEngine);

router.get("/get/:id", getContextEngine);




// About page route.
router.post("/add", addContextEngine);

router.put("/update/:id", editContextEngine);

module.exports = router;
