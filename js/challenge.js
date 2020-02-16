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
let timez = startCount(time) 

    console.log("im in initiazize", time)
        add1Button.addEventListener("click", increaseCounter); 
        minusButton.addEventListener("click", decrementCounter);
        heartButton.addEventListener("click", heartNum); 
 
    function startCount(){  
        counter.innerHTML = time  
       return timedCount() 
         
} 

    function timedCount(){
        console.log("i was called")


        return setInterval(function () { increaseCounter() }, 3000);  
        
        
  
} 

         
    function increaseCounter() {    
        console.log("I was called after startCounter was called")
        ++time;
         i = 0;
    console.log("I control the count, im in increaseCounter", time, "i //=>", i)
        counter.innerHTML = time   
   
   
} 

    function decrementCounter(){
        --time 
        counter.innerHTML = time
        console.log("counter -1", time) 
        
}




        function heartNum(e){
                if (e){ i++}
            let likesDiv =  document.querySelector(".likes")
            
            let liAlreadyMade = document.querySelector(`.li${time}`); 
            
            if (liAlreadyMade) { 
                let htext = liAlreadyMade.innerHTML; 
                let pulledNumber = htext.match(/liked \d+/)  
                let j = pulledNumber[0]  
                let jnum = j[j.length - 1]
                jnum ++
               
                liAlreadyMade.innerText = `${time} liked ${jnum} times` 
                
            } else {
                
                let liForDiv = document.createElement("li");
             
            liForDiv.setAttribute("class", `li${time}`); 
            likesDiv.appendChild(liForDiv); 
            liForDiv.innerHTML = `${time} liked ${i} times`;
            }
        }

        pauseButton.addEventListener("click", function(){
            if (pauseButton.innerText == "pause"){
            clearInterval(timez)
            logicGate()
            pauseButton.innerText = "resume" } 
            else if (pauseButton.innerText == "resume") {  
                pauseButton.innerText = "pause"
                logicGate()    
                timez = startCount()
                
                 }
            })
              
            buttonArray = [ add1Button, minusButton, heartButton]
            function logicGate(){  
                buttonArray.forEach(element => { 
                    
                    if (element.disabled){ 
                        element.disabled = false 
                    } else { element.disabled = true }
                });

            }
        
        

}