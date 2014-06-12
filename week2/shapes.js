'use strict';

function Shape(type) {
  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error('Cannot call area of Shape. Use subclasses!');
};

function Rectangle(width, height) {
  var type = 'rectangle';
  Shape.call(this, type);

  this.getWidth = function() {
    return width;
  };
  this.getHeight = function() {
    return height;
  };
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.getWidth()*this.getHeight();
};

function Triangle(a, b, c, hc) {
  var type = 'triangle';
  Shape.call(this, type);

  this.getC = function() {
    return c;
  };

  this.getHc = function() {
    return hc;
  };
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.area = function() {
  return this.getC()*(this.getHc()/2);
};

function Circle(rad) {
  var type = 'circle';
  Shape.call(this, type);

  this.getRad = function() {
    return rad;
  };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function() {
  return Math.PI*this.getRad()*this.getRad();
};

