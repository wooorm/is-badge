'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var isBadge = require('./');
var assert = require('assert');

/*
 * Tests.
 */

describe('isBadge(url)', function () {
    it('should fail when not given a string', function () {
        assert.throws(function () {
            isBadge(true);
        }, /Error: is-badge expected string/);
    });

    it('should work for travis', function () {
        assert.equal(isBadge(
            'https://travis-ci.org/wooorm/foo.svg?branch=1.1.1'
        ), true);

        assert.equal(isBadge(
            'https://travis-ci.org/wooorm/foo.svg'
        ), true);

        assert.equal(isBadge(
            'https://api.travis-ci.org/wooorm/foo.png?branch=1.1.0'
        ), true);

        assert.equal(isBadge(
            'https://travis-ci.org/wooorm/foo'
        ), false);
    });

    it('should work for shields', function () {
        assert.equal(isBadge(
            'https://img.shields.io/travis/joyent/node.svg'
        ), true);

        assert.equal(isBadge(
            'https://img.shields.io/teamcity/http/teamcity.jetbrains.com/s/' +
            'bt345.svg'
        ), true);

        assert.equal(isBadge(
            'http://img.shields.io/badge/unicorn-approved-ff69b4.svg'
        ), true);

        assert.equal(isBadge(
            'http://img.shields.io/badge/unicorn-approved-ff69b4.png' +
            '?label=foo'
        ), true);

        assert.equal(isBadge(
            'http://shields.io/logo.svg'
        ), false);
    });

    it('should work for david-dm', function () {
        assert.equal(isBadge(
            'https://david-dm.org/strongloop/express.svg?style=flat'
        ), true);

        assert.equal(isBadge(
            'https://david-dm.org/strongloop/express.svg?style=flat-square'
        ), true);

        assert.equal(isBadge(
            'https://david-dm.org'
        ), false);
    });

    it('should work for node-ico', function () {
        assert.equal(isBadge(
            'https://nodei.co/npm/peerflix.png?downloads=true'
        ), true);

        assert.equal(isBadge(
            'https://nodei.co/npm/after.png?downloads=true' +
            '&downloadRank=true&stars=true'
        ), true);

        assert.equal(isBadge(
            'https://nodei.co/nodeico-chrome-screenshot.png'
        ), false);
    });

    it('should work for inch-ci', function () {
        assert.equal(isBadge(
            'https://inch-ci.org/github/wooorm/foo.svg?branch=master'
        ), true);

        assert.equal(isBadge(
            'https://inch-ci.org/github/wooorm/foo.svg'
        ), true);

        assert.equal(isBadge(
            'https://inch-ci.org/github/wooorm/foo.png'
        ), true);

        assert.equal(isBadge(
            'https://inch-ci.org/github/wooorm/foo.svg?' +
            'branch=master&style=shields'
        ), true);
    });
});
