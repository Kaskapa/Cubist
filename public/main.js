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
let moves, scramble, cube, draw;

if(localStorage.getItem("cb-puzzle-size") === null){
    localStorage.setItem("cb-puzzle-size", parseInt(3));
}

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

let data = [];

for(let j = 0; j < 100; j++){
    for (let i = 0; i < 1_000; i++) {
        initScrambleAndDraw();

        data.push(
            [
                scramble,
                cube.cube.map(e => e.map(r => r.join("")).join(" ")).join("|")
            ]
        )

    }
}

let csvContent = ''

data.forEach(row => {
  csvContent += row.join(';') + '\n'
})

const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
const objUrl = URL.createObjectURL(blob)

const link = document.createElement('a')
link.setAttribute('href', objUrl)
link.setAttribute('download', 'File.csv')
link.textContent = 'Click to Download'

document.querySelector('body').append(link)

console.log(csvContent)

export function initScrambleAndDraw(){
    newScramble();
    canvasDrawer();
}