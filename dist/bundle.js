(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var helpers = require('./utils/helpers');

var spellInteger = require('./spelling/integer');

var isInteger = helpers.isInteger;

function spellNumber(number) {
  if (isInteger(number)) {
    return spellInteger(number);
  } else {
    throw new Error('Onluq kəsrlər hal hazırda dəstəklənmir.');
  }
}

if (window) {
  window.spellNumber = spellNumber;
}

module.exports = spellNumber;

},{"./spelling/integer":2,"./utils/helpers":3}],2:[function(require,module,exports){
"use strict";

var translations = require('../utils/translations');

var digits = translations.digits,
    decimals = translations.decimals; // create cache to store previously
// spelled numbers, so that we don't spell them again

var cache = {};
/**
 * Converts integer into string in Azerbaijani
 * @param {number} number natural number
 * @param {boolean} spellZeroAtTheEnd
 * @returns {string} spelling of number in Azerbaijani
 */

function spellIntegerMemoized(number) {
  var spellZeroAtTheEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  // if we have it in the cache
  // then don't bother to calculate it
  if (cache[number]) {
    return cache[number];
  } // define spelling


  var spelling = ''; // we get the sign of number first

  var sign = number < 0 ? translations.NEGATIVE + ' ' : ''; // then we make our number positive to evaluate it

  number = Math.abs(number); // optional parameter `spellZeroAtTheEnd`
  // so that we can optionally show and hide zero at the end
  // for example we don't want strings like `min sıfır`

  if (number === 0 && spellZeroAtTheEnd) {
    cache[number] = digits[0];
    return digits[0];
  }

  if (number >= 0 && number < 10) {
    // if number is between 1 (inclusive) and 10
    // then dimply get it from the map
    var spellingOfDigit = number > 0 ? digits[number] : ''; // cache the number

    cache[number] = spellingOfDigit; // and add it to our final spelling

    spelling += spellingOfDigit;
  } else if (number >= 10 && number < 100) {
    // if number is between 10 (inclusive) and 100
    // then we again need map since there is custom cases
    // between 10 and 100 like `qırx`, `doxsan` etc.
    var numberOfTens = parseInt(number / 10); // find digit after tens point and spell it

    var digitPoint = number % 10 > 0 ? digits[number % 10] : '';
    digitPoint = digitPoint ? ' ' + digitPoint : digitPoint; // find the spelling of tens value from the map

    var finalSpelling = decimals[numberOfTens * 10] + digitPoint; // cache the spelling

    cache[number] = finalSpelling; // add spelling to our final string

    spelling += finalSpelling;
  } else if (number >= 100 && number < 1000) {
    // if is between 100 and 1000 we don't have custom cases
    // we continue with normal flow after this point
    // fint number of hundreds in the number
    var numberOfHundreds = parseInt(number / 100); // spell number of hundreds in the number if it is more than 1
    // so we don't want to say: `bir yüz doxsan iki`

    var numOfHundredsSpelling = numberOfHundreds > 1 ? spellIntegerMemoized(numberOfHundreds) : ''; // to spell hundred, we get it from our predefined translations
    // so we say the word hundred in azerbaijani

    var hundredsSpelling = numOfHundredsSpelling ? numOfHundredsSpelling + ' ' + translations.HUNDRED : translations.HUNDRED; // we get the final spelling

    var _finalSpelling = hundredsSpelling + ' ' + spellIntegerMemoized(number % 100); // add it to the cache


    cache[number] = _finalSpelling; // and do what we're doing before

    spelling += _finalSpelling;
  } else if (number >= 1000 && number < 1000000) {
    // numbers between 1000 and 1000000
    // we do the same procedure
    // find number of thousands
    var numberOfThousands = parseInt(number / 1000); // we spell number of thousands
    // just like we did before with hundreds

    var numOfThousandsSpelling = numberOfThousands > 1 ? spellIntegerMemoized(numberOfThousands) : ''; // we say the word thousand in Azerbaijani

    var thousandsSpelling = numOfThousandsSpelling ? numOfThousandsSpelling + ' ' + translations.THOUSAND : translations.THOUSAND; // we get our final spelling

    var _finalSpelling2 = thousandsSpelling + ' ' + spellIntegerMemoized(number % 1000); // cache the result
    // cache[number] = finalSpelling;
    // and do the same


    spelling += _finalSpelling2;
  } // use the sign and eplling finally


  return sign + spelling;
}

module.exports = spellIntegerMemoized;

},{"../utils/translations":4}],3:[function(require,module,exports){
"use strict";

module.exports.isInteger = function isInteger(number) {
  return number === (number ^ 0);
};

},{}],4:[function(require,module,exports){
"use strict";

module.exports.digits = ['sıfır', 'bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz'];
module.exports.decimals = {
  10: 'on',
  20: 'iyirmi',
  30: 'otuz',
  40: 'qırx',
  50: 'əlli',
  60: 'altmış',
  70: 'yetmiş',
  80: 'səksən',
  90: 'doxsan'
};
module.exports.HUNDRED = 'yüz';
module.exports.THOUSAND = 'min';
module.exports.MILLION = 'milyon';
module.exports.BILLION = 'milyard';
module.exports.NEGATIVE = 'mənfi';
module.exports.OVER_TEN = 'onda';
module.exports.OVER_HUNDRED = 'yüzdə';
module.exports.OVER_THOUSAND = 'mində';
module.exports.OVER_MILLION = 'milyonda';
module.exports.OVER_BILLION = 'milyardda';

},{}]},{},[1]);
