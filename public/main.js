import { createScrambleFromArray, generateScramble } from "./scramble.js";
import * as timerDesk from "./timerDesk.js";
import * as timerPhone from "./timerPhone.js";
import * as timer from "./timer.js";
import { scrambleCubeArray } from "./scrambleCube.js";
import { Cube } from "./rubiksCube.js";
import { Draw } from "./draw.js";
import { saveDataToLocalStorage } from "./filePersistance.js";
import * as table from "./table.js";

const canvas = document.getElementById("myCanvas");

let randomNumber = Math.floor(Math.random() * (25 - 20) ) + 20;
let moves = generateScramble(randomNumber);
let scramble = createScrambleFromArray(moves);
let cube = scrambleCubeArray(moves, new Cube());
let draw = new Draw(cube, canvas, 30, 100, 2 , 5, 10);

let heightRatio = 1;
let widthRatio = 1.3;
canvas.height = canvas.width * heightRatio;
canvas.width = canvas.width * widthRatio;

draw.drawScramble();
table.fillTable();
table.pressRow();

document.getElementById("scramble").innerText = scramble;

document.addEventListener("keydown", timerDesk.timeEventHandler);
document.addEventListener("keydown", function(){
    if(timer.state.started){
        init();
    }
})

document.getElementById("timer").addEventListener("touchstart", timerPhone.timeEventHandler);
document.getElementById("timer").addEventListener("touchstart", function(){
    if(timer.state.started){
        init();
    }
})


function newScramble(){
    randomNumber = Math.floor(Math.random() * (25 - 20) ) + 20;
    moves = generateScramble(randomNumber);
    scramble = createScrambleFromArray(moves);
    document.getElementById("scramble").innerText = scramble;
}
function canvasDrawer(){
    cube = scrambleCubeArray(moves, new Cube());
    draw = new Draw(cube, canvas);

    draw.drawScramble();
}
function dataFill(){
    let data = {
        "time": document.getElementById("timer").innerText,
        "scramble": scramble,
        "cube": cube,
        "date": Date.now(),
        "plussTwo": false,
        "dnf": false
    };

    saveDataToLocalStorage(data);
}
function init(){
    dataFill();
    table.addRow();
    table.pressRow();

    newScramble();
    canvasDrawer();
}