'use strict';

var downButton = $('#down');
var upButton = $('#up');
var timerId;
var stop = $('#stop');

$(downButton).on('click', function(ev){
  ev.preventDefault();
  ev.stopPropagation();

  var time = getTime();
  var minutes = parseInt(time[0], 10);
  var seconds = parseInt(time[1], 10);

  var totalSeconds = minutes * 60 + seconds;
  setClock(minutes, seconds);

  timerId = setInterval(function(){
    totalSeconds--;
    setClock(parseInt(totalSeconds/60, 10), parseInt(totalSeconds%60, 10));
    if(totalSeconds === 0) {
      window.clearInterval(timerId);
      alert('Time is up!');
    }
  }, 1000);
});

$(upButton).on('click', function(ev){
  ev.preventDefault();
  ev.stopPropagation();

  var time = getTime();
  var minutes = parseInt(time[0], 10);
  var seconds = parseInt(time[1], 10);

  var totalSeconds = minutes * 60 + seconds;
  var secondsCounter = 0;

  timerId = setInterval(function(){
    secondsCounter++;
    setClock(parseInt(secondsCounter/60, 10), parseInt(secondsCounter%60, 10));
    if(totalSeconds === secondsCounter) {
      window.clearInterval(timerId);
      alert('Time is up!');
    }
  }, 1000);
});

$(stop).on('click', function(ev){
  ev.preventDefault();
  ev.stopPropagation();

  setClock(0, 0);
  $('#minutes').val(0);
  $('#seconds').val(0);
  window.clearInterval(timerId);
});

var setClock = function(minutes, seconds) {
  $('#minute-first-digit').text(parseInt(minutes/10, 10));
  $('#minute-second-digit').text(parseInt(minutes%10, 10));
  $('#second-first-digit').text(parseInt(seconds/10, 10));
  $('#second-second-digit').text(parseInt(seconds%10, 10));
};

var getTime = function() {
  var minutes = $('#minutes').val();
  var seconds = $('#seconds').val();

  if(seconds === 60) {
    minutes++;
    seconds = 0;
  }

  return [minutes, seconds];
};
