const express = require("express");

const feedController = require("../controllers/feed.controller");

const router = express.Router();

// GET /feed
router.get("/", feedController.getPosts);

router.get("/:id", feedController.getPostById);

module.exports = router;
