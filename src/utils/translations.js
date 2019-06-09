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
export const DIGITS_AS_WORDS = [
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

export const TENTHS_AS_WORDS = {
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

export const HUNDREDS_PREFIX = {
  10: 'da',
  100: 'də',
  1000: 'də',
  1000000: 'da',
  1000000000: 'da',
  1000000000000: 'da',
  1000000000000000: 'da'
};

export const TEN_AS_WORD = 'on';
export const HUNDRED_AS_WORD = 'yüz';
export const THOUSAND_AS_WORD = 'min';
export const MILLION_AS_WORD = 'milyon';
export const BILLION_AS_WORD = 'milyard';
export const TRILLION_AS_WORD = 'trilyon';
export const QUADRILLION_AS_WORD = 'kvadrilyon';

export const HUNDREDS_AS_WORDS = {
  10: TEN_AS_WORD,
  100: HUNDRED_AS_WORD,
  1000: THOUSAND_AS_WORD,
  1000000: MILLION_AS_WORD,
  1000000000: BILLION_AS_WORD,
  1000000000000: TRILLION_AS_WORD,
  1000000000000000: QUADRILLION_AS_WORD
};

export const NEGATIVE_AS_WORD = 'mənfi';

export const POINT_AS_WORD = 'tam';
