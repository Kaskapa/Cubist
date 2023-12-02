let button = document.getElementsByClassName('combo-box')[0];
let options = document.getElementsByClassName('options')[0];
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
