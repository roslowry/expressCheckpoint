'use strict';

var express = require('express');
var router = express.Router();
var todos = require('../models/todos')
// var bodyParser = require('body-parser');
module.exports = router;

// // write your routes here. Feel free to split into multiple files if you like.

router.get('/users', function (req, res, next) {
	var users = todos.listPeople()
	res.json(users)
});

router.get('/users/:name/tasks', function (req, res, next) {
	var name = req.params.name;
	var tasks = todos.list(name);
	var completeStatus;
	var query = req.query;
	if (Object.keys(req.query).length) {
		if (req.query.status === 'active') completeStatus = false;
		if (req.query.status === 'complete') completeStatus = true;
		var conditionToMatch = req.query.status;
		var personsTasks = todos.list(name);
		var tasksToReturn = personsTasks.filter(function(task){
			return task.complete === completeStatus
		});
		res.json(tasksToReturn)
	}
	if (!Object.keys(req.query).length) next()
		// console.log('status', req.query.status)
});

router.get('/users/:name/tasks', function (req, res, next) {


	var name = req.params.name;
	var tasks = todos.list(name);
	if (!todos.list(name)) {
		//// *** QUESTIO N: I'm really not sure what my 'end' invocation here did that made this test go from passing to failing.Shouldn't the use of conditional logic here be sufficient to ensure the test passes?
		return res.status(404).end();
	} else {
		res.json(tasks)
	}
	/// **** QUESTIO N: I really have no idea why the below resulted in a 'can't modify header twicce' error (or something like that). Doesn't the 'end' statement keep the thread from continuing to the following res.json (which, by the way, doesn't try to 'modify the head' as I believe the comment suggests. I'm confused!!)
		// var name = req.params.name;
		// var tasks = todos.list(name);
		// if (!todos.list(name)) {
		// 	return res.status(404).end();
		// }
		// res.json(tasks)
})

router.post('/users/:name/tasks', function (req, res, next) {
	var name = req.params.name;
	var task = req.body;
	var bodyFields = Object.keys(req.body);
	var send400 = false
	bodyFields.forEach(function(field){
		if (field === 'complete' || field === 'content') {
				send400 = false;
		} else {
			send400 = true;
		}
	})
	if (send400) {
		return res.status(400).end()
	} else {
		todos.add(name, task);
		var tasksByName = todos.list(name);
		res.status(201).json(tasksByName[tasksByName.length - 1]).end();
	}
});


router.put('/users/:name/tasks/:index', function (req, res, next) {
	var name = req.params.name;
	var idx = req.params.index;
	todos.complete(name, idx);
	res.end()
})

router.delete('/users/:name/tasks/:index', function (req, res, next) {
	// console.log('i appear')
	var name = req.params.name;
	var idx = req.params.index;
	todos.remove(name, idx);
	return res.status(204).end()
})
