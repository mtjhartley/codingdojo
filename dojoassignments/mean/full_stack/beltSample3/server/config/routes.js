const path = require("path")

const users = require("./../controllers/users.js")
const trivias = require('./../controllers/trivias.js')

module.exports = (app) => {
    app.post('/login', users.login)
    app.get('/all_users', users.index)
    app.get('/get_logged_in_user', users.get_logged_in_user)
    app.get('/logout', users.logout)
    app.post('/update', users.update)
    app.get('/destroy_all_users', users.destroy_all_users) //used for testing!
    app.post('/add_question', trivias.add_question)
    app.get('/start_game', trivias.start_game)
    app.get("*", (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html')) // make angular name
    })
}
