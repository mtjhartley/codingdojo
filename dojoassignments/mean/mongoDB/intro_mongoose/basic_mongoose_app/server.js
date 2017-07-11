var express = require('express');

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //overwriting mongoose promises with global promises
//this is how we conncet to the mongodb database using mongoose
//basic_mongoose is the name of our db in mongo db, which should match the name of the db for your project.
mongoose.connect('mongodb://localhost/basic_mongoose')
//schema for table below for now.
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); //setting this schema in our models as 'User'
var User = mongoose.model('User') //Retrieving this schema from our Models, named 'User'.

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    User.find({}, function(err, users){
        if (err) {
            console.log(err)
            res.render('index')
        }
        if (users) {
            console.log(users)
            res.render('index', {users: users})
        }
    })
    //this is where we will retrieve the users from the database and include them in the view page we will render.
})

app.post('/users', function(req, res){
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    console.log(user)

    //include hte code to add the user from req.body to the database.
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something gone wrong');
        } else {
            console.log('successfully added a user!');
            res.redirect('/')
        }
    })
})

const PORT = 8000
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
})