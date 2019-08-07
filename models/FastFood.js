const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FastFoodSchema = new Schema({
    name: String,
    logo: String,
    tagline: String
})

module.exports = FastFood = mongoose.model('fastfood', FastFoodSchema)