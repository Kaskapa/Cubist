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

button.onclick = function(e){
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
    nxn(parseInt(localStorage.getItem("cb-puzzle-size")));
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
    localStorage.setItem("cb-puzzle-size", n);
    initScrambleAndDraw();
    enabled = false;
}