const mongoose = require("mongoose")
const ostrichSchema = mongoose.Schema({
name: String,
age: {
    type: Number,
    max: [10, "max age is 10"]
},
feather_count: Number
})
module.exports = mongoose.model("Ostriches",
ostrichSchema)