'use strict';

var extract = function(type, items) {
  var beersOrFries = items.map(function(item){

    if(item.type === type){ return item.score; }
  });

  beersOrFries = beersOrFries.filter(function(beer){
    return beer !== undefined;
  });

  return beersOrFries;
};

var beerAndFries = function(items) {
  var beerScores = extract('beer', items);
  var friesScores = extract('fries', items);
  var score = 0;

  beerScores.sort(function(beer1, beer2){
    return beer2 - beer1;
  });

  friesScores.sort(function(potato1, potato2){
    return potato2 - potato1;
  });

  while(beerScores.length) {
    var beer = beerScores.pop();
    var potatoes = friesScores.pop();
    score += beer * potatoes;
  }

  return score;
};

exports.beerAndFries = beerAndFries;
