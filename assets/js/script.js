const startEasy = document.getElementById("difficulty-easy");
const startMedium = document.getElementById("difficulty-medium");
const startHard = document.getElementById("difficulty-hard");
const hero = document.getElementById("hero-section");
const finalScoreSection = document.getElementById("final-score-section");
const gameContainer = document.getElementById("game-container");
const quizSection = document.getElementById("quiz-section");
const scoreContainer = document.getElementById("final-score");
let questionImage = document.getElementById("question-image");
let questionElement = document.getElementById("question");
const buttons = document.getElementsByClassName("button");

startEasy.addEventListener("click", startGame, false);
startMedium.addEventListener("click", startGame, false);
startHard.addEventListener("click", startGame, false);
let selectedQuestions, questionIndex, currentQuestion, timeout, buttonloop, score;

// starts game after difficulty is set/clicked
// hides hero section and shows quiz section
// randomize the sorting of selected question difficulty array.
// set questionIndex to 0 and calls setNextQuestion function
function startGame(){
    hero.classList.add("hide");
    quizSection.classList.remove("hide")
    selectedQuestions = questionsMedium.sort(function(){return 0.5 - Math.random()});
    questionIndex = 0;
    score = 0;
    setNextQuestion();
}

// if 5 questions have been run, return to main menu (placeholder for now)
// else set backgroundcolor to all buttons (does not work atm)  
// set current question to question index in selected questions and calls show function for that question
function setNextQuestion(){
    console.log("setNext Function");
    console.log(questionIndex);
    console.log(score);
    if(questionIndex == 5){
        endGame();
        //hero.classList.remove("hide");
        //quizSection.classList.add("hide")
    }
    else{
        console.log("tries to style buttons");
        console.log(buttons.length);
        for(let i = 0; i < buttons.length; i++){
            buttonloop = "button"+i;
            document.getElementById(buttonloop).style.backgroundColor = "lightgray";
        }
        currentQuestion = selectedQuestions[questionIndex]
        showQuestion(currentQuestion);
    }
}

// add 1 to questionIndex and replace inner html of question and image placeholders
// declare varible array for all answers initially including only incorrect ones.
// add eventlistener for click of button and call selectAnswer function with the event and the current question object.
function showQuestion(question){
    console.log("showQuestion Function");
    questionIndex++;
    questionElement.innerHTML = question.question;
    questionImage.innerHTML = question.image;
    let answers = question.incorrect_answers;
    // if question type is mutiple then generate random number from 0-3 and splice correct answer into answers in random position
    if(question.type == "multiple"){
        randomNum= Math.floor(Math.random() * 4);
        answers.splice(randomNum, 0, question.correct_answer);
        for(let i=0; i < 4; i++){
            buttonloop = "button"+i;
            document.getElementById(buttonloop).innerHTML = answers[i];
            buttons[i].addEventListener("click", (event) => {
                selectAnswer(event, question);
              });
        }
    }
    //  else into random position of 0-1. populate innerHTML of each answer button with answers.
    else {
        randomNum= Math.floor(Math.random() * 2);
        answers.splice(randomNum, 0, question.correct_answer);
        for(let i=0; i < 4; i++){
            let test = "button"+i;
            document.getElementById(test).innerHTML = answers[i];
            buttons[i].addEventListener("click", (event) => {
                selectAnswer(event, question);
              });
        }
    }
}
//takes click event and current question object and checks if targeted button is equal to correct_answer
//if it is, target backgroundcolor will be set to green, otherwise red. timeout for 2 seconds before setnextquestion is called again.
function selectAnswer (e, currentQuestion){
    console.log("selecAnswer Function");
    if(String(e.target.innerHTML) == currentQuestion.correct_answer){
        document.getElementById(e.target.style.backgroundColor="green");
        score++;
        timeout = setTimeout(setNextQuestion, 2000);
    }
    else{
        document.getElementById(e.target.style.backgroundColor="red");
        timeout = setTimeout(setNextQuestion, 2000);
    }
}

function endGame(){
    document.getElementById("score-container").innerHTML = `Your final Score is: ${score}!`;
    finalScoreSection.classList.remove("hide");
    quizSection.classList.add("hide");
}

const questionsMedium = [
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"What&#039;s the famous line Vaas says in &quot;Far Cry 3&quot;?",
        "correct_answer":"Did I ever tell you the definition of Insanity?",
        "incorrect_answers":["Have I failed to entertain you?","You&#039;re my b*tch!","Maybe your best course...would be to tread lightly."]
    },
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"What is the original name of Final Fantasy XV?",
        "correct_answer":"Final Fantasy Versus XIII",
        "incorrect_answers":["Final Fantasy: Reborn","Final Fantasy XVI","Final Fantasy XIII-3"]
    },
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"Excluding their instructor, how many members of Class VII are there in the game &quot;Legend of Heroes: Trails of Cold Steel&quot;?",
        "correct_answer":"9",
        "incorrect_answers":["6","10","3"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"&quot;Rollercoaster Tycoon&quot; was programmed mostly entirely in...",
        "correct_answer":"x86 Assembly",
        "incorrect_answers":["C++","C","ALGOL"]
    },

    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"Which of the following characters were considered for inclusion in Super Smash Bros. Melee?",
        "correct_answer":"Lucas",
        "incorrect_answers":["Mega Man","Meta Knight","Diddy Kong"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"Of the following space shooter games, which came out first?",
        "correct_answer":"Space Invaders",
        "incorrect_answers":["Galaxian","Galaga","Sinistar"]
    },
            
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"What is the name of the 8th installment in the Fire Emblem series?",
        "correct_answer":"The Sacred Stones",
        "incorrect_answers":["Blazing Sword","Awakening","Path of Radiance"]
    },
            
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"What is the only Generation III Pokemon whose name begins with the letter I?",
        "correct_answer":"Illumise",
        "incorrect_answers":["Infernape","Ivysaur","Igglybuff"]
    },
                
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"In the game Tom Clancy&#039;s Rainbow 6 Siege, what organization is Valkyrie from?",
        "correct_answer":"Navy Seals",
        "incorrect_answers":["S.A.S","G.I.G.N","F.B.I"]
    },
                    
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"In Need for Speed: Underground, what car does Eddie drive?",
        "correct_answer":"Nissan Skyline GT-R (R34)",
        "incorrect_answers":["Mazda RX-7 FD3S","Acura Integra Type R","Subaru Impreza 2.5 RS"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"What are tiny Thwomps called in Super Mario World?",
        "correct_answer":"Thwimps",
        "incorrect_answers":["Little Thwomp","Mini Thwomp","Tiny Tims"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"Which one of the first four titles of the &quot;Grand Theft Auto&quot; franchise started the series of iconic image grid cover arts?",
        "correct_answer":"Grand Theft Auto III",
        "incorrect_answers":["Grand Theft Auto","Grand Theft Auto II","Grand Theft Auto Vice City"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"In the co-op shooter Payday 2, which contact helps you break out Hoxton?",
        "correct_answer":"The Dentist",
        "incorrect_answers":["Vlad","The Elephant","The Butcher"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"Which unlockable character in Super Smash Bros. For Wii U and 3DS does not have to be fought to be unlocked?",
        "correct_answer":"Mii Fighters",
        "incorrect_answers":["Ness","R.O.B.","Mewtwo"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"In the Mario Kart and Smash Bros. Games, Princess Rosalina is considered what weight class?",
        "correct_answer":"Heavy",
        "incorrect_answers":["Medium","Light","Light-Medium"]
    }
]