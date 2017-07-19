const mongoose = require('mongoose');
const Player = mongoose.model('Player');
mongoose.Promise = global.Promise;

module.exports = {
    index: (req, res, next) => {
        Player.find({}) //find is for querying the database
        .then((players) => {
            res.json(players);
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },
    add: (req, res, next) => {
        console.log(req.body);
        var newPlayer = new Player(req.body);
        newPlayer.save() //save is for adding to the database
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    update: (req, res, next) => {
        console.log('server side update')
        console.log(req.body);
        let myPlayer = new Player(req.body);
        Player.findOne({_id: myPlayer._id}) //update requires you to find one,
        .then((player) => {
            console.log('the first then') //if the find was successful
            player.games = myPlayer.games; //alter the database (database.games = object.games)
            player.save() //save it 
            .then(() => {res.json(true)}) //return true when it's done
            .catch((err) => {res.status(500).json(err)})
        })
        .catch((err) => {
            res.status(500).json(err);
        })

    },
    destroy: (req, res, next) => {
        console.log("logging the req.body", req.body) //req.body carries the player id with them
        let player = new Player(req.body);
        console.log ("logging the player, what's different than the body?", player)
        Player.remove({_id: player._id})
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    }
}