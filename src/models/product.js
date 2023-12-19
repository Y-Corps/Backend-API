const mongoose = require("mongoose")

/**
 * Mongoose schema for a product.
 * @typedef {Object} ProductSchema
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {boolean} featured - Whether the product is featured or not.
 * @property {number} rating - The rating of the product.
 * @property {Date} createdAt - The date the product was created.
 * @property {string} company - The company that produces the product.
 */
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be provided"],
    },
    price: {
        type: Number,
        required: [true, "price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
        values: ["ikea", "liddy", "caressa", "marcos"],
        message: "{VALUE} is not supported",
        },
    },
    })

module.exports = mongoose.model("Product", productSchema)

