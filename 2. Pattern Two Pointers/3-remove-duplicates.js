/**
 * Given an array of sorted numbers, remove all duplicates from it.
 * You should not use any extra space; after removing the duplicates
 * in-place return the new length of the array.
 *
 * Input: [2, 3, 3, 3, 6, 9, 9]
 * Output: 4
 * Explanation: The first four elements after removing the duplicates
 * will be [2, 3, 6, 9].
 *
 * Input: [2, 2, 2, 11]
 * Output: 2
 * Explanation: The first two elements after removing the duplicates
 * will be [2, 11].
 */

const removeDuplicates = function (arr) {
  let left = 1;
  let right = 1;

  while (right < arr.length) {
    if (arr[left - 1] !== arr[right]) {
      arr[left] = arr[right];
      left += 1;
    }
    right += 1;
  }

  return left;
};

console.log(`Array length: ${removeDuplicates([2, 3, 3, 3, 6, 9, 9])}`);
