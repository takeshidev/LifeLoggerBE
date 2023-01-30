const express = require("express");

const feedController = require("../controllers/feed.controller");

const router = express.Router();

// GET /feed
router.get("/", feedController.getPosts);

router.get("/:id", feedController.getPostById);

router.put("/:id", feedController.putPostById);

router.post("/", feedController.postPost);

router.delete("/:id", feedController.deletePostById);

module.exports = router;
