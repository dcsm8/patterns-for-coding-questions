/**
 * Problem Statement #
 * Given a sorted array, create a new array containing squares
 * of all the number of the input array in the sorted order.
 *
 * Example 1:
 *
 * Input: [-2, -1, 0, 2, 3]
 * Output: [0, 1, 4, 4, 9]
 *
 * Example 2:
 *
 * Input: [-3, -1, 0, 1, 2]
 * Output: [0 1 1 4 9]
 *
 */

const makeSquares = function (arr) {
  const n = arr.length;
  const squares = Array(n).fill(0);
  let left = 0;
  let right = n - 1;
  let index = n - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      squares[index] = leftSquare;
      left += 1;
    } else {
      squares[index] = rightSquare;
      right -= 1;
    }

    index -= 1;
  }

  return squares;
};

console.log(`Array squares: ${makeSquares([-2, -1, 0, 2, 3])}`);
console.log(`Array squares: ${makeSquares([-3, -1, 0, 1, 2])}`);
