var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './client/views'));

app.set('view engine', 'ejs');

var session = require('express-session')

app.use(session({secret:'secretstuff'}));

require('./server/config/mongoose.js');

var route_setter = require('./server/config/routes.js')
route_setter(app);
// Setting our Server to Listen on Port: 8000
const PORT = 8000 
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
});
