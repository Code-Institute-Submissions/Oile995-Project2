const startEasy = document.getElementById("difficulty-easy");
const startMedium = document.getElementById("difficulty-medium");
const startHard = document.getElementById("difficulty-hard");
const hero = document.getElementById("hero-section");
const finalScoreSection = document.getElementById("final-score-section");
const quizSection = document.getElementById("quiz-section");
const scoreContainer = document.getElementById("final-score");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const helpText = document.getElementById("help-text");
const helpDiv = document.getElementById("help-div");
const toMain = document.getElementById("return-to-main");
const exitToMain = document.getElementById("exit");
let questionImage = document.getElementById("question-image");
let questionElement = document.getElementById("question");
const buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", (event) => {
        selectAnswer(event, currentQuestion);
    });
}
startEasy.addEventListener("click", (event) => {
    difficulty = "Easy";
    startGame(event, difficulty);});
startMedium.addEventListener("click", (event) => {
    difficulty = "Medium";
    startGame(event, difficulty);});
startHard.addEventListener("click", (event) => {
    difficulty = "Hard";
    startGame(event, difficulty);});
helpText.addEventListener("click", help);
toMain.addEventListener("click", returnToMain);
exitToMain.addEventListener("click", returnToMain);
let selectedQuestions, questionIndex, currentQuestion, timeout, buttonloop, score, answers, difficulty;
//const easyDiffuculty = "Easy";
//const mediumDiffuculty = "Medium";
//const hardDiffuculty = "Hard";

// starts game after difficulty is set/clicked
// hides hero section and shows quiz section
// randomize the sorting of selected question difficulty array.
// set questionIndex to 0 and calls setNextQuestion function
function startGame(e, difficulty){
    hero.classList.add("hide");
    quizSection.classList.remove("hide")
    console.log("e.target =", difficulty);
    questionIndex = 0;
    score = 0;
    if(difficulty == "Easy"){
        selectedQuestions = questionsEasy.sort(function(){return 0.5 - Math.random()});
        setNextQuestion();
    }
    else if(difficulty == "Medium"){
        selectedQuestions = questionsMedium;//.sort(function(){return 0.5 - Math.random()});
        setNextQuestion();
    }
    else if(difficulty == "Hard") {
        selectedQuestions = questionsHard.sort(function(){return 0.5 - Math.random()});
        setNextQuestion();
    }
    else{
        alert("Error 404 try again!");

    }
}

