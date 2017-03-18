$(document).ready(function() {
  var today = new Date()
  var curHr = today.getHours()
  var time = "Hey,"

  if (curHr < 3) {
    time = "Hey, thanks for dropping by my site at this late hour!";
  } else if (curHr < 7) {
    time = "Gooood morning!";
  } else if (curHr < 12) {
    time = "Good morning,";
  } else if (curHr < 18) {
    time = "Good afternoon,";
  } else {
    time = "Good evening,";
  }
  var timeContainer = document.getElementById('hey');
  timeContainer.textContent = time;
});
