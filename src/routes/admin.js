const express = require('express');

const AdminController = require('../controller/admin');

const router = express.Router();

// USERS
// USERS-GET
router.get("/users", AdminController.getAllUsers);
// USERS-GET BY ID
router.get("/users/:id", AdminController.getUserById);
// // USERS-CREATE
router.post("/users", AdminController.createNewUser);
// // USERS-UPDATE
router.patch("/users/:id", AdminController.updateUser);
// // USERS-DELETE
router.delete("/users/:id", AdminController.deleteUser);

// PATIENTS
// PATIENTS-GET
router.get("/patients", AdminController.getAllPatients);
// PATIENTS-GET BY ID
router.get("/patients/:id", AdminController.getPatientById);
// PATIENTS-CREATE
router.post("/patients", AdminController.createNewPatient);
// PATIENTS-UPDATE
router.patch("/patients/:id", AdminController.updatePatient);
// PATIENTS-DELETE
router.delete("/patients/:id", AdminController.deletePatient);

// CLASS RESULTS
// CLASS RESULTS-GET
router.get("/class-results", AdminController.getAllClassResults);
// CLASS RESULTS-GET BY ID
router.get("/class-results/:id", AdminController.getClassResultById);
// CLASS RESULTS-CREATE
router.post("/class-results", AdminController.createNewClassResult);
// CLASS RESULTS-EDIT
router.patch("/class-results/:id", AdminController.updateClassResult);
// CLASS RESULTS-DELETE
router.delete("/class-results/:id", AdminController.deleteClassResult);

module.exports = router;