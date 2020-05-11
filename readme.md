# is-badge

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if `url` is a badge.

Supports:

*   [x] [`codeclimate`][codeclimate]
*   [x] [`codecov`][codecov-ci]
*   [x] [`coveralls`][coveralls]
*   [x] [`david-dm`][david]
*   [x] [`fury.io`][fury]
*   [x] [`github.com` workflows][github]
*   [x] [`gitter`][gitter]
*   [x] [`inch-ci`][inch]
*   [x] [`nodei.co`][nodei]
*   [x] [`saucelabs`][sauce]
*   [x] [`shields.io`][shields]
*   [x] [`testling`][testling]
*   [x] [`travis-ci`][travis-ci]

## Install

[npm][]:

```sh
npm install is-badge
```

## Use

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

[codeclimate]: https://codeclimate.com

[codecov-ci]: https://codecov.io

[coveralls]: https://coveralls.io

[david]: https://david-dm.org

[fury]: https://badge.fury.io

[github]: https://github.com

[gitter]: https://gitter.im

[inch]: https://inch-ci.org/help/badge

[nodei]: https://nodei.co

[sauce]: https://wiki.saucelabs.com/display/DOCS/Using+Status+Badges+and+the+Browser+Matrix+Widget+to+Monitor+Test+Results

[shields]: https://shields.io

[testling]: https://ci.testling.com/guide/quick_start#badge

[travis-ci]: https://docs.travis-ci.com/user/status-images/
