/// Intro screen
$("#introHead").text("The Coding Quiz!");
$("#introBody").text(
  "The Coding Quiz is a multiple choice game. You will have 90 seconds to finish. Every answer that is incorrect will deduct 15 seconds from the clock. Your score will be determined by the amount of time left on the clock. Are you ready for a challenge?"
);
$("#start").text("I'm Ready!");

/// Click function on start button
$("#start").on("click", startQuiz);

/// Start quiz
function startQuiz() {
  $("#intro").empty();
  questionStart();
  $("#quiz").show();
  timerFunction();
  timer = setInterval(timerFunction, 1000);
}

///Question gen
var questionCount = 0;

function questionStart() {
  $("#question").text(questions[questionCount].title);
  $("#answer1").text(questions[questionCount].choices[0]);
  $("#answer2").text(questions[questionCount].choices[1]);
  $("#answer3").text(questions[questionCount].choices[2]);
  $("#answer4").text(questions[questionCount].choices[3]);
}

/// Answer check
$("#answer1").on("click", function() {
  checkFunction("1");
});
$("#answer2").on("click", function() {
  checkFunction("2");
});
$("#answer3").on("click", function() {
  checkFunction("3");
});
$("#answer4").on("click", function() {
  checkFunction("4");
});

function checkFunction(input) {
  if (input === questions[questionCount].answer) {
    $("#answer").text("Nice Work!");
    setTimeout(function() {
      $("#answer").text("");    
  }, 1000);
  } else {
    $("#answer").text("Better luck next question");
    setTimeout(function() {
      $("#answer").text("");    
  }, 1000);
    time = time - 15;
  }

  if (questionCount < questions.length - 1) {
    questionCount++;
    questionStart();
  } else {
    clearInterval(timer);
    $("#quiz").empty();
    $(".timer").empty();
    $("#result").show();
    scoreFunction(time);
  }
}

///Timer gen
var time = 90;

function timerFunction() {
  if (time > 0) {
    $("#counter").text(time);
    time--;
  } else {
    clearInterval(timer);
    $("#quiz").empty();
    $(".timer").empty();
    $("#result").show();
    scoreFunction(time);
  }
}

///show score
function scoreFunction(time) {
  $("#finishHead").text("Finished!");
  $("#finishScore").text("Final score: " + time);
  $("#submit").text("See where you rank!");
}