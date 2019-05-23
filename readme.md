# Number to Azerbaijani string [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/orkhan-huseyn/number-to-azerbaijani-string/blob/master/LICENSE)

**Package is still in development and has not been published to NPM**

## Installation

The library has been designed to convert any integer or double to its Azerbaijani description.
You can add it to your node project by writing:

`npm install number-to-azerbaijani-string --save`

If you want to use it in the browser then ES5 bundled version is available in `dist/` folder. It will only take `3.7 KB` of your JavaScript files and will expose `spellNumberInAz` function for global use.

## Usage

To use the library import it in your file and call `spellNumber` function with number between 0 and 1 billion (inclusive).

```
const spellNumberInAz = require('number-to-azerbaijani-string');

console.log(spellNumberInAz(0)); // will output: 'sıfır'

console.log(spellNumberInAz(-738)); // will output: 'mənfi yeddi yüz otuz səkkiz'

console.log(spellNumberInAz(990999)); // will output: 'doqquz yüz doxsan min doqquz yüz doxsan doqquz'

console.log(spellNumberInAz(-1234567)); // will output: 'mənfi bir milyon iki yüz otuz dörd min beş yüz altmış yeddi'

```

In the browser, function also will be added to `Number` prototype, so you can use it by calling `toAzString` method on any number;

```
let number = 883734182;
const PI = 3.14;

console.log(PI.toAzString()); //output: 'üç tam yüzdə on dörd'

console.log(number.toAzString()); // output: 'səkkiz yüz səksən üç milyon yeddi yüz otuz dörd min yüz səksən iki'

// or just call global function
console.log(spellNumberInAz(-55421)); //output: 'mənfi əlli beş min dörd yüz iyirmi bir'

```

## Contribution

Please do not hesitate report issues, send pull requests about the code that you think is wrong or could be written better.
