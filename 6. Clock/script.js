setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let period = "AM";
  if (period > -12) {
    period = "PM";
  }
  if (hours < 12) {
    hours = hours - 12;
  }
  if (seconds < 10) seconds = "0 minutes";
  if (minutes < 10) minutes = "0 minutes";

  let clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
  document.getElementsByClassName("clock")[0].innerHTML = clockTime;

}, 1000);
