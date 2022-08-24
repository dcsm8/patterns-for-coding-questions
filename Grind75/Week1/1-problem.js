/**
 *
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashmap = {};
  let num_indices = [];

  for (let x = 0; x < nums.length; x++) {
    const num = nums[x];
    const diff = target - num;

    if (diff in hashmap && hashmap[diff] !== x) {
      num_indices = [hashmap[diff], x];
      return num_indices;
    }

    hashmap[num] = x;
  }

  return num_indices;
};

console.log(`two sum: ${twoSum([2, 7, 11, 15], 9)}`);
console.log(`two sum: ${twoSum([3, 2, 4], 6)}`);
console.log(`two sum: ${twoSum([3, 3], 6)}`);
