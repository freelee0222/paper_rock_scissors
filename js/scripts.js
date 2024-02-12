// imediately on load of the page, the following instructions are displayed in the console.
(function(){
    console.log("Instructions: First, make your choice;  paper(LEFT Arrow), rock(UP Arrow), or scissors(RIGHT Arrow)... Then Press ENTER to play.")
}());

// declares variables to keep track of the player and cpu choices.
var playerChoice;
var cpuChoice;

// sets a variable to hold the random number the computer generates and use that number to pick from the array of possible choices.
var hand;

 // sets variables that keep track of  match results to 0.
var won = 0;
var lost = 0;
var tied = 0;
var games = 0;

// variables holding a messages to display  match results.
var wMessage;
var lMessage;
var tmessage;

// connects variable to this particular element ID in the .html file
var $win = $("#win");
var $lose = $("#lose");
var $draw = $("#draw");
var $playerPaper = $("#playerPaperDisplay");
var $playerRock = $("#playerRockDisplay");
var $playerScissors = $("#playerScissorsDisplay");
var $cpuPaper = $("#cpuPaperDisplay");
var $cpuRock = $("#cpuRockDisplay");
var $cpuScissors = $("#cpuScissorsDisplay");

 // connects variable to the  button in the .html file
var paperBtn = document.getElementById ('paperBtn');
var rockBtn = document.getElementById ('rockBtn');
var scissorsBtn = document.getElementById ('scissorsBtn');
var playBtn = document.getElementById ('playBtn');

// sets an array establishing possible choices for the playerChoice and cpuChoice.
var choices = ["rock", "paper", "scissors"];

 // hides display picture as the page is first loaded.
$playerPaper.hide();
$playerRock.hide();
$playerScissors.hide();
$cpuPaper.hide();
$cpuRock.hide();
$cpuScissors.hide();
$win.hide();
$lose.hide();
$draw.hide();

//establishes an event listener for keypresses.
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    switch (event.key) {
      case "ArrowUp": // specifies the up arrow.
      playerRock(); //runs the function to select "rock".
        break; // terminates loop and transfers program control to following statement.

      case "ArrowLeft":  // specifies the left arrow.
      playerPaper(); //runs the function to select "paper".
        break; // terminates loop and transfers program control to following statement.

      case "ArrowRight":  // specifies the right arrow.
      playerScissors(); //runs the function tom select "scissors".
        break; // terminates loop and transfers program control to following statement.

      case "Enter":  // specifies the enter button.
      play(); //runs the function.
        break; // terminates loop and transfers program control to following statement.

      default: // specifies all other keys that are not assigned already.
      console.log("This is an Invalid Key! Please make a selection with the left(PAPER), right(SCISSORS), or up(ROCK) arrow keys then press enter."); // logs statement in the console.
      alert("This is an Invalid Key! Please make a selection with the left(PAPER), right(SCISSORS), or up(ROCK) arrow keys then press enter.")
      break;  // terminates loop and transfers program control to following statement.
    }
    event.preventDefault(); // Cancels  the default action to avoid it being handled twice
  }, true);

//establishes an event listener to the rock button.
    rockBtn.addEventListener("click", playerRock);
        function playerRock() { //creates a function
            playerChoice = choices[0]; // sets the playerChoice variable to the first index of the choices array, "rock".
            $playerPaper.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES in case of choice change.
            $playerRock.show(); // shows this picture so the display matches the playerChoice variable.
            $playerScissors.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES in case of choice change.
            console.log("***********************") // creates separator in the log to make reading the results easier.
            console.log("You have chosen Rock!");
        }
//establishes an event listener to the paper button.
    paperBtn.addEventListener("click", playerPaper);
        function playerPaper() {//creates a function
            playerChoice = choices[1]; // sets the playerChoice variable to the second index of the choices array, "paper".
            $playerRock.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES in case of choice change.
            $playerPaper.show(); // shows this picture so the display matches the playerChoice variable.
            $playerScissors.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES in case of choice change.
            console.log("***********************") // creates separator in the log to make reading the results easier.
            console.log("You have chosen Paper!");
        }
//establishes an event listener to the scissors button.
    scissorsBtn.addEventListener("click", playerScissors);
        function playerScissors() {//creates a function
            playerChoice = choices[2]; // sets the playerChoice variable to the third index of the choices array, "scissors"
            $playerScissors.show(); // shows this picture so the display matches the playerChoice variable.
            $playerRock.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES in case of choice change.
            $playerPaper.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES in case of choice change.
            console.log("***********************") // creates separator in the log to make reading the results easier.
            console.log("You have chosen Scissors!");
        }
