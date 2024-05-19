alert("Hello, World!");
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColours[nextSequence()];

//$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
$("#" + randomChosenColour).on("click", function() {
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
});

gamePattern.push(randomChosenColour);


function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);

}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}