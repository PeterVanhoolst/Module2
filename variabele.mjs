import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let day = await userInput.question("Geef een dag in ");
switch (day){
case "maandag":
    console.log("Dit is een weekdag.");
    break;
case "dinsdag":
        console.log("Dit is een weekdag.");
    break;
    case "woensdag":
        console.log("Dit is een weekdag.");
    break;
    case "donderdag":
        console.log("Dit is een weekdag.");
    break;
    case "vrijdag":
        console.log("Dit is een weekdag.");
    break;
    case "zaterdag":
        console.log("Dit is een weekenddag.");
    break;
    case "zondag":
        console.log("Dit is een weekenddag.");
    break;
}
process.exit();
