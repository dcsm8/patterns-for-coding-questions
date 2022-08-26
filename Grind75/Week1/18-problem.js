/**
 * Longest Palindrome
 *
 * Given a string s which consists of lowercase or uppercase letters
 * return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 *
 * Input: s = "a"
 * Output: 1
 * Explanation: The longest palindrome that can be built is "a", whose length is 1.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const frequencyMap = {};
  let hasMid = false;
  let maxValue = 0;

  for (let char of s) {
    if (!(char in frequencyMap)) {
      frequencyMap[char] = 0;
    }
    frequencyMap[char] += 1;
  }

  for (let char of Object.keys(frequencyMap)) {
    if (frequencyMap[char] === 1 && !hasMid) {
      hasMid = true;
      maxValue += 1;
    }

    if (frequencyMap[char] % 2 === 0) {
      maxValue += frequencyMap[char];
    } else {
      maxValue += frequencyMap[char] - 1;

      if (!hasMid) {
        maxValue += 1;
        hasMid = true;
      }
    }
  }

  return maxValue;
};

// console.log(`logest palindrome: ${longestPalindrome("abccccdd")}`);
console.log(`logest palindrome: ${longestPalindrome("ccc")}`);
