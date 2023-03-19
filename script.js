let countdownInterval;

function startTimer(event) {
  if (event.keyCode === 13) {
    const timeCount = Math.floor(parseFloat(event.target.value));
    if (isNaN(timeCount)) {
      document.getElementById("current-time").innerHTML = "0";
    } else {
      clearInterval(countdownInterval);
      let currentTime = timeCount;
      document.getElementById("current-time").innerHTML = currentTime;
      countdownInterval = setInterval(() => {
        currentTime--;
        if (currentTime < 0) {
          currentTime = 0;
        }
        document.getElementById("current-time").innerHTML = currentTime;
        if (currentTime === 0) {
          clearInterval(countdownInterval);
        }
      }, 1000);
    }
  }
}