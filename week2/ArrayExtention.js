'use strict';

Array.prototype.first = function() {
  if(this.length === 0) {
    throw new Error('Array must not be empty!');
  } else {
    return this[0];
  }
};

Array.prototype.range = function(from, to) {
  var range = [];
  while (from <= to) {
    range.push(from);
    from++;
  }

  return range;
};

Array.prototype.sum = function() {
  var sum = 0;
  sum = this.reduce(function(a, b){
    return a + b;
  });

  return sum;
};

Array.prototype.average = function() {
  var sum = this.reduce(function(a, b){ return a + b; });
  var average = sum/this.length;

  return average;
};

