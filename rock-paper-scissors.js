// start game
// get user input rock, paper, scissors, quit
// if quit, end
// if not quit, randomize computer rps
// compare user and bot
// update scores
// goto 2

function playRockPaperScissors() {

    let numberOfRounds = 0;
    let userScore = 0;
    let compScore = 0;
    let userInput;

    console.log("Welcome to Rock Paper Scissors!");

    while (userInput !== "q" && numberOfRounds < 1000) {

        userInput = prompt("Please choose (r)ock, (p)aper, (s)cissors or (q)uit...");

        if (validInput(userInput)) {
            if (userInput === "q") { continue; }
            numberOfRounds++;
            let computerChoice = getComputerChoice();
            switch (evaluateRPSWinner(userInput, computerChoice)) {
                case -1: 
                    console.log(`Computer chose ${computerChoice}, you lose!`);
                    compScore++;
                    break;
                case 0: 
                    console.log(`Computer chose ${computerChoice}, you tie!`);
                    break;
                case 1: 
                    console.log(`Computer chose ${computerChoice}, you win!`);
                    userScore++;
                    break;
                default: 
                    console.error("Something went horribly wrong.");
                    break;
            }
            let ties = numberOfRounds - userScore - compScore;
            console.log(`Current scores are:\nYou: ${userScore}\tComp: ${compScore}\tTies: ${ties}\tRounds: ${numberOfRounds}`);
        } else {
            console.log("Invalid input...")
        }
    }
}

/* returns -1 if p0 lost, 0 if tie, 1 if p0 wins */
function evaluateRPSWinner(p0, p1) {
    if (p0 === p1) {
        return 0;
    }
    let pair = "" + p0 + p1;
    switch (pair) {
        case "rs":
        case "pr": 
        case "sp": return 1;
        case "rp":
        case "ps":
        case "sr": return -1;
        default: 
            console.error("Invalid input to evaluateRPSWinner");
            return null;
    }
}

/* returns true if input is r, p, s or q */
function validInput(input) {
    if (input === "r") {return true;}
    if (input === "p") {return true;}
    if (input === "s") {return true;}
    if (input === "q") {return true;}
    return false;
}

/* randomly returns r p or s */
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "r";
        case 1: return "p";
        case 2: return "s";
        default: return null;
    }
}

playRockPaperScissors();