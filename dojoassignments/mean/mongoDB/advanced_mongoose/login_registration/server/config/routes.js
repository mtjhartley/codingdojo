var users = require('../controllers/users.js')
module.exports = function(app){
    // Login page for root route
    app.get('/', function(req,res){
        console.log(req.session.id);
        res.render('index', {errors:""})
    })
    // Validate and post login info
    app.post('/login', function(req,res){
        users.login(req,res);
    })
    // Registration page (new in crud)
    app.get('/register', function(req,res){
        res.render('register', {errors:"", input:""});
    })
    // Handle posting registration to db.
    app.post('/register', function(req,res){
        users.register(req,res);
    }) 
    app.get('/success', function(req,res){
        res.render('success')
    })
}