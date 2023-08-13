import { Draw } from "./draw.js";
import { deleteRow, dnfTable, plussTwoTable, pressRow } from "./table.js";

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

    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];

    if(a[localStorage.getItem("index")].plussTwo){
        document.getElementById("dialog-pluss-two").style.backgroundColor = "orange";
    }else{
        document.getElementById("dialog-pluss-two").style.backgroundColor = "#2F3032";
    }
    if(a[localStorage.getItem("index")].dnf){
        document.getElementById("dialog-dnf").style.backgroundColor = "red";
    }else{
        document.getElementById("dialog-dnf").style.backgroundColor = "#2F3032";
    }

    let draw = new Draw(cube, canvasDOM);
    
    draw.drawScramble();

    dialogDOM.showModal();
    
    document.getElementById("dialog-close").onclick = function(){
        document.getElementById("dialog").close();
        localStorage.removeItem("index");
    }

    document.getElementById("dialog-pluss-two").onclick = function(){
        plussTwoTable();
        pressRow();
    }

    document.getElementById("dialog-dnf").onclick = function(){
        dnfTable();
        pressRow();
    }

    document.getElementById("dialog-delete").onclick = function(){
        deleteRow();
        pressRow();
    }

}
export function plussTwoBTN(time, ao5, ao12, index){
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];
    if(!a[localStorage.getItem("index")].dnf){
        timerDOM.innerText = time;
        ao5DOM.innerText = ao5;
        ao12DOM.innerText = ao12;
    }

    if(a[index].plussTwo){
        document.getElementById("dialog-pluss-two").style.backgroundColor = "orange";
    }else{
        document.getElementById("dialog-pluss-two").style.backgroundColor = "#2F3032";
    }
}

export function dnfPopUp(time, ao5, ao12, index){
    timerDOM.innerText = time;
    ao5DOM.innerText = ao5;
    ao12DOM.innerText = ao12;

    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];

    if(a[index].dnf){
        document.getElementById("dialog-dnf").style.backgroundColor = "red";
    }else{
        document.getElementById("dialog-dnf").style.backgroundColor = "#2F3032";
    }
}

export function deleteBTN(){
    document.getElementById("dialog").close();
    localStorage.removeItem("index");
}