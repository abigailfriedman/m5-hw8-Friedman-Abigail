// Create an Array of at least 3 losing messages
var losingMessage = [
"Sorry You lost",
"You are not a winner",
"You are still good at other things"
];
// Create variables to count wins and losses
var winCount = 0
var winLoss = 0
// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageId = document.getElementById('message');
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
// target all .box elements and attach a click event listener to each one using a loop

var boxesElement = document.querySelectorAll('.box')
function boxClick(event) {
    console.log(event.target)
}
for (i = 0; i < boxesElement.length; i++) {
    var box = boxesElement[i];
    box.onclick = boxClick
}


// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that// value to a Number and store it to a variable

boxesElement.forEach(function() {
 box.onclick = function(e){

 }
});

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses