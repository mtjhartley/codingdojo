const path = require("path")

const users = require("./../controllers/users.js")
const dogs = require("./../controllers/dogs.js")

module.exports = (app) => {
    app.post('/login', users.login)
    app.get('/all_users', users.index)
    app.get('/get_logged_in_user', users.get_logged_in_user)
    app.get('/logout', users.logout)

    app.get('/dogs', dogs.index)
    app.post('/dogs/add', dogs.add)
    app.post('/dogs/destroy', dogs.destroy)
    app.post('/dogs/update', dogs.update)
    app.post('/dogs/id', dogs.getOne)

    app.get("*", (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html')) // make angular name
    })
}