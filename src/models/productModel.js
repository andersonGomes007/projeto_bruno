'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prodSchema = new Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    countInStock: { type: Number, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },


})
module.exports = mongoose.model('Product', prodSchema)