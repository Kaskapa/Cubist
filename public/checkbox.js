let checkbox = document.getElementById("checkbox");

checkbox.addEventListener("keyup", function(event){
    event.preventDefault()
});

checkbox.onclick = function(){
    if(checkbox.checked){
        document.documentElement.style.setProperty('--background', '#F0F5F9');
        document.documentElement.style.setProperty('--font-color', 'black');
        document.documentElement.style.setProperty('--tool-color', '#ECF1F4');

        document.getElementById("timer").style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color');

    }else{
        document.documentElement.style.setProperty('--background', '#0A0B0C');
        document.documentElement.style.setProperty('--font-color', 'white');
        document.documentElement.style.setProperty('--tool-color', '#12151B');

        document.getElementById("timer").style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color');
    }
}

