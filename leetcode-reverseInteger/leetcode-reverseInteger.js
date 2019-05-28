//
// Problem Definition:
//

/*

Given a 32-bit signed integer, reverse digits of an integer.
Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers
within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem,
assume that your function returns 0 when the reversed integer overflows.

*/

const reverse = (x) => {
  if (x === 0) {
    return x;
  }
  const digits = [];
  let currentNum = Math.abs(x);
  while (currentNum >= 1) {
    const nextDigit = currentNum % 10;
    digits.push(nextDigit);
    currentNum = Math.trunc(currentNum / 10);
  }
  const stringifiedDigits = digits.join('');
  if (stringifiedDigits <= (2 ** 31) * -1 || stringifiedDigits >= (2 ** 31) - 1) {
    return 0;
  } if (x < 0) {
    return parseInt(stringifiedDigits, 10) * -1;
  }
  return parseInt(stringifiedDigits, 10);
};

//
// Tests
//
console.log(reverse(123) === 321);
