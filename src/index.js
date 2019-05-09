var utils = require("./utils/translations");

var digits = utils.digits;
var decimals = utils.decimals;

/**
 * Converts number into string in Azerbaijani
 * @param {number} number natural number
 * @returns {string} spelling of number in Azerbaijani
 */
function spellInteger(number) {
  var spelling = "";

  if (number >= 0 && number < 10) {
    spelling += number > 0 ? digits[number] : "";
  } else if (number >= 10 && number < 100) {
    var numberOfTens = parseInt(number / 10);
    var digitPoint = number % 10 > 0 ? digits[number % 10] : "";
    spelling += decimals[numberOfTens * 10] + " " + digitPoint;
  }

  return spelling;
}

module.exports = helloWorld;
