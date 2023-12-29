import { initScrambleAndDraw } from "./main.js";

let button = document.getElementById('comboBox-puzzleSelect');
let options = document.getElementById('options');
let enabled = false;

function closeCB(){
    if(enabled){
        options.style.display = "none";
        enabled = false;
    }
}

button.onclick = function(){
    comboBoxOnOff();
}

function comboBoxOnOff(){
    if(!enabled){
        options.style.display = "block";
        document.addEventListener("click", closeCB());

        enabled = true;
    }else{
        options.style.display = "none";
        document.removeEventListener("click", closeCB());

        enabled = false;
    }
}

window.onload = function(){
    switch(localStorage.getItem("cb-puzzle")){
        case "2x2":
            nxn(2);
            break;
        case "3x3":
            nxn(3);
            break;
        case "4x4":
            nxn(4);
            break;
        case "5x5":
            nxn(5);
            break;
        case "6x6":
            nxn(6);
            break;
        case "7x7":
            nxn(7);
            break;
    }
    let aTags = document.querySelectorAll('#options a');

    Array.from(aTags).forEach((element, index) => {
        element.addEventListener('click', () => {
            nxn(index + 2);
        });
    });
}

function nxn(n){
    document.querySelector('#comboBox-puzzleSelect span').className = `icon-${n}`;
    document.querySelector('#comboBox-puzzleSelect #puzzle-name').innerText = `${n}x${n}`;
    options.style.display = "none";
    localStorage.setItem("cb-puzzle", `${n}x${n}`);
    initScrambleAndDraw();
    enabled = false;
}