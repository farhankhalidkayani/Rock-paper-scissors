
while(true){
    let choice=parseInt(prompt("Please select from Following options\n(1)To play Rock Paper Scissors\n(2)To Quit"));
    if(choice==1){
let userinput=parseInt(prompt("Please enter your choice: \n(1) for Rock\n(2) for Paper\n(3) for Scissors"));
let computerchoice=parseInt((Math.random()*3)+1);
const choices=["Rock","Paper","Scissors"]
if(userinput==computerchoice){
    console.log(`Tie!!! Your Choice was ${choices[userinput-1]} and computers choice was ${choices[computerchoice-1]}`);
}
else if((userinput==1 && computerchoice==2)||(userinput==2 && computerchoice==3)||(userinput==3 && computerchoice==1)){
    console.log(`You Lose!!! Your Choice was ${choices[userinput-1]} and computers choice was ${choices[computerchoice-1]}`);
}

else if((userinput==1 && computerchoice==3)||(userinput==2 && computerchoice==1)||(userinput==3 && computerchoice==2)){
    console.log(`You Win!!! Your Choice was ${choices[userinput-1]} and computers choice was ${choices[computerchoice-1]}`);
}

else{
    console.log("Invalid Input");
}}
else if(choice==2){
break;
}
else{
    console.log("Invalid Choice");
}
}