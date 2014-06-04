"use strict";

var sum_of_digits = function (n) {
  var nums = [];

  if(n < 0) {
    n = (-1) * n;
  }

  while(n > 0) {
    nums.push(n%10);
    n = parseInt(n/10);
  }

  var sum = nums.reduce(function(n1, n2) {
    return n1 + n2;
  });

  return sum;
};

exports.sum_of_digits = sum_of_digits;
