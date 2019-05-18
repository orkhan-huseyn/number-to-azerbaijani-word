const helpers = require('./utils/helpers');
const spellInteger = require('./spelling/integer');

const { isInteger } = helpers;

function spellNumber(number) {
  if (isInteger(number)) {
    return spellInteger(number);
  } else {
    throw new Error('Onluq kəsrlər hal hazırda dəstəklənmir.');
  }
}

// if it is a browser environment we add it to global object
// so that client can use it
if (window) {
  window.spellNumber = spellNumber;
}

module.exports = spellNumber;
