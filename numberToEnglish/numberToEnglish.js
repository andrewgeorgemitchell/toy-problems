/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

const calcPlaces = (number) => {
  const possiblePlaces = Object.keys(numbersToPlace);
  let remainder;
  let basePlace;
  for (let i = possiblePlaces.length - 1; i >= 0; i -= 1) {
    if (number / possiblePlaces[i] <= 999 && number / possiblePlaces[i] >= 1) {
       remainder = number / possiblePlaces[i];
       basePlace = possiblePlaces[i];
    }
  }
  return `${numbersToPlace[basePlace]}` 
}

const calcTotal = (number) => {
  const places = [];
  let newNumber = number;
  let counter = 0;
  while (newNumber > 1) {
    const currentDigit = Math.floor(newNumber % 10);
    if (counter === 0) {
      places.push(numbersToWords[currentDigit])
      newNumber = newNumber / 10;
      counter += 1;
    } else {
      const currentPower = Math.pow(10, counter);
      const roundedNum = (Math.floor(newNumber) % 10) * currentPower;
      let str = ``;
      if (numbersToWords[roundedNum]) {
        str += numbersToWords[roundedNum]
      } else {
        str += numbersToWords[currentDigit] + calcPlaces(roundedNum / currentDigit);
      }
      places.push(str);
      newNumber = newNumber / 10;
      counter += 1;
    }
  }
  return places;
}

Number.prototype.toEnglish = function () {
  
};

console.log(calcTotal(345256));

console.log(calcPlaces(100000));
