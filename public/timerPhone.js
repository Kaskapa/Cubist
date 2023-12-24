import { start, stop, state } from './timer.js';

let timoutBeforeStart = 0;
const desiredTime = 90;
let myInterval;

export function timeEventHandler(){
    clearInterval(myInterval);
    myInterval = setInterval(function(){
        if(timoutBeforeStart < desiredTime && state.spaceUp == 0){
            document.getElementById("timer").style.color = "orange";
            console.log("Whut");
        }
        if(timoutBeforeStart == desiredTime){
            document.getElementById("timer").addEventListener("touchend", startHandler);
            document.getElementById("timer").removeEventListener("touchstart", timeEventHandler);
            document.getElementById("timer").style.color = "green";
            timoutBeforeStart = 0;

            clearInterval(myInterval);
        }
        timoutBeforeStart++;
    }, 0)
}

document.getElementById("timer").addEventListener("touchend", function(){
    timoutBeforeStart = 0;
    clearInterval(myInterval);
    if(timoutBeforeStart < desiredTime){
        document.getElementById("timer").style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
    }
})

function startHandler(){
    if(state.spaceUp < 1){
        start();
        state.spaceUp++;
        document.getElementById("timer").addEventListener("touchstart", stopHandler);
        document.getElementById("timer").removeEventListener("touchend", startHandler);

    }else if(state.spaceUp == 1){
        state.spaceUp = 0;
        document.getElementById("timer").addEventListener("touchstart", timeEventHandler);
        document.getElementById("timer").removeEventListener("touchend", startHandler);
    }
    document.getElementById("timer").style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
}
function stopHandler(){
    if(state.started){
        stop();
        document.getElementById("timer").addEventListener("touchend", startHandler);
        document.getElementById("timer").style.color = "red";

        document.getElementById("timer").removeEventListener("touchstart", stopHandler);
    }
}