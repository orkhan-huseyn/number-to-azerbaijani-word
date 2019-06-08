# Number to Azerbaijani word [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/orkhan-huseyn/number-to-azerbaijani-word/blob/master/LICENSE) ![Travis build report](https://img.shields.io/travis/orkhan-huseyn/number-to-azerbaijani-word.svg) ![Codecov report](https://img.shields.io/codecov/c/github/orkhan-huseyn/number-to-azerbaijani-word.svg) ![Bundle siz](https://img.shields.io/bundlephobia/min/number-to-azerbaijani-word.svg)

## Installation

The library has been designed to convert any integer or double to its Azerbaijani description.
You can add it to your node project by writing:

`npm install number-to-azerbaijani-word --save`

## Usage

To use the library import it in your file and call `spellNumberInAz` function with number between 0 and 1 billion (inclusive).

```js
const numberSpelling = require('number-to-azerbaijani-word');

const { spellNumberInAz } = numberSpelling;

console.log(spellNumberInAz(0)); // output: 'sıfır'

console.log(spellNumberInAz(-738)); // output: 'mənfi yeddi yüz otuz səkkiz'

console.log(spellNumberInAz(990999)); // output: 'doqquz yüz doxsan min doqquz yüz doxsan doqquz'

console.log(spellNumberInAz(-1234567));
// output: 'mənfi bir milyon iki yüz otuz dörd min beş yüz altmış yeddi'

console.log(Number.MAX_SAFE_INTEGER);
// doqquz kvadrilyon yeddi trilyon yüz doxsan doqquz milyard iki yüz əlli dörd milyon yeddi yüz qırx min doqquz yüz doxsan bir
```

If you want to use it in the browser then ES5 bundled version is available in NPM CDN.
Simple, add following script to your HTML file and use it.

```html
<script src="https://unpkg.com/number-to-azerbaijani-word@3.0.2/dist/number-to-az-word.umd.min.js"></script>
<script>
  console.log(spellNumberInAz(66)); // output: 'altmış altı'

  console.log(spellNumberInAz(-31)); // output: 'mənfi otuz bir'
</script>
```

## Contribution

Please do not hesitate report issues, send pull requests about the code that you think is wrong or could be written better.
