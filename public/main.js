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
let moves;
let scramble;
let cube;
let draw;

if(localStorage.getItem("cb-puzzle-size") === null){
    localStorage.setItem("cb-puzzle-size", parseInt(3));
}

let heightRatio = 1;
let widthRatio = 1.3;
canvas.height = canvas.width * heightRatio;
canvas.width = canvas.width * widthRatio;

table.fillTable();
table.pressRow();

function newScramble(){
    moves = generateScrambles(parseInt(localStorage.getItem("cb-puzzle-size")));
    scramble = createScrambleFromArray(moves);
    document.getElementById("scramble").innerText = scramble;
}
function canvasDrawer(){
    cube = scrambleCubeArray(moves, new Cube());
    const sizeMap = {
        "2": 42,
        "3": 30,
        "4": 22,
        "5": 18,
        "6": 15,
        "7": 13
    };

    var cubeSize = sizeMap[localStorage.getItem("cb-puzzle-size")];

    draw = new Draw(cube, canvas, cubeSize, 100, 1 , 5, 10, 2, parseInt(localStorage.getItem("cb-puzzle-size")));

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
        "type": parseInt(localStorage.getItem("cb-puzzle-size"))
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