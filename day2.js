var express = require("express");
var app = express();

/* serves main page */
app.get("/", function(req, res) {
    res.sendfile('index.html');

});


app.listen("8080", function() {
});

