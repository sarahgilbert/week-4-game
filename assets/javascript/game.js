

$( document ).ready(function() {
    console.log( "ready!" );

//choose a random target number
var randomNumber = Math.floor((Math.random() * 120) + 19); 
console.log("random" + randomNumber + "");

//show the random target number on the page
$("#randomNumber").text("Target Number: " + randomNumber); 

// assigns a value between 1-12 to each crystal
//var green = Math.floor(Math.random()*12)+1);  //I don't know why green isn't working
var blue = Math.floor((Math.random()*12)+1);
var red = Math.floor((Math.random()*12)+1);
var yellow = Math.floor((Math.random()*12)+1);

//console logs the value assigned to each color crystal
console.log("yellow" + yellow + "");
//console.log("green" + green + "");
console.log("red" + red + "");
console.log("blue" + blue + "");

var counter = 0;
var wins = 0;
var losses = 0;

 
//$("#totalsofar").text("Your Total so Far: " + counter); //counter not working -need to move into function


// counts wins and loses
function yay() {
    if (counter === randomNumber);
    wins++;
        $("#wins").text("Wins: " + wins);
    reset();
}
function boo() {
    if (counter > randomNumber);
    losses++;
        $("#losses").text("Losses: " + losses);
     reset()
}
// not sure I need this
function reset() {
    randomNumber = Math.floor((Math.random() * 120) + 19);
    blue = Math.floor((Math.random()*12)+1);
    red = Math.floor((Math.random()*12)+1);
    yellow = Math.floor((Math.random()*12)+1);
    counter = 0;
   

}
$("#green").on("click", function() {
    counter = counter + green; 
    console.log("new green counter= " + counter);
    if (counter === randomNumber) {
        yay();
    }
    else if (counter > randomNumber) {
        boo();

    }
})

$("#blue").on("click", function() {
    counter = counter + blue;
    console.log("new blue counter" + counter);
    if (counter ===randomNumber) {
        yay();
    }
    else if (counter> randomNumber) {
        boo();
    }
})

$("#red").on("click", function() {
    counter = counter + red;
    console.log("new red counter" + counter);
    if(counter === randomNumber) {
        yay();
    }
    else if (counter > randomNumber) {
        boo();
    }
    }) 

$("#yellow").on("click", function() {
    
    counter = counter + yellow;
    console.log("new yellow counter" + counter);
    if(counter === randomNumber) {
       yay();
    }
    else if (counter > randomNumber) {
        boo();
    }
})
    

$("img").on("click", function() { //  when I remove this,or change it, I get a bunch of syntax errors, so I'm leaving it alone
    console.log ("click"); 
$("#totalsofar").text("Your Total so Far: " + counter);
    ///the game doesn't reset after a win or loss-
//wins and losses don't go up because you have to reset the game
//the green crystal doesn't work, so if you click on it, it returns a weird output in the total so far field
//
//the alerts below aren't doing anything, but if I take them away, the syntax gets all messed up.
if (counter === randomNumber) {
    alert("you win"); //change to update text on page

}
else if (counter>= randomNumber) {
   // alert("you lose"); //change to update text on page
}
})
});



    





