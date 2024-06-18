const express = require('express');

const LoginController = require('../controller/login');

const router = express.Router();

// CREATE - POST
router.post("/", LoginController);

module.exports = router;