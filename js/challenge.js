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
let time = parseInt(numberOfCount, 10);  
startCount(time)
changeCounterDom()
    function changeCounterDom(time) {
        add1Button.addEventListener("click", () => { increaseCounter(event, time) }) ;
        minusButton.onclick =  increaseCounter(event, time); 
             numberOfCount = time
        heartButton.onclick = function () { console.log("Heart button pushed") }
        
    }

}

function startCount(time){  
    
    counter.innerHTML = time  
     timedCount(time) 
    
} 

function timedCount(time){
    time++ 
    console.log(time)
    setTimeout(function () { startCount(time) }, 4000); 
   // t = setTimeout(timedCount, 1000);
} 

         
function increaseCounter(event, time){  
console.log(event, "Should be time//=>", time)  
debugger
   ++time  
   console.log(time)
   numberOfCount = time  
   
   
} 

function subtract(time){
    console.log(time)
}