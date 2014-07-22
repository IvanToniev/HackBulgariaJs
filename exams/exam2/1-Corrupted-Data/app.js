'use strict';
var _ = require('./node_modules/lodash/dist/lodash');

var corruptedData = require('./data');
var times = {};
var duplicates = [];

corruptedData = _.sortBy(corruptedData, function(data){
  return data.fields.student;
});

corruptedData.forEach(function(data){
  data = data.fields.student;
  times[data] = times[data] >= 1 ? times[data] + 1 : 1;
});

for(var item in times) {
  if(times[item] > 1) {
    corruptedData.forEach(function(data){
      if(data.fields.student == item) {
        duplicates.push(data);
      }
    });
  }
}

console.log(duplicates);
