import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let minimum = 1
let maximum = 100
let getal = parseFloat(await userInput.question("Geef een getal in. "));

if((getal <= maximum) && (getal >= minimum)){
    console.log("Je getal " +getal + " ligt tussen 1 en 100.");
}
process.exit();
