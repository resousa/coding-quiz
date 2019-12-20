$(document).ready(function() {
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
    $(".content").empty();
  }
});
