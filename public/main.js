import { createScrambleFromArray, generateScrambles } from "./scramble.js";
import * as timerDesk from "./timerDesk.js";
import * as timerPhone from "./timerPhone.js";
import * as timer from "./timer.js";
import * as comboBoxFunctions from "./comboBoxFunctionality.js";
import { scrambleCubeArray } from "./scrambleCube.js";
import { Cube } from "./rubiksCube.js";
import { Draw } from "./draw.js";
import { saveDataToLocalStorage } from "./filePersistance.js";
import * as table from "./table.js";

const canvas = document.getElementById("myCanvas");

if(localStorage.getItem("cb-puzzle") === null){
    localStorage.setItem("cb-puzzle", "3x3");
}

let moves = generateScrambles(localStorage.getItem("cb-puzzle"));
let scramble = createScrambleFromArray(moves);
let cube = scrambleCubeArray(moves, new Cube());
let draw = new Draw(cube, canvas, 23, 100, 2 , 5, 10);

let heightRatio = 1;
let widthRatio = 1.3;
canvas.height = canvas.width * heightRatio;
canvas.width = canvas.width * widthRatio;

draw.drawScramble();
table.fillTable();
table.pressRow();

document.getElementById("scramble").innerText = scramble;

function newScramble(){
    moves = generateScrambles(localStorage.getItem("cb-puzzle"));
    scramble = createScrambleFromArray(moves);
    document.getElementById("scramble").innerText = scramble;
}
function canvasDrawer(){
    cube = scrambleCubeArray(moves, new Cube());
    draw = new Draw(cube, canvas, 23, 100, 2 , 5, 10);

    draw.drawScramble();
}
function dataFill(){
    let data = {
        "time": document.getElementById("timer").innerText,
        "scramble": scramble,
        "cube": cube,
        "date": Date.now(),
        "plussTwo": false,
        "dnf": false,
        "type": document.querySelector('#comboBox-puzzleSelect #puzzle-name').innerText
    };

    saveDataToLocalStorage(data);
}
export function init(){
    dataFill();
    table.addRow();
    table.pressRow();

    newScramble();
    canvasDrawer();
}
export function initScrambleAndDraw(){
    newScramble();
    canvasDrawer();
}