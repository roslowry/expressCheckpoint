'use strict';

var supertest = require('supertest')

var express = require('express');
var app = express();
var volleyball = require('volleyball')
var bodyParser = require('body-parser');
var path = require('path')
module.exports = app; // this line is only used to make testing easier.
var todos = require('./models/todos.js')
var router = require('./routes')

app.use(volleyball)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// remember to plug in your router and any other middleware you may need here.
// if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.

var server = app.listen(2000, function(){console.log('hey!!!!! you are here!!!')})

app.use('/', router)

// app.get('/users/:name/', function(res, req, next) {
// 	var person = req.params.name;
// 	// console.log(todos.tasks[person])
// 	console.log(person)
// 	console.log(todos.tasks[person])
// 	// res.send(todos.tasks[person])
// 	// res.statuscode
// })



// var volleyball = require('volleyball') // i know we prob don't need this



// // remember to plug in your router and any other middleware you may need here.


// // app.listen(3000, function () {console.log('im listening!!!!!!!!!!!!')})
