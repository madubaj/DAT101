"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const arrayName = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]; 
for (const array of arrayName){
printOut(array); 
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
printOut(arrayName.join(" - "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const text = "Hei på deg, hvordan har du det?"; 
const arrayText = text.split(" "); 

arrayText.forEach(eachWord);
function eachWord(word, index){
    printOut(index + " " + (index + 1) + " " + word); 
    return true; 
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]; 

function removeElement(array, element){
    const result = array.indexOf(element);    
    if(result > -1){
        printOut(element + " can be removed from array");
        array.splice(result, 1); 
    }else{
        printOut(element + " can not be removed from array"); 
    }
}

function removeFromArray (array, element){
    let index = -1; 
    const result = array.find(findName);
    if(result){
        printOut(element + " can be removed from array"); 
        array.splice(index, 1); 
    }else{
        printOut(element + " can not be removed from array");
    }

    function findName(girls, index){
        index = index;
        return girls === element;
    }
}

removeElement(girls, "Anne");
removeFromArray(girls, "Elisabeth"); 
printOut(girls.join(", ")); 

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
"Magnus"]; 
const names = girls.concat(boys); 

names.forEach(printName); 
function printName(name){
    printOut(name);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
class TBook {
    #title;
    #author;
    #isbn; 

    constructor(aTitle, aAuthor, aISBN){
        this.#title = aTitle;
        this.#author = aAuthor;
        this.#isbn = aISBN; 
    }

    toString() {
        return "Title: " + this.#title + ", " + "Author: " + this.#author + ", " + "ISBN: " + this.#isbn; 
    }
}

const myBook = [
    new TBook("Sult", "Knut Hamsun", "97803745252886"),
    new TBook("Never Let Me Go", "Kazuo Ishiguro", "978030727676"),
    new TBook("Harry Potter", "J.K. Rowling", "9780807286005"),
]; 

myBook.forEach(printBook);
function printBook(aBook){
    printOut(aBook.toString());
};

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"}, 
    WeekDay2: {value: 0x02, name: "Tirsdag"}, 
    WeekDay3: {value: 0x04, name: "Onsdag"}, 
    WeekDay4: {value: 0x08, name: "Torsdag"}, 
    WeekDay5: {value: 0x10, name: "Fredag"}, 
    WeekDay6: {value: 0x20, name: "Lørdag"}, 
    WeekDay7: {value: 0x40, name: "Søndag"}, 
    Workdays: {value: 0x01 + 0x02 + 0x08 + 0x10, name: "Arbeidsdager"}, 
    Weekends: {value: 0x20 + 0x40, name: "Helg"}, 
}; 

const keys = Object.keys(EWeekDays); 
printOut("Keys: " + keys.join(", ")); 

const values = Object.values(EWeekDays); 
printOut("Values: " + values.join(", ")); 

let valueKeys = Object.values(EWeekDays[keys[7]]); 
printOut("ValueKeys: " + valueKeys.join(", ")); 

for(let index = 0; index < keys.length; index++){
    let text = ""; 

    const key = keys[index]; 
    text = key + ": "; 

    const keyObject = EWeekDays[key]; 
    const keyObjectKeys = Object.keys(keyObject); 

    for(let i = 0; i < keyObjectKeys.length; i++){
        const keyObjectKey = keyObjectKeys[i]; 
        const keyObjectValue = keyObject[keyObjectKey]; 
        text += " " + keyObjectKey + ": " + keyObjectValue; 
    }
    printOut(text); 
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const randomNumbers = []; 

for(let i = 0; i < 35; i++) {
    const random = Math.floor(Math.random() * 20) + 1;
    randomNumbers.push(random); 
}
printOut(randomNumbers.join(", ")); 

randomNumbers.sort(sortRandomNumbers);
printOut("Ascending order: " + randomNumbers.join(", ")); 

randomNumbers.reverse(); 
printOut("Descending order: " + randomNumbers.join(", ")); 

function sortRandomNumbers(value1, value2){
    return value1 - value2; 
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const frequency = {}; 
for(let i = 0; i < randomNumbers.length; i++){
    const value = randomNumbers[i];
    if(frequency[value]){
        frequency[value]++;
    }else{
        frequency[value] = 1; 
    }
}

let freqKeys = Object.keys(frequency); 
freqKeys.sort(sortFreq); 

function sortFreq(value1, value2){
    const freq1 = frequency[value1]; 
    const freq2 = frequency[value2]; 
    return freq2 - freq1; 
}

let text2 = ""; 
for(let i = 0; i < freqKeys.length; i++){
    const freqKey = freqKeys[i];
    const freqValue = frequency[freqKey];
    text2 += freqKey + ": " + freqValue + ", "; 
}
printOut(text2); 
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const arrays = []; 
for(let row = 0; row < 5; row++){
    const columns = []; 
    for(let column = 0; column < 9; column++){
        const cell =+ row + "," + column; 
        columns.push(cell); 
    }
    arrays.push(columns); 
}

let text3 = ""; 
for(let row = 0; row < arrays.length; row++){
    const columns = arrays[row]; 
    for(let column = 0; column < columns.length; column++){
        const cell = columns[column]; 
        text3 += "[" + cell + "]"; 
    }
    printOut(text3)
    text3 = ""; 
}

printOut(newLine);