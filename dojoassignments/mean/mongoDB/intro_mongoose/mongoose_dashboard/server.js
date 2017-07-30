var express = require('express');

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mongoose_dashboard')

var DogSchema = new mongoose.Schema({
    name: { type: String, required:true, minlength:3},
    description: { type: String, required: true, minlength: 3}
}, {timestamps: true});

mongoose.model('Dog', DogSchema);
var Dog = mongoose.model('Dog')

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    Dog.find({}, function(err, dogs){
        if (err) {
            console.log(err)
            res.render('index')
        }
        if (dogs) {
            console.log(dogs)
            res.render('index', {dogs: dogs})
        }
    });
});

app.get('/dogs/new', function(req, res){
    res.render('new_dog')
});

app.get('/dogs/:id', function(req, res){
    Dog.findOne({_id:req.params.id}, function(err, dogs){
        if (err) {
            console.log(req.params.id)
            console.log(err)
            res.render('index')
        }
        if (dogs) {
            console.log(req.params.id)
            console.log(dogs)
            res.render('one_dog', {dogs: dogs})
        }
    })
})
//D3mp$eyy

app.post('/dogs', function(req, res){
    console.log("POST DATA", req.body);
    var dog = new Dog({name: req.body.name, description: req.body.description});
    console.log(dog)
    dog.save(function(err){
        if (err) {
            console.log("doggie went wrong")
            res.render('new_dog', {title: 'you have errors!', errors: dog.errors})
        } else {
            console.log("successfully added a doggie!")
            res.redirect('/')
        }
    })
});

app.get('/dogs/edit/:id', function(req, res){
    Dog.findOne({_id:req.params.id}, function(err, dogs){
        if (err) {
            console.log(err)
            res.render('index')
        }
        if (dogs) {
            console.log(req.params.id)
            console.log(dogs)
            res.render('edit_dog', {dogs: dogs})
        }
    })
});

app.post('/dogs/:id', function(req, res){
    console.log("POST DATA", req.body);
    console.log(req.params.id)
    Dog.update({_id:req.params.id}, { $set: {name: req.body.name, description: req.body.description}}, function(err){
        console.log(err);
    })
    res.redirect('/')
})

app.post('/dogs/destroy/:id', function(req, res){
    console.log(req.params.id)
    Dog.remove({_id: req.params.id}, function(err){
        console.log(err);
    })
    res.redirect('/')
})

const PORT = 8000
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
});