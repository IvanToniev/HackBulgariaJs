'use strict';
var is_prime = require('./is_prime').is_prime;

var prime_number_of_divisors = function(n) {
  var divisors = [];

  for(var i = 1; i <= n; i++) {
    if(n % i === 0) {
      divisors.push(i);
    }
  }

  if(is_prime(divisors.length)) {
    return true;
  }

  return false;
};

exports.prime_number_of_divisors = prime_number_of_divisors;
