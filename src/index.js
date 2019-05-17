const helpers = require('./utils/helpers');
const spellInteger = require('./spelling/integer');

const { isInteger } = isInteger;

function spellNumber(number) {
  if (isInteger(number)) {
    return spellInteger(number);
  } else {
    throw new Error('Onluq kəsrlər hal hazırda dəstəklənmir.');
  }
}

module.exports = spellNumber;
