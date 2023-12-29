let button = document.getElementsByClassName('combo-box')[0];
let options = document.getElementById('options');
let enabled = false;

function closeCB(){
    if(enabled){
        options.style.display = "none";
        enabled = false;
    }
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
    if(localStorage.getItem("cb-puzzle") === null){
        localStorage.setItem("cb-puzzle", "3x3");
        threeByThree();
    }
    else{
        switch(localStorage.getItem("cb-puzzle")){
            case "2x2":
                twoByTwo();
                break;
            case "3x3":
                threeByThree();
                break;
            case "4x4":
                fourByFour();
                break;
            case "5x5":
                fiveByFive();
                break;
            case "6x6":
                sixBySix();
                break;
            case "7x7":
                sevenBySeven();
                break;
        }
    }
}

function twoByTwo(){
    document.querySelector('#comboBox-puzzleSelect span').className = "icon-two";
    document.querySelector('#comboBox-puzzleSelect #puzzle-name').innerText = "2x2";
    options.style.display = "none";
    localStorage.setItem("cb-puzzle", "2x2");
    enabled = false;
}

function threeByThree(){
    document.querySelector('#comboBox-puzzleSelect span').className = "icon-three";
    document.querySelector('#comboBox-puzzleSelect #puzzle-name').innerText = "3x3";
    options.style.display = "none";
    localStorage.setItem("cb-puzzle", "3x3");
    enabled = false;
}

function fourByFour(){
    document.querySelector('#comboBox-puzzleSelect span').className = "icon-four";
    document.querySelector('#comboBox-puzzleSelect #puzzle-name').innerText = "4x4";
    options.style.display = "none";
    localStorage.setItem("cb-puzzle", "4x4");
    enabled = false;
}

function fiveByFive(){
    document.querySelector('#comboBox-puzzleSelect span').className = "icon-five";
    document.querySelector('#comboBox-puzzleSelect #puzzle-name').innerText = "5x5";
    options.style.display = "none";
    localStorage.setItem("cb-puzzle", "5x5");
    enabled = false;
}

function sixBySix(){
    document.querySelector('#comboBox-puzzleSelect span').className = "icon-six";
    document.querySelector('#comboBox-puzzleSelect #puzzle-name').innerText = "6x6";
    options.style.display = "none";
    localStorage.setItem("cb-puzzle", "6x6");
    enabled = false;
}

function sevenBySeven(){
    document.querySelector('#comboBox-puzzleSelect span').className = "icon-seven";
    document.querySelector('#comboBox-puzzleSelect #puzzle-name').innerText = "7x7";
    options.style.display = "none";
    localStorage.setItem("cb-puzzle", "7x7");
    enabled = false;
}
