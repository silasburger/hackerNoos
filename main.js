$('document').ready(() => {
  $('#submit').on('click', () => {
    $('#submit-wrapper').toggle('slow');
  });

  $('form').on('submit', evt => {
    evt.preventDefault();
    let title = $('#title').val();
    let url = $('#url').val();
    let $span = $('<span></span>')
      .attr('class', 'url')
      .text(`(${url})`);
    let $li = $('<li></li>').text(`${title} `);
    $li.prepend('<i class="far fa-star"></i> ');
    $li.append($span);
    $('ol').append($li);
    $('form').trigger('reset');
  });

  $('ol').on('click', '.fa-star', evt => {
    $(evt.target).toggleClass('fas far');
  });

  $('#favorites').on('click', evt => {
    let $lis = $('ol > li');
    $.each($lis, (i, objVal) => {
      if (
        $lis
          .eq(i)
          .children('i')
          .hasClass('far')
      ) {
        $lis.eq(i).toggle();
      }
    });
  });

  $('ol').on('click', '.url', evt => {
    let $clickedUrl = $(evt.target);
    let $spans = $('li > span');
    $.each($spans, (i, objVal) => {
      if ($spans.eq(i).text() !== $clickedUrl.text()) {
        $spans
          .eq(i)
          .parent()
          .toggle();
      }
    });
  });
});
