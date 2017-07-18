var notes = require ('../controllers/notes.js') //require the controller, which is what we will call on our routes

module.exports = function(app) {
    app.get('/notes', function(req,res,next){
        notes.show(req, res);
    });

    app.post('/notes', function(req, res, next){
        console.log(req.body)
        notes.add(req, res);
    })
}

