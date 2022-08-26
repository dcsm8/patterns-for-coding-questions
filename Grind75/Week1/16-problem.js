/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const frequencyMap = {};
  const max = ransomNote.length;
  let counter = 0;

  for (let char of ransomNote) {
    if (!(char in frequencyMap)) {
      frequencyMap[char] = 0;
    }
    frequencyMap[char] += 1;
  }

  for (let char of magazine) {
    if (char in frequencyMap) {
      frequencyMap[char] -= 1;
      counter += 1;

      if (frequencyMap[char] === 0) {
        delete frequencyMap[char];
      }

      if (counter === max) {
        return true;
      }
    }
  }

  return false;
};

console.log(`logest palindrome: ${canConstruct("a", "b")}`);
console.log(`logest palindrome: ${canConstruct("aa", "ab")}`);
console.log(`logest palindrome: ${canConstruct("aa", "aab")}`);
