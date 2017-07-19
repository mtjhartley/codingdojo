const mongoose = require('mongoose');
const path = require('path');
const Player = mongoose.model('Player');
const players = require('../controllers/players.js');

module.exports = (app) => {
    app.get('/players', players.index);
    app.post('/player', players.add);
    app.post('/player/destroy', players.destroy)
    app.post('/player/edit', players.update);
    app.all('*', (req, res, next) => {
        res.sendfile(path.resolve('./public/dist/index.html')) //send them to angular index.html and angular will handle it!
    })
}