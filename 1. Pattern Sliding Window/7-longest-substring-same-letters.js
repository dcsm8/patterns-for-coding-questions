/**
 * Given a string with lowercase letters only,
 * if you are allowed to replace no more than ‘k’ letters with any letter,
 * find the length of the longest substring having the same letters after replacement.
 *
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
 *
 * Input: String="abbcb", k=1
 * Output: 4
 * Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
 *
 * Input: String="abccde", k=1
 * Output: 3
 * Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
 *
 */

const length_of_longest_subtring = function (str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let frequencyMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const charRight = str[windowEnd];

    if (!(charRight in frequencyMap)) {
      frequencyMap[charRight] = 0;
    }
    frequencyMap[charRight] += 1;

    let charLeft = str[windowStart];
    let totalHashMap = hashmapTotal(frequencyMap, charLeft);

    while (totalHashMap > k) {
      frequencyMap[charLeft] -= 1;

      if (frequencyMap[charLeft] === 0) {
        delete frequencyMap[charLeft];
      }

      windowStart++;
      charLeft = str[windowStart];
      totalHashMap = hashmapTotal(frequencyMap, charLeft);
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

const hashmapTotal = function (hashmap, first) {
  let sum = 0;

  for (const key in hashmap) {
    if (key !== first) {
      sum += hashmap[key];
    }
  }

  return sum;
};

console.log(
  `Length of the longest substring: ${length_of_longest_subtring("aabccbb", 2)}`
); // 5

console.log(
  `Length of the longest substring: ${length_of_longest_subtring("abbcb", 1)}`
); // 4

console.log(
  `Length of the longest substring: ${length_of_longest_subtring("abccde", 1)}`
); // 3
