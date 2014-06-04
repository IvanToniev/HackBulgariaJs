'use strict';

var sum_of_divisors = function(n) {
  var sum = 0;
  var divisors = [];

  for(var i = 1; i <= n; i++) {
    if(n % i === 0) {
      divisors.push(i);
    }
  }

  sum = divisors.reduce(function(num1, num2) {
    return num1 + num2;
  });

  return sum;
};

exports.sum_of_divisors = sum_of_divisors;
