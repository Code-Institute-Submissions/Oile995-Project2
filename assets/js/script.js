const startEasy = document.getElementById("difficulty-easy");
const startMedium = document.getElementById("difficulty-medium");
const startHard = document.getElementById("difficulty-hard");
const hero = document.getElementById("hero-section");
const gameContainer = document.getElementById("game-container");
const quizSection = document.getElementById("quiz-section");
let questionImage = document.getElementById("question-image");
let questionElement = document.getElementById("question");
const button = document.getElementsByClassName("button");


startEasy.addEventListener("click", startGame, false);
startMedium.addEventListener("click", startGame, false);
startHard.addEventListener("click", startGame, false);
let selectedQuestions, questionIndex, currentQuestion;

function startGame(){
    hero.classList.add("hide");
    quizSection.classList.remove("hide")
    selectedQuestions = questionsMedium.sort(function(){return 0.5 - Math.random()});
    questionIndex = 0;
    setNextQuestion();
}

function setNextQuestion(){
    currentQuestion = selectedQuestions[questionIndex]
    showQuestion(currentQuestion);
    
}

function showQuestion(question){
    randomNum= Math.floor(Math.random() * 4);
    questionElement.innerHTML = question.question;
    questionImage.innerHTML = question.image;
    let answers = question.incorrect_answers;
    answers.splice(randomNum, 0, question.correct_answer);
    //if question has multiple choices, the html of Id=button0-3 will be populated with all 4 answers
    if(question.type == "multiple"){
        for(let i=0; i < 4; i++){
            let test = "button"+i;
            document.getElementById(test).innerHTML = answers[i];
            button[i].addEventListener("click", (event) => {
                selectAnswer(event, question);
              });
        }

    }
}

function selectAnswer (e, currentQuestion){
    let selectedAnswer = e.target.innerHTML;
    console.log(selectedAnswer);
    console.log(currentQuestion.correct_answer);

    if(String(selectedAnswer) == currentQuestion.correct_answer){
        console.log("Correct!");
    }
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