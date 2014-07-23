'use strict';
$(document).ready(function($) {
  loadNames();

  $(document).on('keyup', '.person-name', function() {
    $(this).next().removeAttr('disabled');
  });

  $(document).on('click', '.edit', function(ev) {
    ev.preventDefault();

    var personId = $(this).parent().attr('id');
    var name = $(this).prev().val();

    $.ajax({
      url: 'http://localhost:8080/name',
      type: 'POST',
      contentType: 'application/json',
      datatype: 'json',
      data: JSON.stringify({
        name: name,
        nameId: personId
      })
    }).success(function(data) {
        location.reload();
    }).error(function(err){
      console.log(error);
    });
  });

  function loadNames() {
    $.ajax({
      url: 'http://localhost:8080/names',
      type: 'GET',
      contentType: 'application/json',
      datatype: 'json',
    }).success(function(data){
      var source   = $("#person-template").html(),
          template = Handlebars.compile(source),
          context = {};

      data.forEach(function(person){
        var name = person.name;
        context = {name: name, id: person.nameId};

        var html = template(context);
        $('#people').append(html);
      });
    }).error(function(err) {
      console.log(err)
    });
  }
});


