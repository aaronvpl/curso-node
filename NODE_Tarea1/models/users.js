const mongoose = require("mongoose");

// User
const userSchema = new mongoose.Schema(
    {
        names: {
            type: String,
            trim: true,
            required: true,
            maxlength: 40
        },

        surnames: {
            type: String,
            trim: true,
            required: true,
            maxlength: 60
        },

        password: {
            type: String,
            required: true
        },

        birthdate: {
            type: Date,
            default: new Date()
        },

        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },

        avatar: {
            type: String, 
            trim: true,
            default: ''
        },

        banner: {
            type: String, 
            trim: true,
            default: ''
        },

        biografy: {
            type: String, 
            trim: true,
            default: ''
        },

        location: {
            type: String, 
            trim: true,
            default: ''
        },

        website: {
            type: String, 
            trim: true,
            default: ''
        }

    },
    { timestamps: true }
);

//export
module.exports = mongoose.model("Users", userSchema);