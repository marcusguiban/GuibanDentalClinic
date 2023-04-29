const express = require("express");
const router = express.Router();

const patientMongoDBController = require("../controllers/PatientsMongoDBController");

//get request or read

router.get("/", patientMongoDBController.getAllPatients );

// get request parametarized

router.get("/:id", patientMongoDBController.getPatient );
// Post Request

router.post("/", patientMongoDBController.createPatient);
//update


router.put("/", patientMongoDBController.updatePatient);

// delete

router.delete("/", patientMongoDBController.deletePatient);
module.exports = router;