
function startCountdown() {
  const hoursInput = parseInt(document.getElementById('hoursInput').value) || 0;
  const minutesInput = parseInt(document.getElementById('minutesInput').value) || 0;
  const secondsInput = parseInt(document.getElementById('secondsInput').value) || 0;

  const currentTime = new Date().getTime();
  endTime = currentTime + (hoursInput * 3600000) + (minutesInput * 60000) + (secondsInput * 1000);

  countdown = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeLeft = endTime - currentTime;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById('display').textContent = '00:00:00';
    return;
  }

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formattedTime =
    (hours < 10 ? '0' + hours : hours) + ':' +
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds);

  document.getElementById('display').textContent = formattedTime;
}

function resetCountdown() {
  clearInterval(countdown);
  document.getElementById('hoursInput').value = '';
  document.getElementById('minutesInput').value = '';
  document.getElementById('secondsInput').value = '';
  document.getElementById('display').textContent = '00:00:00';
}
