"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const date = new Date(); 
const options = {
    dateStyle: "full",
};

function dateToday() {
    printOut(date.toLocaleString("no-NB", options));
    return date; 
}
const todayDate = dateToday(); 
printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
function getNumberOfDays(start, end) {
    const date1 = new Date(start);  
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24; 
    const differenceInTime = date2.getTime() - date1.getTime(); 
    const differenceInDays = Math.round(differenceInTime / oneDay); 
    return differenceInDays; 
}
const daysLeft = getNumberOfDays(dateToday(), "5/14/2025"); 

printOut("It is " + daysLeft + " days left to the release of Elden Ring: Nightreign"); 

printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const radius = 10; 

function circle() {
    let diameter = 2 * radius; 
    let circumference = (Math.PI * 2) * radius; 
    let area = Math.PI * radius * radius; 
    return {diameter, circumference, area}; 
}
let result = circle(radius); 

printOut("Diameter: " + Math.floor(result.diameter)); 
printOut("Circumference: " + Math.floor(result.circumference));
printOut("Area: " + result.area.toFixed(2)); 
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
function rectangle(height, width) {
    return {
        circumference: height + width + height + width, 
        area: width * height
    }; 
}
let results = rectangle(5, 10); 

printOut("Circumference: " + results.circumference);
printOut("Area: " + results.area);

printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
//Fahrenheit = (Kelvin - 237.15) * 9/5 + 32;
//Celsius = (Kelvin - 237.15);
//Celsius = (Fahrenheit - 32) * 5/9;

const ETempType = {Celsius: 1, Fahrenheit: 2, Kelvin: 3}

function convertTemperature(aTemp, aType) {
    let Fahrenheit = 0;
    let Celsius = 0; 
    let Kelvin = 0; 
   switch(aType){
    case ETempType.Celsius:
        printOut("Convert 38 Celsius");
        //Convert to Fahrenheit 
        //Fahrenheit = (Kelvin - 237.15) * 9/5 + 32
        Celsius = aTemp; 
        Fahrenheit = (Celsius * 9/5) + 32
        Kelvin = Celsius + 237.15; 
        break;
    case ETempType.Fahrenheit:
        printOut("Convert 57 Fahrenheit");
        //Convert to Celsius
        //Celsius = (Fahrenheit - 32) * 5/9)
        Fahrenheit = aTemp; 
        Celsius = (Fahrenheit - 32) * 5/9; 
        Kelvin = Celsius + 237.15;
        break;
    case ETempType.Kelvin: 
        printOut("Convert 62 Kelvin");
        //Convert to Celsius 
        //Celsius = (Kelvin - 237.15);
        Kelvin = aTemp;
        Fahrenheit = (Kelvin - 237.15) * 9/5 + 32;
        Celsius = (Kelvin - 237.15);
        break;
   }
   printOut("Celsius = " + Celsius.toFixed(0)); 
   printOut("Fahrenheit = " + Fahrenheit.toFixed(0)); 
   printOut("Kelvin = " + Kelvin.toFixed(0)); 
}
convertTemperature(38, ETempType.Celsius); printOut("");
convertTemperature(57, ETempType.Fahrenheit); printOut("");
convertTemperature(62, ETempType.Kelvin); 

printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
function calculateNetPrice(aPrice, aTaxGroup) {
    let net = NaN; 
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN; 
    
    printOut("tax-group = " + taxGroup); 
    
    switch(taxGroup) {
        case "NORMAL":
            vat = 25;
            break; 
        case "15":
            vat = 15;
            break; 
        case "10": 
            vat = 10;
            break; 
        case "Sugar":
            vat = 0; 
            break; 
    }

    if(!Number.isNaN(vat)) {
        net = (100 * aPrice) / (vat + 100);
    }

    return net; 
}

const netPrice1 = calculateNetPrice(100, "normal");
if(Number.isNaN(netPrice1)) {
    printOut("Unknown VAT group!");
}else{
    printOut("100 is " + netPrice1.toFixed(2) + " without tax");
} 
printOut(""); 

const netPrice2 = calculateNetPrice(70, "15");
if(Number.isNaN(netPrice2)) {
    printOut("Unknown VAT group!");
}else{
    printOut("70 is " + netPrice2.toFixed(2) + " without tax");
} 
printOut(""); 

const netPrice3 = calculateNetPrice(180, "10");
if(Number.isNaN(netPrice3)) {
    printOut("Unknown VAT group!");
}else{
    printOut("180 is " + netPrice3.toFixed(2) + " without tax");
}
printOut(""); 

const netPrice4 = calculateNetPrice(50, "Sugar");
if(Number.isNaN(netPrice4)) {
    printOut("Unknown VAT group!");
}else{
    printOut(netPrice4.toFixed(2));
}

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*
Create a function that takes 3 arguments and returns the following calculation:
    Speed = Distance / Time
If speed is missing, calculate speed. 
If time is missing, calculate time. 
If distance is missing, calculate the distance. 
If more than one parameter is missing, return NaN. 
*/

function calculate(missingType, speed, distance, time) {

    switch (missingType) {
        case "speed":
            if (time === 0) return NaN;
            speed = distance / time;
            break;

        case "distance":
            distance = speed * time;
            break;

        case "time":
            if (speed === 0) return NaN;
            time = distance / speed;
            break;
    }

    printOut("Speed = " + speed + " km/h");
    printOut("Distance = " + distance + " km");
    printOut("Time = " + time + " h");
}
calculate("speed", null, 50, 2); printOut("");            
calculate("distance", 6, null, 30); printOut("");        
calculate("time", 70, 105, null); printOut("");        
calculate("speed", null, 50, null);                  

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
function returnString(textString, maxLength, param3, param4) {
        if (textString.length >= maxLength) {
            return textString;
        }
        let difference = maxLength - textString.length;
        let padding = param3.repeat(difference); 
        
        let newTextString = param4 ? padding + textString : textString + padding; 
        
        return newTextString;
}
printOut(returnString("Text ", 10, " ' ", true));
printOut(returnString("String ", 10, " ' ", false)); 

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function testIfMathIsFun() {
    let op = 1;
    let line = 1;
    let ok = false;
    do {
      let sumLeft = 0;
      for (let left = 0; left < line + 1; left++) {
        sumLeft += op;
        op++;
      }
  
      let sumRight = 0;
      for (let right = 0; right < line; right++) {
        sumRight += op;
        op++;
      }
  
      if (sumLeft !== sumRight) {
        ok = false;
        printOut("Error in line " + line.toString());
      }else{
        ok = true;
      }
      line++;
  
      if(line > 200){
        printOut("Math is Fun!");
        break;
      }
      
    } while (ok);
  }
  testIfMathIsFun();
  
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

const factorial = (n) => {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  printOut("Factorial (10) is " + factorial(10));
