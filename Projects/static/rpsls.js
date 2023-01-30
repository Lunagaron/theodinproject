/* Rock Paper Scissors Lizard Spock
 *
 * This project makes a simple implementation of the primary-school
 * game "Rock Paper Scissors Lizard Spock". This game was created
 * by internet pioneer Sam Kass as an improvement on the classic game
 * of rock-paper-scissors (all hail Sam Kass).
 *
 * Rules:
 * Scissors cuts Paper : Paper covers Rock : Rock crushes Lizard
 * Lizard poisons Spock : Spock smashes Scissors : Scissors depcapitates Lizard :
 * Lizard eats Paper : Paper disproves Spock : Spock vaporizes Rock : Rock crushes Scissors
 */

// Initalize Code when all content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Global Variables
  let computerScore = 0;
  let playerScore = 0;
  let text = document.getElementById("announcement");
  let fetchPlayer = document.getElementById("player1");
  let fetchComputer = document.getElementById("computer");

  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const lizardButton = document.getElementById("lizard");
  const spockButton = document.getElementById("spock");

  /* Randomly chooses a move for the computer to make against the player
   * Computer can choose between rock, paper, scissors, lizard, or spock by
   * randomly getting an integer between 0 - 4, which are all associated with a move
   */
  function getComputerChoice() {
    let num = Math.floor(Math.random() * 5); // Randomly chooses a number between 0 - 4 inclusive
    if (num == 0) {
      return "Rock";
    } else if (num == 1) {
      return "Paper";
    } else if (num == 2) {
      return "Scissors";
    } else if (num == 3) {
      return "Lizard";
    } else {
      return "Spock";
    }
  }

  /* Function for adding points to either the player or the computer
   * as well as updating the global points in the game
   */
  function playerWin() {
    playerScore += 1;
    fetchPlayer.innerHTML = playerScore;
  }

  function computerWin() {
    computerScore += 1;
    fetchComputer.innerHTML = computerScore;
  }

  /* User presses button, resulting in the scores and comments getting updated
   * Code for "Rock"
   */
  rockButton.addEventListener("click", () => {
    console.log("Rock button was clicked");
    var computerChoice = getComputerChoice();
    if (computerChoice == "Rock") {
      // (Player) Rock vs Rock (Computer)
      text.innerHTML = "You chose Rock. Tie.";
    } else if (computerChoice == "Paper") {
      // (Player) Rock vs Paper (Computer)
      text.innerHTML = "You chose Rock. Paper covers Rock.";
      computerWin();
    } else if (computerChoice == "Scissors") {
      // (Player) Rock vs Scissors (Computer)
      text.innerHTML = "You chose Rock. Rock crushes Scissors.";
      playerWin();
    } else if (computerChoice == "Paper") {
      // (Player) Rock vs Lizard (Computer)
      text.innerHTML = "You chose Rock. Rock crushes Lizard.";
      playerWin();
    } else if (computerChoice == "Spock") {
      // (Player) Rock vs Spock (Computer)
      text.innerHTML = "You chose Rock. Spock vaporizes Rock.";
      computerWin();
    }
  });

  /* User presses button, resulting in the scores and comments getting updated
   * Code for "Paper"
   */
  paperButton.addEventListener("click", () => {
    console.log("Paper button was clicked");
    var computerChoice = getComputerChoice();
    if (computerChoice == "Rock") {
      // (Player) Paper vs Rock (Computer)
      text.innerHTML = "You chose Paper. Paper covers Rock";
      playerWin();
    } else if (computerChoice == "Paper") {
      // (Player) Paper vs Paper (Computer)
      text.innerHTML = "You chose Paper. Tie.";
    } else if (computerChoice == "Scissors") {
      // (Player) Paper vs Scissors (Computer)
      text.innerHTML = "You chose Paper. Scissors cuts Paper.";
      computerWin();
    } else if (computerChoice == "Paper") {
      // (Player) Paper vs Lizard (Computer)
      text.innerHTML = "You chose Paper. Lizard eats Paper.";
      computerWin();
    } else if (computerChoice == "Spock") {
      // (Player) Paper vs Spock (Computer)
      text.innerHTML = "You chose Paper. Paper disproves Spock.";
      playerWin();
    }
  });

  /* User presses button, resulting in the scores and comments getting updated
   * Code for "Scissors"
   */
  scissorsButton.addEventListener("click", () => {
    console.log("Scissors button was clicked");
    var computerChoice = getComputerChoice();
    if (computerChoice == "Rock") {
      // (Player) Scissors vs Rock (Computer)
      text.innerHTML = "You chose Scissors. Rock crushes Scissors.";
      computerWin();
    } else if (computerChoice == "Paper") {
      // (Player) Scissors vs Paper (Computer)
      text.innerHTML = "You chose Scissors. Scissors cuts Paper.";
      playerWin();
    } else if (computerChoice == "Scissors") {
      // (Player) Scissors vs Scissors (Computer)
      text.innerHTML = "You chose Scissors. Tie.";
    } else if (computerChoice == "Paper") {
      // (Player) Scissors vs Lizard (Computer)
      text.innerHTML = "You chose Scissors. Scissors decapitates Lizard.";
      playerWin();
    } else if (computerChoice == "Spock") {
      // (Player) Scissors vs Spock (Computer)
      text.innerHTML = "You chose Scissors. Spock smashes Scissors";
      computerWin();
    }
  });

  /* User presses button, resulting in the scores and comments getting updated
   * Code for "Lizard"
   */
  lizardButton.addEventListener("click", () => {
    console.log("Lizard button was clicked");
    var computerChoice = getComputerChoice();
    if (computerChoice == "Rock") {
      // (Player) Lizard vs Rock (Computer)
      text.innerHTML = "You chose Lizard. Rock crushes Lizard.";
      computerWin();
    } else if (computerChoice == "Paper") {
      // (Player) Lizard vs Paper (Computer)
      text.innerHTML = "You chose Lizard. Lizard eats Paper.";
      playerWin();
    } else if (computerChoice == "Scissors") {
      // (Player) Lizard vs Scissors (Computer)
      text.innerHTML = "You chose Lizard. Scissors decapitates Lizard.";
      computerWin();
    } else if (computerChoice == "Paper") {
      // (Player) Lizard vs Lizard (Computer)
      text.innerHTML = "You chose Lizard. Tie.";
    } else if (computerChoice == "Spock") {
      // (Player) Lizard vs Spock (Computer)
      text.innerHTML = "You chose Lizard. Lizard poisons Spock.";
      playerWin();
    }
  });

  /* User presses button, resulting in the scores and comments getting updated
   * Code for "Spock"
   */
  spockButton.addEventListener("click", () => {
    console.log("Scissors button was clicked");
    var computerChoice = getComputerChoice();
    if (computerChoice == "Rock") {
      // (Player) Spock vs Rock (Computer)
      text.innerHTML = "You chose Spock. Spock vaporizes Rock.";
      playerWin();
    } else if (computerChoice == "Paper") {
      // (Player) Spock vs Paper (Computer)
      text.innerHTML = "You chose Spock. Paper disproves Spock.";
      computerWin();
    } else if (computerChoice == "Scissors") {
      // (Player) Spock vs Scissors (Computer)
      text.innerHTML = "You chose Spock. Spock smashes Scissors.";
      playerWin();
    } else if (computerChoice == "Paper") {
      // (Player) Spock vs Lizard (Computer)
      text.innerHTML = "You chose Spock. Lizard poisons Spock.";
      computerWin();
    } else if (computerChoice == "Spock") {
      // (Player) Spock vs Spock (Computer)
      text.innerHTML = "You chose Spock. Tie.";
    }
  });

  /* End of DOMContentLoaded */
});
