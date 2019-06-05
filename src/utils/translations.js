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
const DIGITS = [
  'sıfır',
  'bir',
  'iki',
  'üç',
  'dörd',
  'beş',
  'altı',
  'yeddi',
  'səkkiz',
  'doqquz'
];

const MULTIPLES_OF_TEN = {
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

const FRACTIONS = {
  10: 'onda',
  100: 'yüzdə',
  1000: 'mində',
  10000: 'on mində',
  100000: 'yüz mində',
  1000000: 'milyonda',
  1000000000: 'milyardda',
  1000000000000: 'trilyonda'
};

const HUNDRED = 'yüz';
const THOUSAND = 'min';
const MILLION = 'milyon';
const BILLION = 'milyard';
const TRILLION = 'trilyon';

const DECIMALS = {
  100: HUNDRED,
  1000: THOUSAND,
  1000000: MILLION,
  1000000000: BILLION,
  1000000000000: TRILLION
};

const NEGATIVE = 'mənfi';

const POINT = 'tam';

module.exports = {
  DIGITS,
  MULTIPLES_OF_TEN,
  DECIMALS,
  FRACTIONS,
  HUNDRED,
  THOUSAND,
  MILLION,
  BILLION,
  TRILLION,
  NEGATIVE,
  POINT
};
