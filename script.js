let timeLeft = 25 * 60;
let timerId = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const minBtn = document.getElementById("minBtn");
const closeBtn = document.getElementById("closeBtn");

// Function to play a beep sound using Web Audio API
function playSound(frequency = 440, duration = 0.2) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
        startBtn.textContent = "start";
    } else {
        // Play start sound
        playSound(660, 0.15);
        
        timerId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerId);
                timerId = null;
                // Play end sound
                playSound(880, 0.5);
                alert("Time is up!");
            }
        }, 1000);
        startBtn.textContent = "pause";
    }
}

function restartTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 25 * 60;
    updateDisplay();
    startBtn.textContent = "start";
}

// Window Control Listeners
minBtn.addEventListener("click", () => {
    window.electronAPI.minimizeWindow();
});

closeBtn.addEventListener("click", () => {
    window.electronAPI.closeWindow();
});

startBtn.addEventListener("click", startTimer);
restartBtn.addEventListener("click", restartTimer);

updateDisplay();
