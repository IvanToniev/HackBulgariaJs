'use strict';

var is_number_balanced = function(n) {
  if(n < 10 && n > -10) {
    return true;
  }

  var digits = [];
  var left_part = [];
  var right_part = [];
  var left_sum = 0;
  var right_sum = 0;

  if(n < 0) {
    n = (-1) * n;
  }

  while(n > 0) {
    digits.push(n % 10);
    n = parseInt(n / 10);
  }

  var reduce_sum = function(arr) {
  return arr.reduce(function(n1, n2){
    return n1 + n2;
  });
};

  if(digits.length % 2 === 0) {
    right_part = digits.slice((digits.length/2), (digits.length));
    left_part = digits.slice(0, (digits.length/2));
    left_sum = reduce_sum(left_part);
    right_sum = reduce_sum(right_part);
  } else {
    right_part = digits.slice((digits.length/2 + 1), (digits.length));
    left_part = digits.slice(0, (digits.length/2));
    left_sum = reduce_sum(left_part);
    right_sum = reduce_sum(right_part);
  }

  if(right_sum === left_sum) {
    return true;
  } else {
    return false;
  }

};

exports.is_number_balanced = is_number_balanced;
