/**
 * Given a string and a pattern, find out if the string
 * contains any permutation of the pattern.
 *
 * Permutation is defined as the re-arranging of the characters of the string.
 * For example, “abc” has the following six permutations:
 *
 * abc
 * acb
 * bac
 * bca
 * cab
 * cba
 *
 *
 * Input: String="oidbcaf", Pattern="abc"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern.
 *
 * Input: String="odicf", Pattern="dc"
 * Output: false
 * Explanation: No permutation of the pattern is present in the given string as a substring.
 *
 * Input: String="bcdxabcdy", Pattern="bcdyabcdx"
 * Output: true
 * Explanation: Both the string and the pattern are a permutation of each other.
 *
 * Input: String="aaacb", Pattern="abc"
 * Output: true
 * Explanation: The string contains "acb" which is a permutation of the given pattern.
 *
 */

const find_permutation = function (str, k) {
  let windowStart = 0;
  let patternMap = {};
  let maxLength = 0;

  for (let y = 0; y < k.length; y++) {
    const char = k[y];
    if (!(char in patternMap)) {
      patternMap[char] = 0;
    }
    patternMap[char] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (!(rightChar in patternMap)) {
      maxLength -= 1;

      if (maxLength < 0) {
        maxLength = 0;
      }

      windowStart += 1;
    } else {
      maxLength += 1;
    }

    if (maxLength > k.length - 1) {
      return true;
    }
  }

  return false;
};

console.log(`Find permutation: ${find_permutation("oidbcaf", "abc")}`);

console.log(`Find permutation: ${find_permutation("bcdxabcdy", "bcdyabcdx")}`);

console.log(`Find permutation: ${find_permutation("aaacb", "abc")}`);

console.log(`Find permutation: ${find_permutation("odicf", "dc")}`);
