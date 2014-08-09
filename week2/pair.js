'use strict';

function Pair(left, right) {
  if(!(this instanceof Pair)) {
    return new Pair(left, right);
  }

  this.left = left;
  this.right = right;
}

Pair.prototype.equals = function (pair) {
  return this.left === pair.left && this.right === pair.right;
};

Pair.prototype.toString = function() {
  var pairToString = '({' + this.left + '})' + '({' + this.right + '})';
  return pairToString;
};

Pair.prototype.toList = function() {
  var pairToList = [this.left, this.right];
  return pairToList;
};

Pair.prototype.combine = function(f) {
  return f(this.left, this.right);
};

var pair = new Pair(3, 3);
console.log(pair);
