let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#userScore');
const compScorePara = document.querySelector('#CompScore');


const generateComputerChoice = () =>{
    // rock, paper, scisssor
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];

}

const drawGame = () =>{
   
    msg.innerHTML = "Game was draw";
    msg.style.backgroundColor = "blue";
    
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerHTML = `You WIN! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        console.log("You lose");
        msg.innerHTML = `Computer WIN! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        
        
    }
}

const playGame = (userChoice) =>{
    console.log("userChoice",userChoice);
    const compChoice = generateComputerChoice();
    console.log("ComputerChoice",compChoice);

    if(userChoice===compChoice){
        // Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice==="rock"){
            // Computer - paper,scissor
            userWin = compChoice==="paper"? false : true;
        } else if(userChoice==="paper"){
            // Computer - rock,scissor
            userWin = compChoice==="scissors"?false : true;

        }
         else if(userChoice==="scissors"){
            // Computer - rock,paper
            userWin = compChoice==="rock"?false : true;

        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
        
    })
    
})