function dark_mode() {
  document.getElementsByTagName("body")[0].style.backgroundColor =
    "rgb(46,46,46)";
  document.getElementsByTagName("body")[0].style.color = "white";

  var linkElements = document.getElementsByClassName("links");
  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].style.color = "white";
  }
}


/* Checking user-submitted answers (test_yourself.html)*/
function question_a() {
  var correct_answer = document.getElementById("answer_A1");

  if (correct_answer.checked == true) {
    alert("Correct Answer!");
  } else {
    alert("Incorrect Answer!");
  }
}

function question_b() {
  var correct_answer = document.getElementById("answer_B2");

  if (correct_answer.checked == true) {
    alert("Correct Answer!");
  } else {
    alert("Incorrect Answer!");
  }
}

function question_c() {
  var correct_answer = document.getElementById("answer_C3");

  if (correct_answer.checked == true) {
    alert("Correct Answer!");
  } else {
    alert("Incorrect Answer!");
  }
}



/* Random STAT/PLAYER/QUESTION selection (index.html) */
window.addEventListener("load", stat_of_the_day);
window.addEventListener("load", player_of_the_day);
window.addEventListener("load", question_of_the_day);


function stat_of_the_day() {

  const stats = ["#bpm", "#efg", "#usage"];
  const names = ["Box-Plus-Minus", "Effective Field Goal Percentage", "Usage Rate"]
  var idx =  Math.floor(Math.random() * 3);
  document.getElementById("stat-day").href = "key_stats.html" + stats[idx];
  document.getElementById("stat-name").innerHTML =  names[idx];

}

function player_of_the_day() {

  const stats = ["#antetokounmpo", "#jokic", "#shai"];
  const names = ["Giannis Antetokounmpo", "Nikola Jokic", "Shai Gilgeous-Alexander"]
  var idx =  Math.floor(Math.random() * 3);
  document.getElementById("player-day").href = "player_breakdown.html" + stats[idx];
  document.getElementById("player-name").innerHTML = names[idx];
}

function question_of_the_day() {

  const stats = ["#question_A", "#question_B", "#question_C"];
  const names = ["Understanding BPM", "Understanding eFG%", "Understanding Usage Rate"];
  var idx =  Math.floor(Math.random() * 3);
  document.getElementById("question-day").href = "test_yourself.html" + stats[idx];
  document.getElementById("question-name").innerHTML = names[idx];
}

