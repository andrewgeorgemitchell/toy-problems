// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  const longerLength = str1.length >= str2.length ? str1.length : str2.length;
  let counter = 0;
  for (let i = 0; i < longerLength; i += 1) {
    if (str1[i] !== str2[i]) {
      if (typeof str1[i] !== 'string') {
        // String to short have to add
        str1 += str2[i];
        counter += 1;
      } else if (typeof str1[i] === 'string' && typeof str2[i] !== 'string') {
        // String to long have to remove
        const amountRemoved = str1.slice(i).length
        str1 = str1.slice(0, i);
        counter += amountRemoved;
      } else {
        // String same size replace
        const tmpStrBeg = str1.slice(0, i)
        const newLetter = str2[i];
        const tmpStrEnd = str1.slice(i + 1)
        str1 = tmpStrBeg + newLetter + tmpStrEnd;
        counter += 1;
      }
    }
  }
  return counter;
}

const editDistance2 = (str1, str2) => {
  const longerLength = str1.length >= str2.length ? str1.length : str2.length;
  const str1Obj = {};
  const str2Obj = {};
  for (let i = 0; i < longerLength; i += 1) {
    if (str1Obj.hasOwnProperty(str1[i]) && typeof str2[i] === 'string') {
      str1Obj[str1[i]] += 1;
    } else {
      str1Obj[str1[i]] = 1;
    }
    if (str2Obj.hasOwnProperty(str2[i]) && typeof str2[i] === 'string') {
      str2Obj[str2[i]] += 1;
    } else {
      str2Obj[str2[i]] = 1;
    }
  }
  let counter = 0;
  for (const key in str2Obj) {
    if (str2Obj.hasOwnProperty(key)) {
      if (!str1Obj.hasOwnProperty(key)) {
        str1Obj[key] = 0;
      }
      counter += str2Obj[key] - str1Obj[key];
      
    }
  }
  return counter;
}

console.log(editDistance2('hi', 'happy'))

console.log(editDistance2('happy', 'doggy'))

console.log(editDistance2('happy', 'hi'))

console.log(editDistance2('hello', 'rello'))