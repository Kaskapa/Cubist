let button = document.getElementById('session_cb');
let options = document.getElementById('session_options');
let enabled = false;

function closeCB(){
    if(enabled){
        options.style.display = "none";
        enabled = false;
    }
}

button.onclick = function(e){
    comboBoxOnOff();
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