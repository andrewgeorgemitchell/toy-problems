/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
  // Declare Fibonnacci Array with first two values
  var fibArray = [0, 1];
  // Declare Recusive function
  var recursor = () => {
    // Grab the last and second to last fibinacci values;
    let lastNumber = fibArray[fibArray.length - 1];
    let secondToLastNumber = fibArray[fibArray.length - 2];
    // Add the sum of those two numbers to the end of the array
    fibArray.push(lastNumber + secondToLastNumber);
    // Recurse if length of the array is less than n
    if (fibArray.length <= n) {
      recursor();
    }
  }
  // Call Recursive function
  recursor();
  // return the nth number in array
  let nthNumber = fibArray[n];
  return nthNumber;
};

var nthFibonacciIterator = function (n) {
  // Declare Fibonnacci Array with first two values
  var fibArray = [0, 1];
  // Build Fib Array of length n by iteratoring over it n times
  for (let i = fibArray.length; i <= n; i++) {
    // Grab the last and second to last fibinacci values;
    let lastNumber = fibArray[fibArray.length - 1];
    let secondToLastNumber = fibArray[fibArray.length - 2];
    // Add the sum of those two numbers to the end of the array
    fibArray.push(lastNumber + secondToLastNumber);
  }
  // return the nth number in array
  let nthNumber = fibArray[n];
  return nthNumber;
}

console.log(nthFibonacci(2));
console.log(nthFibonacci(3));
console.log(nthFibonacci(4));
console.log(nthFibonacci(5));

console.log(nthFibonacciIterator(2));
console.log(nthFibonacciIterator(3));
console.log(nthFibonacciIterator(4));
console.log(nthFibonacciIterator(5));