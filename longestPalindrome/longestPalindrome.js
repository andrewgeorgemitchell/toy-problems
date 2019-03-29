/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const checkStringIsPalidrome = (str) => {
  let midpoint = 0;
  str.length % 2 === 1 ? midpoint = Math.floor(str.length / 2) : midpoint = (str.length / 2);
  const str1 = str.slice(0, midpoint);
  const str2 = midpoint % 2 === 1 ? str.slice(midpoint + 1).split('').reverse().join('')  : str.slice(midpoint).split('').reverse().join('');
  for (let i = 0; i < str1.length; i += 1) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  return true;
}

const longestPalindrome = (string) => {

};


// Test Palidrome Checker

console.log('checkStringIsPalidrome(racecar)', checkStringIsPalidrome('racecar'));
console.log('checkStringIsPalidrome(racecars)', checkStringIsPalidrome('racecars'))