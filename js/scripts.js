//Rock Paper Scissors Game
//                ______         __
//               /      \       |  \
// ______ ____  |  $$$$$$\  ____| $$
//|      \    \  \$$__| $$ /      $$
//| $$$$$$\$$$$\  |     $$|  $$$$$$$
//| $$ | $$ | $$ __\$$$$$\| $$  | $$
//| $$ | $$ | $$|  \__| $$| $$__| $$
//| $$ | $$ | $$ \$$    $$ \$$    $$
// \$$  \$$  \$$  \$$$$$$   \$$$$$$$

//Pass the results of this to playRound. This is the computer's turn.
function computerPlay() {
 let cRoll = Math.floor(Math.random() * 3)
 switch (cRoll) {
    
    case 0:
    console.log ("Computer picks Rock");
    return "rock";
    break;
    
    case 1:
    console.log ("Computer picks Paper");
    return "paper";
    break;
    
     case 2:
     console.log ("Computer picks Scissors");
     return "scissors";
     break;

  }
}

//This function compares two selections to determine a winner or tie game.

let pWin = 0;
let cWin = 0;

function playRound(pSelection, cSelection) {
if (pSelection === cSelection) {
  activity.textContent = "Tie. Play again!"
  return "Tie game."
}
else if (pSelection == "rock" && cSelection == "scissors") {
  pWin++
  pScoreDisplay.textContent = `You: ${pWin}`;
  activity.textContent = `Computer picks ${cSelection}. You win!`
  winnerAnnounce(pWin, cWin);
  return "You win!"
}
else if (pSelection == "rock" && cSelection == "paper") {
  cWin++
  cScoreDisplay.textContent = `Opponent: ${cWin}`;
  activity.textContent = `Computer picks ${cSelection}. You lose!`
  winnerAnnounce(pWin, cWin);
  return "You lose!"
}
else if (pSelection == "scissors" && cSelection == "rock") {
  cWin++
  cScoreDisplay.textContent = `Opponent: ${cWin}`;
  activity.textContent = `Computer picks ${cSelection}. You lose!`
  winnerAnnounce(pWin, cWin);
  return "You lose!"
}
else if (pSelection == "scissors" && cSelection == "paper") {
  pWin++
  pScoreDisplay.textContent = `You: ${pWin}`;
  activity.textContent = `Computer picks ${cSelection}. You win!`
  winnerAnnounce(pWin, cWin);
  return "You win!"
}
else if (pSelection == "paper" && cSelection == "scissors") {
  cWin++
  cScoreDisplay.textContent = `Opponent: ${cWin}`;
  activity.textContent = `Computer picks ${cSelection}. You lose!`
  winnerAnnounce(pWin, cWin);
  return "You lose!"
}
else if (pSelection == "paper" && cSelection == "rock") {
  pWin++  
  pScoreDisplay.textContent = `You: ${pWin}`;
  activity.textContent = `Computer picks ${cSelection}. You win!`
  winnerAnnounce(pWin, cWin);
  return "You win!"
  }
}

const playerScore = document.querySelector(".playerScore");
const pScoreDisplay = document.createElement('p');
      pScoreDisplay.textContent = 'You: 0';
      playerScore.appendChild(pScoreDisplay);

const computerScore = document.querySelector(".computerScore");
const cScoreDisplay = document.createElement('p');
      cScoreDisplay.textContent = 'Opponent: 0';
      computerScore.appendChild(cScoreDisplay)

const replayArea = document.querySelector(".replayArea")

const activityArea = document.querySelector(".activityArea");
const activity = document.createElement('p');
      activity.textContent = ' ';
      activityArea.appendChild(activity);



const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
  console.log(playRound("rock", computerPlay()));
});
const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
  console.log(playRound("paper", computerPlay()));
});
const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () => {
  console.log(playRound("scissors", computerPlay()));
});


function winnerAnnounce(pWin, cWin) {
  if (pWin === 5) {
  activity.textContent = '';
  btnRock.parentNode.removeChild(btnRock);
  btnPaper.parentNode.removeChild(btnPaper);
  btnScissors.parentNode.removeChild(btnScissors);

  const replayPrompt = document.createElement('button');
  replayPrompt.id = 'replayButton';
  replayPrompt.setAttribute("style", 'color: blue');
  replayPrompt.textContent = "Play again?";

  replayArea.appendChild(replayPrompt);

  const btnReplay = document.querySelector("#replayButton");
  btnReplay.addEventListener('click', () => {
  location.reload();
});
  
}
else if (cWin === 5) {
  activity.textContent = '';
  btnRock.parentNode.removeChild(btnRock);
  btnPaper.parentNode.removeChild(btnPaper);
  btnScissors.parentNode.removeChild(btnScissors);

  const replayPrompt = document.createElement('button');
  replayPrompt.id = 'replayButton';
  replayPrompt.setAttribute("style", 'color: red');
  replayPrompt.textContent = "Play again?";

  replayArea.appendChild(replayPrompt);

  const btnReplay = document.querySelector("#replayButton");
  btnReplay.addEventListener('click', () => {
  location.reload();
});
  
}
else return;
}


//This function will 5 rounds by calling playRound, keep tally and announce a winner

/* function game() {
  console.log ("We will play 5 rounds!");

  for (j = 0; j < 5; j++) {
  let textInput = prompt("What do you choose?", "Enter text here")
  console.log ("You chose " + textInput + ".")
  playRound(textInput.toLowerCase, computerPlay());
  }
  if (pWin > cWin) {
    return "You win!"
  }

  else {
    return "You lose =( \n Thanks for playing!"
  }
}



console.log (game ());
*/
