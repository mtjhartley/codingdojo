var express = require("express");
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + './static')));

//setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
});

//storing app.listen within a variable called server!
var server = app.listen(8000, function() {
    console.log("Listening on port 8000")
});

//this is a new line we're adding after our server listener
//look at how we pass server variable!
var io = require('socket.io').listen(server);
 
var users = {}
//whenever a conncetion event happens (connection built in) run the following code

io.sockets.on('connection', function(socket){
    console.log("We are using Sockets!");
    console.log(socket.id)
    //all the socket code goes in here
    socket.on('got_a_new_user', function(data){
        console.log("Just got a new user!");
        users[socket.id] = data.name
        console.log("users map", users)
        socket.emit("existing_users", {users: users})
        socket.broadcast.emit('new_user', {name: users[socket.id], socket_id: socket.id,})

    });

    socket.on('disconnect', function(data){
        socket_id = socket.id 
        delete users[socket_id]
        //could remove them from the users map, and rerender all users
        //i want to try and just delete the div where they live though.
        socket.broadcast.emit('disconnect_user', {id: socket_id})

    });
});