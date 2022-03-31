$(function(){
  $("a.hamburger").on('click', function(e) {
    $('.ui.sidebar')
      .sidebar('toggle')
    ;
  });
  $('.ui.sidebar.menu > div').hide();
  $('.ui.sidebar.menu > a.parent').on('click', function(e) {
    $(this).next().toggle('slow');
    return false;
  });
  $('.ui.dropdown')
    .dropdown({
      on: 'hover',
      action: 'nothing'
    });
  $('.ui.dropdown .item.active').parents(".ui.dropdown.item").addClass('marked');
});
