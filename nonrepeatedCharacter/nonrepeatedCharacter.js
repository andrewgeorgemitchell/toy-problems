var firstNonRepeatedCharacter = function(string) {
  let charTracker = {};
  debugger;
  // Iterate over string
  for (let i = 0; i < string.length; i++) {
    // Count Number of Chars
    if (!(string[i] in charTracker)) {
      charTracker[string[i]] = {
        'count': 1,
        'order': i,
      };
    } else {
      charTracker[string[i]].count = charTracker[string[i]].count + 1;
    }
  }
  let nonRepeatedArray = [];
  // Iterate over CharTracker Object
  for (const key in charTracker) {
    if (charTracker.hasOwnProperty(key)) {
      // Check if character has count higher than 1
      if (charTracker[key].count === 1) {
        nonRepeatedArray.push(charTracker[key]);
      }
    }
  }
  let firstNonRepeated;
  // Iterate over nonReapated array to find first non repeated value
  for (let i = 0; i < nonRepeatedArray.length; i++) {
    // If its first set to nonReapted store
    if (i === 0) {
      firstNonRepeated = nonRepeatedArray[i];
    } 
    // if it isn't first compares the orders
    if (nonRepeatedArray[i].order < firstNonRepeated.order) {
      firstNonRepeated = nonRepeatedArray[i];
    }
  }

  return string[firstNonRepeated.order];
};

console.log(firstNonRepeatedCharacter('ABA')); // => 'B'
console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'
