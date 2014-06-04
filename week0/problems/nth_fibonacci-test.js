"use strict";
var nth_fibonacci = require("./nth_fibonacci").nth_fibonacci;

exports.testNthFibonacci = function (test) {
  test.equal(1, nth_fibonacci(1));
  test.done();
};

exports.testNthFibonacci = function (test) {
  test.equal(55, nth_fibonacci(10));
  test.done();
};
