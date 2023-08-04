export function saveDataToLocalStorage(data){
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];
    a.push(data);
    console.log(a);
    localStorage.setItem('session', JSON.stringify(a));
}
