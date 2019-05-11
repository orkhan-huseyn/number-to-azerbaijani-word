const utils = require('../utils/translations');

const digits = utils.digits;
const decimals = utils.decimals;

/**
 * Converts number into string in Azerbaijani
 * @param {number} number natural number
 * @param {boolean} spellZeroAtTheEnd
 * @returns {string} spelling of number in Azerbaijani
 */
function spellInteger(number, spellZeroAtTheEnd = true) {
  let spelling = '';

  if (number === 0 && spellZeroAtTheEnd) {
    return digits[0];
  }

  if (number >= 0 && number < 10) {
    spelling += number > 0 ? digits[number] : '';
  } else if (number >= 10 && number < 100) {
    const numberOfTens = parseInt(number / 10);
    const digitPoint = number % 10 > 0 ? digits[number % 10] : '';
    spelling += decimals[numberOfTens * 10] + ' ' + digitPoint;
  } else if (number >= 100 && number < 1000) {
  }

  return spelling;
}

module.exports = spellInteger;
