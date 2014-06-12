'use strict';

var queue = {
  queue : [],

  push : function(item) {
    this.queue.push(item);
  },

  pop : function() {
    var top = this.queue[this.queue.length-1];
    return top;
  },

  isEmpty : function() {
    if(this.queue.length === 0) {
      return true;
    }

    return false;
  },
};
