const express = require("express");
const router = express.Router();

const AppointmentContriller = require("../controllers/AppointmentController");

//get request or read

router.get("/", AppointmentContriller.getAllAppointments );

// Get request parametarized

router.get("/:id", AppointmentContriller.getAppointment);

// Post Request

router.post("/", AppointmentContriller.createAppointment);

//update


router.put("/", AppointmentContriller.updateAppointment);

// delete

router.delete("/",AppointmentContriller.deleteAppointment);

module.exports = router;