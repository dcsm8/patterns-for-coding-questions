/**
 * Smallest Window containing Substring (hard)
 *
 * Given a string and a pattern, find the smallest substring in the given string
 * which has all the characters of the given pattern.
 *
 * Input: String="aabdec", Pattern="abc"
 * Output: "abdec"
 * Explanation: The smallest substring having all characters of the pattern is "abdec"
 *
 * Input: String="abdabca", Pattern="abc"
 * Output: "abc"
 * Explanation: The smallest substring having all characters of the pattern is "abc".
 *
 * Input: String="adcad", Pattern="abc"
 * Output: ""
 * Explanation: No substring in the given string has all characters of the pattern.
 *
 */
const find_substring = function (str, k) {
  let windowStart = 0;
  let patternMap = {};
  let matched = 0;
  let firstChar = k[0];
  let lastChar = k[k.length - 1];
  let substring = "";

  for (let y = 0; y < k.length; y++) {
    const char = k[y];
    if (!(char in patternMap)) {
      patternMap[char] = 0;
    }
    patternMap[char] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in patternMap) {
      if (rightChar !== firstChar && rightChar !== lastChar) {
        if (patternMap[rightChar] > 0) {
          patternMap[rightChar] = 0;
          matched += 1;
        }
      }

      if (rightChar === firstChar) {
        matched = 1;
        windowStart = windowEnd;
        reset_pattern(patternMap);
      }

      if (rightChar === lastChar && matched === k.length - 1) {
        const tmpPattern = str.slice(windowStart, windowEnd + 1);
        if (substring) {
          substring =
            tmpPattern.length <= substring.length ? tmpPattern : substring;
        } else {
          substring = tmpPattern;
        }
        reset_pattern(patternMap);
      }
    }
  }

  return substring;
};

function reset_pattern(patternMap) {
  Object.keys(patternMap).forEach((key) => {
    patternMap[key] = 1;
  });
}

console.log(`Find subtring: ${find_substring("aabdecabdc", "abc")}`); // abdec
console.log(`Find subtring: ${find_substring("abdabca", "abc")}`); // abc
console.log(
  `Find subtring: ${find_substring("adcadbbbbbbbbbbbccccacccdbcd", "abcd")}`
); // ""
