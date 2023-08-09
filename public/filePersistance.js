export function saveDataToLocalStorage(data){
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];
    a.push(data);
    localStorage.setItem('session', JSON.stringify(a));
}
export function delteDataFromLocalStorage(index){
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];

    console.log(a);
    a.splice(index, 1);
    console.log(a);

    localStorage.setItem('session', JSON.stringify(a));
}
