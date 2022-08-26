/**
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums
 *
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const current = nums[middle];

    if (current > target) {
      // ignore the right part from the array and the current index
      right = middle - 1;
    } else if (current < target) {
      // ignore the left part from the array and the current index
      left = middle + 1;
    } else {
      return middle;
    }
  }
  // return -1 if middle did never equal the target
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
