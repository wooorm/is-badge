# is-badge [![Build Status](https://img.shields.io/travis/wooorm/is-badge.svg?style=flat)](https://travis-ci.org/wooorm/is-badge) [![Coverage Status](https://img.shields.io/coveralls/wooorm/is-badge.svg?style=flat)](https://coveralls.io/r/wooorm/is-badge?branch=master)

Check if `url` is a badge. Supports [`shields.io`](http://shields.io),
[`travis-ci`](https://docs.travis-ci.com/user/status-images/),
[`david-dm`](https://david-dm.org), [`nodei.co`](https://nodei.co),
[`inch-ci`](https://inch-ci.org/help/badge), [`fury.io`](http://badge.fury.io),
[`testling`](https://ci.testling.com/guide/quick_start#badge),
[`saucelabs`](https://wiki.saucelabs.com/display/DOCS/Using+Status+Badges+and+the+Browser+Matrix+Widget+to+Monitor+Test+Results),
[`coveralls`](https://coveralls.io), and [`gitter`](https://gitter.im).

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install is-badge
```

**is-badge** is also available for
[duo](http://duojs.org/#getting-started), and as an AMD, CommonJS, and
globals module, [uncompressed and compressed](https://github.com/wooorm/is-badge/releases).

## Usage

```js
var isBadge = require('is-badge');

isBadge('https://img.shields.io/travis/joyent/node.svg'); // true
isBadge('http://example.com');  // false
isBadge(true); // [Error: is-badge expected string]
```

## API

### isBadge(url)

Check if `url` is a badge.

Parameters:

*   `url` (`string`) — May or may not be a badge.

Returns: `boolean` — Whether or not `url` is a badge.

Throws: `Error` — When `url` is not a string.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
