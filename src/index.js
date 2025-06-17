// Task 1
const getMessage = document.querySelector(".timer");
const getBtn = document.querySelector(".btn");

function atomBomb() {
  let sec = 60;

  const timer = setInterval(() => {
    sec -= 1;
    getMessage.innerHTML = `залишилось: ${sec}хв`;
    if (sec === 30) {
      alert("Вже пройшло 30хв");
    } else if (sec === 0) {
      clearInterval(timer);
      getMessage.innerHTML = "час вийшов";
    }
  }, 60000);
}

getBtn.addEventListener("click", atomBomb);
// Task 2
function startTimer() {
  const timerDisplay = document.getElementById("timerDisplay");
  const restartButton = document.getElementById("restartButton");

  let timeLeft = 30000; // 30 секунд у мс
  const interval = 10; // кожні 10 мс
  const animationThreshold = 10000; // 10 секунд у мс

  restartButton.disabled = true;
  timerDisplay.classList.remove("animate");

  const timer = setInterval(() => {
    timeLeft -= interval;

    if (timeLeft <= animationThreshold) {
      timerDisplay.classList.add("animate");
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "0.000";
      restartButton.disabled = false;
    } else {
      const seconds = (timeLeft / 1000).toFixed(3);
      timerDisplay.textContent = seconds;
    }
  }, interval);
}

// Починаємо одразу
startTimer();

// При натисканні на кнопку — перезапускаємо
document.getElementById("restartButton").addEventListener("click", startTimer);
