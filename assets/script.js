var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
var answerEl = document.getElementById('answer');
var startButton = document.getElementById('submit');
var questionTitle = document.getElementById('question');
var nextButton = document.getElementById('next');
var endQuiz = document.getElementById('endquiz');
var saveButton = document.getElementById('save-score');
var initialInput = document.getElementById('initials');
var timeCount = document.getElementById('timer');
var currentQuest = 0
var timeLeft = 60

var timer;

var questions = [
{
  question: "Test1",
  answers: ["option","2","3","4"],
  correct: 0
},

{
  question: "Test2",
  answers: ["1","2","3","4"],
  correct: 2
},

{
  question: "Test3",
  answers: ["answer","2","3","4"],
  correct: 1
},

{
  question: "Test4",
  answers: ["1","2","3","4"],
  correct: 2
}
];

function showScore() {
  clearInterval(timer);
  questionTitle.classList.add("hide");
  answerEl.classList.add("hide");
  nextButton.classList.add("hide");
  endQuiz.classList.remove("hide");
}

function nextQuest() {
  currentQuest++;
  if(currentQuest == questions.length){
    showScore();
    return;
  }
  showQuest();
}

function showQuest(question){
  questionTitle.textContent = questions[currentQuest].question;
  a1.textContent = questions[currentQuest].answers[0];
  a2.textContent = questions[currentQuest].answers[1];
  a3.textContent = questions[currentQuest].answers[2];
  a4.textContent = questions[currentQuest].answers[3];
}

function answerSelect(event) {
  if(questions[currentQuest].correct == event.target.value){
    alert("correct");
  } else {
    alert("incorrect");
    timeLeft -= 5;
  }
}

a1.addEventListener("click", answerSelect);
a2.addEventListener("click", answerSelect);
a3.addEventListener("click", answerSelect);
a4.addEventListener("click", answerSelect);
nextButton.addEventListener("click", nextQuest);
saveButton.addEventListener("click", saveScore);

var highScores = JSON.parse(localStorage.getItem("high-scores")) || [];

//make a for loop to display scores in high-scores.html

function saveScore() {
  var data = {
    initials: initialInput.value,
    score: timeLeft
  };
  highScores.push(data);
  localStorage.setItem("high-scores", JSON.stringify(highScores));
};


function startQuiz() {
  timer = setInterval(function(){
    timeLeft--;
    timeCount.textContent = timeLeft;
    if(timeLeft<=0){
      showScore();
      return;
    }
  },1000)
  startButton.classList.add("hide");
  questionTitle.classList.remove("hide");
  answerEl.classList.remove("hide");
  nextButton.classList.remove("hide");
  showQuest();
  }



startButton.addEventListener("click",startQuiz);

/* Start Timer, display first question with answer choices on the page.
As a user clicks and answers a question it goes to next question. 
If question is wrong, subtract a certain amount of time as a penalty. */