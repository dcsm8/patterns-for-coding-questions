/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
 * find the length of the longest contiguous subarray having all 1s.
 *
 *
 * Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
 * Output: 6
 * Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
 *
 * Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
 * Output: 9
 * Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
 *
 */

const length_of_longest_subtring = function (str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let maxRepeatCount = 0;
  let frequencyMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const charRight = str[windowEnd];

    if (!(charRight in frequencyMap)) {
      frequencyMap[charRight] = 0;
    }
    frequencyMap[charRight] += 1;

    maxRepeatCount = Math.max(maxRepeatCount, frequencyMap[charRight]);

    if (windowEnd - windowStart + 1 - maxRepeatCount > k) {
      let charLeft = str[windowStart];
      frequencyMap[charLeft] -= 1;
      windowStart += 1;
    }

    if (frequencyMap[1] > frequencyMap[0]) {
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  }

  return maxLength;
};

console.log(
  `Length of the longest substring: ${length_of_longest_subtring(
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    2
  )}`
);

console.log(
  `Length of the longest substring: ${length_of_longest_subtring(
    [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
    3
  )}`
);
