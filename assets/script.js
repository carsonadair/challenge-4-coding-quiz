var listQuest = document.getElementById('answer');
var button = document.getElementById('submit');
var questionTitle = document.getElementById('question');
var questionNum = 0;

var question1 = {
    question: "Test1",
    answers: ["1","2","3","4"],
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
  questionTitle.textContent = questions[questionNum].question;
  listQuest.textContent = questions[questionNum].answers;
}



button.addEventListener("click",showQuest);

/* Start Timer, display first question with answer choices on the page.
As a user clicks and answers a question it goes to next question. 
If question is wrong, subtract a certain amount of time as a penalty. */