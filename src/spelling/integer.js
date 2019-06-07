/**
 * MIT License

Copyright (c) 2018 Orkhan Huseynli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
const translations = require('../utils/translations');

const {
  DIGITS,
  TENTHS,
  NEGATIVE,
  HUNDRED,
  THOUSAND,
  MILLION,
  BILLION,
  TRILLION
} = translations;

// create cache to store previously
// spelled numbers, so that we don't spell them again
const cache = {};
/**
 * Converts integer into string in Azerbaijani
 * @param {number} input any natural number
 * @param {boolean} spellZeroAtTheEnd whether include zero or not
 * @return {string} spelling of number in Azerbaijani
 */
const spellIntegerMemoized = (input, spellZeroAtTheEnd = true) => {
  // if we have it in the cache
  // then don't bother to calculate it
  if (cache[input]) {
    return cache[input];
  }

  // define spelling
  let spelling = '';
  // we get the sign of number first
  const sign = input < 0 ? `${NEGATIVE} ` : '';
  // then we make our number positive to evaluate it
  const number = Math.abs(input);

  // optional parameter `spellZeroAtTheEnd`
  // so that we can optionally show and hide zero at the end
  // for example we don't want strings like `min sıfır`
  if (input === 0 && spellZeroAtTheEnd) {
    const [zero] = DIGITS;
    cache[input] = zero;
    return zero;
  }

  if (number >= 0 && number < 10) {
    // if number is between 1 (inclusive) and 10
    // then dimply get it from the map
    const spellingOfDigit = number > 0 ? DIGITS[number] : '';
    // cache the number
    cache[number] = spellingOfDigit;
    // and add it to our final spelling
    spelling += spellingOfDigit;
  } else if (number >= 10 && number < 100) {
    // if number is between 10 (inclusive) and 100
    // then we again need map since there is custom cases
    // between 10 and 100 like `qırx`, `doxsan` etc.
    const numberOfTens = parseInt(number / 10, 10);
    // find digit after tens point and spell it
    let digitPoint = number % 10 > 0 ? DIGITS[number % 10] : '';
    digitPoint = digitPoint ? ` ${digitPoint}` : digitPoint;
    // find the spelling of tens value from the map
    const finalSpelling = TENTHS[numberOfTens * 10] + digitPoint;
    // cache the spelling
    cache[number] = finalSpelling;
    // add spelling to our final string
    spelling += finalSpelling;
  } else if (number >= 100 && number < 1000) {
    // if is between 100 and 1000 we don't have custom cases
    // we continue with normal flow after this point
    // fint number of hundreds in the number
    const numberOfHundreds = parseInt(number / 100, 10);
    const remainder = number % 100;
    // spell number of hundreds in the number if it is more than 1
    // so we don't want to say: `bir yüz doxsan iki`
    const numOfHundredsSpelling =
      numberOfHundreds > 1 ? spellIntegerMemoized(numberOfHundreds) : '';
    // to spell hundred, we get it from our predefined translations
    // so we say the word hundred in azerbaijani
    const hundredsSpelling = numOfHundredsSpelling
      ? `${numOfHundredsSpelling} ${HUNDRED}`
      : HUNDRED;
    // we get the final spelling
    const finalSpelling =
      remainder > 0
        ? `${hundredsSpelling} ${spellIntegerMemoized(remainder, false)}`
        : hundredsSpelling;
    // add it to the cache
    cache[number] = finalSpelling;
    // and do what we're doing before
    spelling += finalSpelling;
  } else if (number >= 1000 && number < 1e6) {
    // numbers between 1000 and 1 000 000
    // we do the same procedure
    // find number of thousands
    const numberOfThousands = parseInt(number / 1000, 10);
    const remainder = number % 1000;
    // we spell number of thousands
    // just like we did before with hundreds
    // seconds parameter `false` indicates that
    // we don't want to say 0 at the end, like `min sıfır`
    const numOfThousandsSpelling =
      numberOfThousands > 1
        ? spellIntegerMemoized(numberOfThousands, false)
        : '';
    // we say the word thousand in Azerbaijani
    const thousandsSpelling = numOfThousandsSpelling
      ? `${numOfThousandsSpelling} ${THOUSAND}`
      : THOUSAND;
    // we get our final spelling
    const finalSpelling =
      remainder > 0
        ? `${thousandsSpelling} ${spellIntegerMemoized(remainder, false)}`
        : thousandsSpelling;
    // cache the result
    cache[number] = finalSpelling;
    // and do the same
    spelling += finalSpelling;
  } else if (number >= 1e6 && number < 1e9) {
    // numbers between 1 000 000 and 1 000 000 000
    // we find the number of millions
    const numberOfMillions = parseInt(number / 1e6, 10);
    const remainder = number % 1e6;
    // then spell the number of millions
    // this time we need number one, so we want to say: 'bir milyon ...'
    const numOfMillionsSpelling =
      numberOfMillions > 0 ? spellIntegerMemoized(numberOfMillions, false) : '';
    // say the word million in Azerbaijani
    const millionSpelling = numOfMillionsSpelling
      ? `${numOfMillionsSpelling} ${MILLION}`
      : MILLION;
    // get the final spelling with remainings of million
    const finalSpelling =
      remainder > 0
        ? `${millionSpelling} ${spellIntegerMemoized(remainder, false)}`
        : millionSpelling;
    // cache the result
    cache[number] = finalSpelling;
    // add it to the spelling
    spelling += finalSpelling;
  } else if (number >= 1e9 && number < 1e12) {
    const numberOfBillions = parseInt(number / 1e9, 10);
    const remainder = number % 1e9;

    const numOfBillionsSpelling =
      numberOfBillions > 0 ? spellIntegerMemoized(numberOfBillions, false) : '';

    const billionSpelling = numOfBillionsSpelling
      ? `${numOfBillionsSpelling} ${BILLION}`
      : BILLION;
    // get the final spelling with remainings of million
    const finalSpelling =
      remainder > 0
        ? `${billionSpelling} ${spellIntegerMemoized(remainder, false)}`
        : billionSpelling;

    spelling += finalSpelling;
  } else if (number === 1e12) {
    const [, one] = DIGITS;
    spelling += `${one} ${TRILLION}`;
  }

  // use the sign and eplling finally
  return sign + spelling;
};

module.exports = spellIntegerMemoized;
