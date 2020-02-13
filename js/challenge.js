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
        add1Button.addEventListener("click", increaseCounter); 
        minusButton.addEventListener("click", decrementCounter);
        heartButton.addEventListener("click", heartNum); 
 
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
    i = 0
   console.log("im in increaseCounter", time)
    counter.innerHTML = time   
   
   
} 

function decrementCounter(){
    --time 
    counter.innerHTML = time
    console.log("counter -1", time) 
    debugger
}


let arry = [] 
let i = 0 
function heartNum(e){  

    arry.push(time, "pushed", i)
   ++i 
   console.log(arry) 

}

}