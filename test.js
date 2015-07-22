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
            'https://secure.travis-ci.org/wooorm/foo.png'
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

    it('should work for badge.fury.io', function () {
        assert.equal(isBadge(
            'http://badge.fury.io/js/engine.io.svg'
        ), true);

        assert.equal(isBadge(
            'https://badge.fury.io/gh/substack%2Fnode-browserify.svg'
        ), true);

        assert.equal(isBadge(
            'https://badge.fury.io/gh/substack%2Fnode-browserify'
        ), false);

        assert.equal(isBadge(
            'https://badge.fury.io/gh/substack/node-browserify.svg'
        ), false);
    });

    it('should work for testling-ci', function () {
        assert.equal(isBadge(
            'https://ci.testling.com/substack/dnode.png'
        ), true);

        assert.equal(isBadge(
            'https://ci.testling.com/_/images/testling_mission_control.png'
        ), false);

        assert.equal(isBadge(
            'https://ci.testling.com/guide/tape'
        ), false);
    });

    it('should work for sauce-labs', function () {
        assert.equal(isBadge(
            'https://saucelabs.com/buildstatus/vuejs'
        ), true);

        assert.equal(isBadge(
            'https://saucelabs.com/browser-matrix/vuejs.svg'
        ), true);

        assert.equal(isBadge(
            'https://docs.saucelabs.com/images/sauce-labs.bbed5298.png'
        ), false);

        assert.equal(isBadge(
            'https://saucelabs.com/home/logo_eventbrite2x.png'
        ), false);
    });

    it('should work for coveralls', function () {
        assert.equal(isBadge(
            'https://coveralls.io/repos/jquery/esprima/badge.png'
        ), true);

        assert.equal(isBadge(
            'https://coveralls.io/repos/jquery/esprima/badge.svg'
        ), true);

        assert.equal(isBadge(
            'https://coveralls.io/repos/jquery/esprima/badge.svg?branch=master'
        ), true);

        assert.equal(isBadge(
            'https://coveralls.io/assets/home_bitbucket-9172913f63c2492acfd0b67d9f0ad404.png'
        ), false);

        assert.equal(isBadge(
            'https://coveralls.io/r/google/yapf'
        ), false);
    });
});
