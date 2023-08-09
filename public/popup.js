import { Draw } from "./draw.js";

let dialogDOM = document.getElementById("dialog");
let scrambleDOM = document.getElementById("dialog-scramble");
let timerDOM = document.getElementById("dialog-timer");
let canvasDOM = document.getElementById("dialog-canvas");

export function openDialog(scramble, time, cube){
    scrambleDOM.innerText = scramble;
    timerDOM.innerText = time;

    let draw = new Draw(cube, canvasDOM);
    
    draw.drawScramble();

    dialogDOM.showModal();
    
    document.getElementById("dialog-close").onclick = function(){
        document.getElementById("dialog").close();
    }
}
