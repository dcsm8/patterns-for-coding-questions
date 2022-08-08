/**
 * Given an array of positive numbers and a positive number ‘k’,
 * find the maximum sum of any contiguous subarray of size ‘k’.
 *
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3]
 *
 */

function maxSubArrayOfSizeK(k, arr) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(windowSum, maxSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
}

console.log(
  `Maximum sum of subarray of size K: ${maxSubArrayOfSizeK(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
