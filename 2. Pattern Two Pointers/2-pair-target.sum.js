/**
 * Problem Statement #
 * Given an array of sorted numbers and a target sum,
 * find a pair in the array whose sum is equal to the given target.
 *
 * Write a function to return the indices of the two numbers
 * (i.e. the pair) such that they add up to the given target.
 *
 * Input: [1, 2, 3, 4, 6], target=6
 * Output: [1, 3]
 * Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 *
 * Input: [2, 5, 9, 11], target=11
 * Output: [0, 2]
 * Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
 *
 */
const pairWithTargetSum = function (arr, targetSum) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum > targetSum) {
      right -= 1;
    } else if (currentSum < targetSum) {
      left += 1;
    } else {
      return [left, right];
    }
  }

  return [-1, -1];
};

console.log(`Pair with target sum: ${pairWithTargetSum([1, 2, 3, 4, 6], 6)}`);
console.log(`Pair with target sum: ${pairWithTargetSum([2, 5, 9, 11], 11)}`);
