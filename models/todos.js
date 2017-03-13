'use strict';

var roles = {"ross": [{ content: 'clean room' }, { content: 'read'}]}

var tasks = {}; // a place to store tasks by person

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    return Object.keys(tasks)
  },
  add: function (name, task) {
    var taskKeys = Object.keys(task);
    var isComplete = taskKeys[1]
    // var addedTask = task;
    if (tasks[name] == undefined) {
      tasks[name] = []
      if (isComplete) {
        tasks[name].push(task)
      } else {
        task.complete = false
        tasks[name].push(task)     
        // tasks[name].push()
      }
      // tasks[name].push(task)      
    } else {
      if (isComplete) {
        tasks[name].push(task)
      } else {
        task.complete = false
        tasks[name].push(task)
      }
    // tasks[name].push(task);
    }
  },

  complete: function(name, task){
    tasks[name][task].complete = true
  },

  list: function (name) {
    return tasks[name]
  },

  remove: function(name, indexToCut){
    var currentTasksByUser = tasks[name];
    var cutTasks = currentTasksByUser.slice(0, indexToCut).concat(currentTasksByUser.slice(indexToCut + 1));
    tasks[name] = cutTasks
  }
  // etc.
};







