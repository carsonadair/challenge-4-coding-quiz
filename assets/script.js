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

var questions = [
  {
    question: "Test1",
    answers: ["option", "2", "3", "4"],
    correct: 0
  },

  {
    question: "Test2",
    answers: ["1", "2", "3", "4"],
    correct: 2
  },

  {
    question: "Test3",
    answers: ["answer", "2", "3", "4"],
    correct: 1
  },

  {
    question: "Test4",
    answers: ["1", "2", "3", "4"],
    correct: 2
  }
];

function showScore() {
  clearInterval(timer);
  questionTitle.classList.add("hide");
  answerEl.classList.add("hide");
  endQuiz.classList.remove("hide");
  restartButton.classList.remove("hide")
};

function showQuest(question) {
  questionTitle.textContent = questions[currentQuest].question;
  a1.textContent = questions[currentQuest].answers[0];
  a2.textContent = questions[currentQuest].answers[1];
  a3.textContent = questions[currentQuest].answers[2];
  a4.textContent = questions[currentQuest].answers[3];
};

function answerSelect(event) {
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
  }, 2000);

};


var highScores = JSON.parse(localStorage.getItem("high-scores")) || [];

function saveScore() {
  var data = {
    initials: initialInput.value,
    score: timeLeft
  };
  highScores.push(data);
  localStorage.setItem("high-scores", JSON.stringify(highScores));

};

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
  nextButton.classList.remove("hide");
  showQuest();
};

function restartQuiz() {
  location.reload();
};



startButton.addEventListener("click", startQuiz);
a1.addEventListener("click", answerSelect);
a2.addEventListener("click", answerSelect);
a3.addEventListener("click", answerSelect);
a4.addEventListener("click", answerSelect);
saveButton.addEventListener("click", saveScore);
restartButton.addEventListener("click", restartQuiz);
highScoreButton.addEventListener("click", showHighScores);
