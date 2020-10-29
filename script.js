const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let timer = {
    second: 0,
    minute: 0,
    hour: 0
}



start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);

let secondCounter;
let minuteCounter;
let hourCounter;

second.innerText = `0${timer.second}`;
minute.innerText = `0${timer.minute}`;
hour.innerText = `0${timer.hour}`;;

function initTimer() {
    timer.second = 0;
    timer.minute = 0;
    timer.hour = 0;
    second.innerText = `0${timer.second}`;
    minute.innerText = `0${timer.minute}`;
    hour.innerText = `0${timer.hour}`;;
};

initTimer();

function startTimer() {
    //seconds
    secondCounter = setInterval(() => {
        if (timer.second < 59) {
            timer.second++;
        } else {
            timer.second = 0
        }
        timer.second < 10 ? second.innerText = `0${timer.second}` : second.innerText = `${timer.second}`;
    }, 1000);


    //minutes
    minuteCounter = setInterval(() => {
        if (timer.minute < 59) {
            timer.minute++;
        } else {
            timer.minute = 0
        }
        timer.minute < 10 ? minute.innerText = `0${timer.minute}` : minute.innerText = `${timer.minute}`;
    }, 60000);

    //hours
    hourCounter = setInterval(() => {
        timer.hour++;
        timer.hour < 10 ? hour.innerText = `0${timer.hour}` : hour.innerText = `${timer.hour}`;
    }, 3600000);

    start.setAttribute('disabled', '')
}

function pauseTimer() {
    clearInterval(secondCounter);
    clearInterval(minuteCounter);
    clearInterval(hourCounter);
    start.removeAttribute('disabled');
}


function resetTimer() {
    initTimer();
    clearInterval(secondCounter);
    clearInterval(minuteCounter);
    clearInterval(hourCounter);
    start.removeAttribute('disabled');
}


