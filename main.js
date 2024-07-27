// INTERACTIVE GAME : ROCK PAPER SCISSORS

let playGame = confirm("Shall we play rock, paper, or scissors ?");
if(playGame)
{
    //play
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    
    if(playerChoice)
    {
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors")
        {

            //computer's choice - using random number
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" 
            : computerChoice === 2 ? "paper"
            : "scissors";

            //condition
            let result =
            playerOne === computer
            ? "Tie Game !"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne} \n Computer: ${computer} \n Computer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne} \n Computer: ${computer} \n Computer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne} \n Computer: ${computer} \n Computer wins!`

            : `playerOne: ${playerOne} \n Computer: ${computer} \n Player wins!`;
            alert(result);

            let playAgain = confirm ("Play again ?");
            playAgain ? location.reload() : alert("Thanks for playing ^ ^ ");
        }
        else
        {
            alert("You did not enter rock, paper or scissors !");
        } 
    }

    else
    {
        alert("Next time, Fine!");
    }
}

else
{
    alert("Okay, maybe next time");
}