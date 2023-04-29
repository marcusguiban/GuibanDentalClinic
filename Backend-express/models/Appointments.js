const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    date_time: {
        type: Date,
        required: true,
    },

    Branch_location: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    Patient_name:{
        type: String,
    },
    appointment_details:{
        type: String,
    }

});

module.exports = mongoose.model("Appointment", appointmentSchema);