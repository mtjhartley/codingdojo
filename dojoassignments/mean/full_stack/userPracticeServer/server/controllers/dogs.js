const mongoose = require("mongoose")
const Dog = mongoose.model("Dog")
const User = mongoose.model("User")

module.exports = {
    index: (req, res, next) => {
        Dog.find()
        .populate('_user').exec()
        .then(data => res.json(data))
        .catch(err => {res.status(500).json(err)})
    },
    add: (req, res, next) => {
        console.log(req.body);
        var newDog = new Dog(req.body);
        newDog._user = req.session.user_id
        console.log('saving the new dog')
        newDog.save()
        .then(() => {
            res.json(true)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
        //user dog push user id 
        console.log('attempting to add the dog into the user array')
        User.findOne({_id: req.session.user_id})
        .then((user) => {
            console.log('found the user!')
            user.dogs.push(newDog)
            user.save()
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    destroy: (req, res, next) => {
        console.log('logging the req.body', req.body)
        let dog = new Dog(req.body);
        console.log("logging the new dog we're gonna destroy haha", dog)
        Dog.remove({_id: dog._id})
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    update: (req, res, next) => {
        console.log("logging the update req.body", req.body)
        let myDog = new Dog(req.body)
        Dog.findOne({_id: myDog._id}) //update makes you find one
        .then((dog) => {
            console.log('successfully found one')
            dog.name = myDog.name
            dog.age = myDog.age
            dog.description = myDog.description
            dog.save()
            .then(() => {res.json(true)})
            .catch((err) => {res.status(500).json(err)})
        })
        .catch((err)=> {
            res.status(500).json(err);
        })
    },
    getOne: (req, res, next) => {
        console.log('logging the body for getting one dog', req.body)
        Dog.findOne({_id: req.body.dog_id})
        .then((dog) => {
            console.log('found me a dog', dog)
            res.json(dog)
        })
        .catch((err) => {
            res.status(500).json(err);
        })

    },
    like: (req, res, next) => {
        console.log('trying to increment the likes on this dog!', req.body)
        Dog.findOne({_id: req.body.dog_id})
        .then((dog) => {
            console.log('found me a doggie to like', dog)
            dog.likes++
            dog.save()
            .then(()=> {res.json(true)})
            .catch((err) => {res.status(500).json(err)})

        })
    },
    dislike: (req, res, next) => {
        console.log('trying to decrement the likes on this dog!', req.body)
        Dog.findOne({_id: req.body.dog_id})
        .then((dog) => {
            console.log('found me a dog i don\'t like', dog)
            dog.likes--
            dog.save()
            .then(() => {res.json(true)})
            .catch((err) => {res.status(500).json(err)})
        })
    }
}