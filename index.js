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
            "6",
            "8",
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
]

var getQuiz = document.getElementById('quiz')
var button = document.createElement('button'); button.id = 'start-quiz'
getQuiz.appendChild(button)
button.textContent="Start Quiz!"
var startQuiz = document.getElementById('start-quiz')

startQuiz.onclick = function runQuiz (){
    getQuiz.removeChild(startQuiz)
     // Question
    p = document.createElement('p'); p.id = 'problem'
    getQuiz.appendChild(p)
    

    //Buttons
    for (var x = 0; x < 2; x++){
        var button = document.createElement('button')
        getQuiz.appendChild(button)
    
        //question and choices
        for (var i = 0; i < questionsArr.length; i++) {
            var choicesText = questionsArr[i].options[x]
            var questionText = questionsArr[i].question
            problem.textContent = questionText
            button.textContent = choicesText
            
            //Advance question
            var btns = document.querySelectorAll('.buttons')

            button.onclick = function advance(){
                i=i-1
                problem.textContent = "advanced"
                button.textContent = choicesText
                time.textContent = 30
            }
            
            //correct answer
        
            // var correctAnswer = questionsArr[i].answer
            // var score = 0
           
            
        }
    }

    // Time
    p = document.createElement('p'); p.id = 'time'
    getQuiz.appendChild(p)
    p.textContent = '30'

    // Countdown and reset
    var intervalId = setInterval(function() {
        var seconds = Number(p.textContent)-1
        if(seconds === -1) {
            clearInterval(intervalId)
        } else {
            p.textContent = seconds
        }
    },1000)
}
