/**
 * String Anagrams (hard)
 *
 * Given a string and a pattern, find all anagrams of the pattern in the given string.
 * Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:
 *
 * abc
 * acb
 * bac
 * bca
 * cab
 * cba
 *
 */
const find_string_anagrams = function (str, k) {
  const result_indexes = [];
  let windowStart = 0;
  let patternMap = {};

  for (let y = 0; y < k.length; y++) {
    const char = k[y];
    if (!(char in patternMap)) {
      patternMap[char] = 0;
    }
    patternMap[char] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    patternMap[rightChar] -= 1;

    if (windowEnd - windowStart >= k.length - 1) {
      if (isAnagram(patternMap)) {
        result_indexes.push(windowStart);
      }

      const leftChar = str[windowStart];
      patternMap[leftChar] += 1;
      windowStart++;
    }
  }

  return result_indexes;
};

const isAnagram = function (patternMap) {
  return Object.keys(patternMap).every((key) => patternMap[key] === 0);
};

console.log(`Find string anagrams: ${find_string_anagrams("ppqp", "pq")}`); // [1, 2]
console.log(`Find string anagrams: ${find_string_anagrams("abbcabc", "abc")}`); // [2, 3, 4]
