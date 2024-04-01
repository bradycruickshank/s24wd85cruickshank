const mongoose = require("mongoose")
const ostrichSchema = mongoose.Schema({
name: String,
age: Number,
feather_count: Number
})
module.exports = mongoose.model("Ostriches",
ostrichSchema)