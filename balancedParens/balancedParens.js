/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  // create counter variables
  let parenCounter = [];
  let curlyCounter = [];
  let bracketCounter = [];
  
  for (let i = 0; i < input.length; i++) {
    // Parens
    if (input[i] === '(') {
      parenCounter.push([1, i])
    } else if (input[i] === ')') {
      parenCounter.push([-1, i])
    }
    // curly
    if (input[i] === '{') {
      curlyCounter.push([1, i])
    } else if (input[i] === '}') {
      curlyCounter.push([-1, i])
    }
    // brackets
    if (input[i] === '[') {
      bracketCounter.push([1, i])
    } else if (input[i] === ']') {
      bracketCounter.push([-1, i])
    }
  }
  // debugger;

  let checker = (charArray) => {
    let sum = 0;
    let results = true;
    // debugger
    for (let i = 0; i < charArray.length; i++) {
      sum += charArray[i][0];
      if (sum < 0) {
        results = false;
        break
      }
    }
    return results;
  }

  let validated = checker(parenCounter);
  validated = checker(bracketCounter);
  validated = checker(curlyCounter);

  return validated;

};

console.log('balancedParens:', balancedParens('[](){}'))// true
console.log('balancedParens:', balancedParens('[({})]'))


//false
console.log('balancedParens:', balancedParens('[(]{)}'))


