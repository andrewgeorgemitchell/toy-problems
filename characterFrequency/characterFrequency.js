/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  const counter = {};
  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];
    if (!counter.hasOwnProperty(char)) {
      counter[char] = 0;
    }
    counter[char] += 1;
  }
  const letters = Object.keys(counter);
  const sortedLetters = letters.sort((a, b) => {
    if (counter[a] < counter[b]) {
      return 1;
    }
    if (counter[a] > counter[b]) {
      return -1;
    }
    return 0;
  })
  const result = [];
  for (let i = 0; i < sortedLetters.length; i += 1) {
    const char = sortedLetters[i];
    const newArr = [char, counter[char]];
    result.push(newArr);
  }
  return result;
};

characterFrequency('miaaiaaippi');