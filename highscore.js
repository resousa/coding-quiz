var scoreList = document.getElementById("highScores");
$("#highscoreHead").text("HIGH SCORES")
$("#clear").text("Clear Scores")
$("#newGame").text("New Game")

for (var i = 0; i < localStorage.length; ++i) {
    var id = localStorage.key(i);
    var score = localStorage.getItem(id);
    var l1 = document.createElement("li");
    l1.innerHTML = id + " - " + score;
    $("#highScores").append(l1);
}

$("#clear").on("click", function () {
    localStorage.clear();
    $("#highScores").empty(l1);
});