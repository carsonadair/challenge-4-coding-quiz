//DOM Elements

var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
var rW = document.getElementById('r-w');
var answerEl = document.getElementById('answer');
var startButton = document.getElementById('submit');
var questionTitle = document.getElementById('question');
var nextButton = document.getElementById('next');
var endQuiz = document.getElementById('endquiz');
var saveButton = document.getElementById('save-score');
var initialInput = document.getElementById('initials');
var timeCount = document.getElementById('timer');
var restartButton = document.getElementById('restart');
var highScoreLi = document.getElementById('high-scores');
var highScoreButton = document.getElementById('highscorebtn');
var currentQuest = 0;
var timeLeft = 60;

var timer;

//The question objects, including answers and correct answer value.

var questions = [
  {
    question: "Which built-in JavaScript method returns the calling string value converted to upper case?",
    answers: ["toUpperCase()", "toUpper()", "changeCase(upper)", "uppercase.text()"],
    correct: 0
  },

  {
    question: "What does HTML stand for?",
    answers: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
    correct: 2
  },

  {
    question: "What does JavaScript return to you if you try to access an object's property that doesn't exist?",
    answers: ["null", "undefined", "oopsies", "0"],
    correct: 1
  },

  {
    question: "Which term is used to describe expressions that result in the value of either true or false?",
    answers: ["Selection", "Condition", "Concatenation", "Boolean"],
    correct: 3
  }
];

// Function to show the score at the end of the quiz

function showScore() {
  clearInterval(timer);
  questionTitle.classList.add("hide");
  answerEl.classList.add("hide");
  endQuiz.classList.remove("hide");
  restartButton.classList.remove("hide")
};

//Function to show each question and the possible answers.

function showQuest(question) {
  questionTitle.textContent = questions[currentQuest].question;
  a1.textContent = questions[currentQuest].answers[0];
  a2.textContent = questions[currentQuest].answers[1];
  a3.textContent = questions[currentQuest].answers[2];
  a4.textContent = questions[currentQuest].answers[3];
  setInterval(timer);
};

// Function to indicate if the selected answer was correct, then wait 2 seconds to proceed to the next question, or initial the showScore function if the quiz is over.

function answerSelect(event) {
  clearInterval(timer);
  if (questions[currentQuest].correct == event.target.value) {
    rW.textContent = ("Correct!");
    rW.style.color = "green";
    rW.style.fontSize = "200%";
  } else {
    rW.textContent = ("Incorrect!");
    rW.style.color = "red";
    rW.style.fontSize = "200%";
    timeLeft -= 5;
  }
  rW.setAttribute("class", "feedback");
  setTimeout(function () {
    rW.setAttribute("class", "feedback hide");
  }, 2000);
  setTimeout(function () {
    currentQuest++;
    if (currentQuest == questions.length) {
      showScore();
      return;
    }
    showQuest();
    timer = setInterval(function () {
      timeLeft--;
      timeCount.textContent = timeLeft;
      if (timeLeft <= 0) {
        showScore();
        return;
      }
    }, 1000)
  }, 2000);

};

//Saves scores to local storage

var highScores = JSON.parse(localStorage.getItem("high-scores")) || [];

function saveScore() {
  var data = {
    initials: initialInput.value,
    score: timeLeft
  };
  highScores.push(data);
  localStorage.setItem("high-scores", JSON.stringify(highScores));

};

//Shows high scores saved to local storage.

function showHighScores() {
  highScoreLi.classList.remove("hide");

  for (let i = 0; i < highScores.length; i++) {
    console.log(highScores[i].initials);
    console.log(highScores[i].score);
    var scoreEl = document.createElement("li");
    scoreEl.textContent = highScores[i].initials + " " + highScores[i].score;
    highScoreLi.appendChild(scoreEl);

  }
};

//Starts the timer and reveals the quiz questions and answers.

function startQuiz() {
  timer = setInterval(function () {
    timeLeft--;
    timeCount.textContent = timeLeft;
    if (timeLeft <= 0) {
      showScore();
      return;
    }
  }, 1000)
  startButton.classList.add("hide");
  questionTitle.classList.remove("hide");
  answerEl.classList.remove("hide");
  showQuest();
};

// Reloads the page to take the quiz again.

function restartQuiz() {
  location.reload();
};

//Listens for each button to be pressed to execute the corresponding function.

startButton.addEventListener("click", startQuiz);
a1.addEventListener("click", answerSelect);
a2.addEventListener("click", answerSelect);
a3.addEventListener("click", answerSelect);
a4.addEventListener("click", answerSelect);
saveButton.addEventListener("click", saveScore);
restartButton.addEventListener("click", restartQuiz);
highScoreButton.addEventListener("click", showHighScores);
