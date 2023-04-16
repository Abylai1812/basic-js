const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  const stats = {};

  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    let curr = stats;

    for (const part of parts) {
      const key = `.${part}`;

      if (!curr[key]) {
        curr[key] = { count: 0 };
      }

      curr[key].count++;
      curr = curr[key];
    }
  }

  const result = {};

  function buildStats(node, prefix) {
    const nodePrefix = prefix + node;

    if (node.count) {
      result[nodePrefix] = node.count;
    }

    for (const key of Object.keys(node)) {
      if (key === 'count') {
        continue;
      }

      buildStats(node[key], nodePrefix);
    }
  }

  buildStats(stats, '');

  return result;
}


module.exports = {
  getDNSStats
};
