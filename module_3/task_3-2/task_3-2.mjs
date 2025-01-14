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
const answerNumber = 45;
let guessNumber = 0; 
while(answerNumber !== guessNumber) {
    guessNumber = Math.ceil(Math.random() * 60) + 1;
}
printOut("Tall = " + guessNumber.toString());
printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const answerNumber1 = 500000;
let guessNumber1 = 0; 
let numberOfGuesses = 0;
const startMillisec = Date.now();
while(answerNumber1 !== guessNumber1) {
    guessNumber1 = Math.ceil(Math.random() * 1000000) + 1;
    numberOfGuesses++
}
printOut("Tall = " + guessNumber1); 
printOut("Datamaskinen gjettet " + numberOfGuesses + " ganger");

const endMillisec = Date.now();
const numberOfMillisec = endMillisec - startMillisec;
printOut("Det tok " + Math.ceil(numberOfMillisec) + " millisekunder");
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
function isPrime(number) {
    if (number <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0) return false;
    }
    return true; 
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let array1 = [
    "K1R1",
    "K1R2",
    "K1R3",
    "K1R4",
    "K1R5",
    "K1R6",
    "K1R7"
];

let array2 = [
    "K1R1", "K2R1", "K3R1", "K4R1", "K5R1", "K6R1", "K7R1", "K8R1", "K9R1"
];

const rowSize = 7; 
const colSize = 9; 

for (let row = 0; row < array1.length; row++) {
    printOut (array1[row] + "&nbsp;&nbsp;");

    for (let col = 0; col < array2.length; col++) {
    printOut(array2[col] + "&nbsp;&nbsp;");
    
    }
    printOut(newLine);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut("Dice Rolling Extravaganza");
printOut(newLine);