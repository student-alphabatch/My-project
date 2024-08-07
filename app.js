let gameSeq = [];
let userSeq = [];
let btn = ["yellow","red","purple","green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if(start == false){
        console.log("Game started");
        start == true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
};

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    // console.log(`curent level is ${level}`);
    // let idx = level -1;
     
    if((userSeq[idx] === gameSeq[idx])){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("Same value");
    }else{
        h2.innerHTML = `Game over !! Your score was <b>${level*2}</b> <br> press any key to start`;
        document.querySelector("body").style.background = "red";
        setTimeout(function(){
            document.querySelector("body").style.background = "white";
        },1000);
        reset();
    }
}

function btnPress(){
    // console.log(this)
    let btn = this;
    btnFlash(btn);

     userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userColor.length-1);

}

let allBtn = document.querySelectorAll(".btn");
for(btns of allBtn){
    btns.addEventListener("click",btnPress);

}

function reset(){
    start == false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};
