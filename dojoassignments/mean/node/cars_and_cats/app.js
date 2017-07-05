var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    console.log('client request URL:', request.url);

    if (request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end()
        })
    }
    else if (request.url === '/cars/new'){
        fs.readFile('views/new_car.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end()
        })
    }
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end() 
        })
    }
    else if (request.url ==='/images/car_picture.jpg') {
        fs.readFile('./images/car_picture.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url ==='/images/cat_picture.jpg') {
        fs.readFile('./images/cat_picture.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else {
        response.writeHead(404);
        response.end('URL requested is not available.')
    }
});
server.listen(6789);

console.log("Running in localhost at port 6789")