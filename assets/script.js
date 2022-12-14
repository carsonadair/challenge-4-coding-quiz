var quiz= document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitBtn = document.getElementById('submit')
var currentQuiz = 0
var score = 0

var questionContent = [
{ 
    question: "Test1",
    a: "testa",
    b: "testb",
    c: "testc",
    d: "testd",
},
{ 
    question: "Test2",
    a: "testa",
    b: "testb",
    c: "testc",
    d: "testd",
},
{ 
    question: "Test3",
    a: "testa",
    b: "testb",
    c: "testc",
    d: "testd",
},
{ 
    question: "Test4",
    a: "testa",
    b: "testb",
    c: "testc",
    d: "testd",
},
];