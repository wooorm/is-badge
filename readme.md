# is-badge

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if `url` is a badge.  Supports [`shields.io`][shields],
[`travis-ci`][travis-ci], [`david-dm`][david], [`nodei.co`][nodei],
[`inch-ci`][inch], [`fury.io`][fury], [`testling`][testling],
[`saucelabs`][sauce], [`coveralls`][coveralls], [`codecov`][codecov-ci],
[`issuestats`][issuestats], [`codeclimate`][codeclimate],
and [`gitter`][gitter].

## Installation

[npm][]:

```bash
npm install is-badge
```

## Usage

```js
var isBadge = require('is-badge')

isBadge('https://img.shields.io/travis/joyent/node.svg') // => true
isBadge('https://example.com') // => false
isBadge(true) // [Error: is-badge expected string]
```

## API

### `isBadge(url)`

Check if `url` is a badge.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/is-badge.svg

[build]: https://travis-ci.org/wooorm/is-badge

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/is-badge.svg

[coverage]: https://codecov.io/github/wooorm/is-badge

[downloads-badge]: https://img.shields.io/npm/dm/is-badge.svg

[downloads]: https://www.npmjs.com/package/is-badge

[size-badge]: https://img.shields.io/bundlephobia/minzip/is-badge.svg

[size]: https://bundlephobia.com/result?p=is-badge

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[shields]: https://shields.io

[travis-ci]: https://docs.travis-ci.com/user/status-images/

[david]: https://david-dm.org

[nodei]: https://nodei.co

[inch]: https://inch-ci.org/help/badge

[fury]: https://badge.fury.io

[testling]: https://ci.testling.com/guide/quick_start#badge

[sauce]: https://wiki.saucelabs.com/display/DOCS/Using+Status+Badges+and+the+Browser+Matrix+Widget+to+Monitor+Test+Results

[coveralls]: https://coveralls.io

[codecov-ci]: https://codecov.io

[issuestats]: http://issuestats.com

[codeclimate]: https://codeclimate.com

[gitter]: https://gitter.im
