'use strict';

/* eslint-env commonjs */

/*
 * Expressions.
 */

var EXPRESSIONS = [
    /^https?:\/\/img\.shields\.io/,
    /^https?:\/\/(?:(?:www|api|secure)\.)?travis-ci\.org\/.*\.(?:svg|png)(?:\?|$)/,
    /^https?:\/\/(?:www\.)?david-dm\.org(?:\/.+){2}\.(?:svg|png)/,
    /^https?:\/\/(?:www\.)?nodei\.co(?:\/.+){2}\.(?:svg|png)(?:\?|$)/,
    /^https?:\/\/inch-ci\.org(?:\/.+){3}\.(?:svg|png)(?:\?|$)/,
    /^https?:\/\/badge\.fury\.io(?:\/[^/]+){2}\.(?:svg|png)(?:\?|$)/,
    /^https?:\/\/ci\.testling\.com(?:\/[^/]+){2}\.(?:svg|png)(?:\?|$)/,
    /^https?:\/\/saucelabs\.com\/(?:buildstatus|browser-matrix)\//,
    /^https?:\/\/coveralls\.io\/.*\/badge\.(?:svg|png)(?:\?|$)/
];

/*
 * Constants.
 */

var length = EXPRESSIONS.length;

/**
 * Check if `url` is a badge.
 *
 * @example
 *  isBadge('https://img.shields.io/travis/joyent/node.svg');
 *  // true
 *
 *  isBadge('http://example.com');
 *  // false
 *
 *  isBadge(true);
 *  // [Error: is-badge expected string]
 *
 * @param {string} url - May or may not be a badge.
 * @return {boolean} - Whether or not `url` is a badge.
 * @throws {Error} - When `url` is not a string.
 */
function isBadge(url) {
    var index = -1;

    if (typeof url !== 'string') {
        throw new Error('is-badge expected string');
    }

    while (++index < length) {
        if (EXPRESSIONS[index].test(url)) {
            return true;
        }
    }

    return false;
}

module.exports = isBadge;
