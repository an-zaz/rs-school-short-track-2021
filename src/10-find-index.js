/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, n) {
  let start = 0;
  let end = arr.length;
  while (true) {
    const center = Math.floor((end - start) / 2 + start);
    if (arr[center] > n) {
      end = center;
    } else if (arr[center] < n) {
      start = center + 1;
    } else {
      return center;
    }
  }
}

module.exports = findIndex;
