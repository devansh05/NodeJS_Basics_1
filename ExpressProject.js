//import express
const express = require('express')

//initialize express
const app = express();

//request is his url present on browser after domain taht is "http://localhost:9000" which is '/' : http://localhost:9000/
//to make a get api request with / as url address and a call back function

//for url request : http://localhost:9000/
app.get('/', function(req, res){
    //res.send is the response we are returning to client
    console.log('Request Fired : ',(req))
    res.send('Response')
})

// // for request with particular id : http://localhost:9000/welcome/20
app.get('/welcome', function(req, res){
    res.send('Welcome back');
})

// for dynamic request : http://localhost:9000/welcome/21 OR 20 OR 22
app.get('/welcome/:id', function(req, res){
    //id is the holder for request variable
    const id = req.params.id;
    res.send('Welcome '+ id);
})

// for query string request : http://localhost:9000/welcome?id=2 OR 4 OR 3
app.get('/welcome', function(req, res){
    const id = req.query.id;
    
    res.send('Welcome '+ id);
})

//to start server for port 9000 and a callback function for req & res
app.listen(9000, function(req, res){
    console.log('Running...')
});
