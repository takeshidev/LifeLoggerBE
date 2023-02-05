const express = require("express");
const userController = require("../controllers/users.controller");
const router = express.Router();

// Routes
router.get("/", userController.getUsers);

router.post("/", userController.postUser);

module.exports = router;
