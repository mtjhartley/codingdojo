const mongoose = require('mongoose');

const DogSchema = mongoose.Schema({
    name: String,
    age: Number,
    description: String

}, { timestamps: true })

mongoose.model("Dog", DogSchema)