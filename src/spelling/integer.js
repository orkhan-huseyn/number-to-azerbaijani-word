const translations = require('../utils/translations');

const digits = translations.digits;
const decimals = translations.decimals;

/**
 * Converts number into string in Azerbaijani
 * @param {number} number natural number
 * @param {boolean} spellZeroAtTheEnd
 * @returns {string} spelling of number in Azerbaijani
 */
function spellInteger(number, spellZeroAtTheEnd = true) {
  let spelling = '';
  var sign = number < 0 ? translations.NEGATIVE + ' ' : '';

  number = Math.abs(number);

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
    const numberOfHundreds = parseInt(number / 100);

    const numOfHundredsSpelling =
      numberOfHundreds > 1 ? spellInteger(numberOfHundreds) : '';

    const hundredsSpelling = numOfHundredsSpelling
      ? numOfHundredsSpelling + ' ' + translations.HUNDRED
      : translations.HUNDRED;

    const reminderTens = number - numberOfHundreds * 100;

    spelling += hundredsSpelling + ' ' + spellInteger(reminderTens);
  }

  return sign + spelling;
}

module.exports = spellInteger;
