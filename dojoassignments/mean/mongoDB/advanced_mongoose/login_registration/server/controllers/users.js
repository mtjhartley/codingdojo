var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

module.exports = {
    register: function(req,res){
        var newUser = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                birthday: req.body.birthday,
            })
        if (req.body.password != req.body.confirm){
            newUser.validate(function(err){
                if (err){
                    console.log(err, "The passwords do not match!")
                    res.render('register', {errors: err, passwordMatch: true})
                } else {
                    res.render('register', {passwordMatch: true, errors: ""});

                }
            })
        } else {
            newUser.save(function(err, user){
                if(err){
                    console.log("Error during newUser.save", err);
                    res.render('register', {errors: err, passwordMatch:false})
                } else {
                    console.log("Successful registration!")
                    req.session.id = user.id;
                    console.log(req.session.id)
                    res.redirect('/success')
                }
            })
        }
    },

    login: function(req,res){
        if (!req.body.email || !req.body.password){
            res.render('login', {errors:'error'})
        } else {
            User.findOne({email: req.body.email}, function(err, user){
                if (err){
                    console.log("Invalid login credentials", err)
                    res.render('login', {errors:"Invalid login credentials!"})
                } else {
                    console.log(user);
                    if (bcrypt.compareSync(req.body.password, user.password)){
                        console.log("Success password match");
                        req.session.id = user.id;
                        console.log(req.session.id)
                        res.redirect('/success')
                    } else {
                        console.log("Invalid login (password) (delete)");
                        res.render('login', {errors:"Invalid login credentials!"})
                    }
                }
            });
        }
    },

}