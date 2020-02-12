document.addEventListener("DOMContentLoaded", function(){ 
    initializeCounter()
});

function initializeCounter(){ 
const counter = document.getElementById("counter"); 
const add1Button = document.getElementById("plus");
const minusButton = document.getElementById("minus"); 
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
let numberOfCount = counter.innerText; 
console.log(numberOfCount)
let time = parseInt(numberOfCount, 10);  
startCount(time) 

    console.log("im in initiazize", time)
        add1Button.addEventListener("click", increaseCounter) ; 
        
        //add1Button.onclick = increaseCounter(event, time); 
 
function startCount(){  
    counter.innerHTML = time  
     timedCount() 
    
} 

function timedCount(){
    console.log("im in timedCount", time)
    setInterval(function () { increaseCounter() }, 5000); 
   // t = setTimeout(timedCount, 1000);
} 

         
function increaseCounter() {    
    ++time  
   console.log("im in increaseCounter", time)
    counter.innerHTML = time   
   
   
} 


}