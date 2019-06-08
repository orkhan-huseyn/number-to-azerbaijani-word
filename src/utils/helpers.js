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

/**
 * Checks if number is integer or not
 * @param {number} number arbitrary number
 * @return {boolean}
 */
export const isInteger = number => {
  return number === parseInt(number, 10);
};

// maximum value that we can spell for now
export const MAX_SAFE_VALUE = 9007199254740991;

export const ZERO = 0;
export const TEN = 10;
export const HUNDRED = 100;
export const THOUSAND = 10000;
export const MILLION = 1000000;
export const BILLION = 1000000000;
export const TRILLION = 1000000000000;
export const QUADRILLION = 1000000000000000;
