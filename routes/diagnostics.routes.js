const express = require("express");

const diagnosticsController = require("../controllers/diagnostics.controller");

const router = express.Router();

// GET /feed
router.get("/", diagnosticsController.sanityTest);

module.exports = router;
