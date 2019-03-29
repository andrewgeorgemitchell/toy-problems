/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */



var rotatedArraySearch = function (rotated, target) {
  // If at anypoint while searching through rotated Array
  // the number to the left is greater than the number to the right 
  // that index is the rotated Index
  var iterator = (currentIndex, prevousIndex) => {
    debugger;
    if(currentIndex >= rotated.length) {
      currentIndex = rotated.length - 1;
    }
    if (rotated[currentIndex] < target ) {
      return iterator(Math.floor((currentIndex+(rotated.length-1))/2), currentIndex);
    } else if (rotated[currentIndex] > target){
      return iterator(Math.floor((currentIndex+prevousIndex)/2), currentIndex)
    } else {
      return currentIndex;
    }
  }
  return iterator(Math.floor(rotated.length/2)-1);
};


console.log(rotatedArraySearch([0, 1, 2, 3], 2)) // 2

console.log(rotatedArraySearch([0, 1, 2, 3, 4, 5, 6, 7], 7))// 7

console.log(rotatedArraySearch([0, 1, 2, 3, 4, 5, 6, 7], 4))// 4

// console.log(rotatedArraySearch([0, 1, 2, 3], 100) === null)

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5)

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null)
