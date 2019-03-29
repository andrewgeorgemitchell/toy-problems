/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // create new array that will keep track of matches
  let matchArr = [];
  // Fill Array with false values that will be changed to true upon checking later
  for (let i = 0; i < this.length; i++) {
    matchArr.push(false);  
  }

  // iterate over arr to check if values match values in input array
  for (let i = 0; i < arr.length; i++) {
    for (let b = 0; b < this.length; b++) {
      // If values match edit value in match array to true;
      if (arr[i] === this[b]) {
        matchArr[b] = true;
      }
    }
  }

  // Check everything in the match array and confirm if it is true;
  return matchArr.every((value) => value === true);
};


var a = ['commit','push']
console.log(a.isSubsetOf(['commit','rebase','push','blame']), + 'should equal true;');


var b = ['merge','reset','reset']
console.log(b.isSubsetOf(['reset','merge','add','commit']), + 'should equal true;');

var b = ['merge','reset','reset']
console.log(b.isSubsetOf(['add','commit']), + 'should equal false;');