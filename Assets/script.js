var questions = [
    {
        title: "what year did pink floyd form?", 
        choices: ["1965", "1970" , "1962" , "1971"],
        answer: "1965"

    },
    
    {
        title: "what year did pink floyd form?", 
        choices: ["1965", "1970" , "1962" , "1971"],
        answer: "1965"

    },
    
    {
        title: "what year did pink floyd form?", 
        choices: ["1965", "1970" , "1962" , "1971"],
        answer: "1965"

    },
    
    {
        title: "what year did pink floyd form?", 
        choices: ["1965", "1970" , "1962" , "1971"],
        answer: "1965"

    },
        
        
];

var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;
            
            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Out of Time";
            }


        },  1000);

        
    }
    render(questionIndex)
});


function render(questionIndex){
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for(var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;

    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click" , (compare));
     })


}

function compare(event) {
    var element = event.target;

    if (element.matches("li")){

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id" , "createDiv");

        if(element.textContent == questions[questionIndex].answer){
            score++;
            createDiv.textContent


        }





    }






}