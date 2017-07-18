$(document).ready(function() {
  const url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=enspirit&api_key=7fad6b09c99e8e11ccad0c568b4abf0d&format=json";
  // feel free to use this js, but get your own api key at https://www.last.fm/api

  $.getJSON(url, function(data) {
    const artist = data.recenttracks.track[0].artist["#text"];
    const song = data.recenttracks.track[0]["name"];

    $('#nowPlaying').html(song + " by " + artist);
  });
});
