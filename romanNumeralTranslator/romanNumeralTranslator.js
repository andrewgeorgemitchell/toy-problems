
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const convertNumeralToNumber = (char) => {
  return DIGIT_VALUES[char];
}

var translateRomanNumeral = function(romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return null
  }
  let results = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeralValue = convertNumeralToNumber(romanNumeral[i]);
    if (currentNumeralValue/10 === 1 || currentNumeralValue/100 === 1 || currentNumeralValue/1000 === 1 || currentNumeralValue/1 === 1) {
      const nextNumber = convertNumeralToNumber(romanNumeral[i + 1]);
      if (nextNumber > currentNumeralValue) {
        results += nextNumber - currentNumeralValue;
        i++
        continue;
      }
    }
    results += currentNumeralValue;
  }

  return results;

};

// Tests

console.log(translateRomanNumeral(''), ' === 16')

console.log(translateRomanNumeral('XVI'), ' === 16')

console.log(translateRomanNumeral('MXVI'), ' === 1016')

console.log(translateRomanNumeral('XIV'), ' === 14')

console.log(translateRomanNumeral('XCIX'), ' === 99')
