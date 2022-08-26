/**
 * Maximum Subarray
 *
 * Given an integer array nums, find the contiguous subarray
 * (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Input: nums = [1]
 * Output: 1
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let currSum = -Infinity;

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    currSum = Math.max(0, currSum);
    currSum += num;
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

console.log(
  `maximum subarray: ${maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])} expected 6`
);
console.log(`maximum subarray: ${maxSubArray([1])} expected 1`);
console.log(`maximum subarray: ${maxSubArray([5, 4, -1, 7, 8])} expected: 23`); // 23
console.log(`maximum subarray: ${maxSubArray([-2, -1])} expected -1`); // -1
