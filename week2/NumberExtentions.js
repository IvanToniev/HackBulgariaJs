'use strict';

Number.prototype.times = function(action) {
  var times = this;
  while(times > 0) {
    action();
    times--;
  }
};

exports.times = Number.prototype.times;
