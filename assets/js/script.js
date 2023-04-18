const startEasy = document.getElementById("difficulty-easy");
const startMedium = document.getElementById("difficulty-medium");
const startHard = document.getElementById("difficulty-hard");
const hero = document.getElementById("hero-image");
const gameContainer = document.getElementById("game-container");
startEasy.addEventListener("click", startGame, false);
startMedium.addEventListener("click", startGame, false);
startHard.addEventListener("click", startGame, false);

function startGame(event){
    startEasy.style.display = "none";
    startMedium.style.display = "none";
    startHard.style.display = "none";
    hero.style.display = "none";
    gameContainer.classList.remove("hide")
}


const mockList = [
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"easy",
        "question":"What is the name of Team Fortress 2&#039;s Heavy Weapons Guy&#039;s minigun?",
        "correct_answer":"Sasha",
        "incorrect_answers":["Betty","Anna","Diana"]
    },
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"easy",
        "question":"Which of these is a type of monster found in Minecraft?",
        "correct_answer":"Skeleton",
        "incorrect_answers":["Werewolf","Vampire","Minotaur"]
    },
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"easy",
        "question":"Blinky, Pinky, Inky and Clyde are characters from which classic video game?",
        "correct_answer":"Pac-Man",
        "incorrect_answers":["Gauntlet","Space Invaders","Street Fighter"]
    },
]

const questionsMedium = [
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"What&#039;s the famous line Vaas says in &quot;Far Cry 3&quot;?",
        "correct_answer":"Did I ever tell you the definition of Insanity?",
        "incorrect_answers":["Have I failed to entertain you?","You&#039;re my b*tch!","Maybe your best course...would be to tread lightly."]
    },
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"What is the original name of Final Fantasy XV?",
        "correct_answer":"Final Fantasy Versus XIII",
        "incorrect_answers":["Final Fantasy: Reborn","Final Fantasy XVI","Final Fantasy XIII-3"]
    },
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"Excluding their instructor, how many members of Class VII are there in the game &quot;Legend of Heroes: Trails of Cold Steel&quot;?",
        "correct_answer":"9",
        "incorrect_answers":["6","10","3"]
    },
        
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"&quot;Rollercoaster Tycoon&quot; was programmed mostly entirely in...",
        "correct_answer":"x86 Assembly",
        "incorrect_answers":["C++","C","ALGOL"]
    },

    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"Which of the following characters were considered for inclusion in Super Smash Bros. Melee?",
        "correct_answer":"Lucas",
        "incorrect_answers":["Mega Man","Meta Knight","Diddy Kong"]
    },
        
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"Of the following space shooter games, which came out first?",
        "correct_answer":"Space Invaders",
        "incorrect_answers":["Galaxian","Galaga","Sinistar"]
    },
            
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"What is the name of the 8th installment in the Fire Emblem series?",
        "correct_answer":"The Sacred Stones",
        "incorrect_answers":["Blazing Sword","Awakening","Path of Radiance"]
    },
            
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"What is the only Generation III Pokemon whose name begins with the letter I?",
        "correct_answer":"Illumise",
        "incorrect_answers":["Infernape","Ivysaur","Igglybuff"]
    },
                
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"In the game Tom Clancy&#039;s Rainbow 6 Siege, what organization is Valkyrie from?",
        "correct_answer":"Navy Seals",
        "incorrect_answers":["S.A.S","G.I.G.N","F.B.I"]
    },
                    
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"In Need for Speed: Underground, what car does Eddie drive?",
        "correct_answer":"Nissan Skyline GT-R (R34)",
        "incorrect_answers":["Mazda RX-7 FD3S","Acura Integra Type R","Subaru Impreza 2.5 RS"]
    },
        
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"What are tiny Thwomps called in Super Mario World?",
        "correct_answer":"Thwimps",
        "incorrect_answers":["Little Thwomp","Mini Thwomp","Tiny Tims"]
    },
        
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"Which one of the first four titles of the &quot;Grand Theft Auto&quot; franchise started the series of iconic image grid cover arts?",
        "correct_answer":"Grand Theft Auto III",
        "incorrect_answers":["Grand Theft Auto","Grand Theft Auto II","Grand Theft Auto Vice City"]
    },
        
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"In the co-op shooter Payday 2, which contact helps you break out Hoxton?",
        "correct_answer":"The Dentist",
        "incorrect_answers":["Vlad","The Elephant","The Butcher"]
    },
        
    {
        "category":"Entertainment: Video Games",
        "type":"multiple",
        "difficulty":"medium",
        "question":"Which unlockable character in Super Smash Bros. For Wii U and 3DS does not have to be fought to be unlocked?",
        "correct_answer":"Mii Fighters",
        "incorrect_answers":["Ness","R.O.B.","Mewtwo"]
    },
        
    {
        "type":"multiple",
        "question":"In the Mario Kart and Smash Bros. Games, Princess Rosalina is considered what weight class?",
        "correct_answer":"Heavy",
        "incorrect_answers":["Medium","Light","Light-Medium"]
    }
]