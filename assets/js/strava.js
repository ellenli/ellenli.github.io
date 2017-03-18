$(document).ready(function() {
  const url = "https://www.strava.com/api/v3/activities?access_token=015238188da8924a0a86f431620fe8af883d278a&callback=?";
  // feel free to use this js, but get your own access token at http://labs.strava.com

  $.get(url, function(data) {
    const distance = (data[0].distance / 1000).toFixed(0);
    const date = data[0].start_date;

    const activityDetails = "https://www.strava.com/activities/" + data[0].id;
    const lastRunDetails = document.getElementById('lastRunDetails');
    lastRunDetails.href = activityDetails;

    $('.timeago').attr( "datetime", date );
    $(".timeago").timeago()

    const coordinates = data[0].start_latlng
    const lat = coordinates[0];
    const lon = coordinates[1];

    const flickr = "https://api.flickr.com/services/rest/?method=flickr.places.findByLatLon&api_key=50b35bf0cd1c787b75ea9e42d969810b&lat=" + lat + "&lon=" + lon;

    $.get(flickr, function(data) {
      const neighborhood = data.getElementsByTagName('place')[0].getAttribute('woe_name');
      $('#lastRun').html("~" + distance + " km in " + neighborhood );
    }, 'XML');

  }, "JSON");

});
