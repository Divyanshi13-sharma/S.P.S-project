let userScore =0;
let compScore=0;

const choices=document.querySelectorAll(".choice"); 
const msg =document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const gencompchoice=()=>{
    const options=["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    //stone,paper,secceries
};
const drawGame=()=>{
    msg.innerText="Game was Draw. play again.";
    msg.style.backgroundColor ="#081b31";
};

const showWinner=(userWin,userchoice,compchoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
} ;
const playGame = (userchoice)=>{
    //Generate computer device 
    const compchoice=gencompchoice();

if(userchoice ===compchoice){
    //draw game
    drawGame();
}else{
    let userWin=true;
    if(userchoice==="stone"){
        //scissors,paper
        userWin=compchoice==="paper"? false:true;
    }else if(userchoice==="paper"){
        //stone, scissors
        userWin=compchoice==="scissors"?false:true;
    }else{
        //rock,paper
        userWin=compchoice==="stone"?false:true;
    }
    showWinner(userWin,userchoice,compchoice);
}
};

choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});