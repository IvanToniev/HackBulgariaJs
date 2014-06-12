'use strict';
$(document).ready(function(){
  $('#load').on('click', function(ev){
    ev.preventDefault();
    ev.stopPropagation();

    $.ajax({
      url : 'http://localhost:3000/books/'
    }).success(function(books){
      var bookTemplate = $('#book_template').html();
      var booksHtml = [];
      var counter = 0;

      books.forEach(function(book){
        booksHtml.push(_.template(bookTemplate, book));
      });

      booksHtml.forEach(function(book){
          if($('.row').attr('class') === 'row') {
            $('.row').attr('class', ($('.row').attr('class') + ' used'));
          }

          console.log($('.row').children().length);
          $('.used').after('<div class="row"></div>');
      });
    });
  });
});
