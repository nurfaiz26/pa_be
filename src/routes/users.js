const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();

// READ - GET
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);

// CREATE - POST
router.post("/", UserController.createNewUser);

// UPDATE - PATCH
router.patch("/:id", UserController.updateUser);

// DELETE - DELETE
router.delete("/:id", UserController.deleteUser);

module.exports = router;