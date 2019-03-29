/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

let sortString = (str) => {
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
}


var powerSet = function(str) {
  let results = [''];
  // Iterate over the string
  for (let i = 0; i < str.length; i++) {
    // Push 
    for (let c = 0; c < str.length; c++) {
      if (i == c) {               
        results.push(str[i] + ",")
      } else {
        results.push(sortString(str[i] + str[c]));
      }
    }
  }
  results.push(sortString(str));
  return results;
};

console.log(powerSet('abc'))
console.log(powerSet('jump'))
