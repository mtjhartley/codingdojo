const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const DogSchema = mongoose.Schema({
    name: String,
    age: Number,
    description: String,
    likes: {
        type: Number,
        default: 0
    },
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
    //_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, for foreign key?

}, { timestamps: true })

mongoose.model("Dog", DogSchema)