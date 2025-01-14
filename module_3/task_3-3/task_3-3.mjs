"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
        printOut("Convert from Celsius");
        //Convert to Fahrenheit 
        //Fahrenheit = (Kelvin - 237.15) * 9/5 + 32
        Celsius = aTemp; 
        Fahrenheit = (Celsius * 9/5) + 32
        Kelvin = Celsius + 237.15; 
        break;
    case ETempType.Fahrenheit:
        printOut("Convert from Fahrenheit");
        //Convert to Celsius
        //Celsius = (Fahrenheit - 32) * 5/9)
        Fahrenheit = aTemp; 
        Celsius = (Fahrenheit - 32) * 5/9; 
        Kelvin = Celsius + 237.15;
        break;
    case ETempType.Kelvin: 
        printOut("Convert from Kelvin");
        //Convert to Celsius 
        //Kelvin = ???
        Kelvin = aTemp;
        break;
   }// End switch

   printOut("Celsius = " + Celsius.toFixed(0)); 
   printOut("Fahrenheit = " + Fahrenheit.toFixed(0)); 
   printOut("Kelvin = " + Kelvin.toFixed(0)); 

}// End function

convertTemperature(37.5, ETempType.Celsius);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function calculateNetPrice(aPrice, aTaxGroup){
    let net = NaN; 
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN; 
    
    printOut("tax.Group = " + taxGroup); 
    
    switch(taxGroup){
        case "NORMAL":
        vat = 25;
    }

    if(!Number.isNaN(vat)){
        net = (100 * aPrice) / (vat + 100);
    }

    return net; 
}

const netPrice1 = calculateNetPrice(100, "normal");
if(Number.isNaN(netPrice1)){
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice1 = " + netPrice1.toFixed(2));
}

const netPrice2 = calculateNetPrice(100, "other");
if(Number.isNaN(netPrice2)){
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice2 = " + netPrice2.toFixed(2));
}

const netPrice3 = calculateNetPrice(100, "other");
if(Number.isNaN(netPrice3)){
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice3 = " + netPrice3.toFixed(2));
}

const netPrice4 = calculateNetPrice(100, "other");
if(Number.isNaN(netPrice4)){
    printOut("Unknown VAT group!");
}else{
    printOut("netPrice4 = " + netPrice4.toFixed(2));
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testIfMathIsFun(){
    let op = 1;
    let line = 1; 
    // Left side   
    let ok = false;
    do{
    let sumLeft  = 0; 
    for(let left = 0; left < line + 1; left++){
        sumLeft += op; 
        op++; 
    }

    let sumRight = 0;
    for(let right = 0; right < line; right++){
        sumRight += op;
        op++;
    }

    if(sumLeft !== sumRight){
        //funksjonen må stoppes på enellerannen måte 
        ok = false;
    }else{
        ok = true;
    }
    line++;

    }while(ok){
    };
}

printOut("Replace this with you answer!");

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
