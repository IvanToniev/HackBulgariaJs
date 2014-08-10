$(document).ready(function(){
  var counter = 0;
  var paragraphs = {};

  $('p').each(function (index, element) {
      paragraphs[index] = '.' + $(element).attr('class');
  });

  $('#btn').on('click', function () {
      $('.highlight').removeClass('highlight');
      $('#mightyParagraphHolder')
          .find(paragraphs[counter % 3])
          .addClass('highlight');
      counter += 1;
  });
});
