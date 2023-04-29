
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
    },
    last_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    // password: {
    //     type: password,
    //     required: true
    // }
});

module.exports = mongoose.model("Patients", patientSchema);