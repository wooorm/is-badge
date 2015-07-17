# is-badge [![Build Status](https://img.shields.io/travis/wooorm/is-badge.svg?style=flat)](https://travis-ci.org/wooorm/is-badge) [![Coverage Status](https://img.shields.io/coveralls/wooorm/is-badge.svg?style=flat)](https://coveralls.io/r/wooorm/is-badge?branch=master)

Check if `url` is a badge. Supports shields.io, travis-ci,
david-dm, nodei.co, and inch-ci.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install is-badge
```

**is-badge** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), [duo](http://duojs.org/#getting-started),
and for AMD, CommonJS, and globals ([uncompressed](is-badge.js) and
[compressed](is-badge.min.js)).

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

[MIT](LICENSE) @ [Titus Wormer](http://wooorm.com)
