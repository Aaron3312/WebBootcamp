jQuery("h1").css("color", "red");

$("button").click(function() {
  $("h1").css("color", "purple");
});

$(document).keypress(function(event) {
  $("h1").text(event.key);
});

$(document).on("mouseover", function() {
  $("h1").css("color", "blue");
});

$("h1").append("<button>Click me</button>");