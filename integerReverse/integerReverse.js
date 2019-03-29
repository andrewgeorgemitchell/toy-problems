/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // TODO: Implement this function!
  const newNumArr = [];
  let newNumber = number;

  const calcInts = (number) => {
    let counter = 0;
    let newNumber = number;
    while (newNumber > 1) {
      counter += 1;
      newNumber = newNumber / 10;
    }
    return Math.pow(10, counter - 1)
  }

  let places = calcInts(number);
  let invertedInt = 0;

  while (newNumber > 1) {
    const decNumber = newNumber / 10; // contains dec
    const roundedNum = Math.floor(newNumber / 10);
    const currentDigit = (decNumber - roundedNum) * 10 < 1 ? Math.round((decNumber - roundedNum) * 10) : Math.trunc((decNumber - roundedNum) * 10);
    invertedInt += currentDigit * places;
    places = places / 10;
    newNumber = newNumber / 10
  }

  return invertedInt;
}

console.log('reverseInteger:', reverseInteger(123456789))

console.log('reverseInteger:', reverseInteger(101))

console.log('reverseInteger:', reverseInteger(12347))

