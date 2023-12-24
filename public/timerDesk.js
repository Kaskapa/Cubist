import { start, stop, state } from './timer.js';

let timoutBeforeStart = 0;
const desiredTime = 1;

export function timeEventHandler(e){
    if(e.code === "Space"){
        setTimeout(function(){
            if(timoutBeforeStart < desiredTime && state.spaceUp == 0){
                document.getElementById("timer").style.color = "orange";
            }
            if(timoutBeforeStart == desiredTime){
                document.addEventListener("keyup", startHandler);
                document.removeEventListener("keydown", timeEventHandler);
            }
            timoutBeforeStart++;
        }, 0)
    }
}

document.addEventListener("keydown", function(e){
    if(e.code === "Space" && state.spaceUp == 0 && timoutBeforeStart == desiredTime){
        document.getElementById("timer").style.color = "green";
    }
})

document.addEventListener("keyup", function(){
    timoutBeforeStart = 0;
    if(timoutBeforeStart < desiredTime){
        document.getElementById("timer").style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
    }
})

function startHandler(event){
    if(event.code === "Space" && state.spaceUp < 1){
        start();
        state.spaceUp++;
        document.addEventListener("keydown", stopHandler);
        document.removeEventListener("keyup", startHandler);

    }else if(state.spaceUp == 1){
        state.spaceUp = 0;
        document.addEventListener("keydown", timeEventHandler);
        document.removeEventListener("keyup", startHandler);
    }
    document.getElementById("timer").style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
}
function stopHandler(){
    if(state.started){
        stop();
        document.addEventListener("keyup", startHandler);
        document.getElementById("timer").style.color = "red";

        document.removeEventListener("keydown", stopHandler);
    }
}