var mongoose = require('mongoose'); //require mongoose
var Note = mongoose.model('Note'); //get this, which was set in models/note.js
mongoose.Promise = global.Promise //use new js implementation of promises.

module.exports = {
    show: function(req, res){
        Note.find({}).sort('-createdAt').exec(function(err, notes){
            if(err){
                console.log('errors', err)
            } else {
                console.log("got the info!!");
                res.json(notes)
            }
        });
    },
    add: function(req, res, next){
        console.log(req.body);
        let newNote = new Note(req.body)
        console.log(newNote)
        newNote.save(function(err){
            if(err){
                console.log("error when adding note server side", err)
            } else {
                console.log('saved the new note server side!')
            }
        });
        console.log(newNote) //now updated with timestamp?
        return res.json(true)
    }
}
