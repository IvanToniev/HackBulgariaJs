'use strict';

var downButton = $('#down');
var upButton = $('#up');

$(downButton).on('click', function(ev){
  ev.preventDefault();
  ev.stopPropagation();

  var time = getTime();
  var minutes = parseInt(time[0]);
  var seconds = parseInt(time[1]);

  setClock(minutes, seconds);
  startCounting(minutes, seconds);
});

var setClock = function(minutes, seconds) {
  $('#minute-first-digit').text(parseInt(minutes/10));
  $('#minute-second-digit').text(parseInt(minutes%10));
  $('#second-first-digit').text(parseInt(seconds/10));
  $('#second-second-digit').text(parseInt(seconds%10));
};

var getTime = function() {
  var minutes = $('#minutes').val();
  var seconds = $('#seconds').val();

  return [minutes, seconds];
};

var startCounting = function(minutes, seconds) {
  var totalSeconds = (minutes * 60) + seconds - 1;

  while(true) {
    var intervalId = setInterval(setClock(parseInt(totalSeconds/60), parseInt(totalSeconds%60)), 1000);
    console.log(totalSeconds);
    totalSeconds--;
  }
};
