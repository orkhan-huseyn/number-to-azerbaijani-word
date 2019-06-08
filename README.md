# Number to Azerbaijani word [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/orkhan-huseyn/number-to-azerbaijani-word/blob/master/LICENSE) ![Travis build report](https://img.shields.io/travis/orkhan-huseyn/number-to-azerbaijani-word.svg) ![Codecov report](https://img.shields.io/codecov/c/github/orkhan-huseyn/number-to-azerbaijani-word.svg) ![Bundle siz](https://img.shields.io/bundlephobia/min/number-to-azerbaijani-word.svg)

## Installation

The library has been designed to convert any integer or double to its Azerbaijani description.
You can add it to your node project by writing:

`npm install number-to-azerbaijani-word --save`

If you want to use it in the browser then ES5 bundled version is available in `dist/` folder. It will only take `3.7 KB` of your JavaScript files and will expose `spellNumberInAz` function for global use.

## Usage

To use the library import it in your file and call `spellNumberInAz` function with number between 0 and 1 billion (inclusive).

```js
const spellNumberInAz = require('number-to-azerbaijani-word');

console.log(spellNumberInAz(0)); // output: 'sıfır'

console.log(spellNumberInAz(-738)); // output: 'mənfi yeddi yüz otuz səkkiz'

console.log(spellNumberInAz(990999)); // output: 'doqquz yüz doxsan min doqquz yüz doxsan doqquz'

console.log(spellNumberInAz(-1234567));
// output: 'mənfi bir milyon iki yüz otuz dörd min beş yüz altmış yeddi'
```

## Contribution

Please do not hesitate report issues, send pull requests about the code that you think is wrong or could be written better.
