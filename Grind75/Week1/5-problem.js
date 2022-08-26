/**
 *
 * A phrase is a palindrome if,
 * after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters,
 * it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome,
 * or false otherwise.
 *
 */
var isAlphaNumeric = function (str) {
  return str.match(/^[a-z0-9]+$/i);
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const arrayLength = s.length;
  let left = 0;
  let right = arrayLength - 1;

  while (left <= right) {
    const leftChar = s[left].toLowerCase();
    const rightChar = s[right].toLowerCase();

    const isValidLeft = isAlphaNumeric(leftChar);
    const isValidRight = isAlphaNumeric(rightChar);

    if (isValidLeft && isValidRight) {
      if (leftChar === rightChar) {
        left += 1;
        right -= 1;
      } else {
        return false;
      }
    } else if (!isValidLeft) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return true;
};

console.log(`Is palindrome: ${isPalindrome("A man, a plan, a canal: Panama")}`);
console.log(`Is palindrome: ${isPalindrome("A luna ese anula")}`);
console.log(`Is palindrome: ${isPalindrome("A Mercedes, ese de crema.")}`);
console.log(`Is palindrome: ${isPalindrome("A mi loca Colimas")}`);
console.log(`Is palindrome: ${isPalindrome("A ti no, bonita")}`);
