function calculateScore() {

  var score = 0;

  // Get the answer for each question
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var q4 = document.querySelector('input[name="q4"]:checked');
  var q5 = document.querySelector('input[name="q5"]:checked');
  var q6 = document.querySelector('input[name="q6"]:checked');
  var q7 = document.querySelector('input[name="q7"]:checked');
  var q8 = document.querySelector('input[name="q8"]:checked');
  var q9 = document.querySelector('input[name="q9"]:checked');
  var q10 = document.querySelector('input[name="q10"]:checked');

  // Make sure all questions are answered
  if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10) {
    alert("Please answer all 10 questions before submitting.");
    return;
  }

  // Add up the score
  score = parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value) +
          parseInt(q4.value) + parseInt(q5.value) + parseInt(q6.value) +
          parseInt(q7.value) + parseInt(q8.value) + parseInt(q9.value) +
          parseInt(q10.value);

  // Hide the quiz and show the results
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("score-number").textContent = score;

  // Show the result message based on score
  var message = "";

  if (score < 8) {
    message = "Your digital habits are healthy. Keep maintaining balance! You seem to have a good relationship with technology and it does not appear to be negatively affecting your well-being.";
  } else if (score >= 8 && score <= 11) {
    message = "You might benefit from small adjustments, like setting screen time limits or unplugging more often. Your digital habits are mostly okay but there is some room for improvement.";
  } else if (score >= 12 && score <= 13) {
    message = "Technology might be affecting your wellness. Consider taking proactive steps such as scheduling device-free time, going outside more, or reconnecting with offline hobbies.";
  } else if (score >= 14) {
    message = "Consider consulting a professional or implementing significant changes to improve your well-being. Your digital habits may be having a real impact on your health, focus, and relationships.";
  }

  document.getElementById("result-message").textContent = message;

}

function retakeQuiz() {

  // Reset all radio buttons
  var radios = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }

  // Show the quiz and hide the results
  document.getElementById("quiz-section").style.display = "block";
  document.getElementById("results").style.display = "none";

}