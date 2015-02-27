Logical Array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a logical array.

A logical `array` is defined as an `array` consisting exclusively of `0s` and `1s`. The definition is purely conventional, but such `arrays` are useful when wanting to combine, e.g., boolean-like filtering with element-by-element `array` multiplication. Similar use cases are common in numerical computing [environments](http://www.mathworks.com/help/matlab/ref/logical.html). 


## Installation

``` bash
$ npm install validate.io-logical-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isLogicalArray = require( 'validate.io-logical-array' );
```

#### isLogicalArray( value )

Validates if a `value` is a logical `array`; i.e., an `array` consisting solely of `0s` and `1s`.

``` javascript
var arr = [ 1, 0, 0, 1, 1 ];

var bool = isLogicalArray( arr );
// returns true
```

__Note__: the method will return `false` for an empty `array`.


## Examples

``` javascript
var isLogicalArray = require( 'validate.io-logical-array' );

console.log( isLogicalArray( [1,0,0,1,1] ) );
// returns true

console.log( isLogicalArray( [] ) );
// returns false

console.log( isLogicalArray( [true,false] ) );
// returns false

console.log( isLogicalArray( [1,2,3] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-logical-array.svg
[npm-url]: https://npmjs.org/package/validate.io-logical-array

[travis-image]: http://img.shields.io/travis/validate-io/logical-array/master.svg
[travis-url]: https://travis-ci.org/validate-io/logical-array

[coveralls-image]: https://img.shields.io/coveralls/validate-io/logical-array/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/logical-array?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/logical-array.svg
[dependencies-url]: https://david-dm.org/validate-io/logical-array

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/logical-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/logical-array

[github-issues-image]: http://img.shields.io/github/issues/validate-io/logical-array.svg
[github-issues-url]: https://github.com/validate-io/logical-array/issues
