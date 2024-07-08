let userScore = 0;
let compScore= 0;
 const choices = document.querySelectorAll(".choice")
 const msg = document.querySelector("#msg")
 const genCompChoice = () => {
    const options = ["rock", "paper" , "scissor"]
    const randomidx = Math.floor(Math.random() *3)
    return options[randomidx];
 }
 const drawGame = () => {
 console.log("Game was Draw")
 msg.innerText="game was Draw. play again!";
 };
 const showwinner = (userwin) => {
    if(userwin){
        console.log("you win!")
        msg.innerText="you win!";
    }
    else{
        console.log("you lose*")
        msg.innerText="you lose*";
    }
 }
 const playgame = (userChoice) => {
    console.log("user choice is =", userChoice)
    const compChoice = genCompChoice();
        console.log("comp choice is =", compChoice)

    if (userChoice === compChoice){
    drawGame();
} else{
     let userwin = true;
     if(userChoice === "rock"){
   userwin = compChoice === "paper" ? false: true;
     }else if(userChoice === "paper")
        userwin = compChoice === "scissor" ? false: true;
else{
    userwin = compChoice === "rock" ? false: true;

}
showwinner(userwin);
}
}
 choices.forEach ((choice) => {
    console.log(choice);
 choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
console.log("choices was clicked" ,userChoice);
playgame(userChoice)
 })
 })