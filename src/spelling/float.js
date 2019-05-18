const spellInteger = require('./integer');
const translations = require('../utils/translations');

const { fractions, POINT } = translations;

function spellFloat(number) {
  const numberChunks = number.toString().split('.');
  const integerPart = parseInt(numberChunks[0]);
  const floatingPartLength = numberChunks[1].length;
  const floatingPart = parseInt(numberChunks[1]);

  const integerPartSpelling = spellInteger(integerPart);
  const floatingPartSpelling = spellInteger(floatingPart);

  const fraction = fractions[Math.pow(10, floatingPartLength)];

  return (
    integerPartSpelling +
    ' ' +
    POINT +
    ' ' +
    fraction +
    ' ' +
    floatingPartSpelling
  );
}

module.exports = spellFloat;
