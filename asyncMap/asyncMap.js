'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


var asyncMap = function(tasks, callback) {
  // Define expicit length & counter
  const length = tasks.length;
  let counter = 0;
  // Define array of results
  const results = [];
  // Declare iterator recursive func that will call as long counter !== length
  const iterator = (currentTask) => {
    if (counter < length) {
      currentTask((data) => {
        // increment counter
        counter += 1;
        // push data to results
        results.push(data);
        // recurse
        iterator(tasks[counter])
      })
    } else {
      // if length === counter end recursion and trigger callback with results
      callback(results);
    }
  };
  // Run iterator
  iterator(tasks[counter]);
};


 asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
       cb('two');
    }, 100);
  },
  function(cb){
    setTimeout(function(){
       cb('3');
    }, 100);
  },
  function(cb){
    setTimeout(function(){
       cb('4');
    }, 100);
  },
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
});
