'use strict';

var test = require('tape');
var isBadge = require('./');

test('isBadge(url)', function (t) {
  t.throws(
    function () {
      isBadge(true);
    },
    /Error: is-badge expected string/,
    'should fail when not given a string'
  );

  t.test('travis', function (st) {
    st.equal(
      isBadge('https://travis-ci.org/wooorm/foo.svg'),
      true,
      'ok: project'
    );

    st.equal(
      isBadge('https://secure.travis-ci.org/wooorm/foo.png'),
      true,
      'ok: secure'
    );

    st.equal(
      isBadge('https://api.travis-ci.org/wooorm/foo.png?branch=1.1.0'),
      true,
      'ok: api'
    );

    st.equal(
      isBadge('https://travis-ci.org/wooorm/foo.svg?branch=1.1.1'),
      true,
      'ok: branch'
    );

    st.equal(
      isBadge('https://travis-ci.org/wooorm/foo'),
      false,
      'not ok: w/o extension'
    );

    st.end();
  });

  t.test('shields.io', function (st) {
    st.equal(
      isBadge('https://img.shields.io/travis/joyent/node.svg'),
      true,
      'ok'
    );

    st.equal(
      isBadge('https://img.shields.io/teamcity/http/teamcity.jetbrains.com/s/bt345.svg'),
      true,
      'ok: extensive'
    );

    st.equal(
      isBadge('http://img.shields.io/badge/unicorn-approved-ff69b4.svg'),
      true,
      'ok: parameters'
    );

    st.equal(
      isBadge('http://img.shields.io/badge/unicorn-approved-ff69b4.svg?label=foo'),
      true,
      'ok: GET variabels'
    );

    st.equal(
      isBadge('http://shields.io/'),
      false,
      'not ok: w/o project'
    );

    st.equal(
      isBadge('http://shields.io/logo.svg'),
      false,
      'not ok: w/o service'
    );

    st.end();
  });

  t.test('david-dm', function (st) {
    st.equal(
      isBadge('https://david-dm.org/strongloop/express.svg?style=flat'),
      true,
      'ok: flat'
    );

    st.equal(
      isBadge('https://david-dm.org/strongloop/express.svg?style=flat-square'),
      true,
      'ok: flat-square'
    );

    st.equal(
      isBadge('https://david-dm.org/strongloop/express.svg?style=flat-square'),
      true,
      'not ok: w/o extension'
    );

    st.end();
  });

  t.test('node-ico', function (st) {
    st.equal(
      isBadge('https://nodei.co/npm/peerflix.png?downloads=true'),
      true,
      'ok: with downloads'
    );

    st.equal(
      isBadge('https://nodei.co/npm/after.png?downloads=true&downloadRank=true&stars=true'),
      true,
      'ok: w/ downloads, downloadRank, and stars'
    );

    st.equal(
      isBadge('https://nodei.co/nodeico-chrome-screenshot.png'),
      false,
      'not ok: w/o provider'
    );

    st.end();
  });

  t.test('inch-ci', function (st) {
    st.equal(
      isBadge('https://inch-ci.org/github/wooorm/foo.svg?branch=master'),
      true,
      'ok: w/ branch'
    );

    st.equal(
      isBadge('https://inch-ci.org/github/wooorm/foo.svg'),
      true,
      'ok: svg extension'
    );

    st.equal(
      isBadge('https://inch-ci.org/github/wooorm/foo.png'),
      true,
      'ok: png extension'
    );

    st.equal(
      isBadge('https://inch-ci.org/github/wooorm/foo.svg?branch=master&style=shields'),
      true,
      'ok: w/ branch and style'
    );

    st.equal(
      isBadge('https://inch-ci.org/github/wooorm/foo'),
      false,
      'not ok: w/o extension'
    );

    st.end();
  });

  t.test('fury.io', function (st) {
    st.equal(
      isBadge('http://badge.fury.io/js/engine.io.svg'),
      true,
      'ok'
    );

    st.equal(
      isBadge('https://badge.fury.io/gh/substack%2Fnode-browserify.svg'),
      true,
      'ok: w/ provider'
    );

    st.equal(
      isBadge('https://badge.fury.io'),
      false,
      'not ok: w/o project'
    );

    st.equal(
      isBadge('https://badge.fury.io/gh/substack%2Fnode-browserify'),
      false,
      'not ok: w/o extension'
    );

    st.end();
  });

  t.test('testling-ci', function (st) {
    st.equal(
      isBadge('https://ci.testling.com/substack/dnode.png'),
      true,
      'ok'
    );

    st.equal(
      isBadge('https://ci.testling.com/_/images/testling_mission_control.png'),
      false,
      'not ok: w/o project'
    );

    st.equal(
      isBadge('https://ci.testling.com/guide/tape'),
      false,
      'not ok: w/o extension'
    );

    st.end();
  });

  t.test('sauce-labs', function (st) {
    st.equal(
      isBadge('https://saucelabs.com/buildstatus/vuejs'),
      true,
      'ok'
    );

    st.equal(
      isBadge('https://saucelabs.com/browser-matrix/vuejs.svg'),
      true,
      'ok: w/ extension'
    );

    st.equal(
      isBadge('https://docs.saucelabs.com/images/sauce-labs.bbed5298.png'),
      false,
      'not ok: w/o project'
    );

    st.equal(
      isBadge('https://saucelabs.com/home/logo_eventbrite2x.png'),
      false,
      'not ok: w/o project (#2)'
    );

    st.end();
  });

  t.test('coveralls', function (st) {
    st.equal(
      isBadge('https://coveralls.io/repos/jquery/esprima/badge.png'),
      true,
      'ok: png'
    );

    st.equal(
      isBadge('https://coveralls.io/repos/jquery/esprima/badge.svg'),
      true,
      'ok: svg'
    );

    st.equal(
      isBadge('https://coveralls.io/repos/jquery/esprima/badge.svg?branch=master'),
      true,
      'ok: w/ branch'
    );

    st.equal(
      isBadge('https://coveralls.io/assets/home_bitbucket-9172913f63c2492acfd0b67d9f0ad404.png'),
      false,
      'not ok: w/o project'
    );

    st.equal(
      isBadge('https://coveralls.io/r/google/yapf'),
      false,
      'not ok: w/o extension'
    );

    st.end();
  });

  t.test('gitter', function (st) {
    st.equal(
      isBadge('https://badges.gitter.im/foo/bar.png'),
      true,
      'ok: png'
    );

    st.equal(
      isBadge('https://badges.gitter.im/foo/bar.svg'),
      true,
      'ok: svg'
    );

    st.equal(
      isBadge('https://badges.gitter.im/foo/bar'),
      false,
      'not ok: w/o extension'
    );

    st.equal(
      isBadge('https://badges.gitter.im/'),
      false,
      'not ok: w/o project'
    );

    st.end();
  });

  t.test('codecov', function (st) {
    st.equal(
      isBadge('https://codecov.io/gh/wooorm/afinn-111/branch/master/graph/badge.svg'),
      true,
      'ok: svg'
    );

    st.equal(
      isBadge('https://codecov.io/gh/wooorm/afinn-111/branch/master/graph/badge.png'),
      false,
      'not ok: png'
    );

    st.equal(
      isBadge('https://codecov.io/gh/wooorm/afinn-111/graph/badge.svg'),
      true,
      'ok: without branch'
    );

    st.equal(
      isBadge('https://codecov.io/gh/wooorm/afinn-111/badge.svg'),
      true,
      'ok: without `graph`'
    );

    st.equal(
      isBadge('https://codecov.io/gh/wooorm/badge.svg'),
      false,
      'not ok: without project'
    );

    st.end();
  });

  t.test('codeclimate', function (st) {
    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown.svg'),
      true,
      'ok: svg'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown.png'),
      true,
      'ok: png'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges/gpa.svg'),
      true,
      'ok: svg w/ gpa'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges/issue_count.svg'),
      true,
      'ok: svg w/ issue count'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges/coverage.svg'),
      true,
      'ok: svg w/ coverage'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges/gpa.svg'),
      true,
      'ok: png w/ gpa'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges/issue_count.svg'),
      true,
      'ok: png w/ issue count'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges/coverage.svg'),
      true,
      'ok: png w/ coverage'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges.svg'),
      false,
      'not ok: svg: badges w/o type'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges.png'),
      false,
      'not ok: png: badges w/o type'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown'),
      false,
      'not ok: w/o extension'
    );

    st.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges/coverage'),
      false,
      'not ok: type w/o extension'
    );

    st.end();
  });

  t.test('issuestats', function (st) {
    st.equal(
      isBadge('http://issuestats.com/github/twbs/bootstrap/badge/issue'),
      true,
      'ok: issues'
    );

    st.equal(
      isBadge('http://issuestats.com/github/twbs/bootstrap/badge/issue?style=flat'),
      true,
      'ok: issues w/ style'
    );

    st.equal(
      isBadge('http://issuestats.com/github/twbs/bootstrap/badge/issue?style=flat-square'),
      true,
      'ok: issues w/ other style'
    );

    st.equal(
      isBadge('http://issuestats.com/github/twbs/bootstrap/badge/pr'),
      true,
      'ok: PRs'
    );

    st.equal(
      isBadge('http://issuestats.com/github/twbs/bootstrap/badge/pr?style=flat'),
      true,
      'ok: PRs w/ style'
    );

    st.equal(
      isBadge('http://issuestats.com/github/microsoft/visualfsharp/badge/pr?style=flat-square'),
      true,
      'ok: PRs w/ other style'
    );

    st.end();
  });

  t.end();
});
