let startDate;
let timeoutID = 0;
let time;
export let started = false;
export let spaceUp = 0;

export function start(){
    if(!started){
        startDate = new Date();
        startTimer();
        started = true;
    }
}
export function stop(){
    if(started){
        clearTimeout(timeoutID);
        started = false;
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

    if(seconds < 10){
        document.getElementById("seconds").innerText = "0" + seconds;
    }else{
        document.getElementById("seconds").innerText = seconds;
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

export function startHandler(event){
    if(event.code === "Space" && spaceUp < 1){
        start();
        spaceUp ++;
        document.addEventListener("keydown", stopHandler);
        document.removeEventListener("keyup", startHandler);
        
    }else if(spaceUp == 1){
        spaceUp = 0;
    }
    document.getElementById("timer").style.color = "black";
}
export function stopHandler(){
    if(started){
        stop();
        document.removeEventListener("keydown", stopHandler);
        document.getElementById("timer").style.color = "red";
    }
}
