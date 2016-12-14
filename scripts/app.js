function main() {
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
  
  getWeather();

  function getWeather() {
    var longitude = -0.090000;
    var latitude = 51.520000;
    $.ajax({
      type: 'GET',
      url: 'http://api.wunderground.com/api/291d6d87200cc037/geolookup/conditions/q/' + latitude + ',' + longitude + '.json',
      dataType: 'json',
      success: function(response) {
        var conditions = response.current_observation.weather;
        var location = response.location.tz_long;

        loadImage(conditions);
      }
    });
  }

  function getTimeOfDay() {
    var time = new Date();
    var hours = time.getHours();
    var timeOfDay;

    if (hours > 17) {
      timeOfDay = 'night';
    } else if (hours > 12) {
      timeOfDay = 'afternoon';
    } else {
      timeOfDay = 'morning';
    }

    return timeOfDay;
  }

  function loadImage(conditions) {
    var imageSRC = 'img/weather/hero-';
    var timeofDay = getTimeOfDay();
    var validConditions = ['clear', 'mostly cloudy', 'overcast', 'rain', 'snow'];
    var conditions = conditions.toLowerCase();

    if (validConditions.indexOf(conditions) === -1) {
      conditions = 'clear';
    }

    //to add conditions.join();
    if (conditions === 'mostly cloudy') {
      conditions = 'mostlycloudy'
    }

    imageSRC = imageSRC + conditions + '-' + timeofDay + '.jpg';

    $('#intro').css('background-image', 'url(' + imageSRC + ')')
  }
  
  
 // return false;
};

$(document).ready(main);
