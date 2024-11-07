const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    address: {
        type: String, // Set to String for storing addresses
        required: true
    }
},

    {
        timestamps:true,
    }



);

const Doctor = mongoose.model("Doctor", docSchema);

module.exports = Doctor;
