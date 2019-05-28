/**
 * @param {number} x
 * @return {number}
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

console.log(reverse(123) === 321);
