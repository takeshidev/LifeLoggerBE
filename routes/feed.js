const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

// GET /feed
router.get("/", feedController.getPosts);

module.exports = router;
