# is-badge [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Check if `url` is a badge.  Supports [`shields.io`][shields],
[`travis-ci`][travis-ci], [`david-dm`][david], [`nodei.co`][nodei],
[`inch-ci`][inch], [`fury.io`][fury], [`testling`][testling],
[`saucelabs`][sauce], [`coveralls`][coveralls], [`codecov`][codecov-ci],
and [`gitter`][gitter].

## Installation

[npm][]:

```bash
npm install is-badge
```

## Usage

```js
var isBadge = require('is-badge');

isBadge('https://img.shields.io/travis/joyent/node.svg'); // true
isBadge('http://example.com');  // false
isBadge(true); // [Error: is-badge expected string]
```

## API

### `isBadge(url)`

Check if `url` is a badge.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/is-badge.svg

[travis]: https://travis-ci.org/wooorm/is-badge

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/is-badge.svg

[codecov]: https://codecov.io/github/wooorm/is-badge

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[shields]: http://shields.io

[travis-ci]: https://docs.travis-ci.com/user/status-images/

[david]: https://david-dm.org

[nodei]: https://nodei.co

[inch]: https://inch-ci.org/help/badge

[fury]: http://badge.fury.io

[testling]: https://ci.testling.com/guide/quick_start#badge

[sauce]: https://wiki.saucelabs.com/display/DOCS/Using+Status+Badges+and+the+Browser+Matrix+Widget+to+Monitor+Test+Results

[coveralls]: https://coveralls.io

[codecov-ci]: https://codecov.io

[gitter]: https://gitter.im
