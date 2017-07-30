const mongoose = require('mongoose');
var Schema = mongoose.Schema; //can just do mongoose.Schema, but whatever.
const TriviaSchema = new mongoose.Schema({
    question: String,
    options: Array //could do each answer as it's own key..but that requires knowledge of how many answers exist, an array can hold them all and gimme length
})

mongoose.model('Trivia', TriviaSchema)
