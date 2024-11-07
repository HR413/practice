const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            
        },
        firstname: {
            type: String,
            
        },
        lastname: {
            type: String,
            
        },
        age: {
            type: Number,
        
        },
        bloodgroup: {
            type: String,
            
        },
        gender: {
            type: String,
            
        },
        phonenumber: { // Ensure this matches your payload
            type: Number,
            
        },
        password: {
            type: String,
            
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;




