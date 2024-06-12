let humanScore=0;
let computerScore=0;
const getComputerChoice=()=>(parseInt((Math.random()*3)+1));
const getHumanChoice=()=>(parseInt(prompt("Please enter your choice: \n(1) for Rock\n(2) for Paper\n(3) for Scissors")));
const playRound=(userInput,computerChoice)=>{const choices=["Rock","Paper","Scissors"]
    if(userInput==computerChoice){
        console.log(`Tie!!! Your Choice was ${choices[userInput-1]} and computers choice was ${choices[computerChoice-1]}`);
    }
    else if((userInput==1 && computerChoice==2)||(userInput==2 && computerChoice==3)||(userInput==3 && computerChoice==1)){
        console.log(`You Lose!!! Your Choice was ${choices[userInput-1]} and computers choice was ${choices[computerChoice-1]}`);
        computerScore++;
    }
    
    else if((userInput==1 && computerChoice==3)||(userInput==2 && computerChoice==1)||(userInput==3 && computerChoice==2)){
        console.log(`You Win!!! Your Choice was ${choices[userInput-1]} and computers choice was ${choices[computerChoice-1]}`);
        humanScore++;
    }
    
    else{
        console.log("Invalid Input");
    }};

while(true){
    let choice=parseInt(prompt("Please select from Following options\n(1)To play Rock Paper Scissors\n(2)To View Scores\n(3)To Quit"));
    if(choice==1){
let userInput=getHumanChoice();
let computerChoice=getComputerChoice();
playRound(userInput,computerChoice);
}
else if(choice==2){
console.log(`Your Score is ${humanScore} and Computers Score is ${computerScore}`)
}
else if(choice==3){
    break;
}
else{
    console.log("Invalid Choice");
}
}