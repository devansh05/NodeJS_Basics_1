
//To import pre built modules from node, http is one of such
var http = require('http');

//create server that creates a service that takes a function as an argument which has furthure 2 arguments request and response
http.createServer(function(req, res){
    //to send a resoponse back to client
    // res.write('This is how to send a response from api.')
    //to end the connection 
    // res.end()

    //to send status code with a header or Content type
    res.writeHead(200, {'Content-Type': 'text/html'})
    //a shortcut for above two
    res.end('This is how to send a response from api.')

    //Listen is used for browser to listen to this port number
}).listen(9000)