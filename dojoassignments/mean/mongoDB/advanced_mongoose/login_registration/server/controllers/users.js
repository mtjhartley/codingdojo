var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

module.exports = {
    register: function(req,res){
        console.log(req.body);
        if (req.body.password != req.body.confirm){
            res.render('register', {errors: {errors:{User:{message: "Passwords must be identical!"}}}, input: req.body});
        } 
        else 
        {
            var newUser = new User({
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: req.body.password,
                birthday: req.body.birthday,
            })
            console.log(newUser);
            newUser.save(function(err, user){
                if(err){
                    console.log("Error saving the user, please read.", err);
                    console.log(err['name']) //error name
                    res.render('register', {errors: err, input:req.body})
                } else {
                    console.log("Successfully Registered!")
                    req.session.id = user.id;
                    res.redirect('/success')
                }
            })
        }
    },
    login: function(req,res){
        if (! req.body.email || !req.body.password){
            res.render('index', {errors:'error'})
        }
        else 
        {
            User.findOne({email: req.body.email}, function(err, user){
                if (err){
                    console.log("Errors from logging in.", err)
                    res.render('index', {errors:"login error"})
                } else {
                    console.log(user);
                    if (bcrypt.compareSync(req.body.password, user.password)){
                        console.log("Passwords match!");
                        req.session.id = user.id;
                        console.log(req.session.id)
                        res.redirect('/success')
                    } else {
                        console.log("Invalid Login Credentials (Password for debugging)");
                        res.render('index', {errors:"login error"})
                    }
                }
            });
        }
    },

}