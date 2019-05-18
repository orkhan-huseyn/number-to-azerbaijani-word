const helpers = require('./utils/helpers');
const spellInteger = require('./spelling/integer');
const spellFloat = require('./spelling/float');

const { isInteger } = helpers;

/**
 * Generalized spell number function
 * @param {number} number - any integer or floating point number
 * @returns {string} spelling in Azerbaijani
 */
function spellNumber(number) {
  // check if number is integer
  // or floating point number
  if (isInteger(number)) {
    return spellInteger(number);
  } else {
    return spellFloat(number);
  }
}

// if it is a browser environment we add it to global object
// so that client can use it
if (typeof window !== 'undefined') {
  window.spellNumber = spellNumber;
}

module.exports = spellNumber;
