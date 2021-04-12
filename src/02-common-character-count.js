/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function makeObject(str) {
    const arr = str.split('');
    const obj = {};
    arr.forEach((letter) => {
      if (!obj[letter]) {
        obj[letter] = 1;
      } else {
        obj[letter]++;
      }
    });
    return obj;
  }
  const obj1 = makeObject(s1);
  const obj2 = makeObject(s2);
  const keys = Object.keys(obj1);
  return keys.reduce((sum, item) => sum + Math.min(obj1[item], obj2[item] || 0), 0);
}

module.exports = getCommonCharacterCount;
