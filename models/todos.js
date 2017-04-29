'use strict';

// var roles = {"ross": [{ content: 'clean room' }, { content: 'read'}]}

var tasks = {}  // a place to store tasks by person

// var people = []

module.exports = {

  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====

  listPeople: function() {
    return Object.keys(tasks)
  },

  add: function(name, taskObject) {
    if (!tasks[name]) {
      tasks[name] = [];
    };
    if (taskObject.complete === undefined) {
      taskObject.complete = false
    };
    tasks[name].push(taskObject)
  },

  list: function (name) {
    return tasks[name]
  },

  complete: function (name, index) {
    tasks[name][index].complete = true;
  },

  /*NOTE: I could actually use some guidance here. if you look below, I commented out my original attempt at the remove function, which worked for part 1 but not part 2. After ~1 hour+ of investigation/console.logs, I couldn't seem to undertand why my concat/console.log would work in some instances, but apparently not for an array of objects. Let me know your thoughts.
  
  */
  remove: function(name, indexToCut){
    var currentTasksByUser = tasks[name];
    currentTasksByUser.splice(indexToCut, 1)
  }


  // remove: function (name, index) {
  //   var currentTaskList = tasks[name];
  //   var firstHalfNewList = currentTaskList.slice(0, index);
  //   var secondHalf = currentTaskList.slice(index + 1);
  //   var newTaskList = firstHalfNewList.concat(secondHalf);
  //   tasks[name] = newTaskList
  // }

};
// etc.
