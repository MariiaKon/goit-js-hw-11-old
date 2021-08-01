const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const input = document.querySelector('#date-selector');
const error = document.querySelector('.noError');
const seconds = document.querySelector('[data-seconds]');
const minutes = document.querySelector('[data-minutes]');
const hours = document.querySelector('[data-hours]');
const days = document.querySelector('[data-days]');
let interval;
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
input.addEventListener('change', chooseDate);

function startTimer() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    interval = setInterval(() => {setTimer()}, 1000);
};

function stopTimer () {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(interval);
};

function chooseDate() {
    Date.parse(input.value) <= Date.now()
        ? error.classList.add('error')
        : error.classList.remove('error');
    
    setTimer();
};

function setTimer() {
    let parsedDays;
    let parsedHours;
    let parsedMinutes;
    let parsedSeconds = Math.floor((Date.parse(input.value) - Date.now()) / 1000);
    
    if (parsedSeconds > 60) {
        parsedMinutes = Math.floor(parsedSeconds / 60);
        parsedSeconds = parsedSeconds - parsedMinutes * 60;
    };
    if (parsedMinutes > 60) {
        parsedHours = Math.floor(parsedMinutes / 60);
        parsedMinutes = parsedMinutes - parsedHours * 60;
    };
    if (parsedHours > 24) {
        parsedDays = Math.floor(parsedHours / 24);
        parsedHours = parsedHours - Math.floor(parsedHours / 24) * 24;
    };
    if (parsedDays === undefined) {
        parsedDays = 0;
    }
    if (parsedHours === undefined) {
        parsedHours = 0;
    }
    if (parsedMinutes === undefined) {
        parsedMinutes = 0;
    }
     if (parsedSeconds === undefined || parsedSeconds === NaN || parsedSeconds < 0) {
        parsedSeconds = 0;
    }
    if (parsedDays === 0 && parsedHours === 0 && parsedMinutes === 0 && parsedSeconds === 0) {
        stopTimer();
    }
    days.textContent = parsedDays;
    hours.textContent = parsedHours;
    minutes.textContent = parsedMinutes;
    seconds.textContent = parsedSeconds;
};