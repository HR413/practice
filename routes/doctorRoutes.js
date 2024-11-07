const express = require("express");
const router = express.Router();

const { registerDoctor, gettingdocs } = require("../controllers/docController"); // Import correctly

router.post("/registerDoctor", registerDoctor); // Use it here

router.get("/getDocs",gettingdocs);

module.exports = router;
