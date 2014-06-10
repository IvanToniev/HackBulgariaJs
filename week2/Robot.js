'use strict';
var Point = require('./point').Point;
var times = require('./NumberExtentions').times;

function Robot(point) {
  if(!(this instanceof Robot)) {
    return new Robot(point);
  }

  var startingPoint = point;

  this.moveLeft = function(amount) {
    (amount).times(function(){
      startingPoint.xDec();
    });
  };

  this.moveRight = function(amount) {
    (amount).times(function(){
      startingPoint.xInc();
    });
  };

  this.moveUp = function(amount) {
    (amount).times(function(){
      startingPoint.yInc();
    });
  };

  this.moveDown = function(amount) {
    (amount).times(function(){
      startingPoint.yDec();
    });
  };

  this.getPosition = function() {
    return startingPoint;
  };
}
