'use strict';

var sum_of_divisors = require('./sum_of_divisors').sum_of_divisors;

exports.testSumOfDivisors = function(test) {
  test.equal(15, sum_of_divisors(8));
  test.equal(8, sum_of_divisors(7));
  test.equal(1, sum_of_divisors(1));
  test.equal(2340, sum_of_divisors(1000));

  test.done();
};
