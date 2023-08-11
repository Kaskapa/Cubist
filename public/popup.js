import { Draw } from "./draw.js";

let dialogDOM = document.getElementById("dialog");
let scrambleDOM = document.getElementById("dialog-scramble");
let timerDOM = document.getElementById("dialog-timer");
let canvasDOM = document.getElementById("dialog-canvas");
let ao5DOM = document.getElementById("dialog-ao5-time");
let ao12DOM = document.getElementById("dialog-ao12-time");
let dateDOM = document.getElementById("dialog-date");

export function openDialog(scramble, time, cube, ao5, ao12, date){
    scrambleDOM.innerText = scramble;
    timerDOM.innerText = time;
    ao5DOM.innerText = ao5;
    ao12DOM.innerText = ao12;
    dateDOM.innerText = date + "";

    let draw = new Draw(cube, canvasDOM);
    
    draw.drawScramble();

    dialogDOM.showModal();
    
    document.getElementById("dialog-close").onclick = function(){
        document.getElementById("dialog").close();
    }
}
