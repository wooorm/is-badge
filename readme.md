# is-badge

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if `url` is a badge.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`isBadge(url)`](#isbadgeurl)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This is a tiny package that checks if a given url points to a badge.

## When should I use this?

You can use this package for example to filter out badges.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install is-badge
```

In Deno with [`esm.sh`][esmsh]:

```js
import {isBadge} from 'https://esm.sh/is-badge@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {isBadge} from 'https://esm.sh/is-badge@2?bundle'
</script>
```

## Use

```js
import {isBadge} from 'is-badge'

isBadge('https://img.shields.io/travis/joyent/node.svg') // => true
isBadge('https://example.com') // => false
```

## API

This package exports the identifier `isBadge`.
There is no default export.

### `isBadge(url)`

Check if `url` is a badge.

## Data

This project supports:

*   [x] [`codeclimate`][codeclimate]
*   [x] [`codecov`][codecov-ci]
*   [x] [`coveralls`][coveralls]
*   [x] [`david-dm`][david]
*   [x] [`fury.io`][fury]
*   [x] [`github.com` workflows][github]
*   [x] [`gitter`][gitter]
*   [x] [`inch-ci`][inch]
*   [x] [`issuestats`][issuestats]
*   [x] [`nodei.co`][nodei]
*   [x] [`saucelabs`][sauce]
*   [x] [`shields.io`][shields]
*   [x] [`testling`][testling]
*   [x] [`travis-ci`][travis-ci]
*   [x] `opencollective`

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/is-badge/workflows/main/badge.svg

[build]: https://github.com/wooorm/is-badge/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/is-badge.svg

[coverage]: https://codecov.io/github/wooorm/is-badge

[downloads-badge]: https://img.shields.io/npm/dm/is-badge.svg

[downloads]: https://www.npmjs.com/package/is-badge

[size-badge]: https://img.shields.io/bundlephobia/minzip/is-badge.svg

[size]: https://bundlephobia.com/result?p=is-badge

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

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

[issuestats]: http://issuestats.com

[nodei]: https://nodei.co

[sauce]: https://wiki.saucelabs.com/display/DOCS/Using+Status+Badges+and+the+Browser+Matrix+Widget+to+Monitor+Test+Results

[shields]: https://shields.io

[testling]: https://ci.testling.com/guide/quick_start#badge

[travis-ci]: https://docs.travis-ci.com/user/status-images/
