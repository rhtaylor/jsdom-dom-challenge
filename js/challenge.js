document.addEventListener("DOMContentLoaded", function(){ 
    initializeCounter()
});

function initializeCounter(){  
let i = 0;

const counter = document.getElementById("counter"); 
const add1Button = document.getElementById("plus");
const minusButton = document.getElementById("minus"); 
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likeBox = document.querySelector(".likes");

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
        setInterval(function () { increaseCounter() }, 20000); 
  
} 

         
    function increaseCounter() {    
        ++time;
         i = 0;
    console.log("I control the count, im in increaseCounter", time, "i //=>", i)
        counter.innerHTML = time   
   
   
} 

    function decrementCounter(){
        --time 
        counter.innerHTML = time
        console.log("counter -1", time) 
        debugger
}


let arryOfLi = [] 

        function heartNum(e){
                if (e){ i++}
            let likesDiv =  document.querySelector(".likes")
            console.log(likesDiv) 
                // stoping the flow of logic to prevent duplcate li for same number    
            let liAlreadyMade = document.querySelector(`.li${time}`); 
            
            console.log("let logic flow ", liAlreadyMade)
            if (liAlreadyMade) { 
                
                liAlreadyMade.innerText = `${time} liked ${i} times` 
                console.log("something not working", i)
            } else {
                
                let liForDiv = document.createElement("li");
             
            liForDiv.setAttribute("class", `li${time}`); 
            likesDiv.appendChild(liForDiv); 
            let LisInDiv =  document.querySelector(`.li${time}`); 
            arryOfLi.push(LisInDiv);
            liForDiv.innerHTML = `${time} liked ${i} times`;
            }
        }


}