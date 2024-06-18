const express = require('express');

const PatientController = require('../controller/patients.js');

const router = express.Router();

// READ - GET
router.get("/", PatientController.getAllPatients);
router.get("/:id", PatientController.getPatientById);

// CREATE - POST
router.post("/", PatientController.createNewPatient);

// UPDATE - PATCH
router.patch("/:id", PatientController.updatePatient);

// DELETE - DELETE
router.delete("/:id", PatientController.deletePatient);

module.exports = router;