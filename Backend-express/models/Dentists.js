const mongoose = require("mongoose");

const dentistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,

    },
    contact_number: {
        type: Number,

    },
    password: {
        type: String,
        required: true
    },
    prc_number: {
        type: Number,

    },
    ptr_number: {
        type: Number,
    },
    Profile_pic: {
        type: String
    },
    Resume: {
        type: String
    }

});






module.exports = mongoose.model("Dentists", dentistSchema);