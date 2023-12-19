const mongoose = require("mongoose")

/**
 * Mongoose schema for user model.
 * @typedef {Object} userModel
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {boolean} isAdmin - The admin status of the user.
 * @property {string} token - The token of the user.
 * @property {Date} createdAt - The creation date of the user.
 */
const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be provided"],
    },
    email: {
        type: String,
        required: [true, "email must be provided"],
    },
    password: {
        type: String,
        required: [true, "password must be provided"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    token: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model("User", userModel)