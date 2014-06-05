'use strict';
var prime_number_of_divisors = require('./prime_number_of_divisors').prime_number_of_divisors;

exports.checkPrimeNumberOfDivisors = function(test) {
  test.equal(true, prime_number_of_divisors(7));
  test.equal(false, prime_number_of_divisors(8));
  test.equal(true, prime_number_of_divisors(9));
  test.done();
};
