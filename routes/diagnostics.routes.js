const express = require("express");

const diagnosticsController = require("../controllers/diagnostics.controller");

const router = express.Router();

// GET '/'
router.get("/", diagnosticsController.sanityTest);

module.exports = router;
