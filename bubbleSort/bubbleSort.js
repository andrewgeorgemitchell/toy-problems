/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 * (O)(n^2)
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  // For every element in the array go through a for loop to allowing bubbling
  for (let a = 0; a < array.length; a++) {
    // Declare a counter variable that will define whether or not sorting happened on this iteration through the array
    let counter = 0;
    // iterate over every array
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element > array[i+1]) {
        array[i] = array[i+1];
        array[i+1] = element;
        // Increase counter to show sorting has happened
        counter++;
      }
    }
    if (counter === 0) {
      return array;
    }
  }
  return array;
};

bubbleSort([2, 1, 3]); // yields [1, 2, 3]
bubbleSort([2, 10, 11, 23, 4, 6, 3]);