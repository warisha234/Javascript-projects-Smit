
let userScore = 0;
let computerScore =0;
let userChoice;

let choices = ["rock","paper","scissor" ];

let emoji = {
    rock: "👊🏾",
    paper: "📝",
    scissor: "✂️"
}

function playGame(){
    let compChoice = choices[Math.floor(Math.random()*3)];
    let result ='';
    if(userChoice === compChoice){
        result = `It's a tie!`;
    } 
    else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice ==="rock")||
        (userChoice === "scissor" && compChoice === "paper")
    ){
        userScore++;
        result = `You win 🎊 ${emoji[userChoice]} beats ${emoji[compChoice]}`
    }
    else {
         computerScore++;
         result = `You lose! 😢 ${emoji[compChoice]} beats ${emoji[userChoice]}`;
    
    }
      document.getElementById('result').innerHTML = result;
      document.getElementById('score').innerHTML = `Score: You - ${userScore}, Computer - ${computerScore}`;
}