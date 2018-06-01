var express = require('express')
fs = require("fs")

var app = express()
const port = 3000;


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.get('/datasets/:id', function (req, res) {
    fs.readFile('data/' + req.params['id'], "utf8", function (err, data) {
        res.send(data);
    })
});

app.get('/datasets', function (req, res) {
    fs. readdir('data', function(err, items) {
        res.send(items);
    })
});

app.listen(port)