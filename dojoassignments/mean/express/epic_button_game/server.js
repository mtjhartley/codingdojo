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

//whenever a conncetion event happens (connection built in) run the following code
var COUNT = 0
io.sockets.on('connection', function(socket){
    console.log("We are using Sockets!");
    console.log(socket.id)
    //all the socket code goes in here
    socket.on('clicking_button', function(data){
        console.log("Updating the server side count of button presses.");
        COUNT++;
        io.emit('updating_count', {count: COUNT});
    });
    socket.on('clicking_reset_button', function(data){
        console.log("Resetting the server side count of button presses to 0.");
        COUNT = 0;
        io.emit('resetting_count', {count: COUNT});
    })
});