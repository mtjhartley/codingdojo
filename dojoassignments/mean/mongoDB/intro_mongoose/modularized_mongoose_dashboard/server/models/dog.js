var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
    name: { type: String, required:true, minlength:3},
    description: { type: String, required: true, minlength: 3}
}, {timestamps: true});

var Dog = mongoose.model('Dog', DogSchema)