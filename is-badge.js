(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.isBadge = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});