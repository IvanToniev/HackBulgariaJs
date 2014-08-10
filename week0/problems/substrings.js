'use strict';
var countSubstrings = function(haystack, needle) {
  var substrings = haystack.split(needle);
  return substrings.length - 1;
}

exports.countSubstrings = countSubstrings;
