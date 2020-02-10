document.addEventListener("DOMContentLoaded", function(){ 
    initializeCounter()
});

function initializeCounter(){ 
const counter = document.getElementById("counter") 
let numberOfCount = counter.innerText
let time = parseInt(numberOfCount)  
startCount(time)
}

function startCount(time){ 
    counter.innerHTML = time  
     timedCount(time) 
    debugger
}

function timedCount(time){
    //=> worked till 2 then got NaN. Looking at the scope chain I do not know why???
    time++
    setTimeout(function () { startCount(time) }, 1000); 
    t = setTimeout(timedCount, 1000);
}