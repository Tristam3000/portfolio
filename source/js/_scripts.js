var viewportHeight = $(window).height();

$(document).ready(function() {
  $('#show_nav').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    console.log('click');
  });
});
