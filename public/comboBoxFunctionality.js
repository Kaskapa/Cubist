let button = document.querySelector('main .tools .main-tool-idea-container .dropdown button');
let options = document.getElementsByClassName('options')[0];
let enabled = false;

function comboBoxOnOff(){
    if(!enabled){
        options.style.display = "block";
        enabled = true;
    }else{
        options.style.display = "none";
        enabled = false;
    }
}

document.onclick = function(){
    if(enabled){
        options.style.display = "none";
        enabled = false;
    }
}