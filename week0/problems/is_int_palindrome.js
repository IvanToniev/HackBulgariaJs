'use strict';

var is_int_palindrome = function(n) {
  var number_to_string = ''+n;
  var reversed_string = number_to_string.split('').reverse().join('');

  if(reversed_string === number_to_string) {
    return true;
  }

  return false;
};

exports.is_int_palindrome = is_int_palindrome;
