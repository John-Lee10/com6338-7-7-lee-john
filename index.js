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
    p = document.createElement('p'); p.id = 'question'
    getQuiz.appendChild(p)
    p.textContent = questionsArr[0].question
    // Options
    var button = document.createElement('button'); button.id = 'option1'
    getQuiz.appendChild(button)
    button.textContent = questionsArr[0].options[0]
    var button = document.createElement('button'); button.id = 'option2'
    getQuiz.appendChild(button)
    button.textContent = questionsArr[0].options[1]
 
    // Time
    p = document.createElement('p'); p.id = 'time'
    getQuiz.appendChild(p)
    p.textContent = '30'
    
     //correct answer
    var correctAnswer1 = questionsArr[0].answer
    var score = 0
    button.onclick = function clickCorrect(){
        if(correctAnswer1 = button.textContent){
            score = score+1
            question.textContent = questionsArr[1].question
            option1.textContent = questionsArr[1].options[0]
            option2.textContent = questionsArr[1].options[1]
            time.textContent = 30
        }
    }
    
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
    // // Options//
    // for (var e=0;e < 2; e++){
    //     var button = document.createElement('button')
    //     getQuiz.appendChild(button)
    
    //         //forloop
    //         for (var i= 0; i <questionsArr.length; i++) {
    //             problem.textContent = questionsArr[i].question
    //             button.textContent = questionsArr[i].options[e]
    //             console.log(questionsArr[i].question)
    //              //correct answer
    //             var correctAnswer = questionsArr[i].answer
    //             var score = 0
    //             button.onclick = function clickCorrect(){
    //                 if(correctAnswer = button.textContent){
    //                     score = score+1
    //                     i=i-1
    //                     problem.textContent = questionsArr[i].question
    //                     button.textContent = questionsArr[i].options[e]
    //                     time.textContent = 30
    //                     console.log(score)
    //                 }else{
    //                     i= i-1
    //                     problem.textContent = "wrong"
    //                 }
    //             }
    //         }
