'use strict';

/* Expose. */
module.exports = isBadge;

/* Expressions. */
var EXPRESSIONS = [
  /^https?:\/\/img\.shields\.io/,
  /^https?:\/\/(?:(?:www|api|secure)\.)?travis-ci\.org\/.*\.(?:svg|png)(?:\?|$)/,
  /^https?:\/\/(?:www\.)?david-dm\.org(?:\/.+){2}\.(?:svg|png)/,
  /^https?:\/\/(?:www\.)?nodei\.co(?:\/.+){2}\.(?:svg|png)(?:\?|$)/,
  /^https?:\/\/inch-ci\.org(?:\/.+){3}\.(?:svg|png)(?:\?|$)/,
  /^https?:\/\/badge\.fury\.io(?:\/[^/]+){2}\.(?:svg|png)(?:\?|$)/,
  /^https?:\/\/ci\.testling\.com(?:\/[^/]+){2}\.(?:svg|png)(?:\?|$)/,
  /^https?:\/\/saucelabs\.com\/(?:buildstatus|browser-matrix)\//,
  /^https?:\/\/coveralls\.io\/.*\/badge\.(?:svg|png)(?:\?|$)/,
  /^https?:\/\/codecov\.io\/gh(?:\/[^/]+){2}(?:\/branch\/[^/]+)?(?:\/graph)?\/badge\.svg/,
  /^https?:\/\/codeclimate\.com\/github(?:\/[^/]+){2}(?:\/badges\/(gpa|issue_count|coverage))?\.(png|svg)(?:\?|$)/,
  /^https?:\/\/issuestats\.com\/github(?:\/[^/]+){2}\/badge\/(pr|issue)\/?(?:\?|$)/,
  /^https?:\/\/badges\.gitter\.im(?:\/.+){2}\.(?:svg|png)/
];

/* Constants. */
var length = EXPRESSIONS.length;

/* Check if `url` is a badge. */
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
