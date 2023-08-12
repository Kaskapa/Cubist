export function saveDataToLocalStorage(data){
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];
    a.push(data);
    localStorage.setItem('session', JSON.stringify(a));
}
export function deleteDataFromLocalStorage(index){
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];

    a.splice(index, 1);

    localStorage.setItem('session', JSON.stringify(a));
}
export function plussTwoFileManager(index){
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];

   if(a[index].plussTwo){
    a[index].time = (Math.round((Number(a[index].time) - 2) * 1000) / 1000) + "";
    a[index].plussTwo = false;
   }else{
    a[index].time = (Math.round((Number(a[index].time) + 2) * 1000) / 1000) + "";
    a[index].plussTwo = true;
   }

    localStorage.setItem('session', JSON.stringify(a));
}
