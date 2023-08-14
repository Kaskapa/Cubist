import { createScrambleFromArray, generateScramble } from "./scramble.js";
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
let draw = new Draw(cube, canvas);

draw.drawScramble();
table.fillTable();
table.pressRow();

document.getElementById("scramble").innerText = scramble;

document.addEventListener("keydown", timer.timeEventHandler);
document.addEventListener("keydown", function(){
    if(timer.started){
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