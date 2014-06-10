'use strict';

String.prototype.forEach = function(f) {
  var chars = this.split('');
  var i = 0;
  var len = chars.length;

  for(i; i < len; i++) {
    f(chars[i]);
  }
};

String.prototype.capitalize = function() {
  return this.toUpperCase();
};

String.prototype.dasherize = function() {
  var str = this.replace('_', '-');
  return str;
};

String.prototype.times = function(times) {
  var str = '';

  while(times > 0) {
    str = str + ' ' + this;
    times--;
  }
  str = str.trim();

  return str;
};

String.prototype.blank = function() {
  if(this === ' ' || this === '') {
    return true;
  } else {
    return false;
  }
};
