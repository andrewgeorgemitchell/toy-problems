/*
Implement function ToLowerCase() that has a string parameter str,
and returns the same string in lowercase.

https://www.genuinecoder.com/wp-content/uploads/2012/07/asciifull.gif

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/

const toLowerCase = (str) => {
  const newStr = [];
  for (let i = 0; i < str.length; i += 1) {
    const charCode = str.charCodeAt(i);
    // Determines if it is uppercase letter on ASCII Table
    if (charCode <= 90 && charCode >= 65) {
      // 32 spaces is an ASCII Table Constant to move between letters
      const lowerCaseCharCode = charCode + 32;
      newStr.push(String.fromCharCode(lowerCaseCharCode));
    } else {
      newStr.push(str[i]);
    }
  }
  return newStr.join('');
};

console.log(toLowerCase('Hello') === 'hello');
