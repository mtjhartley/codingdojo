//Require Express
var express = require('express');
//Instantiate Express App
var app = express();
//Require Body Parser for post data
var bodyParser = require('body-parser');
//Use bodyParser
app.use(bodyParser.json());
//Require Path
var path = require('path');
//Set static, make this the angular directory aka rename angular to public!~
app.use(express.static(path.join(__dirname,'./public/dist')));

//set our database
require('./server/config/mongoose.js')
//set our backend routing
var route_setter = require('./server/config/routes.js')
route_setter(app);
//Listen on this port
const PORT = 8000;
app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`)
})