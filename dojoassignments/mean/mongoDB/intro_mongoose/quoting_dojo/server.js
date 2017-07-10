var express = require('express');

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //overwriting mongoose promises with global promises
//this is how we conncet to the mongodb database using mongoose
//basic_mongoose is the name of our db in mongo db, which should match the name of the db for your project.
mongoose.connect('mongodb://localhost/quoting_dojo')

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required:true, minlength:3},
    quote: { type: String, required: true, minlength: 3}
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
});
app.get('/quotes', function(req, res){
    Quote.find({}, function(err, quotes){
        if (err) {
            console.log(err)
            res.render('quotes')
        }
        if (quotes) {
            console.log(quotes)
            res.render('quotes', {quotes:quotes})
        }
    })
})

app.post('/quotes', function(req, res){
    console.log("POST DATA", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    console.log(quote)
    quote.save(function(err) {
        if (err) {
            console.log("something gone wrong")
            res.render('index', {title: 'you have errors!', errors: quote.errors})
        } else {
            console.log('successfully added a quote!')
            res.redirect('/quotes')
        }
    })
})


const PORT = 8000
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
})