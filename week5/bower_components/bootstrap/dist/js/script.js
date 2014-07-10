'use strict';
$(document).ready(function(){
  $('#save_settings').click(function(ev){
    ev.preventDefault();
    ev.stopPropagation();

    var color = $('#color').val();
    $('body').css('background-color', color);
  });
});
