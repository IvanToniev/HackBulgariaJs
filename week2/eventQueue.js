'use strict';

var eventQueue = (function(){

  var queue = {};
  var callResults = [];
  var _public = {
    on : function(eventName, callback) {
      queue.eventName = queue.eventName || [];
      queue.eventName.push(callback);
    },

    remove : function(eventName) {
      delete queue.eventName;
    },

    trigger : function(eventName) {
      if(queue.eventName !== undefined) {
        queue.eventName.forEach(function(el){
          callResults.push(el.call());
        });
        return callResults.join('\n');
      } else {
        return 'No such event!';
      }
    },
  };

  return _public;
}());
