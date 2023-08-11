import * as popup from "./popup.js"

let data = JSON.parse(localStorage.getItem('session')) || [];

export function fillTable() {
    for(let i = 0; i < data.length; i++){
        let table = document.getElementById("table");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.innerHTML = i + 1;
        cell2.innerHTML = data[i].time;
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
            let scramble = data[table.rows.length - index - 1].scramble;
            let time = data[table.rows.length - index - 1].time;
            let cube = data[table.rows.length - index - 1].cube;
            let date = data[table.rows.length - index - 1].date;
            let today = new Date(date);
            today = today.toLocaleDateString();
            let ao5 = calcAONum(table.rows.length - index - 1, 5);
            let ao12 = calcAONum(table.rows.length - index - 1, 12);


            popup.openDialog(scramble, time, cube, ao5, ao12, today);
        });
    });
}

export function deleteRow(){
    
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