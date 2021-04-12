/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = `${n}`;
  for (let i = 0; i < str.length; i++) {
    if (+str[i] < +str[i + 1]) {
      str = str.substring(0, i) + str.substring(i + 1, str.length);
      return +str;
    }
  }
  return +str.substring(0, str.length - 1);
}

module.exports = deleteDigit;
