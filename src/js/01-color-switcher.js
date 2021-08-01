; const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('.colorSwitcherBody');

startBtn.addEventListener('click', startRandom);
stopBtn.addEventListener('click', stopRandom);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startRandom() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function stopRandom () {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(interval)
};