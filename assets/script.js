var listQuest = document.getElementById('answer');
var startButton = document.getElementById('submit');
var questionTitle = document.getElementById('question');
var nextButton = document.getElementById('next');
var currentQuest = 0

var question1 = {
    question: "Test1",
    answers: ["option","2","3","4"],
    correct: 0
  };

var question2 = {
    question: "Test2",
    answers: ["1","2","3","4"],
    correct: 2
  };

var question3 = {
    question: "Test3",
    answers: ["answer","2","3","4"],
    correct: 1
  }

var question4 = {
    question: "Test4",
    answers: ["1","2","3","4"],
    correct: 2
  };

var questions = [question1, question2, question3, question4];

function showQuest() {
  startButton.classList.add("hide");
  questionTitle.classList.remove("hide");
  listQuest.classList.remove("hide");
  nextButton.classList.remove("hide");
  nextQuest()

  //questionTitle.textContent = questions[questionNum].question;
  //listQuest.textContent = questions[questionNum].answers;
  /* for (var i=0; i<questions[i].answers.length; i++) {
    var answerBtn = document.createElement('button');
    answerBtn.textContent = question1.answers[i];
    listQuest.appendChild(answerBtn);
  }*/

  /*for (var i=0; i<questions.length; i++) {
   questionTitle.textContent = questions[i].question;
    for (var i=0; i<questions[i].answers.length; i++) {
      var answerBtn = document.createElement('button');
      answerBtn.textContent = question1.answers[i];
      listQuest.appendChild(answerBtn);*/


      //answerBtn.addEventListener("click", () => {
         
      //})
  }

function nextQuest(){
  showQuest(currentQuest)
  nextButton.addEventListener("click",() => {

  });
}

function showQuest(question){
  for (var i=0; i<questions.length; i++) {
    questionTitle.textContent = questions[i].question;
  }
}

function startQuiz() {
  startButton.classList.add("hide");
  questionTitle.classList.remove("hide");
  listQuest.classList.remove("hide");
  nextButton.classList.remove("hide");
  showQuest();
  nextQuest();

  //questionTitle.textContent = questions[questionNum].question;
  //listQuest.textContent = questions[questionNum].answers;
  /* for (var i=0; i<questions[i].answers.length; i++) {
    var answerBtn = document.createElement('button');
    answerBtn.textContent = question1.answers[i];
    listQuest.appendChild(answerBtn);
  }*/

  /*for (var i=0; i<questions.length; i++) {
   questionTitle.textContent = questions[i].question;
    for (var i=0; i<questions[i].answers.length; i++) {
      var answerBtn = document.createElement('button');
      answerBtn.textContent = question1.answers[i];
      listQuest.appendChild(answerBtn);*/


      //answerBtn.addEventListener("click", () => {
         
      //})
  }



startButton.addEventListener("click",startQuiz);

/* Start Timer, display first question with answer choices on the page.
As a user clicks and answers a question it goes to next question. 
If question is wrong, subtract a certain amount of time as a penalty. */