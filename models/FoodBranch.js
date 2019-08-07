const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FoodBranchSchema = new Schema({
    fastfood_id: String,
    latitude: String,
    longitude: String,
    name: String,
    address: String,
    number: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
})

module.exports = FoodBranch = mongoose.model('foodbranch', FoodBranchSchema)