// Require/import the http module
var http = require("http");

// define port 1 to listen for incoming requests
var PORT = 7000;
var PORT2 = 7500;

// function to handle requests and responses from PORT
function requestPORT(request, response) {
    response.end("Good request! Path hit: " + request.url);
}

// Pass requestPORT to empower it with functionality
var server1 = http.createServer(requestPORT);

// start the server to make requests
server1.listen(PORT, function() {
console.log("You handesome and this is the PORT: "+ PORT);
});

// function to handle requests and respones from PORT2
function requestPORT2(request, response) {
    response.end("Bad request! Path hit: " + request.url);
}

// Pass requestPORT2 to empower it with functionality
var server2 = http.createServer(requestPORT2);

// start the server to make requests
server2.listen(PORT2, function() {
console.log("You suck bro and this is the PORT: "+ PORT2);
});