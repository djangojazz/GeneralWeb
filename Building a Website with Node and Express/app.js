var express = require('express');
var app = express();
var routes = require('./routes')

app.set('view engine', 'ejs');
app.locals.pagetitle = "Awesome Website"

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res) {
    res.send('Bad Route');
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});

////Basic Route
//app.get('/', function(req, res) {
//   res.send('<h1>Hello</h1> Express');
//});

////Route examples below
//app.get('/me', function(req, res) {
//    res.send('@planetoftheweb')
//});
//
//app.get('/who/:name?', function(req, res) {
//    var name = req.params.name;
//    res.send(name + ' was here');
//});
//
//app.get('/who/:name?/:title?', function(req, res) {
//    var name = req.params.name;
//    var title = req.params.title;
//    res.send('<p>name: ' + name + '<br>title: ' + title + '</p>');
//});
//
//app.get('*', function(req, res) {
//    res.send('Bad Route');
//});

