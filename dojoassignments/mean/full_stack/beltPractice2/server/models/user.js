const mongoose = require('mongoose')
var Schema = mongoose.Schema; //can just do mongoose.Schema, but whatever.
const UserSchema = mongoose.Schema({
    name: String,

}, {timestamps: true})

mongoose.model("User", UserSchema)