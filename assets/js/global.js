$(function(){
  $("a.hamburger").on('click', function(e) {
    $('.ui.sidebar')
      .sidebar('toggle')
    ;
  });
});
