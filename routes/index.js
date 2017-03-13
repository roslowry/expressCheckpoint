'use strict';

var express = require('express');
var router = express.Router();
var todos = require('../models/todos')
// var bodyParser = require('body-parser');
module.exports = router;

// // write your routes here. Feel free to split into multiple files if you like.

router.get('/users', function(req, res, next) {
	console.log(req.status)
	res.send(todos.listPeople())
	res.statuscode
})

router.use('/users/:name/tasks', function(res, req, next) {
	var person = req.params.name;
	console.log('hello')
	// console.log(todos.tasks[person])
	res.send(todos.tasks[person])
})



// router.get('/:puppyId/orders/:puppyOrderId', function(req, res, next) {
//   // find something based on the first param
//   puppies.findById(req.params.puppyId)
//     .then(function(puppy) {
//       // then find something else based on the result of the first query
//       return puppy.getAllOrders({
//         where: {
//           orderId: req.params.orderId
//         }
//       })
//     })
//     // once you get both things, send response
//     .then(function(result) {
//       res.send(result);
//     })
// })