"use strict";
import { initPrintOut, printOut, newLine, NEWLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let line1 = "";
let line2 = "";
for(let i = 1, j = 10; i <= 10; i++, j--){
    line1 += " " + i.toString();
    line2 += " " + j.toString();
}
printOut(line1);
printOut(line2);

printOut(newLine);





printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const answerNumber = 40;
let guessNumber = 0; 
while(answerNumber !== guessNumber) {
    guessNumber = Math.ceil(Math.random() * 60);
}
printOut("Guess Number = " + guessNumber.toString());
printOut(newLine);




printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const answerNumber2 = 6785;
let guessNumber2 = 0; 
let numberOfGuesses = 0;
const startTime = Date.now();
while(answerNumber2 !== guessNumber2) {
    guessNumber2 = Math.ceil(Math.random() * 1000000);
    numberOfGuesses++;
}
printOut("Guess Number = " + guessNumber2); 
printOut("Datamaskinen gjettet " + numberOfGuesses + " ganger.");

const endTime = Date.now();
const timeUsed = endTime - startTime;
printOut("Det tok " + Math.ceil(timeUsed) + " millisekunder.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
for(let number = 2; number < 200; number++) {
    let isPrime = true; 
    let divider = 2; 
    while (divider < number) {
        if (number % divider === 0) {
            isPrime = false;
            break;
        }
        divider++; 
    }
    if (isPrime) {
        printOut(number + " ");
    }
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const rowLength = 7;
const colLength = 9; 

for (let i = 1; i <= rowLength; i++) {
    let row = "";
    for (let j = 1; j <= colLength; j++) {
        row += "K" + [j] + "R" + [i] + " ";
    }
    printOut(row); 
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
for (let i = 1; i <= 5; i++) {
    let grade = Math.floor(Math.random() * 236) + 1; 
    let gradePercentage = Math.floor((grade / 236) * 100); 
    let studentGrade; 

    if (gradePercentage >= 89) {
        studentGrade = "A"; 
    }else if (gradePercentage >= 77) {
        studentGrade = "B"; 
    }else if (gradePercentage >= 65) {
        studentGrade = "C"; 
    }else if (gradePercentage >= 53) {
        studentGrade = "D"; 
    }else if (gradePercentage >= 41) {
        studentGrade = "E"; 
    }else if (gradePercentage >= 0) {
        studentGrade = "F"; 
    }
    printOut("Student " + i + ": Grade " + studentGrade + ", Percentage: " + gradePercentage + "%"); 
}; 

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut("Dice Rolling Extravaganza");

const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let diceThrow = "";
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString();

printOut("diceThrow: " + diceThrow);

const count1 = (diceThrow.match(/1/g) || "").length;
const count2 = (diceThrow.match(/2/g) || "").length;
const count3 = (diceThrow.match(/3/g) || "").length;
const count4 = (diceThrow.match(/4/g) || "").length;
const count5 = (diceThrow.match(/5/g) || "").length;
const count6 = (diceThrow.match(/6/g) || "").length;

let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString();
printOut("diceCount: " + diceCount);

const equals1 = (diceCount.match(/1/g) || "").length;
const equals6 = (diceCount.match(/6/g) || "").length;
printOut("equals1: " + equals1.toString());
printOut("equals6: " + equals6.toString());

if(equals1 === 6){
  printOut("Full straight");
}else if(equals6 === 1){
  printOut("Yatzy!!!");
}
printOut(newLine);