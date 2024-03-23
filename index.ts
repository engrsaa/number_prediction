#! /usr/bin/env node
import inquirer from "inquirer";
const rndmNmbr = Math.floor(Math.random()*6+1);
const userInput = await inquirer.prompt(
    {
        name : "userNmbr",
        type : "number",
        message : "Guess a number between 1-6 : "
    }
)
if(rndmNmbr == userInput.userNmbr){
    console.log(`Random Number is ${rndmNmbr}. Congratulations your guessed number is RIGHT!`);
}else{
    console.log(`Random Number is ${rndmNmbr}. Oops your guessed number is WRONG!`);
}