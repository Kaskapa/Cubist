import * as timer from "./timer.js";

let time = 0;

document.addEventListener("keydown", timeEventHandler);

function timeEventHandler(e){
    if(e.code === "Space"){
        setTimeout(function(){
            console.log(time);
            if(time < 10 && timer.spaceUp == 0){
                document.getElementById("timer").style.color = "orange";
            }

            if(time == 10){
                document.addEventListener("keyup", timer.startHandler);
                document.addEventListener("keydown", function(e){
                    if(e.code === "Space" && timer.spaceUp == 0){
                        document.getElementById("timer").style.color = "green";
                    }
                })
            }
            time++;
        }, 0)
    }
}

document.addEventListener("keyup", function(){
    if(timer.spaceUp == 1){
        time = 0;
    }
})