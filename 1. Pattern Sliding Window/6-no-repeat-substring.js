/**
 * Given a string, find the length of the longest substring which has no repeating characters.
 *
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring without any repeating characters is "abc".
 *
 *
 * Input: String="abbbb"
 * Output: 2
 * Explanation: The longest substring without any repeating characters is "ab".
 *
 *
 * Input: String="abccde"
 * Output: 3
 * Explanation: Longest substrings without any repeating characters are "abc" & "cde".
 *
 */

const non_repeat_substring = function (str) {
  let windowStart = 0;
  let maxLength = 0;
  let frequencyMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;

    let frequencyTotal = hashmapTotal(frequencyMap);

    while (frequencyTotal > Object.keys(frequencyMap).length) {
      const leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;

      if (frequencyMap[leftChar] === 0) {
        delete frequencyMap[leftChar];
      }

      windowStart++;
      frequencyTotal = hashmapTotal(frequencyMap);
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

const hashmapTotal = function (hashmap) {
  let sum = 0;

  for (const key in hashmap) {
    if (Object.hasOwnProperty.call(hashmap, key)) {
      const element = hashmap[key];
      sum += element;
    }
  }

  return sum;
};

console.log(
  `Length of the longest substring: ${non_repeat_substring("aabccbb")}`
);

console.log(
  `Length of the longest substring: ${non_repeat_substring("abbbb")}`
);

console.log(
  `Length of the longest substring: ${non_repeat_substring("abccde")}`
);
