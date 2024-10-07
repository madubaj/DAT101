"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here! */ 
const a = 2; 
const b = 3; 
const c = 4;
const d = 6; 
const e = a + (b * (a - c) * 6);

printOut("2 + (3 * (2 - 4)) * 6) = " + e);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here! */
const millInInch = 25.4;
const millInMeters = 1000; 
const metres = 25.34; 
const answer = (metres * millInMeters) / millInInch; 
const exactAnswer = answer.toFixed(2);

printOut("25 metres and 34 centimeters in inches = " + exactAnswer.toString(), "in inches.");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here! */
const secondsInMinutes = 60; 
const minutesInHour = 60; 
const hoursInDay = 24; 
const part2_Answer = 
    (3 * hoursInDay * minutesInHour) +
    (12 * minutesInHour) + 
    14 + 
    (45 / secondsInMinutes);

printOut("3 days, 12 hours, 14 minutes and 45 seconds in minutes = " + part2_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here! */
printOut("6322.52 minutes is:");
printOut(newLine);

const numberOfMinutes = 6322.52; 
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days;
part4_Calc = part4_Calc * hoursInDay; 
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours; 
part4_Calc = part4_Calc * minutesInHour; 
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinutes;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here! */
const NOK = 76 / 8.6; 
const USD = 8.6 / 76; 
let amountUSD = 54;
const amountNOK = Math.floor(amountUSD * NOK);
printOut(amountUSD + " USD = " + amountNOK + " NOK");
amountUSD = Math.round(amountNOK * USD);

printOut(amountNOK + " NOK = " + amountUSD + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here! */
const text = ("There is much between heaven and earth that we do not understand.");
printOut(text);

let length = text.length;
printOut("The text has " + text.length + " characters.");

let char = text.charAt(19);
printOut("The character at position number 19 is: " + char);

let part = text.substr(35, 8);
printOut("The characters starting at position number 35 and 8 characters forward are: " + part);

let index = text.indexOf("earth");
printOut("The word earth starts at position " + index);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let isGreater = 5 > 3;
printOut("5 > 3 is " + isGreater);

let isGreaterOrEqual = 7 >= 7;
printOut("7 >= 7 is " + isGreaterOrEqual);

let isGreater_02 = "a" > "b";
printOut(" \"a\" > \"b\" is " + isGreater_02);
 
let isLess = "1" < "a";
printOut(" \"1\" < \"a\" is " + isLess);

let isLess_02 = "2500" < "abcd";
printOut(" \"2500\" < \"abcd\" is " + isLess_02)

let isNotEqual = "arne" !== "thomas"; 
printOut(" \"arne\" !== \"thomas\" is " + isNotEqual);

let statement = 2 === 5;
printOut("(2 === 5) === true is " + statement);

let statement_02 = "abcd" < "bcd"; 
printOut("(\"abcd\" > \"bcd\") === false is " + statement_02); 
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txt = "254"; 
let num = Number.parseInt(txt);
printOut(" \"254\" = " + Number.parseInt(num));

let txt_02 = "57.23";
let num_02 = Number.parseFloat(txt_02);
printOut(" \"57.23\" = " + Number.parseFloat(num_02));

let txt_03 = "25 kroner";
let num_03 = Number.parseInt(txt_03);
printOut(" \"25 kroner\" = " + Number.parseInt(num_03));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here! */
let r = Math.floor(Math.random() * 360);
printOut("Math.floor(Math.random() * 360) = " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const daysInWeek = 7;
const numberOfDays = 131;
let part10_Calc = Math.floor(numberOfDays / daysInWeek);
let remainderDays  = numberOfDays % daysInWeek;

printOut("131 days is " + part10_Calc + " weeks and " + remainderDays + " days");
printOut(newLine);