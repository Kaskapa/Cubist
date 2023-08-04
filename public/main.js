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

document.addEventListener("keyup", timer.startHandler);
document.addEventListener("keydown", function(e){
    if(e.repeat){
        return;
    }
    if(e.code === "Space" && !timer.started){
        document.getElementById("timer").style.color = "green";
    }
    else if(e.code === "Space"){
        newScramble();
        canvasDrawer();
        dataFill();
        table.addRow();
    }
})
document.getElementById("scramble").innerText = scramble;

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
        "nr": (JSON.parse(localStorage.getItem('session')) || []).length + 1,
        "time": document.getElementById("timer").innerText
    };

    saveDataToLocalStorage(data);
}