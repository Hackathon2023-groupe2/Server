var code = require("./tmplib/src/interpreter");

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
// @supercollider/server-plus interface
const sc = require("supercolliderjs");
const osc = require('@supercollider/osc');
const { spawn } = require("child_process");



sc.server.boot().then(async server => {
  // Compile a SynthDef from inline SuperCollider language code and send it to the server

//   // spawn the first event
//   spawn(Math.random());
var app = express();
var serv = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));

// app.configure(function(){
//   app.use(express.static(__dirname + '/public'));
// });
app.get('/', function(req, res, next){
  res.sendFile(__dirname+'/public/index.html');
});

app.post('/run', function(req, res){
  new code(0,req.body.input,server).RunCode();
})  
app.listen(8333);



}, console.error);