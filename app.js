let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h3  = document.querySelector("h3");

let btns = ["red","green","yellow","blue"];


// Start game on key press
document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game is started");
        started = true;
    
        levelUp();

    }
   
});

    
function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() *  3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

// Check user's answer
 function checkAns(idx){
 if(gameSeq[idx] === userSeq[idx]){
    // console.log("same value");
    if(gameSeq.length == userSeq.length){
        setTimeout(levelUp,1000);
    }
    
 }else{
    h3.innerHTML = `Game Over! your score was <b>${level}</b> <br> press any key to restart.`;

 
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor= "white";
      }, 350);
    resetTo();
 }
 }

// Handle button press
function btnpress(){
  let btn =  this;  //Ensure `this` refers to the clicked button
  btnFlash(btn);

  let usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
 checkAns(userSeq.length-1);
}

let allbtns =  document.querySelectorAll(`.btn`);
for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
}



// Add event listeners to buttons
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);
   }
// Reset game
function resetTo(){

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;
}