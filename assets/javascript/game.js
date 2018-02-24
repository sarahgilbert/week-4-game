

$( document ).ready(function() {
    console.log( "ready!" );

//choose a random target number
var randomNumber = Math.floor((Math.random() * 120) + 19); 
console.log("random" + randomNumber + "");

//show the random target number on the page
$("#randomNumber").text("Target Number: " + randomNumber); 

// assigns a value between 1-12 to each crystal
//var green = Math.floor(Math.random()*12)+1);  I don't know why green isn't working
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
$("#wins").text("Wins: " + wins);
$("losses").text("Losses: " + losses); //not running on screen?
$("#totalsofar").text("Your Total so Far: " +counter);

var numberOptions = [blue, red, yellow,];  //add green when green works
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image"); 
}
$("#green").on("click", function() {
    counter = counter + green; 
    console.log("new green counter= " + counter);
    if (counter === randomNumber) {
        yay();
    }
    else if (counter > randomNumber) {
        loser();
    }
})

$("#blue").on("click", function() {
    counter = counter + blue;
    console.log("new blue counter" + counter);
    if (counter ===randomNumber) {
        yay();
    }
    else if (counter> randomNumber) {
        loser();
    }
})

$("#red").on("click", function() {
    counter = counter + red;
    console.log("new red counter" + counter);
    if(counter === randomNumber) {
        yay();
    }
    else if (counter > randomNumber) {
        loser();
    }
    }) 

$("#yellow").on("click", function() {
    counter = counter + yellow;
    console.log("new yellow counter" + counter);
    if(counter === randomNumber) {
        yay();
    }
    else if (counter > randomNumber) {
        loser();
    }
})
    

//var imageCrystal = $("<img>"); //not sure about including all images in one line-
//imageCrystal.attr("src","assets/images/greencrystal.jpg", "assets/images/bluecartooncrystal.png", "assets/images/specialredcrystal.png", "yellowcartooncrystal.png");

//imageCrystal.data("data-crystalvalue", numberOptions[i]);

$("img").on("click", function() { 
    console.log ("click"); 

    ///haven't looked at this part yet -from basic crystal game-
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);
counter =+ crystalValue;
//alert("new score" + counter); //alerting new score, but counter not working -change to Your total so far
if (counter === randomNumber) {
    alert("you win"); //change to update text on page

}
else if (counter>= randomNumber) {
   // alert("you lose"); //change to update text on page
}
})
});



    





