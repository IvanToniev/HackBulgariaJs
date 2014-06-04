'use strict';

var sum_of_min_and_max = function(arr) {
  var sorted = [];

  sorted = arr.sort(function(num1, num2) {
    return num1 - num2;
  });

  var max = sorted[sorted.length - 1];
  var min = sorted[0];
  var sum = max + min;

  return sum;
};

exports.sum_of_min_and_max = sum_of_min_and_max;
