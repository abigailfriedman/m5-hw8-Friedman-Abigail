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
    var numberPicked = (parseInt(this.textContent))
    //console.log(numberPicked)
    var winner = Math.floor((Math.random()* 3) +1);
    //console.log(winner)
    if (winner === numberPicked) {
    console.log('winner')
    messageId.textContent = 'WINNER'
     }
    else {
        messageId.textContent = losingMessage[Math.floor(Math.random() * 3)];
    }
    }


for (i = 0; i < boxesElement.length; i++) {
    var box = boxesElement[i];
    box.onclick = boxClick
}

//console.log(boxClick.numberPicked)

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that// value to a Number and store it to a variable

//boxesElement.forEach(function boxClick(box) {
    //console.log(document.textContent)
//});

//var clickedBox = parseInt(this.textContent);

//var boxesElement = document.querySelectorAll('.box')
//function boxClick(event) {
    //console.log(event.target)
//}
//for (i = 0; i < boxesElement.length; i++) {
    //boxesElement[i].onclick = function(e) {
       //var clickedBox = parseInt(this.textContent);
       //console.log(parseInt(this.textContent));
    //};
//}

//boxesElement.forEach(function(box) 
   // box.onClick = function(e) {
    //console.log(document.this.innerHTML);
 //}
//});


//var clickedBox = console.log(parseInt(boxesElement.textContent));

//boxesElement.forEach(boxClick(BoxesElement)){
  //box.onclick = function(e){
    //console.log(parseInt(this.textContent))
 //}
//};

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

var winner = Math.floor((Math.random()* 3) +1);
console.log(winner)

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
  //if (winner = clickedBox)

 if (winner == boxClick.numberPicked) {
    console.log('winner')
 }

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses