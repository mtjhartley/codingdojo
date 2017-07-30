const mongoose = require("mongoose")
const User = mongoose.model("User")
module.exports = {
    login: (req, res) => {
        User.findOne({name: req.body.name})
        .then(data => {
            if(data) {
                req.session.user_id = data._id
                res.json(true)
            } else {
                let new_user = new User({name: req.body.name})
                new_user.save()
                .then(() => {
                    req.session.user_id = new_user._id
                    res.json(true)
                })
                .catch(err => {res.status(500).json(err)})
            }
        })
    },
    index: (req, res) => {
        User.find()
        .then(data => res.json(data))
        .catch(err => {res.status(500).json(err)})
    },
    get_logged_in_user: (req, res) => {
        if(req.session.user_id){
            User.findOne({_id: req.session.user_id})
            .then(user => res.json(user))
            .catch(err => res.status(500).json(err))
        } else {
            res.json(false)
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('/')
    },
    update: (req, res, next) => {
        console.log('attempting an update on the server side')
        console.log(req.body)
        newUser = new User(req.body)
        console.log(newUser)
        User.findOne({_id: newUser._id})
        .then((user) => {
            console.log('found me a user')
            user.last_score = 0
            user.last_score = newUser.last_score
            user.score = newUser.score
            user.total = newUser.total
            user.save()
            .then(()=>{res.json(true)})
            .catch((err)=> {res.status(500).json(err)})
        })
        .catch((err)=> {res.status(500).json})

    },
    //helper function for testing
    destroy_all_users: (req, res, next) => { 
        User.remove({}).
        then(() => {res.json(true)})
    }

}