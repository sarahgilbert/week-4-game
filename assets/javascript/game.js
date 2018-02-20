
$( document ).ready(function() {
    console.log( "ready!" );
});

var randomNumber = Math.floor((Math.random() * 120) + 19); 
console.log("random" + randomNumber + "");

$("#randomNumber").text("Random Number: " + randomNumber); //can't get the chosen random number to appear on page still pulling text from html
//var green = Math.floor(Math.random()*12)+1);  I don't know why green isn't working
var blue = Math.floor((Math.random()*12)+1);
var red = Math.floor((Math.random()*12)+1);
var yellow = Math.floor((Math.random()*12)+1);

console.log("yellow" + yellow + "");
//console.log("green" + green + "");
console.log("red" + red + "");
console.log("blue" + blue + "");

var counter =0;
var numberOptions = [blue, red, yellow,];  //add green when green works
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
}

var imageCrystal = $("<img>"); //not sure about including all images in one line-
imageCrystal.attr("src","assets/images/greencrystal.jpg", "assets/images/bluecartooncrystal.png", "assets/images/specialredcrystal.png", "yellowcartooncrystal.png");

imageCrystal.attr("data-crystalvalue", numberOptions[i]);

$("<img>").on("click", function() { //something is wrong here-
    console.log ("click"); //doesn't work

    ///haven't looked at this part yet -from basic crystal game-
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crstalValue);
counter =+ crystalValue;
alert("new score" + counter);
if (counter === randomNumber) {
    alert("you win"); //change to update text on page

}
else if (counter>= randomNumber) {
    alert("you lose"); //change to update text on page
}
})




    





