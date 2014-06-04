'use strict';

var is_prime = function(n) {
  if(n < 0) {
    n = n * (-1);
  }

  if(n === 1) {
    return false;
  }

  if(n % 2 === 0 && n !== 2) {
    return false;
  }

  for(var i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) {
      return false;
    }
  }

  return true;
};

exports.is_prime = is_prime;
