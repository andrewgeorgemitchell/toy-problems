/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!
  if (string.length === 0) {
    return null;
  }
  let start = false;
  let end = false;
  let currentLongest = [0, 0];
  for (let i = 0; i < string.length; i++) {
    if (start === false) {
      start = i;
    } else if (end === false && start !== i && string[start] !== string[i]) {
      end = i - 1;
      if (end - start > currentLongest[1] - currentLongest[0]) {
        currentLongest = [start, end];
      }
      start = i;
      end = false;
    }
  }
  
  return currentLongest;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};


// test
longestRun("abbbcc") // [1, 3]
console.log('longestRun("abbbcc"):', longestRun("abbbcc"))
longestRun("aabbc")  // [0, 1]
console.log('longestRun("aabbc") :', longestRun("aabbc") )
longestRun("abcd")   // [0, 0]
console.log('longestRun("abcd"):', longestRun("abcd"))
longestRun("")       // null
console.log('longestRun(""):', longestRun(""))