// if 5 questions have been run, return to main menu (placeholder for now)
// else set backgroundcolor to all buttons (does not work atm)  
// set current question to question index in selected questions and calls show function for that question
function setNextQuestion(){
    clearTimeout(timeout);
    console.log("setNext Function");
    console.log('questionIndex: ', questionIndex);
    console.log('score: ',score);
    if(questionIndex == 15){
        endGame();
    }
    else{
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
function showQuestion(currentQuestion){
    questionIndex++;
    console.log('questionIndex: ', questionIndex);
    questionElement.innerHTML = currentQuestion.question;
    questionImage.innerHTML = currentQuestion.image;
    answers = currentQuestion.incorrect_answers;
    // if question type is mutiple then generate random number from 0-3 and splice correct answer into answers in random position
    if(currentQuestion.type == "multiple"){
        button2.classList.remove("hide");
        button3.classList.remove("hide");
        randomNum= Math.floor(Math.random() * 4);
        answers.splice(randomNum, 0, currentQuestion.correct_answer);
        for(let i=0; i < 4; i++){
            buttonloop = "button"+i;
            document.getElementById(buttonloop).innerHTML = answers[i];
        }
    }
    //  else into random position of 0-1. populate innerHTML of each answer button with answers.
    else {
        button2.classList.add("hide");
        button3.classList.add("hide");
        randomNum= Math.floor(Math.random() * 2);
        answers.splice(randomNum, 0, currentQuestion.correct_answer);
        for(let i=0; i < 2; i++){
            buttonloop = "button"+i;
            document.getElementById(buttonloop).innerHTML = answers[i];
        }
    }
}
//takes click event and current question object and checks if targeted button is equal to correct_answer
//if it is, target backgroundcolor will be set to green, otherwise red. timeout for 2 seconds before setnextquestion is called again.
function selectAnswer (e, currentQuestion){
    console.log("correct answer = ", currentQuestion.correct_answer);
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
    if(score <= 2){
        document.getElementById("score-container").innerHTML = `
        <h1> Your final Score is: ${score}! </h1>
        <p> Wow! Yeah, you are not that good at this.. You should consider an easier difficulty!</p>
        `;

    }

    else if(score < 4){
        document.getElementById("score-container").innerHTML = `
        <h1> Your final Score is: ${score}! </h1>
        <p> Okay that was not half bad!</p>
        `;


    }
    else{
        document.getElementById("score-container").innerHTML = `
        <h1> Your final Score is: ${score}! </h1>
        <p> You really know your video-game history!</p>
        `;
    }
    finalScoreSection.classList.remove("hide");
    quizSection.classList.add("hide");
}

function returnToMain(){
    finalScoreSection.classList.add("hide");
    hero.classList.remove("hide");
    helpDiv.classList.add("hide");
    quizSection.classList.add("hide");

}

function help(){
    console.log("help was initiated");
    console.log(helpDiv.classList.contains("hide"));
    if(helpDiv.classList.contains("hide")){
        helpDiv.classList.remove("hide");
}
    else{
        helpDiv.classList.add("hide");
    }
}

const questionsEasy = [
    {
        "image":"<img src='assets/images/question-easy/easy-teamfortress2.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"What year was the game Team Fortress 2 released?",
        "correct_answer":"2007",
        "incorrect_answers":["2009","2005","2010"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-kingdom-hearts-papou.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"boolean",
        "question":"In Kingdom Hearts the Paopu fruit is said to intertwine the destinies for two people forever.",
        "correct_answer":"True",
        "incorrect_answers":["False"]
    },
    {
        "image":"<img src='assets/images/question-easy/easy-tetris.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"boolean",
        "question":"Tetris is the #1 best-selling video game of all-time.",
        "correct_answer":"False",
        "incorrect_answers":["True"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-scout.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"What&#039;s the Team Fortress 2 Scout&#039;s city of origin?",
        "correct_answer":"Boston",
        "incorrect_answers":["Sydney","Detroit","New York"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-supershamshbros.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Who is the creator of the Super Smash Bros. Series?",
        "correct_answer":"Masahiro Sakurai",
        "incorrect_answers":["Reggie Fils-Aim&eacute;","Bill Trinen","Hideo Kojima"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-deadspace.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Who is the main protagonist of Dead Space?",
        "correct_answer":"Isaac Clarke",
        "incorrect_answers":["Commander Shepard","Gordon Freeman","Master Chief"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-residentevill.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"boolean",
        "question":"Rebecca Chambers does not appear in any Resident Evil except for the original Resident Evil and the Gamecube remake.",
        "correct_answer":"False",
        "incorrect_answers":["True"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-tomclancy-division.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Which of the following is not a faction in Tom Clancy&#039;s The Division?",
        "correct_answer":"CDC",
        "incorrect_answers":["Cleaners","Last Man Batallion","Rikers"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-rust.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"In Rust, how many Timed Explosive Charges does it take to destroy a Ladder Hatch?",
        "correct_answer":"1",
        "incorrect_answers":["3","2","5"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-metal-gear-solid.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"boolean",
        "question":"&quot;Metal Gear Solid 3: Snake Eater&quot; was released in 2004.",
        "correct_answer":"True",
        "incorrect_answers":["False"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-spyro.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"In the original Spyro game who is the first villain?",
        "correct_answer":"Gnasty Gnorc",
        "incorrect_answers":["Ripto","Sorceress","Cynder"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-ea.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Before it&#039;s redesign of the company logo in the year 2000, which 3D shape is NOT represented in the Electronic Arts logo?",
        "correct_answer":"Cylinder",
        "incorrect_answers":["Pyramid","Cube","Sphere"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-fire-emblem-shadow.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"In the game &quot;Fire Emblem: Shadow Dragon&quot;, what is the central protagonist&#039;s name?",
        "correct_answer":"Marth",
        "incorrect_answers":["Roy","Eliwood","Robin"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-minecraft.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"What is the name of a popular franchise that includes placing blocks down and surviving in an open world? ",
        "correct_answer":"Minecraft",
        "incorrect_answers":["Unturned","Roblox","Grand Theft Auto V"]
    },
        
    {
        "image":"<img src='assets/images/question-easy/easy-supershamshbros.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Which character was introduced to the Super Smash Bros franchise in Super Smash Bros Melee?",
        "correct_answer":"Sheik",
        "incorrect_answers":["Samus","Lucas","Mega Man"]
    }
]

const questionsMedium = [
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"What&#039;s the famous line Vaas says in &quot;Far Cry 3&quot;?",
        "correct_answer":"Did I ever tell you the definition of Insanity?",
        "incorrect_answers":["Have I failed to entertain you?","You&#039;re my b*tch!","Maybe your best course...would be to tread lightly."]
    },
    {
        "image":"<img src='assets/images/question-medium/medium-ffxv.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"What is the original name of Final Fantasy XV?",
        "correct_answer":"Final Fantasy Versus XIII",
        "incorrect_answers":["Final Fantasy: Reborn","Final Fantasy XVI","Final Fantasy XIII-3"]
    },
    {
        "image":"<img src='assets/images/question-medium/medium-legends.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Excluding their instructor, how many members of Class VII are there in the game &quot;Legend of Heroes: Trails of Cold Steel&quot;?",
        "correct_answer":"9",
        "incorrect_answers":["6","10","3"]
    },
        
    {
        "image":"<img src='assets/images/question-medium/medium-rollercoaster.jpg'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"&quot;Rollercoaster Tycoon&quot; was programmed mostly entirely in...",
        "correct_answer":"x86 Assembly",
        "incorrect_answers":["C++","C","ALGOL"]
    },

    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Which of the following characters were considered for inclusion in Super Smash Bros. Melee?",
        "correct_answer":"Lucas",
        "incorrect_answers":["Mega Man","Meta Knight","Diddy Kong"]
    },
        
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Of the following space shooter games, which came out first?",
        "correct_answer":"Space Invaders",
        "incorrect_answers":["Galaxian","Galaga","Sinistar"]
    },
            
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"What is the name of the 8th installment in the Fire Emblem series?",
        "correct_answer":"The Sacred Stones",
        "incorrect_answers":["Blazing Sword","Awakening","Path of Radiance"]
    },
            
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"What is the only Generation III Pokemon whose name begins with the letter I?",
        "correct_answer":"Illumise",
        "incorrect_answers":["Infernape","Ivysaur","Igglybuff"]
    },
                
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"In the game Tom Clancy&#039;s Rainbow 6 Siege, what organization is Valkyrie from?",
        "correct_answer":"Navy Seals",
        "incorrect_answers":["S.A.S","G.I.G.N","F.B.I"]
    },
                    
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"In Need for Speed: Underground, what car does Eddie drive?",
        "correct_answer":"Nissan Skyline GT-R (R34)",
        "incorrect_answers":["Mazda RX-7 FD3S","Acura Integra Type R","Subaru Impreza 2.5 RS"]
    },
        
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"What are tiny Thwomps called in Super Mario World?",
        "correct_answer":"Thwimps",
        "incorrect_answers":["Little Thwomp","Mini Thwomp","Tiny Tims"]
    },
        
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Which one of the first four titles of the &quot;Grand Theft Auto&quot; franchise started the series of iconic image grid cover arts?",
        "correct_answer":"Grand Theft Auto III",
        "incorrect_answers":["Grand Theft Auto","Grand Theft Auto II","Grand Theft Auto Vice City"]
    },
        
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"In the co-op shooter Payday 2, which contact helps you break out Hoxton?",
        "correct_answer":"The Dentist",
        "incorrect_answers":["Vlad","The Elephant","The Butcher"]
    },
        
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"Which unlockable character in Super Smash Bros. For Wii U and 3DS does not have to be fought to be unlocked?",
        "correct_answer":"Mii Fighters",
        "incorrect_answers":["Ness","R.O.B.","Mewtwo"]
    },
        
    {
        "image":"<img src='assets/images/question-medium/fc3-vaas.png'style='max-width: 60vw; height: 40vw;'>",
        "type":"multiple",
        "question":"In the Mario Kart and Smash Bros. Games, Princess Rosalina is considered what weight class?",
        "correct_answer":"Heavy",
        "incorrect_answers":["Medium","Light","Light-Medium"]
    }
]

const questionsHard = [
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"When was the first Call of Duty title released?",
        "correct_answer":"October 29, 2003",
        "incorrect_answers":["December 1, 2003","November 14, 2002","July 18, 2004"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"What was the world&#039;s first video game?",
        "correct_answer":"Tennis for Two",
        "incorrect_answers":["Spacewar!","Pong","Space Travel"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"According to Toby Fox, what was the method to creating the initial tune for Megalovania?",
        "correct_answer":"Singing into a Microphone",
        "incorrect_answers":["Playing a Piano","Using a Composer Software","Listened to birds at the park"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"What&#039;s the name of the halloween-related Sims 4 Stuff Pack released September 29th, 2015?",
        "correct_answer":"Spooky Stuff",
        "incorrect_answers":["Ghosts n&#039; Ghouls","Nerving Nights","Fearful Frights"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"In the video game &quot;Metal Gear Solid&quot;, what did Revolver Ocelot consider the greatest handgun ever made?",
        "correct_answer":"Colt Single Action Army",
        "incorrect_answers":["Colt Python","Colt M1892","Colt 1851 Navy Revolver"]
    },
        
    {
        "type":"multiple",
        "question":"&quot;Gimmick!&quot; is a Japanese Famicom game that uses a sound chip expansion in the cartridge. What is it called?",
        "correct_answer":"FME-7",
        "incorrect_answers":["VRC7","VRC6","MMC5"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"How many aces can be shot down through the entirety of &quot;Ace Combat Zero: The Belkan War&quot;?",
        "correct_answer":"169",
        "incorrect_answers":["100","132","245"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"Which monster in &quot;Monster Hunter Tri&quot; was causing earthquakes in Moga Village?",
        "correct_answer":"Ceadeus",
        "incorrect_answers":["Alatreon","Rathalos","Lagiacrus"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"In &quot;Call Of Duty: Zombies&quot;, which map&#039;s opening cutscene shows &quot;Richtofen&quot; killing another version of himself?",
        "correct_answer":"The Giant",
        "incorrect_answers":["Shadows Of Evil","Der Eisendrache","Moon"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"In Diablo lore, this lesser evil spawned from one of the seven heads of Tathamet, and was known as the Maiden of Anguish.",
        "correct_answer":"Andariel",
        "incorrect_answers":["Valla","Malthael","Kashya"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"What is the plane of existence in MicroProse&#039;s 1997 &quot;Magic the Gathering&quot;?",
        "correct_answer":"Shandalar",
        "incorrect_answers":["Theros","Ravnica","Amonkhet"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"What vault in the video game &quot;Fallout 3&quot; is the home of multiple clones named Gary?",
        "correct_answer":"Vault 108",
        "incorrect_answers":["Vault 101","Vault 87","Vault 21"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"Which one of these is NOT an official map in Counter-Strike: Global Offensive?",
        "correct_answer":"de_season",
        "incorrect_answers":["de_sugarcane","de_canals","de_militia"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"boolean",
        "question":"In &quot;Minecraft&quot;, gold tools are faster than diamond tools.",
        "correct_answer":"True",
        "incorrect_answers":["False"]
    },
        
    {
        "image":"<img src='assets/images/fc3-vaas.png'style='max-width: 15vw; height: auto;'>",
        "type":"multiple",
        "question":"In the Mario Kart series, which game introduced the &quot;Shield Drifting&quot; mechanic?",
        "correct_answer":"Mario Kart Arcade GP DX",
        "incorrect_answers":["Mario Kart: Double Dash","Mario Kart Super Circuit","Mario Kart DS"]
	}
]