var users = require('../controllers/users.js')
module.exports = function(app){
    // Login page for root route
    app.get('/', function(req,res){
        console.log(req.session.id);
        //mike's idea to use empty string for errors, so errors are always passed to the template.
        res.render('login', {errors:""})
    })
    // Validate and post login info
    app.post('/login', function(req,res){
        users.login(req,res);
    })
    // Registration page (new in crud)
    app.get('/register', function(req,res){
        res.render('register', {errors:"", input:"", passwordMatch: ""});
    })
    // Handle posting registration to db.
    app.post('/register', function(req,res){
        users.register(req,res);
    }) 
    // Page render to after logging in..
    app.get('/success', function(req,res){
        res.render('success')
    })
}