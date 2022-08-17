/**
 * Given an array of positive numbers and a positive number ‘S’,
 * find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
 * Return 0, if no such subarray exists.
 *
 * Input: [2, 1, 5, 2, 3, 2], S=7
 * Output: 2
 * Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
 *
 */

function smallestSubArrayWithGivenSum(s, arr) {
  let minLength = Infinity;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
}

console.log(
  `Smallest subarray length: ${smallestSubArrayWithGivenSum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}`
);

console.log(
  `Smallest subarray length: ${smallestSubArrayWithGivenSum(
    7,
    [2, 1, 5, 2, 8]
  )}`
);

console.log(
  `Smallest subarray length: ${smallestSubArrayWithGivenSum(
    8,
    [3, 4, 1, 1, 6]
  )}`
);
