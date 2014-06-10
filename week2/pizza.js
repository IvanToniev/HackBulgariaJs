'use strict';

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function Pizza(name, cost, timeToTake) {
  if(!(this instanceof Pizza)) {
    return new Pizza(name, cost, timeToTake);
  }

  this.getTimeToTake = function() {
    return timeToTake;
  };
}

function PizzaOrder(pizza) {
  if(!(this instanceof PizzaOrder)) {
    return new PizzaOrder(pizza);
  }

  if(!(pizza instanceof Pizza)) {
    throw new Error('The pizza order must be constructed with a pizza!');
  }

  var uniqueWord = 'pesho';
  var id = parseInt(Math.random()*10) + Date.now() + uniqueWord;

  this.getId = function() {
    return id;
  };
  this.getPizza = function() {
    return pizza;
  };
}

PizzaOrder.prototype.start = function(time) {
  var left = time;
  while(left < 0) {
    left -= 1000;
    sleep(1000);
  }
};

PizzaOrder.prototype.ready = function(callback) {
  return callback(this.getPizza(), this);
};

var pizza = new Pizza('Peperoni', 100 /*cost*/, 2000 /*timeToMake in ms = 2 seconds */);

var order = new PizzaOrder(pizza);
order.ready(function(p, o) {
  // the pizza is ready now
  o.getId(); // should return the unique id
});

order.start();
