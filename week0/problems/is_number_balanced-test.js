'use strict';

var is_number_balanced = require('./is_number_balanced').is_number_balanced;

exports.checkIsNumberBalaced = function(test) {
  test.equal(false, is_number_balanced(123));
  test.equal(true, is_number_balanced(12321));
  test.equal(false, is_number_balanced(12));
  test.equal(false, is_number_balanced(1234));
  test.equal(true, is_number_balanced(1));
  test.equal(true, is_number_balanced(1239033));
  test.done();
};
