/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(originalNum) {
  if (originalNum === 0) {
    return `0/1`;
  }
  let number = originalNum;
  let isNeg = false;
  if (originalNum < 0) {
    number = originalNum * -1;
    isNeg = true;
  }
  // Solve Mixed fraction
  let solution = '';
  let solutionNotFound = true;
  let lastFraction = 1;
  while (solutionNotFound) {
    let counter = 1;
    while (counter/lastFraction <= number) {
      if (counter/lastFraction === number) {
        solutionNotFound = false;
        solution = isNeg ? `-${counter}/${lastFraction}` : `${counter}/${lastFraction}`;
      }
      counter += 1;
    }
    if (lastFraction > 10000) {
      const places = `${number}`.split('.')[1].length;
      const largeNumber = Math.pow(10, places);
      return `${Math.round(largeNumber * number)}/${largeNumber}`
    }
    lastFraction += 1;
  }
  return solution
};

// Zero

console.log(toFraction(0.0));

// Negatives

console.log(toFraction(-.5));
console.log(toFraction(-2/3));
console.log(toFraction(-1/20));
console.log(toFraction(-.1));

// Positives

console.log(toFraction(.5));
console.log(toFraction(2/3));
console.log(toFraction(1/20));
console.log(toFraction(.1));

// Mixed

console.log(toFraction(5/2));
console.log(toFraction(3/1));

// Ridiculous Fractions

console.log(toFraction(0.253213));
