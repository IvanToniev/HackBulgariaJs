"use strict";
var sum_of_digits = require("./sum_of_digits").sum_of_digits;

exports.testSumOfDigits = function (test) {
  test.equal(6, sum_of_digits(123));
  test.equal(43, sum_of_digits(1325132435356));
  test.done();
};
