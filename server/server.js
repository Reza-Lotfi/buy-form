var express = require('express');
var bodyParser  = require('body-parser');

var port = 4567;
var app = express();

app.use(express.static(__dirname + '/../public/'));


app.listen(port, () => {
    console.log('Server listening on port ', port);
})