//establishes an event listener to the play button.
    playBtn.addEventListener("click", play);
        function play() {//creates a function
            hand = Math.floor(Math.random() * 3); // sets the hand variable to a random number 1-3.
            cpuChoice = choices[hand]; // takes random number 1-3 and makes a selestion from the array of possible choices.
            games++; // increments the game variable by one every time this function is ran.

// requires player to make a choice before running the play function
        if (playerChoice === undefined) { // if player does not make a choice in the beginnig of the game
            cpuChoice = undefined; // the computer also doesn't make a choice
            console.log("You must make your choice first.");// posts an alert telling the player they have to make a selection before playing.
            tied = 0; // keeps the tied variable at 0 if player does not make a choice.
            games = 0;  // keeps the games variable at 0 if player does not make a choice.
        }
        
        if (cpuChoice === undefined) {
          console.log("The computer chooses to wait for you to make your choice.");
        }
        else {
          console.log("The computer has chooses " + cpuChoice + "!");
        }

// displays picture corresponding with computers choice
        if (cpuChoice === "rock"){ // if the computers choice is rock,
            $cpuPaper.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES when new choice is made.
            $cpuRock.show(); // shows this picture so the display matches the cpuChoice variable.
            $cpuScissors.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES when new choice is made.
        }
        else if (cpuChoice === "paper"){ // if the computers choice is paper,
            $cpuPaper.show(); // shows this picture so the display matches the cpuChoice variable.
            $cpuRock.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES when new choice is made.
            $cpuScissors.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES when new choice is made.
        }
        else if (cpuChoice ===  "scissors"){ // if the computers choice is scissors,
            $cpuPaper.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES when new choice is made.
            $cpuRock.hide(); // hides this picture so ONLY the selected picture is visible, and REHIDES when new choice is made.
            $cpuScissors.show(); // shows this picture so the display matches the cpuChoice variable.
        }

// evaluates match results
        if (playerChoice === "scissors" && cpuChoice === "paper") { // if the playerChoice is "scissors" and the cpuChoice is "paper",
            $win.show(); // shows the winning display text.
            $lose.hide();  // hides the losing display text.
            $draw.hide(); // hides the tieing display text.
            won++; // increments the total number of wins by one.
        }
        else if (playerChoice === "paper" && cpuChoice === "rock") { // if the playerChoice is "paper" and the cpuChoice is "rock",
            $win.show(); // shows the winning display text.
            $lose.hide(); // hides the losing display text.
            $draw.hide();  // hides the tieing display text.
            won++; // increments the total number of wins by one.
        }
        else if (playerChoice === "rock" && cpuChoice === "scissors") { // if the playerChoice is "rock" and the cpuChoice is "scissors",
            $win.show(); // shows the winning display text.
            $lose.hide(); // hides the losing display text.
            $draw.hide();  // hides the tieing display text.
            won++; // increments the total number of wins by one.
        }
        else if(playerChoice === cpuChoice){ // if the playerChoice is the same as the cpuChoice,
            if (playerChoice === undefined) { //AND the playerChoice has not been made,
                $win.hide();  // hides the winning display text.
                $lose.hide(); // hides the losing display text.
                $draw.hide();  // hides the tieing display text.
            }
            else { // if the playerChoice is the same as the cpuChoice, and the playerChoice HAS been made,
            $win.hide(); // hides the winning display text.
            $lose.hide(); // hides the losing display text.
            $draw.show(); // shows the tieing text display
            tied++;  // increments the total number of ties by one.
            }
        }
        else { // if none of the win or tie criteria are met,
            $win.hide(); // hides the winning display text.
            $lose.show(); // show the losing text display.
            $draw.hide(); // hides the tieing display text.
            lost++; // increments the total number of losses by one.
        }

// displays messages and tracks win-lose-tie
        if (won === 1) { // if won variable is at 1
            wMessage = "1 game."; // sets won message to proper grammar for singular.
            console.log("You won " +  wMessage); // displays message to the console.
            $('#winDisplay').val(wMessage); // displays message to .html input element
        }
        if (won > 1) { // if won variable is over 1
            wMessage = won +  " games."; // sets won message to proper grammar for plural.
            console.log("You won " + wMessage); // displays message to the console.
            $('#winDisplay').val(wMessage); // displays message to .html input element
        }
        if (won < 1) { // if won variable is under 1
            wMessage = won +  " games."; // sets won message to proper grammar for plural.
            console.log("You won " + wMessage); // displays message to the console.
            $('#winDisplay').val(wMessage); // displays message to .html input element
        }
        if (lost === 1) { // if lost variable is at 1
            lMessage = "1 game."; // sets lost message to proper grammar for singular.
            console.log("You lost " + lMessage); // displays message to the console.
            $('#loseDisplay').val(lMessage); // displays message to .html input element
        }
        if (lost > 1) { // if lost variable is over 1
            lMessage =  lost +  " games."; // sets lost message to proper grammar for plural.
            console.log("You lost " + lMessage) // displays message to the console.
            $('#loseDisplay').val(lMessage); // displays message to .html input element
        }
        if (lost < 1) { // if lost variable is under 1
            lMessage =  lost +  " games."; // sets lost message to proper grammar for plural.
            console.log("You lost " + lMessage) // displays message to the console.
            $('#loseDisplay').val(lMessage); // displays message to .html input element
        }
        if (tied === 1) { // if tied variable is at 1
            tMessage = "1 game."; // sets tied message to proper grammar for singular.
            console.log("You tied " + tMessage); // displays message to the console.
            $('#drawDisplay').val(tMessage); // displays message to .html input element
        }
        if (tied > 1) { // if tied variable is over 1
            tMessage = tied +  " games."; // sets tied message to proper grammar for plural.
            console.log("You tied " + tMessage) // displays message to the console.
            $('#drawDisplay').val(tMessage); // displays message to .html input element
        }
        if (tied < 1) { // if tied variable is under 1
            tMessage = tied +  " games."; // sets tied message to proper grammar for plural.
            console.log("You tied " + tMessage) // displays message to the console.
            $('#drawDisplay').val(tMessage); // displays message to .html input element
        }
        if (games === 1) { // if games variable is at 1
            gMessage = "1 game."; // sets games message to proper grammar for singular.
            $('#gameDisplay').val(gMessage); // displays message to .html input element.
            console.log("Out of " + games + " game.") // displays message to the console.
            console.log("***********************") // creates separator in the log to make reading the results easier.
        }
        if (games > 1) { // if games variable is over 1
            gMessage = games + " games."  // sets games message to proper grammar for plural.
            $('#gameDisplay').val(gMessage); // displays message to .html input element.
            console.log("Out of " + games + " games.") // displays message to the console.
            console.log("***********************") // creates separator in the log to make reading the results easier.
        }
    }