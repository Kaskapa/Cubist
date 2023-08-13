import * as popup from "./popup.js"
import * as fileManager from "./filePersistance.js"

let data = JSON.parse(localStorage.getItem('session')) || [];

export function fillTable() {
    for(let i = 0; i < data.length; i++){
        let table = document.getElementById("table");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.innerHTML = i + 1;
        cell2.innerHTML = data[i].time;
        if(data[i].dnf){
            cell2.innerHTML = "DNF";
        }

    }
}

export function addRow(){
    data = JSON.parse(localStorage.getItem('session')) || [];
    let table = document.getElementById("table");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = data.length;
    cell2.innerHTML = data[data.length-1].time;
}

export function pressRow(){
    let rows = document.getElementsByTagName("tr");
    data = JSON.parse(localStorage.getItem('session')) || [];

    Array.from(rows).forEach((row, index) => {
        row.addEventListener('click', () => {
            if(index == 0){
                return;
            }
            let time = "DNF";
            let ao5 = "";
            let ao12 = "";

            if(!data[table.rows.length - index - 1].dnf){
                time = data[table.rows.length - index - 1].time;
                ao5 = calcAONum(table.rows.length - index - 1, 5);
                ao12 = calcAONum(table.rows.length - index - 1, 12);
            }

            let scramble = data[table.rows.length - index - 1].scramble;
            let cube = data[table.rows.length - index - 1].cube;
            let date = data[table.rows.length - index - 1].date;
            let today = new Date(date);
            today = today.toLocaleDateString();

            localStorage.setItem("index", table.rows.length - index - 1);

            popup.openDialog(scramble, time, cube, ao5, ao12, today);
        });
    });
}

export function deleteRow(){
    fileManager.deleteDataFromLocalStorage(localStorage.getItem("index"));
    data = JSON.parse(localStorage.getItem('session')) || [];
    popup.deleteBTN();

    deleteAllRows();
    fillTable();
}

function calcAONum(index, aoIndex){
    let ao = "";
    let arr = JSON.parse(localStorage.getItem('session')) || [];

    if(index >= aoIndex-1){
        let aoNum = 0;
        for(let i = index; i > index - aoIndex; i--){
            aoNum += Number(arr[i].time);
        }
        ao = (Math.round((aoNum/aoIndex) * 1000) / 1000) + "";
    }

    return ao;
}

export function plussTwoTable(){
    fileManager.plussTwoFileManager(localStorage.getItem("index"));

    data = JSON.parse(localStorage.getItem('session')) || [];
    let ao5 = calcAONum(localStorage.getItem("index"), 5);
    let ao12 = calcAONum(localStorage.getItem("index"), 12);
    let time = data[localStorage.getItem("index")].time;
    

    popup.plussTwoBTN(time, ao5, ao12, localStorage.getItem("index"));

    deleteAllRows();
    fillTable();
}

export function dnfTable(){
    fileManager.dnfFileManager(localStorage.getItem("index"));
    data = JSON.parse(localStorage.getItem('session')) || [];

    let time = "DNF";
    let ao5 = "";
    let ao12 = "";

    if(!data[localStorage.getItem("index")].dnf){
        time = data[localStorage.getItem("index")].time;
        ao5 = calcAONum(localStorage.getItem("index"), 5);
        ao12 = calcAONum(localStorage.getItem("index"), 12);
    }

    popup.dnfPopUp(time, ao5, ao12, localStorage.getItem("index"));

    deleteAllRows();
    fillTable();
}

function deleteAllRows(){
    let table = document.getElementById("table");

    let rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}