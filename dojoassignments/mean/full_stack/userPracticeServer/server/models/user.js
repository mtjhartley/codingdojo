const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
    name: String,
    dogs: [{type: Schema.Types.ObjectId, ref:'Dog'}]

}, {timestamps: true})

mongoose.model("User", UserSchema)