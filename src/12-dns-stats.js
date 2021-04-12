/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

const getKey = (arr, i, j) => `.${arr[i].slice(0, j + 1).join('.')}`;

function getDNSStats(domains) {
  const mapped = domains.sort().map((d) => d.split('.').reverse()).sort((a, b) => b.length - a.length);
  let count = 1;
  const resObj = {};
  if (!mapped.length) {
    return resObj;
  }
  for (let j = 0; j < mapped[0].length; j++) {
    for (let i = 0; i < mapped.length; i++) {
      if (mapped[i].length < j + 1) {
        break;
      }
      const key = getKey(mapped, i, j);
      if (i !== mapped.length - 1 && key === getKey(mapped, i + 1, j)) {
        count++;
      } else {
        resObj[key] = count;
        count = 1;
      }
    }
  }
  return resObj;
}

module.exports = getDNSStats;
