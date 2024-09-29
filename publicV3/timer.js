let startDate;
let timeoutID = 0;
let time;
let _started = false;
let _spaceUp = 0;

export const state = {
    get started() { return _started; },
    set started(value) { _started = value; },
    get spaceUp() { return _spaceUp; },
    set spaceUp(value) { _spaceUp = value; },
};

export function start(){
    if(!state.started){
        startDate = new Date();
        startTimer();
        state.started = true;
    }
}

export function stop(){
    if(state.started){
        clearTimeout(timeoutID);
        state.started = false;
    }
}

function startTimer () {
    let current = new Date();
    time = (current - startDate);

    let timeMS = time;

    let ms = timeMS % 1000;
    timeMS = (timeMS - ms) / 1000;
    let seconds = timeMS % 60;
    timeMS = (timeMS - seconds) / 60;
    let mins = timeMS % 60;

    if(seconds < 10 && seconds > 0){
        document.getElementById("seconds").innerText = "0" + seconds;
    }else if(seconds > 0){
        document.getElementById("seconds").innerText = seconds;
    }else{
        document.getElementById("seconds").innerText = "00";
    }


    if(mins > 0 && mins < 10){
        document.getElementById("minutes").innerText = "0" + mins + ":";
    }else if(mins > 0){
        document.getElementById("minutes").innerText = mins + ":";
    }else{
        document.getElementById("minutes").innerText = "";
    }

    if(ms < 10){
        document.getElementById("tens").innerText = "00" + ms;
    }
    else if(ms < 100){
        document.getElementById("tens").innerText = "0" + ms;
    }else{
        document.getElementById("tens").innerText = ms;
    }

    timeoutID = setTimeout(startTimer, 0);
}