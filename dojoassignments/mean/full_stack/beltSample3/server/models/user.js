const mongoose = require('mongoose')
var Schema = mongoose.Schema; //can just do mongoose.Schema, but whatever.
const UserSchema = mongoose.Schema({
    name: String,
    score: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    last_score: {
        type: Number,
        default: 0
    }

}, {timestamps: true})

mongoose.model("User", UserSchema)