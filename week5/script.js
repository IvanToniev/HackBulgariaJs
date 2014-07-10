'use strict';
$(document).ready(function(){
  $('#save_settings').click(function(ev){
    ev.preventDefault();
    ev.stopPropagation();

    var color = $('#modal_color').val();
    $('body').css('background-color', color);

    var username = $('#modal_username').val();
    $('#user').text('Hello, ' + username);

    var picture_link = $('#modal_picture_link').val();
    $('#picture_link').attr('src', picture_link);
  });
});
