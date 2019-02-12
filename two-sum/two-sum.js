/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/submissions/
*/

const twoSum = (nums, target) => {
  const results = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (results.length > 0) {
      break;
    }
    for (let b = 0; b < nums.length; b += 1) {
      if (b !== i) {
        if (nums[i] + nums[b] === target) {
          results.push(i);
          results.push(b);
          break;
        }
      }
    }
  }
  return results;
};

// Tests

console.log(twoSum([2, 7, 11, 15], 9));
