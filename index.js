var questionsArr = 
[
    {
        question:"Who won the 2023 Super Bowl?",
        answer: "Kansas City Cheifs",
        options: [
            "Philadelphia Eagles",
            "Kansas City Cheifs",
        ]
    },    
    {
        question:"What NBA player has made the most three point shots?",
        answer: "Steph Curry",
        options: [
            "Ray Allen",
            "Steph Curry",
        ]
    },
    { 
        question:"Which professional golfer has won the most major tournaments?",
        answer: "Jack Nickalous",
        options: [
            "Tiger Woods",
            "Jack Nickalous",
        ]
    },
    {
        question:"How many NBA Championships did Michael Jordan win?",
        answer: "6",
        options: [
            "8",
            "6",
        ]
    },
    {
        question:"Which NFL team has never won a Super Bowl?",
        answer: "Jacksonville Jaguars",
        options: [
            "Tampa Bay Buccaneers",
            "Jacksonville Jaguars",
        ]

    },
    {
        question:"Which NBA team did Charles Barkley play for?",
        answer: "Jacksonville Jaguars",
        options: [
            "Orlando Magic",
            "Houston Rockets",
        ] 
    }
]

var getQuiz = document.getElementById('quiz')
if (previousScore){
p = document.createElement('p'); p.id = 'quizQuestion'
getQuiz.appendChild(p)
var previousScore = localStorage.getItem('previous-score',finalScore)
quizQuestion.textContent = "Previous Score:"+ previousScore + "%"
var button = document.createElement('button'); button.id = 'start-quiz'
getQuiz.appendChild(button)
button.textContent="Start Quiz!"
var startQuiz = document.getElementById('start-quiz')
}else{
    p = document.createElement('p'); p.id = 'quizQuestion'
    getQuiz.appendChild(p)
    quizQuestion.textContent = ""
    var button = document.createElement('button'); button.id = 'start-quiz'
    getQuiz.appendChild(button)
    button.textContent="Start Quiz!"
    var startQuiz = document.getElementById('start-quiz')
}

startQuiz.onclick = function runQuiz (){
    getQuiz.removeChild(startQuiz)
    var x = 0
    var score = 0

    // Question
    var questionText = questionsArr[x].question
    quizQuestion.textContent = questionText

    //Buttons
    var div = document.createElement('div')
    getQuiz.appendChild(div)
    var button = document.createElement('button'); button.id = 'buttonZero'
    div.appendChild(button)
    var button = document.createElement('button'); button.id = 'buttonOne'
    div.appendChild(button)
    buttonZero.textContent = questionsArr[x].options[0]
    buttonOne.textContent = questionsArr[x].options[1]
    
    
    // Time
    p = document.createElement('p'); p.id = 'time'
    getQuiz.appendChild(p)
    p.textContent = '30'
   
    //Advance
    buttonZero.onclick = function advance(){
        x=x+1
        if (x < 6){
        time.textContent = '30'
        var questionText = questionsArr[x].question
        quizQuestion.textContent = questionText
        buttonZero.textContent = questionsArr[x].options[0]
        buttonOne.textContent = questionsArr[x].options[1]
        }else{
            var finalScore = Math.round(score /questionsArr.length * 100);
            localStorage.setItem('previous-score',finalScore)
            var previousScore = localStorage.getItem('previous-score',finalScore)
            quizQuestion.textContent = "Previous Score:" + previousScore + "%"
            div.removeChild(buttonOne)
            div.removeChild(buttonZero)
            getQuiz.removeChild(div)
            getQuiz.removeChild(time)
            var button = document.createElement('button'); button.id = 'start-quiz'
            getQuiz.appendChild(button)
            button.textContent="Start Quiz!"
            var startQuiz = document.getElementById('start-quiz')
            startQuiz.onclick = runQuiz ()
        }
    }
    buttonOne.onclick = function advance(){
        x=x+1
        score = score + 1
        console.log(score)
        if (x < 6){
        time.textContent = '30'
        var questionText = questionsArr[x].question
        quizQuestion.textContent = questionText
        buttonZero.textContent = questionsArr[x].options[0]
        buttonOne.textContent = questionsArr[x].options[1]
        }else{
            var finalScore = Math.round(score /questionsArr.length * 100);
            localStorage.setItem('previous-score',finalScore)
            var previousScore = localStorage.getItem('previous-score',finalScore)
            quizQuestion.textContent = "Previous Score:" + previousScore + "%"
            div.removeChild(buttonOne)
            div.removeChild(buttonZero)
            getQuiz.removeChild(div)
            getQuiz.removeChild(time)
            var button = document.createElement('button'); button.id = 'start-quiz'
            getQuiz.appendChild(button)
            button.textContent="Start Quiz!"
            var startQuiz = document.getElementById('start-quiz')
            startQuiz.onclick = runQuiz ()
        }
    }
    

    // Countdown and reset
    var intervalId = setInterval(function() {
        var seconds = Number(p.textContent)-1
        if(seconds === -1) {
            x=x+1
            time.textContent = '30'
            var questionText = questionsArr[x].question
            quizQuestion.textContent = questionText
            buttonZero.textContent = questionsArr[x].options[0]
            buttonOne.textContent = questionsArr[x].options[1]
            clearInterval(intervalId)
        } else {
            p.textContent = seconds
        }
    },1000)
}


