const mongoose = require("mongoose")
const Trivia = mongoose.model("Trivia")
module.exports = {
    add_question: (req, res, next) => {
        let new_trivia = new Trivia(req.body)
        new_trivia.save()
        .then(() => {res.json(true)})
        .catch(err => {res.status(500).json(err)})
    },
    start_game: (req, res, next) => {
        Trivia.find()
        .then((trivias) => { //trivias is an array of question objects from our database.
            var possibleQuestions = [];
            while (possibleQuestions.length < 3) {
                var randomIdx = Math.floor(Math.random() * trivias.length)
                var question = trivias[randomIdx]
                possibleQuestions.indexOf(question) === -1 ? possibleQuestions.push(question): console.log("Question is already in our array") 
            }
            var gameQuestions = {questions: possibleQuestions}
            res.json(gameQuestions) 

        })
        .catch(err => {res.status(500).json(err)})
    }
}