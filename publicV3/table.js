import * as popup from "./popup.js"
import * as fileManager from "./filePersistance.js"

let data = JSON.parse(localStorage.getItem('session')) || [];

export function fillTable() {
    for(let i = 0; i < data.length; i++){
        let table = document.getElementById("table");
        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = i + 1;
        cell2.innerHTML = data[i].time;
        if(data[i].dnf){
            cell2.innerHTML = "DNF";
        }
        cell3.innerHTML = calcAONum(i, 5);
        cell4.innerHTML = calcAONum(i, 12);
    }
}
export function addRow(){
    data = JSON.parse(localStorage.getItem('session')) || [];
    let table = document.getElementById("table");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = data.length;
    cell2.innerHTML = data[data.length-1].time;
    cell3.innerHTML = calcAONum(data.length-1, 5);
    cell4.innerHTML = calcAONum(data.length-1, 12);
}
export function pressRow(){
    let rows = document.getElementsByTagName("tr");
    data = JSON.parse(localStorage.getItem('session')) || [];

    Array.from(rows).forEach((row, index) => {
        row.addEventListener('click', () => {
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

            popup.openDialog(scramble, time, cube, ao5, ao12, today, data[table.rows.length - index - 1].type);
        });
    });
}
function convertTimeStringToMilliseconds(timeString) {
    if (typeof timeString !== 'string') {
        throw new Error('Input must be a string' + timeString);
    }

    const time = timeString.split(":");
    let totalMilliseconds = 0;
    if (time.length === 1) {
        totalMilliseconds = time[0] * 1000;
    } else if (time.length === 2) {
        totalMilliseconds = time[0] * 60000 + time[1] * 1000;
    } else if (time.length === 3) {
        totalMilliseconds = time[0] * 3600000 + time[1] * 60000 + time[2] * 1000;
    }

    return totalMilliseconds;
}
function convertMililisecondsToTimeString(milliseconds) {
    let timeMS = milliseconds;

    let ms = timeMS % 1000;
    timeMS = (timeMS - ms) / 1000;
    let seconds = timeMS % 60;
    timeMS = (timeMS - seconds) / 60;
    let mins = timeMS % 60;

    let timeString = "";

    if(mins > 0 && mins < 10){
        timeString += "0" + mins + ":";
    }else if(mins > 0){
        timeString += mins + ":";
    }else{
        timeString += "";
    }

    if(seconds < 10 && seconds > 0){
        timeString += "0" + seconds + ".";
    }else if(seconds > 0){
        timeString += seconds+ ".";
    }else{
        timeString += "00.";
    }

    if(ms < 10 && ms > 0){
        timeString += "00" + ms;
    }
    else if(ms < 100){
        timeString += "0" + ms;
    }else{
        timeString += ms;
    }

    return timeString;
}
function calcAONum(index, aoIndex){
    let ao = 0;
    let arr = JSON.parse(localStorage.getItem('session')) || [];

    if(index >= aoIndex-1){

        let maxDnf = 0;
        let maxMin = 0;

        let dnfNumber = dnfNum(arr, index, aoIndex);

        if(aoIndex < 5){
            maxDnf = 1;
            maxMin = 0;
        }else if(aoIndex < 12){
            maxDnf = 2;
            maxMin = 1;
        }else if(aoIndex < 40 && aoIndex < 24){
            maxDnf = 2;
            maxMin = Math.floor(aoIndex/12);
        }else if(aoIndex < 40){
            maxDnf = Math.floor(aoIndex/12);
            maxMin = Math.floor(aoIndex/12);
        }else if(aoIndex >= 40){
            maxDnf = Math.floor(aoIndex/20);
            maxMin = Math.floor(aoIndex/20);
        }

        let aoNum = 0;
        let dnfCount = 0;

        for(let i = 1; i <= maxMin; i++){
            arr = removeMin(arr, index, aoIndex);
            arr = removeMax(arr, index, aoIndex);
        }

        for(let i = index; i > index - aoIndex; i--){
            let max = convertTimeStringToMilliseconds(arr[i].time + "");
            if(arr[i].dnf && convertTimeStringToMilliseconds(arr[i].time + "") == 0){
                dnfCount++;
                max = 0;
            }else if(arr[i].dnf){
                dnfCount++;
                max = dnfNumber;
            }
            if(dnfCount == maxDnf){
                return "DNF";
            }

            aoNum += max;
        }

        ao = Math.round(Math.round((aoNum/(aoIndex - (maxMin * 2))) * 1000) / 1000);
    }
    if(ao == 0){
        return "";
    }
    return convertMililisecondsToTimeString(ao);
}
function dnfNum(arr, index, aoIndex){
    let max = convertTimeStringToMilliseconds(arr[index].time);
    for(let i = index; i > index - aoIndex; i--){
        if(max < convertTimeStringToMilliseconds(arr[i].time + "")){
            max = convertTimeStringToMilliseconds(arr[i].time + "");
        }
    }
    return max;
}
function removeMax(arr, index, aoIndex){
    let max = index;
    for(let i = index; i > index - aoIndex; i--){
        if(convertTimeStringToMilliseconds(arr[max].time + "") < convertTimeStringToMilliseconds(arr[i].time + "") && convertTimeStringToMilliseconds(arr[i].time + "") != 0){
            max = i;
        }
    }
    arr[max].time = 0;
    return arr;
}
function removeMin(arr, index, aoIndex){
    let min = index;
    for(let i = index; i > index - aoIndex; i--){
        if(convertTimeStringToMilliseconds(arr[min].time + "") > convertTimeStringToMilliseconds(arr[i].time + "") && !arr[i].dnf && convertTimeStringToMilliseconds(arr[i].time + "") != 0){
            min = i;
        }
    }
    arr[min].time = 0;
    return arr;
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
    const table = document.getElementById("tableBody");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}
export function deleteRow(){
    fileManager.deleteDataFromLocalStorage(localStorage.getItem("index"));
    data = JSON.parse(localStorage.getItem('session')) || [];
    popup.deleteBTN();

    deleteAllRows();
    fillTable();
}