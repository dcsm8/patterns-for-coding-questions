/**
 * Given a string, find the length of the longest substring in it
 * with no more than K distinct characters.
 *
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2'
 * distinct characters is "araa".
 *
 */

function longest_substring_with_k_distinct(str, k) {
  let hashmap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const letter = str[windowEnd];

    if (hashmap.hasOwnProperty(letter)) {
      hashmap[letter] += 1;
    } else {
      hashmap[letter] = 1;
    }

    while (Object.keys(hashmap).length > k) {
      const leftChar = str[windowStart];

      hashmap[leftChar]--;

      if (hashmap[leftChar] === 0) {
        delete hashmap[leftChar];
      }

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
); // 4

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    1
  )}`
); // 2

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "cbbebi",
    3
  )}`
); // 5
