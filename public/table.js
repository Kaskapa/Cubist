let data = JSON.parse(localStorage.getItem('session')) || [];

export function fillTable() {
    for(let i = 0; i < data.length; i++){
        let table = document.getElementById("table");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = table.rows.length - 1;
        cell2.innerHTML = data[i].time;
        cell3.innerHTML = data[i].ao5;
    }
}

export function addRow(){
    data = JSON.parse(localStorage.getItem('session')) || [];
    let table = document.getElementById("table");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = table.rows.length - 1;
    cell2.innerHTML = data[data.length-1].time;
    cell3.innerHTML = data[data.length-1].ao5;

    console.log(data[data.length-1].time);
}
