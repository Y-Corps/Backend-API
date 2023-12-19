const mongoose = require("mongoose")

/**
 * Mongoose schema for a blog post.
 * @typedef {Object} BlogModel
 * @property {string} title - The title of the blog post.
 * @property {string} picture - The picture of the blog post.
 * @property {string} desc - The description of the blog post.
 * @property {string} writenby - The writer of the blog post.
 * @property {Date} createdAt - The date when the blog post was created.
 */
const blogModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "name must be provided"],
    },
    picture: {
        type: String,
        required: [true, "picture must be provided"],
    },
    desc: {
        type: String,
        required: [true, "desc must be provided"],
    },
    writenby:{
        type: String,
        required: [true, "writer must be provided"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model("Blog", blogModel)