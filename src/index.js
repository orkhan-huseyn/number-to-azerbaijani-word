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

const helpers = require('./utils/helpers');
const spellInteger = require('./spelling/integer');
const spellFloat = require('./spelling/float');

const { isInteger } = helpers;
// maximum value that we can spell for now
const MAX_SAFE_VALUE = 1e12;
/**
 * Generalized spell number function
 * @param {number} number - any integer or floating point number
 * @return {string} spelling in Azerbaijani
 */
const spellNumberInAz = number => {
  // make sure users don't exceed
  // max value that we support
  if (number > MAX_SAFE_VALUE) {
    throw Error('Üzr istəyirik! We do not spell numbers above one trillion.');
  }

  // check if number is integer
  // or floating point number
  if (isInteger(number)) {
    return spellInteger(number);
  }

  return spellFloat(number);
};

// if it is a browser environment we add it to global object
// so that client can use it
if (typeof window !== 'undefined') {
  window.spellNumberInAz = spellNumberInAz;
}

// if browser supports Number keyword
// then we add it directly to Number object's
// prototype, so it's accessible for any number
if (typeof Number !== 'undefined') {
  Number.prototype.toAzString = function toAzString() {
    return spellNumberInAz(this);
  };
}

module.exports = spellNumberInAz;
