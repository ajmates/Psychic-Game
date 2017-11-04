var computerChoices = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wins = 0;
var loses = 0; 
var guessesLeft = 9; 
var yourGuess = []; 
var computerGuess= "";

choice ();

document.onkeyup = function(event) {

var keyPressed = event.key 
console.log(keyPressed); 
console.log(computerGuess);

if (computerGuess == keyPressed){
	wins++;
	guessesLeft = 9;
	choice(); 
	yourGuess = [];
	console.log("wins")
}

else if (guessesLeft == 0){
	loses++;
	guessesLeft = 9;
	choice();
	yourGuess = []; 
	console.log("loss")
}

else {
	guessesLeft--;
	yourGuess.push(keyPressed);
	console.log("guess")
}

document.getElementById("winCount").innerHTML = wins; 
document.getElementById("lossCount").innerHTML = loses;
document.getElementById("guessCount").innerHTML = guessesLeft;  
document.getElementById("myGuessCount").innerHTML = yourGuess;

}

function choice() {
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
}

