'use strict';
var countSubstrings = require('./substrings.js').countSubstrings;

exports.countSubstrings = function(test) {
  test.equal(2, countSubstrings('pesho pesho1', 'pesho'));
  test.done();
}
