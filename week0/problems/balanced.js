'use strict';
var isBalanced = function(number) {
  if(number < 10 && number > -10) {
    return true;
  } else {
    var digits = number.toString().split(''),
        i = 0,
        leftPart = 0,
        rightPart = 0;

    console.log(digits);

    if(digits.length % 2 !== 0) {
      for(i = 0; i < parseInt(digits.length / 2, 10); i++) {
        leftPart += digits[i];
        console.log([1, digits[i]]);
      }
      for(i = digits.length - 1; i > parseInt(digits.length / 2, 10); i--) {
        rightPart += digits[i];
        console.log([2, digits[i]]);
      }

      if(leftPart === rightPart) {
        return true;
      } else {
        return false;
      }
    } else {
      for(i = 0; i < parseInt(digits.length / 2, 10); i++) {
        leftPart += digits[i];
        console.log([1, digits[i]]);
      }
      for(i = digits.length - 1; i > parseInt(digits.length / 2, 10) - 1; i--) {
        rightPart += digits[i];
        console.log([2, digits[i]]);
      }

      if(leftPart === rightPart) {
        return true;
      } else {
        return false;
      }
    }
  }
}

exports.isBalanced = isBalanced;
