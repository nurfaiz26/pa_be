const express = require('express');

const classResultController = require('../controller/class-results.js');

const router = express.Router();

// READ - GET
router.get("/", classResultController.getAllClassResults);
router.get("/:id", classResultController.getClassResultById);

// CREATE - POST
router.post("/", classResultController.createNewClassResult);

// UPDATE - PATCH
router.patch("/:id", classResultController.updateClassResult);

// DELETE - DELETE
router.delete("/:id", classResultController.deleteClassResult);

module.exports = router;