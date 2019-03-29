/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // Declare Array of common Characters
  let commonArray = [];
  for (let i = 0; i < string1.length; i++) {
    for (let b = 0; b < string2.length; b++) {
      if (!commonArray.includes(string1[i]) && string1[i] === string2[b]) {
        commonArray.push(string1[i]);
      }
    }
  }
  return commonArray.join('');
};
