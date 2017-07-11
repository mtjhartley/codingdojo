var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Dog = mongoose.model('Dog')

module.exports = {
    showAll: function(req, res) {
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
    },
    new: function(req, res){
        res.render('new_dog')
    },
    showOne: function(req, res){
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
    },
    create: function(req, res){
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
    },
    edit: function(req, res){
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
    },
    update: function(req, res){
        console.log("POST DATA", req.body);
        console.log(req.params.id)
        Dog.update({_id:req.params.id}, { $set: {name: req.body.name, description: req.body.description}}, function(err){
            console.log(err);
        })
        res.redirect('/')
    },
    destroy: function(req, res){
        console.log(req.params.id)
        Dog.remove({_id: req.params.id}, function(err){
            console.log(err);
        })
        res.redirect('/')
    },
}