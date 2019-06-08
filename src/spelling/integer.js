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
import {
  DIGITS_AS_WORDS,
  TENTHS_AS_WORDS,
  NEGATIVE_AS_WORD,
  HUNDRED_AS_WORD,
  THOUSAND_AS_WORD,
  MILLION_AS_WORD,
  BILLION_AS_WORD,
  TRILLION_AS_WORD,
  QUADRILLION_AS_WORD
} from '../utils/translations';

import {
  MAX_SAFE_VALUE,
  ZERO,
  TEN,
  HUNDRED,
  THOUSAND,
  MILLION,
  BILLION,
  TRILLION,
  QUADRILLION
} from '../utils/helpers';

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
  const sign = input < 0 ? `${NEGATIVE_AS_WORD} ` : '';
  // then we make our number positive to evaluate it
  const number = Math.abs(input);

  // optional parameter `spellZeroAtTheEnd`
  // so that we can optionally show and hide zero at the end
  // for example we don't want strings like `min sıfır`
  if (input === ZERO && spellZeroAtTheEnd) {
    const [zero] = DIGITS_AS_WORDS;
    cache[input] = zero;
    return zero;
  }

  if (number >= ZERO && number < TEN) {
    // if number is between 1 (inclusive) and 10
    // then dimply get it from the map
    const spellingOfDigit = number > 0 ? DIGITS_AS_WORDS[number] : '';
    // cache the number
    cache[number] = spellingOfDigit;
    // and add it to our final spelling
    spelling += spellingOfDigit;
  } else if (number >= TEN && number < HUNDRED) {
    // if number is between 10 (inclusive) and 100
    // then we again need map since there is custom cases
    // between 10 and 100 like `qırx`, `doxsan` etc.
    const numberOfTens = parseInt(number / TEN, 10);
    // find digit after tens point and spell it
    let digitPoint = number % TEN > 0 ? DIGITS_AS_WORDS[number % TEN] : '';
    digitPoint = digitPoint ? ` ${digitPoint}` : digitPoint;
    // find the spelling of tens value from the map
    const finalSpelling = TENTHS_AS_WORDS[numberOfTens * TEN] + digitPoint;
    // cache the spelling
    cache[number] = finalSpelling;
    // add spelling to our final string
    spelling += finalSpelling;
  } else if (number >= HUNDRED && number < THOUSAND) {
    // if is between 100 and 1000 we don't have custom cases
    // we continue with normal flow after this point
    // fint number of hundreds in the number
    const numberOfHundreds = parseInt(number / HUNDRED, 10);
    const remainder = number % HUNDRED;
    // spell number of hundreds in the number if it is more than 1
    // so we don't want to say: `bir yüz doxsan iki`
    const numOfHundredsSpelling =
      numberOfHundreds > 1 ? spellIntegerMemoized(numberOfHundreds) : '';
    // to spell hundred, we get it from our predefined translations
    // so we say the word hundred in azerbaijani
    const hundredsSpelling = numOfHundredsSpelling
      ? `${numOfHundredsSpelling} ${HUNDRED_AS_WORD}`
      : HUNDRED_AS_WORD;
    // we get the final spelling
    const finalSpelling =
      remainder > 0
        ? `${hundredsSpelling} ${spellIntegerMemoized(remainder, false)}`
        : hundredsSpelling;
    // add it to the cache
    cache[number] = finalSpelling;
    // and do what we're doing before
    spelling += finalSpelling;
  } else if (number >= THOUSAND && number < MILLION) {
    // numbers between 1000 and 1 000 000
    // we do the same procedure
    // find number of thousands
    const numberOfThousands = parseInt(number / THOUSAND, 10);
    const remainder = number % THOUSAND;
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
      ? `${numOfThousandsSpelling} ${THOUSAND_AS_WORD}`
      : THOUSAND_AS_WORD;
    // we get our final spelling
    const finalSpelling =
      remainder > 0
        ? `${thousandsSpelling} ${spellIntegerMemoized(remainder, false)}`
        : thousandsSpelling;
    // cache the result
    cache[number] = finalSpelling;
    // and do the same
    spelling += finalSpelling;
  } else if (number >= MILLION && number < BILLION) {
    // numbers between 1 000 000 and 1 000 000 000
    // we find the number of millions
    const numberOfMillions = parseInt(number / MILLION, 10);
    const remainder = number % MILLION;
    // then spell the number of millions
    // this time we need number one, so we want to say: 'bir milyon ...'
    const numOfMillionsSpelling =
      numberOfMillions > 0 ? spellIntegerMemoized(numberOfMillions, false) : '';
    // say the word million in Azerbaijani
    const millionSpelling = numOfMillionsSpelling
      ? `${numOfMillionsSpelling} ${MILLION_AS_WORD}`
      : MILLION_AS_WORD;
    // get the final spelling with remainings of million
    const finalSpelling =
      remainder > 0
        ? `${millionSpelling} ${spellIntegerMemoized(remainder, false)}`
        : millionSpelling;
    // cache the result
    cache[number] = finalSpelling;
    // add it to the spelling
    spelling += finalSpelling;
  } else if (number >= BILLION && number < TRILLION) {
    const numberOfBillions = parseInt(number / BILLION, 10);
    const remainder = number % BILLION;

    const numOfBillionsSpelling =
      numberOfBillions > 0 ? spellIntegerMemoized(numberOfBillions, false) : '';

    const billionSpelling = numOfBillionsSpelling
      ? `${numOfBillionsSpelling} ${BILLION_AS_WORD}`
      : BILLION_AS_WORD;
    // get the final spelling with remainings of million
    const finalSpelling =
      remainder > 0
        ? `${billionSpelling} ${spellIntegerMemoized(remainder, false)}`
        : billionSpelling;

    spelling += finalSpelling;
  } else if (number >= TRILLION && number < QUADRILLION) {
    const numberOfTrillions = parseInt(number / TRILLION, 10);
    const remainder = number % TRILLION;

    const numberOfTrillionsSpelling =
      numberOfTrillions > 0
        ? spellIntegerMemoized(numberOfTrillions, false)
        : '';

    const trillionSpelling = numberOfTrillionsSpelling
      ? `${numberOfTrillionsSpelling} ${TRILLION_AS_WORD}`
      : TRILLION_AS_WORD;
    // get the final spelling with remainings of quadrillion
    const finalSpelling =
      remainder > 0
        ? `${trillionSpelling} ${spellIntegerMemoized(remainder, false)}`
        : trillionSpelling;

    spelling += finalSpelling;
  } else if (number >= QUADRILLION && number <= MAX_SAFE_VALUE) {
    const numberOfQuadrillions = parseInt(number / QUADRILLION, 10);
    const remainder = number % QUADRILLION;

    const numberOfQuadrillionsSpelling =
      numberOfQuadrillions > 0
        ? spellIntegerMemoized(numberOfQuadrillions, false)
        : '';

    const quadrillionSpelling = numberOfQuadrillionsSpelling
      ? `${numberOfQuadrillionsSpelling} ${QUADRILLION_AS_WORD}`
      : QUADRILLION_AS_WORD;
    // get the final spelling with remainings of quadrillion
    const finalSpelling =
      remainder > 0
        ? `${quadrillionSpelling} ${spellIntegerMemoized(remainder, false)}`
        : quadrillionSpelling;

    spelling += finalSpelling;
  }

  // use the sign and eplling finally
  return sign + spelling;
};

export default spellIntegerMemoized;
