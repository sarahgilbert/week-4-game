
$( document ).ready(function() {
    console.log( "ready!" );
});

var wins =0; //creates some variables to use throughout the script
var losses =0;
var sum =0; //this will be the sum of the gems added up to create your score so far

var randomNumber = Math.floor((Math.random()*120)+19); //generates a random number between 19-120
 console.log("random" + randomNumber + "");
//show a random target number between 19-120
$("randomnumber").prepend("Random Number: " + randomNumber); //I don't know why this isn't showing up on the page. It's in the console.log...

//var green = Math.floor(Math.random()*12)+1); // assigns a value between 1-12 to each crystal randomly (I don't know why green isn't working)
var blue = Math.floor((Math.random()*12)+1);
var red = Math.floor((Math.random()*12)+1);
var yellow = Math.floor((Math.random()*12)+1);

console.log("yellow" + yellow + "");
//console.log("green" + green + "");
console.log("red" + red + "");
console.log("blue" + blue + "");

//add random number to sum (your score so far) when a crystal is clicked
$(".green").click(function() {
    sum = sum + green;
})
$(".blue").click(function() {
    sum = sum + blue;
})
$(".red").click(function() {
    sum = sum + red;
})
$(".yellow").click(function() {
    sum = sum + yellow;
})

var text = function() {  //shows score as crystals are clicked
    $("#wins").empty();
    $("#wins").append(wins);
    $("#losses").empty();
    $("#losses").append(losses);
    $(sum).empty();
    $(sum).append(sum); //to get a running total
}

var outcome = function() {
    if(sum === number) {
        wins = wins + 1; //if your score = the random number, win
        reset();
    }
    else(sum > number) 
        losses = losses +1; //if your score goes over the random number, lose
        reset();
    }
    var reset = function() {
        sum = 0; //game restarts after win or loss
        
    }





