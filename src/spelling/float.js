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
const spellInteger = require('./integer');
const translations = require('../utils/translations');

const { FRACTIONS, POINT } = translations;

function spellFloat(number) {
  const numberChunks = number.toString().split('.');
  const integerPart = parseInt(numberChunks[0], 10);
  const floatingPartLength = numberChunks[1].length;
  const floatingPart = parseInt(numberChunks[1], 10);

  const integerPartSpelling = spellInteger(integerPart);
  const floatingPartSpelling = spellInteger(floatingPart);

  const fraction = FRACTIONS[10 ** floatingPartLength];

  return `${integerPartSpelling} ${POINT} ${fraction} ${floatingPartSpelling}`;
}

module.exports = spellFloat;
