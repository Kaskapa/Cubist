let startDate;
let timeoutID = 0;
let time;
export let started = false, spaceUp = 0;


function start(){
    if(!started){
        startDate = new Date();
        startTimer();
        started = true;
    }
}
function stop(){
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

    
    document.getElementById("seconds").innerText = seconds;
    

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

let timoutBeforeStart = 0;
const desiredTime = 10;

export function timeEventHandler(){
    
    setTimeout(function(){
        if(timoutBeforeStart < desiredTime && spaceUp == 0){
            document.getElementById("timer").style.color = "orange";
        }
        if(timoutBeforeStart == desiredTime){
            document.getElementById("timer").addEventListener("touchend", startHandler);
            document.getElementById("timer").removeEventListener("touchstart", timeEventHandler);
        }
        timoutBeforeStart++;
    }, 0)
    
}

document.getElementById("timer").addEventListener("touchstart", function(e){
    if(spaceUp == 0 && timoutBeforeStart == desiredTime){
        document.getElementById("timer").style.color = "green";
    }
})

document.getElementById("timer").addEventListener("touchend", function(){
    timoutBeforeStart = 0;
    if(timoutBeforeStart < desiredTime){
        document.getElementById("timer").style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
    }
})

function startHandler(){
    if(spaceUp < 1){
        start();
        spaceUp++;
        document.getElementById("timer").addEventListener("touchstart", stopHandler);
        document.getElementById("timer").removeEventListener("touchend", startHandler);
        
    }else if(spaceUp == 1){
        spaceUp = 0;
        document.getElementById("timer").addEventListener("touchstart", timeEventHandler);
        document.getElementById("timer").removeEventListener("touchend", startHandler);
    }
    document.getElementById("timer").style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
}
function stopHandler(){
    if(started){
        stop();
        document.getElementById("timer").addEventListener("touchend", startHandler);
        document.getElementById("timer").style.color = "red";
        
        document.getElementById("timer").removeEventListener("touchstart", stopHandler);
    }
}