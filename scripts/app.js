var main = function() {
  var $menu = $('#sidebar-wrapper');
  $('#close-btn').click(function() {
    $menu.toggleClass('open');
  });
  
  $('#hamburger').click(function() {
    $menu.toggleClass('open');
  });
  
  $(document).mouseup(function (e) {
    if (!$menu.is(e.target) 
        && $menu.has(e.target).length === 0
        && $menu.hasClass('open')) {
      $menu.toggleClass('open');
    }
  });
  
  return false;
};

$(document).ready(main);
