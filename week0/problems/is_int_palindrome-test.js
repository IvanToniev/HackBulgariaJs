'use strict';
var is_int_palindrome = require('./is_int_palindrome').is_int_palindrome;

exports.testIsIntPalindrome = function(test) {
  test.equal(true, is_int_palindrome(424));
  test.equal(false, is_int_palindrome(32));
  test.equal(true, is_int_palindrome(1));
  test.equal(true, is_int_palindrome(999));

  test.done();
};
