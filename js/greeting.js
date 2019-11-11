var today = new Date();
var hourNow = today.getHours();
var greeting ;

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 5) {
  greeting = 'Good morning!';
} else {
  greeting = 'Hello!';
}

$(document).ready(function() {
  $('#greeting').html(greeting);
});
