import * as popup from "./popup.js"

let data = JSON.parse(localStorage.getItem('session')) || [];

export function fillTable() {
    for(let i = 0; i < data.length; i++){
        let ao5 = "";
        let arr = JSON.parse(localStorage.getItem('session')) || [];
    
        if(i >= 4){
            let ao5Num = 0;
            for(let j = i; j > i - 5; j--){
                ao5Num += Number(arr[j].time);
            }
            ao5 = (Math.round((ao5Num/5) * 1000) / 1000) + "";
        }

        let table = document.getElementById("table");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = i + 1;
        cell2.innerHTML = data[i].time;
        cell3.innerHTML = ao5;
    }
}

export function addRow(){
    let ao5 = "";
    let arr = JSON.parse(localStorage.getItem('session')) || [];

    if(arr.length >= 4){
        let ao5Num = 0;
        for(let i = arr.length - 1; i >= arr.length - 5; i--){
            ao5Num += Number(arr[i].time);
        }
        ao5 = (Math.round((ao5Num/5) * 1000) / 1000) + "";
    }

    data = JSON.parse(localStorage.getItem('session')) || [];
    let table = document.getElementById("table");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = data.length;
    cell2.innerHTML = data[data.length-1].time;
    cell3.innerHTML = ao5;
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
            
            popup.openDialog(scramble, time, cube);
        });
    });
}

export function deleteRow(){
    
}