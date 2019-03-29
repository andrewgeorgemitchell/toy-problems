/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
 var deepEquals = function(obj1, obj2) {
  // Check Empty Object
  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
    return true;
  }
  
  // Check Mismatched Length
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  var counter = 0
  for (const key in obj1) {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      // If object call function again
      if (deepEquals(obj1[key], obj2[key])) {
          counter++
      }
    } else if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      counter ++
    } else {
      return false;
    }
  }
  if (counter === Object.keys(obj1).length) {
    return true;
  } else {
    return false;
  }
};

// Tests

console.log('True Tests')
console.log(deepEquals({},{}));
console.log(deepEquals({a: 5}, {a: 5}));
console.log('Nestsed Objects', deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log('Nestsed Empty Objects', deepEquals({a:1, b: {}},{a:1, b: {}})); // true


console.log('False Tests')
console.log(deepEquals({},{a: 5}));
console.log('Nestsed Objects', deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
console.log('Nestsed Objects Empty', deepEquals({a:1, b: {}},{a:1, b: {c:6}})); // false
