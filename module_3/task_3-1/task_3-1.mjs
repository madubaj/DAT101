"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2 and 3 ----------------------------------------------------------------------------------------");
let wakeUpTime = 9; 
  printOut("Wake up time = " + wakeUpTime + " o'clock");
if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 8) {
  printOut("I can the train to school")
} else {
printOut("I'll have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4 and 5 --------------------------------------------------------------------------------------------");
let value = 12;
  printOut("Value = " + value);
if (value < 0) {
  printOut("Value is Negative");
} else if (value > 0) {
  printOut("Value is Positive");
} else {
  printOut("Value is Zero");
}
printOut(newLine);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------------");
const imageSize = Math.floor(Math.random() * 8) + 1;
  printOut("Image size = " + imageSize + " MP");
if (imageSize >= 6) {
  printOut("The image is too large");
} else if (imageSize >= 4) {
  printOut("Thank you!");
} else {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  printOut("Month = " + monthName);
if (monthName.includes("r")) {
  printOut("You need to take Vitamin D");
} else {
  printOut("You do not need to take Vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
const monthIndex = monthList.indexOf(monthName);
const days = daysInMonth[monthIndex];
printOut("It is " + days + " days in " + monthName);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const galleryClosed = ["March", "May"];
const tempPremises = "April";
if (galleryClosed.includes(monthName)) {
  printOut("The gallery is unfortunately closed in " + monthName + " for refurbishment.");
} else if (monthName === tempPremises) {
  printOut("The gallery is open in temporary premises in the building next door.");
} else {
  printOut("The gallery is open in " + monthName + "!"); 
}
printOut(newLine);