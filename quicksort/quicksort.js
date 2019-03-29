/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


const quicksort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const pivotIndex = Math.floor(array.length / 2);
  const pivotVal = array[pivotIndex];
  const firstArr = array.filter(value => value < pivotVal);
  const secondArr = array.filter(value => value > pivotVal);
  
  let sortedArray;
  if (firstArr.length > 1 || secondArr.length > 1) {
    sortedArray = [
      ...quicksort(firstArr),
      pivotVal,
      ...quicksort(secondArr),
    ]
  } else {
    sortedArray = [
      ...firstArr,
      pivotVal,
      ...secondArr,
    ]
  }
  
  return sortedArray
};



console.log(quicksort([1, 5, 7, 4, 2, 6, 3]));

console.log(quicksort([1, 5, 7, 4, 2, 10, 15, 34, 78, 6, 3]));

console.log(quicksort([1, 5, 10, 8, 23, 12, 7, 4, 2, 6, 15, 3]))