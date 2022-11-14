import assert from 'node:assert/strict'
import test from 'node:test'
import {isBadge} from './index.js'

test('isBadge(url)', async function (t) {
  assert.throws(
    () => {
      // @ts-ignore runtime
      isBadge(true)
    },
    /Error: is-badge expected string/,
    'should fail when not given a string'
  )

  await t.test('travis', () => {
    assert.equal(
      isBadge('https://travis-ci.org/wooorm/example.svg'),
      true,
      'ok: project'
    )

    assert.equal(
      isBadge('https://secure.travis-ci.org/wooorm/example.png'),
      true,
      'ok: secure'
    )

    assert.equal(
      isBadge('https://api.travis-ci.org/wooorm/example.png?branch=1.1.0'),
      true,
      'ok: api'
    )

    assert.equal(
      isBadge('https://travis-ci.org/wooorm/example.svg?branch=1.1.1'),
      true,
      'ok: branch'
    )

    assert.equal(
      isBadge('https://travis-ci.org/wooorm/example'),
      false,
      'not ok: w/o extension'
    )
  })

  await t.test('shields.io', () => {
    assert.equal(
      isBadge('https://img.shields.io/travis/joyent/node.svg'),
      true,
      'ok'
    )

    assert.equal(
      isBadge(
        'https://img.shields.io/teamcity/http/teamcity.jetbrains.com/s/bt345.svg'
      ),
      true,
      'ok: extensive'
    )

    assert.equal(
      isBadge('http://img.shields.io/badge/unicorn-approved-ff69b4.svg'),
      true,
      'ok: parameters'
    )

    assert.equal(
      isBadge(
        'http://img.shields.io/badge/unicorn-approved-ff69b4.svg?label=foo'
      ),
      true,
      'ok: GET variabels'
    )

    assert.equal(isBadge('http://shields.io/'), false, 'not ok: w/o project')

    assert.equal(
      isBadge('http://shields.io/logo.svg'),
      false,
      'not ok: w/o service'
    )
  })

  await t.test('david-dm', () => {
    assert.equal(
      isBadge('https://david-dm.org/strongloop/express.svg?style=flat'),
      true,
      'ok: flat'
    )

    assert.equal(
      isBadge('https://david-dm.org/strongloop/express.svg?style=flat-square'),
      true,
      'ok: flat-square'
    )

    assert.equal(
      isBadge('https://david-dm.org/strongloop/express.svg?style=flat-square'),
      true,
      'not ok: w/o extension'
    )
  })

  await t.test('node-ico', () => {
    assert.equal(
      isBadge('https://nodei.co/npm/peerflix.png?downloads=true'),
      true,
      'ok: with downloads'
    )

    assert.equal(
      isBadge(
        'https://nodei.co/npm/after.png?downloads=true&downloadRank=true&stars=true'
      ),
      true,
      'ok: w/ downloads, downloadRank, and stars'
    )

    assert.equal(
      isBadge('https://nodei.co/nodeico-chrome-screenshot.png'),
      false,
      'not ok: w/o provider'
    )
  })

  await t.test('inch-ci', () => {
    assert.equal(
      isBadge('https://inch-ci.org/github/wooorm/example.svg?branch=master'),
      true,
      'ok: w/ branch'
    )

    assert.equal(
      isBadge('https://inch-ci.org/github/wooorm/example.svg'),
      true,
      'ok: svg extension'
    )

    assert.equal(
      isBadge('https://inch-ci.org/github/wooorm/example.png'),
      true,
      'ok: png extension'
    )

    assert.equal(
      isBadge(
        'https://inch-ci.org/github/wooorm/example.svg?branch=master&style=shields'
      ),
      true,
      'ok: w/ branch and style'
    )

    assert.equal(
      isBadge('https://inch-ci.org/github/wooorm/example'),
      false,
      'not ok: w/o extension'
    )
  })

  await t.test('fury.io', () => {
    assert.equal(isBadge('http://badge.fury.io/js/engine.io.svg'), true, 'ok')

    assert.equal(
      isBadge('https://badge.fury.io/gh/substack%2Fnode-browserify.svg'),
      true,
      'ok: w/ provider'
    )

    assert.equal(isBadge('https://badge.fury.io'), false, 'not ok: w/o project')

    assert.equal(
      isBadge('https://badge.fury.io/gh/substack%2Fnode-browserify'),
      false,
      'not ok: w/o extension'
    )
  })

  await t.test('testling-ci', () => {
    assert.equal(
      isBadge('https://ci.testling.com/substack/dnode.png'),
      true,
      'ok'
    )

    assert.equal(
      isBadge('https://ci.testling.com/_/images/testling_mission_control.png'),
      false,
      'not ok: w/o project'
    )

    assert.equal(
      isBadge('https://ci.testling.com/guide/tape'),
      false,
      'not ok: w/o extension'
    )
  })

  await t.test('sauce-labs', () => {
    assert.equal(isBadge('https://saucelabs.com/buildstatus/vuejs'), true, 'ok')

    assert.equal(
      isBadge('https://saucelabs.com/browser-matrix/vuejs.svg'),
      true,
      'ok: w/ extension'
    )

    assert.equal(
      isBadge('https://docs.saucelabs.com/images/sauce-labs.bbed5298.png'),
      false,
      'not ok: w/o project'
    )

    assert.equal(
      isBadge('https://saucelabs.com/home/logo_eventbrite2x.png'),
      false,
      'not ok: w/o project (#2)'
    )
  })

  await t.test('coveralls', () => {
    assert.equal(
      isBadge('https://coveralls.io/repos/jquery/esprima/badge.png'),
      true,
      'ok: png'
    )

    assert.equal(
      isBadge('https://coveralls.io/repos/jquery/esprima/badge.svg'),
      true,
      'ok: svg'
    )

    assert.equal(
      isBadge(
        'https://coveralls.io/repos/jquery/esprima/badge.svg?branch=master'
      ),
      true,
      'ok: w/ branch'
    )

    assert.equal(
      isBadge(
        'https://coveralls.io/assets/home_bitbucket-9172913f63c2492acfd0b67d9f0ad404.png'
      ),
      false,
      'not ok: w/o project'
    )

    assert.equal(
      isBadge('https://coveralls.io/r/google/yapf'),
      false,
      'not ok: w/o extension'
    )
  })

  await t.test('gitter', () => {
    assert.equal(
      isBadge('https://badges.gitter.im/example/bar.png'),
      true,
      'ok: png'
    )

    assert.equal(
      isBadge('https://badges.gitter.im/example/bar.svg'),
      true,
      'ok: svg'
    )

    assert.equal(
      isBadge('https://badges.gitter.im/example/bar'),
      false,
      'not ok: w/o extension'
    )

    assert.equal(
      isBadge('https://badges.gitter.im/'),
      false,
      'not ok: w/o project'
    )
  })

  await t.test('codecov', () => {
    assert.equal(
      isBadge(
        'https://codecov.io/gh/wooorm/example/branch/master/graph/badge.svg'
      ),
      true,
      'ok: svg'
    )

    assert.equal(
      isBadge(
        'https://codecov.io/gh/wooorm/example/branch/master/graph/badge.png'
      ),
      false,
      'not ok: png'
    )

    assert.equal(
      isBadge('https://codecov.io/gh/wooorm/example/graph/badge.svg'),
      true,
      'ok: without branch'
    )

    assert.equal(
      isBadge('https://codecov.io/gh/wooorm/example/badge.svg'),
      true,
      'ok: without `graph`'
    )

    assert.equal(
      isBadge('https://codecov.io/gh/wooorm/badge.svg'),
      false,
      'not ok: without project'
    )
  })

  await t.test('codeclimate', () => {
    assert.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown.svg'),
      true,
      'ok: svg'
    )

    assert.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown.png'),
      true,
      'ok: png'
    )

    assert.equal(
      isBadge(
        'https://codeclimate.com/github/npm/marky-markdown/badges/gpa.svg'
      ),
      true,
      'ok: svg w/ gpa'
    )

    assert.equal(
      isBadge(
        'https://codeclimate.com/github/npm/marky-markdown/badges/issue_count.svg'
      ),
      true,
      'ok: svg w/ issue count'
    )

    assert.equal(
      isBadge(
        'https://codeclimate.com/github/npm/marky-markdown/badges/coverage.svg'
      ),
      true,
      'ok: svg w/ coverage'
    )

    assert.equal(
      isBadge(
        'https://codeclimate.com/github/npm/marky-markdown/badges/gpa.svg'
      ),
      true,
      'ok: png w/ gpa'
    )

    assert.equal(
      isBadge(
        'https://codeclimate.com/github/npm/marky-markdown/badges/issue_count.svg'
      ),
      true,
      'ok: png w/ issue count'
    )

    assert.equal(
      isBadge(
        'https://codeclimate.com/github/npm/marky-markdown/badges/coverage.svg'
      ),
      true,
      'ok: png w/ coverage'
    )

    assert.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges.svg'),
      false,
      'not ok: svg: badges w/o type'
    )

    assert.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown/badges.png'),
      false,
      'not ok: png: badges w/o type'
    )

    assert.equal(
      isBadge('https://codeclimate.com/github/npm/marky-markdown'),
      false,
      'not ok: w/o extension'
    )

    assert.equal(
      isBadge(
        'https://codeclimate.com/github/npm/marky-markdown/badges/coverage'
      ),
      false,
      'not ok: type w/o extension'
    )
  })

  await t.test('issuestats', () => {
    assert.equal(
      isBadge('http://issuestats.com/github/twbs/bootstrap/badge/issue'),
      true,
      'ok: issues'
    )

    assert.equal(
      isBadge(
        'http://issuestats.com/github/twbs/bootstrap/badge/issue?style=flat'
      ),
      true,
      'ok: issues w/ style'
    )

    assert.equal(
      isBadge(
        'http://issuestats.com/github/twbs/bootstrap/badge/issue?style=flat-square'
      ),
      true,
      'ok: issues w/ other style'
    )

    assert.equal(
      isBadge('http://issuestats.com/github/twbs/bootstrap/badge/pr'),
      true,
      'ok: PRs'
    )

    assert.equal(
      isBadge(
        'http://issuestats.com/github/twbs/bootstrap/badge/pr?style=flat'
      ),
      true,
      'ok: PRs w/ style'
    )

    assert.equal(
      isBadge(
        'http://issuestats.com/github/microsoft/visualfsharp/badge/pr?style=flat-square'
      ),
      true,
      'ok: PRs w/ other style'
    )
  })

  await t.test('github workflow', () => {
    assert.equal(
      isBadge(
        'https://github.com/actions/toolkit/workflows/Main%20workflow/badge.svg'
      ),
      true,
      'ok: workflow'
    )

    assert.equal(
      isBadge(
        'http://github.com/actions/toolkit/workflows/Main%20workflow/badge.svg'
      ),
      true,
      'ok: issues w/ http'
    )

    assert.equal(
      isBadge(
        'https://www.github.com/actions/toolkit/workflows/Main%20workflow/badge.svg'
      ),
      true,
      'ok: issues w/ www'
    )

    assert.equal(
      isBadge('https://github.com/actions/toolkit'),
      false,
      'not ok: repo'
    )

    assert.equal(
      isBadge('https://github.com/actions/toolkit/workflows/Main%20workflow'),
      false,
      'not ok: workflow'
    )
  })

  await t.test('open collective', () => {
    assert.equal(
      isBadge('https://opencollective.com/acme/sponsors/badge.svg'),
      true,
      'ok: sponsors'
    )

    assert.equal(
      isBadge('https://opencollective.com/acme/backers/badge.svg'),
      true,
      'ok: badges'
    )

    assert.equal(
      isBadge('http://opencollective.com/acme/sponsors/badge.svg'),
      true,
      'ok w/ http'
    )

    assert.equal(
      isBadge('https://www.opencollective.com/acme/sponsors/badge.svg'),
      true,
      'ok w/ www'
    )

    assert.equal(
      isBadge('https://www.opencollective.com/acme'),
      false,
      'not ok: project'
    )
  })
})
