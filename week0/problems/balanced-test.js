'use strict';
var balanced = require('./balanced.js').isBalanced;

exports.testBalanced = function(test) {
  test.equal(true, balanced(33));
  test.done();
}
