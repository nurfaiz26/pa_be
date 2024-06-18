const express = require('express');

const RegisterController = require('../controller/register.js');

const router = express.Router();

// CREATE - POST
router.post("/", RegisterController);

module.exports = router;